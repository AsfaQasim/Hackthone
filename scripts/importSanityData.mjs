import axios from "axios";
import slugify from "slugify";
import { createClient } from "@sanity/client";

// Create the Sanity client with hardcoded credentials
const client = createClient({
  projectId: "6126dq9t", // Replace with your Sanity project ID
  dataset: "production", // Replace with your dataset name (e.g., 'production')
  apiVersion: "2023-01-01", // Use the appropriate API version
  token: "skyxo250iDhKhgeoh1ebLdkWP2lgbBRdIEt9W6j7zbkQiZu3gs7z4F4EufG3JfenAgPM9ni7VyDivCFo2oovudaoA3iM67dvyv7E5KZr2kYx6hTREVmbivfX3yxsyo4xem3i8BQb8C49UkTeXNGqGwxFDHoIhE335mJJcs1Z03bUpVUhliOH", // Replace with your Sanity token
  useCdn: true, // Use CDN for faster data fetching
});

// Function to upload an image to Sanity
async function uploadImageToSanity(imageUrl) {
  try {
    const response = await axios.get(imageUrl, {
      responseType: "arraybuffer",
      timeout: 10000,
    });
    const buffer = Buffer.from(response.data);

    const asset = await client.assets.upload("image", buffer, {
      filename: imageUrl.split("/").pop(),
    });

    console.log("✅ Image uploaded successfully:", asset);
    return asset._id;
  } catch (error) {
    console.error("❌ Failed to upload image:", imageUrl, error.message);
    return null;
  }
}

// Function to create or fetch a category
async function createCategory(category, counter) {
  try {
    const categoryExist = await client.fetch(
      `*[_type=="category" && slug.current==$slug][0]`,
      { slug: category.slug }
    );

    if (categoryExist) {
      console.log(`✅ Category already exists: ${category.name}`);
      return categoryExist._id;
    }

    const catObj = {
      _type: "category",
      _id: `${category.slug}-${counter}`,
      name: category.name,
      slug: {
        _type: "slug",
        current: category.slug,
      },
    };

    const response = await client.createOrReplace(catObj);
    console.log("✅ Category created successfully:", response);
    return response._id;
  } catch (error) {
    console.error("❌ Failed to create category:", category.name, error.message);
    return null;
  }
}

// Main function to import data
async function importData() {
  try {
    const response = await axios.get("https://hackathon-apis.vercel.app/api/products");
    const products = response.data;

    let counter = 1;

    for (const product of products) {
      let imageRef = null;
      let catRef = null;

      if (product.image) {
        imageRef = await uploadImageToSanity(product.image);
      }

      if (product.category.name) {
        catRef = await createCategory(product.category, counter);
      }

      const sanityProduct = {
        _id: `product-${counter}`,
        _type: "product",
        name: product.name,
        slug: {
          _type: "slug",
          current: slugify(product.name || "default-product", {
            lower: true,
            strict: true,
          }),
        },
        price: product.price,
        category: catRef
          ? {
              _type: "reference",
              _ref: catRef,
            }
          : undefined,
        tags: product.tags || [],
        quantity: 50,
        image: imageRef
          ? {
              _type: "image",
              asset: {
                _type: "reference",
                _ref: imageRef,
              },
            }
          : undefined,
        description:
          product.description ||
          "A timeless design, with premium materials features as one of our most popular and iconic pieces.",
        features: product.features || [
          "Premium material",
          "Handmade upholstery",
          "Quality timeless classic",
        ],
        dimensions: product.dimensions || {
          _type: "dimensions",
          height: "110cm",
          width: "75cm",
          depth: "50cm",
        },
      };

      console.log("Uploading product:", sanityProduct);

      await client.createOrReplace(sanityProduct);
      console.log(`✅ Imported product: ${sanityProduct.name}`);
      counter++;
    }

    console.log("✅ Data import completed!");
  } catch (error) {
    console.error("❌ Error importing data:", error.message);
  }
}

// Run the import script
importData();

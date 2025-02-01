import axios from "axios";
import slugify from "slugify";
import { createClient } from "@sanity/client";

// Create the Sanity client
const client = createClient({
  projectId: "6126dq9t", 
  dataset: "production",
  apiVersion: "2023-01-01", 
  token: "your-sanity-token-here", // Replace with a valid token
  useCdn: true, 
});

// Upload image to Sanity
async function uploadImageToSanity(imageUrl) {
  if (!imageUrl) {
    console.error("❌ Image URL is missing");
    return null;
  }

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

// Create or fetch a category
async function createCategory(category, counter) {
  if (!category?.name) {
    console.error("❌ Category name is missing");
    return null;
  }

  const slug = slugify(category.name, { lower: true, strict: true });

  try {
    const categoryExist = await client.fetch(
      `*[_type=="category" && slug.current==$slug][0]`,
      { slug }
    );

    if (categoryExist) {
      console.log(`✅ Category already exists: ${category.name}`);
      return categoryExist._id;
    }

    const catObj = {
      _type: "category",
      _id: `${slug}-${counter}`,
      name: category.name,
      slug: {
        _type: "slug",
        current: slug,
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

// Import data
async function importData() {
  try {
    const response = await axios.get("https://hackathon-apis.vercel.app/api/products");
    const products = response.data;

    let counter = 1;

    for (const product of products) {
      try {
        if (!product.name || !product.price) {
          console.error("❌ Product name or price is missing:", product);
          continue;
        }

        let imageRef = null;
        let catRef = null;

        if (product.image) {
          imageRef = await uploadImageToSanity(product.image);
        }

        if (product.category?.name) {
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
      } catch (error) {
        console.error("❌ Error importing product:", product.name, error.message);
      }
    }

    console.log("✅ Data import completed!");
  } catch (error) {
    console.error("❌ Error importing data:", error.message);
  }
}

// Run the script
importData();
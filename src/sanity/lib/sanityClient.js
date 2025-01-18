import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "6126dq9t", // Replace with your Sanity project ID
  dataset: "production", // Replace with your dataset (default is "production")
  useCdn: true, // `true` for faster response, `false` for fresh data
  apiVersion: "2023-01-01", // Replace with the latest version
});

export default client;

import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: "6126dq9t", // Replace with your actual project ID
  dataset: "production", // Replace with your dataset name
  apiVersion: "2023-01-01", // Replace with a valid API version (e.g., today's date or the one from your project settings)
  useCdn: true, // Set to false if statically generating pages, using ISR, or tag-based revalidation
});

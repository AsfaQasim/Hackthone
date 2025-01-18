// scripts/sanityClient.mjs
import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '6126dq9t',  // Replace with your actual project ID
  dataset: 'production',  // Replace with your dataset name
  apiVersion: '2023-01-01',  // Use the appropriate API version
  useCdn: true,  // Use CDN for fast content retrieval
})

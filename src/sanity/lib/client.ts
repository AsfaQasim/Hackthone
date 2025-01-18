import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId, token } from '../env'

export const client = createClient({
  projectId: "6126dq9t", // Replace with your actual project ID
  dataset: "production", // Replace with your dataset name
  apiVersion: "2023-01-01", // Replace with a valid API version (e.g., today's date or the one from your project settings)
  useCdn: true, // Set to false if statically generating pages, using ISR, or tag-based revalidation
  token:   "skyxo250iDhKhgeoh1ebLdkWP2lgbBRdIEt9W6j7zbkQiZu3gs7z4F4EufG3JfenAgPM9ni7VyDivCFo2oovudaoA3iM67dvyv7E5KZr2kYx6hTREVmbivfX3yxsyo4xem3i8BQb8C49UkTeXNGqGwxFDHoIhE335mJJcs1Z03bUpVUhliOH"

});

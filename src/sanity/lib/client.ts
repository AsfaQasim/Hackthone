import { createClient } from 'next-sanity';

import { projectId, dataset, token } from '../env';
export const client = createClient({
  projectId,
  dataset,
  apiVersion: "2023-01-01", 
  useCdn: false, 
  token
});

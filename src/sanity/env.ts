export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-17";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
);
export const token = assertValue(
  "skyxo250iDhKhgeoh1ebLdkWP2lgbBRdIEt9W6j7zbkQiZu3gs7z4F4EufG3JfenAgPM9ni7VyDivCFo2oovudaoA3iM67dvyv7E5KZr2kYx6hTREVmbivfX3yxsyo4xem3i8BQb8C49UkTeXNGqGwxFDHoIhE335mJJcs1Z03bUpVUhliOH",

  "Missing environment variable: SANITY_API_TOKEN"
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}

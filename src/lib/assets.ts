export const assetUrl = (path: string) => {
  const base = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!base) throw new Error("NEXT_PUBLIC_SUPABASE_URL is missing");
  return `${base}/storage/v1/object/public/marketing-assets/${path}`;
};



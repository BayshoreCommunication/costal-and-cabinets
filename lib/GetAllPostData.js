export default async function GetAllPostData() {
  const bloData = await fetch(
    "https://backend-costal-and-cabinets.vercel.app/site/blog",
    {
      next: { revalidate: 200 },
    }
  );
  return bloData.json();
}

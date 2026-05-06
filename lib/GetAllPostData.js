export default async function GetAllPostData() {
  try {
    const response = await fetch(
      "https://backend-costal-and-cabinets.vercel.app/site/blog",
      {
        next: { revalidate: 200 },
      },
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch blog data:", error);
    return []; // Return empty array on error
  }
}

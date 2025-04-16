export default async function GetAllPostData() {
  const bloData = await fetch("", {
    next: { revalidate: 200 },
  });
  return bloData.json();
}

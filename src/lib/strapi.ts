export async function getData(path: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/${path}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return res.json();
}


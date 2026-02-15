export async function searchMapbox(query: string) {
  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  if (!token || query.length < 3) return [];

  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json?access_token=${token}&autocomplete=true&limit=5&country=IN&bbox=72.75,18.89,72.99,19.27&proximity=72.8777,19.0760`;
  const res = await fetch(url);
  const data = await res.json();

  return data.features || [];
}
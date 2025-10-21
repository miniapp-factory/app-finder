import { url } from "@/lib/metadata";

export async function fetchDiscovery() {
  const endpoint = `${url}/api/discovery`;
  const res = await fetch(endpoint, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch discovery data: ${res.status}`);
  }
  return res.json();
}

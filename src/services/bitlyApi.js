const BITLY_API_URL = "https://api-ssl.bitly.com/v4/shorten";

export async function shortenUrl(longUrl) {
  const token = import.meta.env.VITE_BITLY_TOKEN;

  if (!token) {
    throw new Error("Bitly API token is missing.");
  }

  const response = await fetch(BITLY_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      long_url: longUrl,
      domain: "bit.ly"
    })
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Unable to shorten URL.");
  }

  return data.link;
}
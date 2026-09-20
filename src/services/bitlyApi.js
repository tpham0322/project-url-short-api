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

  const text = await response.text();

  console.log("Bitly status:", response.status);
  console.log("Bitly response:", text);

  let data;

  try {
    data = JSON.parse(text);
  } catch {
    throw new Error(
      `Bitly returned a non-JSON response (${response.status}).`
    );
  }

  if (!response.ok) {
    throw new Error(
      data.message ||
      data.description ||
      `Bitly request failed (${response.status}).`
    );
  }

  return data.link;
}
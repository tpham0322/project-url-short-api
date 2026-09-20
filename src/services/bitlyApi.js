export async function shortenURL(url) {
  const response = await fetch(
    "/.netlify/functions/shorten",
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        url
      })
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message ||
      "Unable to shorten the URL."
    );
  }

  return data.link;
}
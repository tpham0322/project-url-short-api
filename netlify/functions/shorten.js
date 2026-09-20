export default async (request) => {
  if (request.method !== "POST") {
    return new Response(
      JSON.stringify({
        message: "Method not allowed"
      }),
      {
        status: 405,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }

  try {
    const body = await request.json();
    const url = body.url?.trim();

    if (!url) {
      return new Response(
        JSON.stringify({
          message: "URL is required."
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }

    const token = process.env.BITLY_TOKEN;

    if (!token) {
      return new Response(
        JSON.stringify({
          message: "Bitly API token is not configured."
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }

    const response = await fetch(
      "https://api-ssl.bitly.com/v4/shorten",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          long_url: url,
          domain: "bit.ly"
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Bitly error:", data);

      return new Response(
        JSON.stringify({
          message:
            data.message ||
            "Bitly request failed."
        }),
        {
          status: response.status,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }

    return new Response(
      JSON.stringify({
        link: data.link
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  } catch (error) {
    console.error(error);

    return new Response(
      JSON.stringify({
        message: "Unable to shorten the URL."
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
};
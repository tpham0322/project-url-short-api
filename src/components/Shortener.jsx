import { useState } from "react";
import ResultCard from "./ResultCard";
import useLocalStorage from "../hooks/useLocalStorage";
import { shortenUrl } from "../services/bitlyApi";

function Shortener() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [links, setLinks] = useLocalStorage("shortly-links", []);

  async function handleSubmit(event) {
    event.preventDefault();

    const trimmedUrl = url.trim();

    if (!trimmedUrl) {
      setError("Please add a link.");
      return;
    }

    try {
      new URL(trimmedUrl);
    } catch {
      setError("Please enter a valid URL.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const shortUrl = await shortenUrl(trimmedUrl);

      const newLink = {
        id: crypto.randomUUID(),
        original: trimmedUrl,
        short: shortUrl
      };

      setLinks((currentLinks) => [newLink, ...currentLinks]);
      setUrl("");
    } catch (err) {
      setError(
        err.message || "Unable to shorten this link. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  function handleDelete(id) {
    setLinks((currentLinks) =>
      currentLinks.filter((link) => link.id !== id)
    );
  }

  return (
    <section
      id="shortener"
      className="bg-[#eff1f7] px-6 pb-20 pt-1 lg:px-8"
    >
      <div className="mx-auto -mt-16 max-w-6xl">
        <div
          className="rounded-lg bg-[#3b3054] p-6 md:p-10"
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}images/bg-shorten-desktop.svg)`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 md:flex-row"
          >
            <div className="flex-1">
              <label htmlFor="url" className="sr-only">
                Enter URL
              </label>

              <input
                id="url"
                type="url"
                value={url}
                onChange={(event) => setUrl(event.target.value)}
                placeholder="Shorten a link here..."
                className={`w-full rounded-lg bg-white px-5 py-4 text-[#2f2f3f] outline-none ${
                  error
                    ? "border-2 border-red-400 placeholder:text-red-400"
                    : "border-2 border-transparent"
                }`}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? "url-error" : undefined}
              />

              {error && (
                <p
                  id="url-error"
                  className="mt-2 text-sm italic text-red-400"
                >
                  {error}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-[#2acfcf] px-8 py-4 font-bold text-white transition hover:opacity-70 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Shortening..." : "Shorten It!"}
            </button>
          </form>
        </div>

        <div className="mt-6 space-y-4">
          {links.map((link) => (
            <ResultCard
              key={link.id}
              link={link}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Shortener;
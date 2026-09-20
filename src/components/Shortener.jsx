import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { shortenURL } from "../services/bitlyApi";
import ResultCard from "./ResultCard";

function Shortener() {
  const [url, setUrl] = useState("");

  const [links, setLinks] = useLocalStorage(
    "shortly-links",
    []
  );

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const isValidURL = (value) => {
    try {
      const parsedURL = new URL(value);

      return (
        parsedURL.protocol === "http:" ||
        parsedURL.protocol === "https:"
      );
    } catch {
      return false;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");

    const trimmedURL = url.trim();

    if (!trimmedURL) {
      setError("Please add a link");
      return;
    }

    if (!isValidURL(trimmedURL)) {
      setError("Please enter a valid URL");
      return;
    }

    setLoading(true);

    try {
      const shortenedUrl =
        await shortenURL(trimmedURL);

      const link = {
        id: Date.now(),
        original: trimmedURL,
        shortened: shortenedUrl
      };

      setLinks((previousLinks) => [
        link,
        ...previousLinks
      ]);

      setUrl("");
    } catch (error) {
      console.error(error);

      setError(
        "Unable to shorten this link. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="shorten"
      className="bg-[#eff1f7] pb-[100px]"
    >
      <div
        className="
          mx-auto
          w-[calc(100%-48px)]
          max-w-[1110px]
        "
      >
        <form
          onSubmit={handleSubmit}
          className="
            relative
            top-[-68px]
            flex
            flex-col
            gap-6
            rounded-[10px]
            bg-[#3b3054]
            bg-[url('/images/bg-shorten-mobile.svg')]
            bg-cover
            bg-center
            p-6
            md:flex-row
            md:items-stretch
            md:bg-[url('/images/bg-shorten-desktop.svg')]
            md:px-16
            md:py-[52px]
          "
        >
          <div className="relative flex-1">
            <label
              htmlFor="url-input"
              className="sr-only"
            >
              Enter a URL to shorten
            </label>

            <input
              id="url-input"
              name="url"
              type="url"
              value={url}
              onChange={(event) => {
                setUrl(event.target.value);

                if (error) {
                  setError("");
                }
              }}
              placeholder="Shorten a link here..."
              autoComplete="url"
              aria-describedby="url-error"
              aria-invalid={Boolean(error)}
              className={`
                min-h-16
                w-full
                rounded-[7px]
                border-[3px]
                bg-white
                px-5
                text-[#232127]
                outline-none
                placeholder:text-[#9e9aa7]
                focus:border-[#2acfcf]

                ${
                  error
                    ? "border-[#f46262]"
                    : "border-transparent"
                }
              `}
            />

            <p
              id="url-error"
              className="
                absolute
                left-0
                top-[calc(100%+3px)]
                text-[13px]
                italic
                text-[#f46262]
              "
              role="alert"
            >
              {error}
            </p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="
              min-w-[150px]
              rounded-[7px]
              bg-[#2acfcf]
              px-6
              py-3
              font-bold
              text-white
              transition-opacity
              hover:opacity-70
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >
            {loading
              ? "Shortening..."
              : "Shorten It!"}
          </button>
        </form>

        <div
          className="
            mt-[-44px]
            flex
            flex-col
            gap-4
          "
          aria-live="polite"
        >
          {links.map((link) => (
            <ResultCard
              key={link.id}
              link={link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Shortener;
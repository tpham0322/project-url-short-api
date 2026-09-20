import { useState } from "react";

function ResultCard({ link }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(link.short);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Unable to copy URL:", error);
    }
  }

  return (
    <div className="flex flex-col gap-4 rounded-lg bg-white p-5 md:flex-row md:items-center md:justify-between">
      <p className="break-all text-lg text-[#2f2f3f]">
        {link.original}
      </p>

      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <a
          href={link.short}
          target="_blank"
          rel="noopener noreferrer"
          className="break-all text-[#2acfcf] hover:underline"
        >
          {link.short}
        </a>

        <button
          type="button"
          onClick={handleCopy}
          className="rounded-lg bg-[#2acfcf] px-8 py-3 font-bold text-white transition hover:opacity-70"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}

export default ResultCard;
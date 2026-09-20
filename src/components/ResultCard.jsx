import { useState } from "react";

function ResultCard({ link }) {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(
        link.shortened
      );

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error(error);

      setCopied(false);
    }
  };

  return (
    <article
      className="
        flex
        flex-col
        gap-3
        rounded-md
        bg-white
        p-5

        md:flex-row
        md:items-center
        md:gap-5
        md:px-6
        md:py-[18px]
      "
    >
      <p
        className="
          min-w-0
          overflow-hidden
          text-ellipsis
          whitespace-nowrap
          text-[#232127]
        "
        title={link.original}
      >
        {link.original}
      </p>

      <a
        href={link.shortened}
        target="_blank"
        rel="noopener noreferrer"
        className="
          min-w-0
          overflow-hidden
          text-ellipsis
          whitespace-nowrap
          text-[#2acfcf]
          md:ml-auto
        "
      >
        {link.shortened}
      </a>

      <button
        type="button"
        onClick={copyLink}
        className={`
          w-full
          rounded-md
          px-4
          py-2
          text-[15px]
          font-bold
          text-white
          transition-opacity
          hover:opacity-70
          md:w-[105px]

          ${
            copied
              ? "bg-[#3b3054]"
              : "bg-[#2acfcf]"
          }
        `}
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </article>
  );
}

export default ResultCard;
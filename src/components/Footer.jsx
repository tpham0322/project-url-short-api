function Footer() {
  return (
    <footer
      id="resources"
      className="
        bg-[#232127]
        py-[70px]
        text-white
      "
    >
      <div
        className="
          mx-auto
          flex
          w-[calc(100%-48px)]
          max-w-[1110px]
          flex-col
          items-center
          gap-12
          text-center
          md:grid
          md:grid-cols-[1.3fr_2fr_1fr]
          md:items-start
          md:gap-[60px]
          md:text-left
        "
      >
        <a
          href="#"
          className="
            text-[32px]
            font-bold
            leading-none
            text-white
          "
        >
          Shortly
        </a>

        <div
          className="
            grid
            w-full
            grid-cols-1
            gap-10
            md:grid-cols-3
          "
        >
          <div className="flex flex-col gap-2">
            <h3
              className="
                mb-3
                text-[15px]
                font-bold
              "
            >
              Features
            </h3>

            <a
              href="#features"
              className="
                text-sm
                text-[#9e9aa7]
                hover:text-[#2acfcf]
              "
            >
              Link Shortening
            </a>

            <a
              href="#features"
              className="
                text-sm
                text-[#9e9aa7]
                hover:text-[#2acfcf]
              "
            >
              Branded Links
            </a>

            <a
              href="#features"
              className="
                text-sm
                text-[#9e9aa7]
                hover:text-[#2acfcf]
              "
            >
              Analytics
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <h3
              className="
                mb-3
                text-[15px]
                font-bold
              "
            >
              Resources
            </h3>

            <a
              href="#"
              className="
                text-sm
                text-[#9e9aa7]
                hover:text-[#2acfcf]
              "
            >
              Blog
            </a>

            <a
              href="#"
              className="
                text-sm
                text-[#9e9aa7]
                hover:text-[#2acfcf]
              "
            >
              Developers
            </a>

            <a
              href="#"
              className="
                text-sm
                text-[#9e9aa7]
                hover:text-[#2acfcf]
              "
            >
              Support
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <h3
              className="
                mb-3
                text-[15px]
                font-bold
              "
            >
              Company
            </h3>

            <a
              href="#"
              className="
                text-sm
                text-[#9e9aa7]
                hover:text-[#2acfcf]
              "
            >
              About
            </a>

            <a
              href="#"
              className="
                text-sm
                text-[#9e9aa7]
                hover:text-[#2acfcf]
              "
            >
              Our Team
            </a>

            <a
              href="#"
              className="
                text-sm
                text-[#9e9aa7]
                hover:text-[#2acfcf]
              "
            >
              Careers
            </a>

            <a
              href="#"
              className="
                text-sm
                text-[#9e9aa7]
                hover:text-[#2acfcf]
              "
            >
              Contact
            </a>
          </div>
        </div>

        <div
          className="
            flex
            justify-center
            gap-6
            md:justify-end
          "
        >
          <a
            href="#"
            aria-label="Facebook"
            className="transition-opacity hover:opacity-70"
          >
            <img
              src="/images/icon-facebook.svg"
              alt=""
              className="h-6 w-6"
            />
          </a>

          <a
            href="#"
            aria-label="Twitter"
            className="transition-opacity hover:opacity-70"
          >
            <img
              src="/images/icon-twitter.svg"
              alt=""
              className="h-6 w-6"
            />
          </a>

          <a
            href="#"
            aria-label="Pinterest"
            className="transition-opacity hover:opacity-70"
          >
            <img
              src="/images/icon-pinterest.svg"
              alt=""
              className="h-6 w-6"
            />
          </a>

          <a
            href="#"
            aria-label="Instagram"
            className="transition-opacity hover:opacity-70"
          >
            <img
              src="/images/icon-instagram.svg"
              alt=""
              className="h-6 w-6"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
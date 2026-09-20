import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-white py-8">
      <nav
        className="mx-auto flex w-[calc(100%-48px)] max-w-[1110px] items-center gap-12"
        aria-label="Main navigation"
      >
        <a
          href="#"
          className="text-[32px] font-bold leading-none text-[#3b3054]"
        >
          Shortly
        </a>

        <button
          className="ml-auto flex flex-col gap-1 md:hidden"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
          onClick={() => setMenuOpen((previous) => !previous)}
        >
          <span className="block h-[3px] w-6 bg-[#9e9aa7]" />
          <span className="block h-[3px] w-6 bg-[#9e9aa7]" />
          <span className="block h-[3px] w-6 bg-[#9e9aa7]" />
        </button>

        <div
          id="nav-menu"
          className={`
            absolute left-6 right-6 top-[85px] z-50
            flex-col gap-8 rounded-xl
            bg-[#3b3054] p-8
            md:static md:flex md:flex-1
            md:flex-row md:items-center
            md:justify-between md:gap-0
            md:bg-transparent md:p-0
            ${menuOpen ? "flex" : "hidden md:flex"}
          `}
        >
          <ul
            className="
              flex flex-col items-center gap-8
              border-b border-white/20 pb-7
              md:flex-row md:gap-8
              md:border-0 md:pb-0
            "
          >
            <li>
              <a
                href="#features"
                onClick={closeMenu}
                className="
                  font-bold text-white
                  hover:text-[#2acfcf]
                  md:text-[15px]
                  md:text-[#9e9aa7]
                "
              >
                Features
              </a>
            </li>

            <li>
              <a
                href="#pricing"
                onClick={closeMenu}
                className="
                  font-bold text-white
                  hover:text-[#2acfcf]
                  md:text-[15px]
                  md:text-[#9e9aa7]
                "
              >
                Pricing
              </a>
            </li>

            <li>
              <a
                href="#resources"
                onClick={closeMenu}
                className="
                  font-bold text-white
                  hover:text-[#2acfcf]
                  md:text-[15px]
                  md:text-[#9e9aa7]
                "
              >
                Resources
              </a>
            </li>
          </ul>

          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-8">
            <a
              href="#login"
              onClick={closeMenu}
              className="
                font-bold text-white
                hover:text-[#2acfcf]
                md:text-[15px]
                md:text-[#9e9aa7]
              "
            >
              Login
            </a>

            <a
              href="#signup"
              onClick={closeMenu}
              className="
                w-full rounded-full
                bg-[#2acfcf]
                px-6 py-2
                text-center
                font-bold text-white
                transition-opacity
                hover:opacity-70
                md:w-auto
              "
            >
              Sign Up
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
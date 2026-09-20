function Boost() {
  return (
    <section
      className="
        bg-[#3b3054]
        bg-[url('/images/bg-boost-mobile.svg')]
        bg-cover
        bg-center
        py-[65px]
        text-center
        text-white
        md:bg-[url('/images/bg-boost-desktop.svg')]
      "
    >
      <div
        className="
          mx-auto
          w-[calc(100%-48px)]
          max-w-[1110px]
        "
      >
        <h2
          className="
            mb-5
            text-[30px]
            font-bold
            md:text-[34px]
          "
        >
          Boost your links today
        </h2>

        <a
          href="#shorten"
          className="
            inline-block
            rounded-full
            bg-[#2acfcf]
            px-[30px]
            py-[11px]
            font-bold
            text-white
            transition-opacity
            hover:opacity-70
          "
        >
          Get Started
        </a>
      </div>
    </section>
  );
}

export default Boost;
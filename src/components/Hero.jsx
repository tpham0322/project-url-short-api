function Hero() {
  return (
    <section
      className="
        mx-auto flex
        w-[calc(100%-48px)]
        max-w-[1110px]
        flex-col-reverse
        items-center
        pb-[130px]
        pt-5
        text-center
        md:min-h-[530px]
        md:flex-row
        md:pb-[70px]
        md:pt-10
        md:text-left
      "
    >
      <div
        className="
          relative z-10
          flex-1
          md:max-w-[600px]
        "
      >
        <h1
          className="
            mb-3
            text-[40px]
            font-bold
            leading-[1.15]
            text-[#232127]
            sm:text-[48px]
            md:text-[clamp(42px,5vw,72px)]
          "
        >
          More than just shorter links
        </h1>

        <p
          className="
            mx-auto
            mb-8
            max-w-[540px]
            text-base
            text-[#9e9aa7]
            md:mx-0
            md:text-xl
          "
        >
          Build your brand's recognition and get
          detailed insights on how your links are
          performing.
        </p>

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

      <div className="mb-10 flex-1 md:mb-0">
        <img
          src="/images/illustration-working.svg"
          alt="Person working with shortened links"
          className="
            w-[600px]
            max-w-none
            translate-x-[15%]
            md:w-[700px]
            md:translate-x-20
          "
        />
      </div>
    </section>
  );
}

export default Hero;
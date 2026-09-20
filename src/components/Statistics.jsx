function Statistics() {
  const cards = [
    {
      icon: "/images/icon-brand-recognition.svg",
      title: "Brand Recognition",
      text: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
      position: ""
    },
    {
      icon: "/images/icon-detailed-records.svg",
      title: "Detailed Records",
      text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps you make better decisions.",
      position: "md:mt-11"
    },
    {
      icon: "/images/icon-fully-customizable.svg",
      title: "Fully Customizable",
      text: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
      position: "md:mt-[88px]"
    }
  ];

  return (
    <section
      id="features"
      className="bg-[#eff1f7] pb-[120px]"
    >
      <div
        className="
          mx-auto
          w-[calc(100%-48px)]
          max-w-[1110px]
        "
      >
        <div
          className="
            mx-auto
            mb-[90px]
            max-w-[520px]
            text-center
          "
        >
          <h2
            className="
              mb-3
              text-[30px]
              font-bold
              text-[#232127]
              md:text-[34px]
            "
          >
            Advanced Statistics
          </h2>

          <p
            className="
              text-base
              text-[#9e9aa7]
            "
          >
            Track how your links are performing
            across the web with our advanced
            statistics dashboard.
          </p>
        </div>

        <div
          className="
            relative
            flex
            flex-col
            gap-20
            md:grid
            md:grid-cols-3
            md:gap-[30px]
          "
        >
          <div
            className="
              absolute
              bottom-0
              left-1/2
              top-0
              w-2
              -translate-x-1/2
              bg-[#2acfcf]
              md:left-[8%]
              md:right-[8%]
              md:top-[110px]
              md:h-2
              md:w-auto
              md:translate-x-0
            "
            aria-hidden="true"
          />

          {cards.map((card) => (
            <article
              key={card.title}
              className={`
                relative
                z-10
                rounded-md
                bg-white
                px-8
                pb-9
                pt-[65px]
                text-center
                md:text-left
                ${card.position}
              `}
            >
              <div
                className="
                  absolute
                  left-1/2
                  top-[-40px]
                  flex
                  h-20
                  w-20
                  -translate-x-1/2
                  items-center
                  justify-center
                  rounded-full
                  bg-[#3b3054]
                  md:left-8
                  md:translate-x-0
                "
              >
                <img
                  src={card.icon}
                  alt=""
                  className="h-10 w-10"
                />
              </div>

              <h3
                className="
                  mb-4
                  text-xl
                  font-bold
                "
              >
                {card.title}
              </h3>

              <p
                className="
                  text-[15px]
                  text-[#9e9aa7]
                "
              >
                {card.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Statistics;
export default function OfferSection() {
  const services = [
    {
      subtitle: "Office of multiple interest content",
      title: "Collaborative & partnership",
    },
    {
      subtitle: "The hanger US Air force digital experimental",
      title: "We talk about our weight",
    },
    {
      subtitle: "Delta faucet content, social, digital",
      title: "Piloting digital confidence",
    },
  ];

  return (
    <section className="relative bg-[#F5F5F5] overflow-hidden py-16 md:py-20 lg:py-24">
      {/* Top Red Stroke */}
      <img
        src="/red-top-stroke.png"
        alt=""
        className="
        hidden lg:block
          absolute
          top-0
          right-0
          w-[60%]
          md:w-[50%]
          lg:w-[45%]
          pointer-events-none
          select-none
          z-0
        "
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Heading */}
        <div className="relative mb-16 md:mb-20 lg:mb-24">
          <h2
            className="
              logo-font
              text-[38px]
              sm:text-[48px]
              md:text-[72px]
              lg:text-[88px]
              leading-[0.95]
              tracking-[-0.04em]
              text-black
            "
          >
            What we{" "}
            <span className="bg-[#DDE8DA] px-3 md:px-4 rounded-full">
              can
            </span>
            <br />
            offer you!
          </h2>

          {/* Yellow underline asset */}
          <img
            src="/yellow-stroke.png"
            alt=""
            className="
              absolute
              left-0
              top-[70px]
              sm:top-[85px]
              md:top-40
              w-[150px]
              sm:w-[200px]
              md:w-[270px]
              pointer-events-none
            "
          />
        </div>

        {/* Services List */}
        <div className="border-t border-[#D5D5D5]">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                relative
                grid
                grid-cols-1
                md:grid-cols-[220px_1fr_60px]
                lg:grid-cols-[220px_1fr_80px]
                gap-4
                md:gap-8
                py-8
                md:py-10
                border-b
                border-[#D5D5D5]
                group
              "
            >
              {/* Left text */}
              <p
                className="
                  font-satoshi
                  text-[16px]
                  sm:text-[18px]
                  md:text-[20px]
                  lg:text-[25px]
                  leading-[1.4]
                  text-[#2B2B2B]
                "
              >
                {service.subtitle}
              </p>

              {/* Main heading */}
              <h3
                className="
                  logo-font
                  text-[28px]
                  sm:text-[34px]
                  md:text-[44px]
                  lg:text-[50px]
                  leading-none
                  tracking-[-0.03em]
                  transition-all
                  group-hover:translate-x-2
                "
              >
                {service.title}
              </h3>

              {/* Arrow */}
              <button
                className="
                  text-3xl
                  md:text-4xl
                  md:justify-self-end
                  transition-all
                  group-hover:translate-x-3
                "
              >
                →
              </button>

              {/* Sticker on third row - Desktop Only */}
              {index === 2 && (
                <img
                  src="/sticker-circle.png"
                  alt=""
                  className="
                    hidden lg:block
                    absolute
                    right-[370px]
                    top-1/2
                    -translate-y-1/2
                    w-28
                    z-[-2]
                  "
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
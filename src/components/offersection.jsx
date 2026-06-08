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
    <section className="relative bg-[#F5F5F5] overflow-hidden py-24">

      {/* Top Red Stroke */}
      <img
        src="/red-top-stroke.png"
        alt=""
        className="
          absolute
          bottom-1700000000
          right-0
          w-[45%]
          pointer-events-none
          select-none
          z-0
        "
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="relative mb-24">

          <h2
            className="
              logo-font
              text-[48px]
              md:text-[72px]
              lg:text-[88px]
              leading-[0.9]
              tracking-[-0.04em]
              text-black
            "
          >
            What we{" "}
            <span className="bg-[#DDE8DA] px-4 rounded-full">
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
              top-40
               w-[270px]
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
                md:grid-cols-[220px_1fr_80px]
                items-center
                gap-8
                py-10
                border-b
                border-[#D5D5D5]
                group
              "
            >
              {/* Left text */}
              <p
                className="
                  font-satoshi
                  text-[25px]
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
                  text-[30px]
                  md:text-[58px]
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
                  text-4xl
                  justify-self-end
                  transition-all
                  group-hover:translate-x-3
                "
              >
                →
              </button>

              {/* Sticker on third row */}
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
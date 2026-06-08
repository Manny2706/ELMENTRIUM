export default function TestimonialsSection() {
  const avatars = [
    {
      src: "/tesimonial-person-image/Ellipse263.png",
      className: "top-24 left-24 w-28 h-28",
    },
    {
      src: "/tesimonial-person-image/Ellipse 264.png",
      className: "top-72 left-6 w-12 h-12",
    },
    {
      src: "/tesimonial-person-image/Ellipse 265.png",
      className: "bottom-64 left-0 w-28 h-28",
    },
    {
      src: "/tesimonial-person-image/Ellipse 266.png",
      className: "top-36 right-56 w-16 h-16",
    },
    {
      src: "/tesimonial-person-image/Ellipse 267.png",
      className: "top-24 right-20 w-28 h-28",
    },
    {
      src: "/tesimonial-person-image/Ellipse 268.png",
      className: "top-72 right-48 w-20 h-20",
    },
    {
      src: "/tesimonial-person-image/Ellipse 269.png",
      className: "bottom-68 right-10 w-48 h-48",
    },
    {
      src: "/tesimonial-person-image/Ellipse 270.png",
      className: "bottom-94 left-27 w-45 h-45",
    },
  ];

  return (
    <section className="relative bg-[#F5F5F5] py-16 md:py-24 lg:py-32 overflow-hidden min-h-auto lg:min-h-[850px]">
      {/* Floating Avatars - Desktop Only */}
      <div className="hidden lg:block">
        {avatars.map((avatar, index) => (
          <img
            key={index}
            src={avatar.src}
            alt=""
            className={`absolute rounded-full object-cover ${avatar.className}`}
          />
        ))}
      </div>

      {/* Mobile + Tablet Avatar Grid */}
      <div className="lg:hidden max-w-md mx-auto px-4 mb-12">
        <div className="grid grid-cols-4 gap-3 md:gap-4">
          {avatars.map((avatar, index) => (
            <img
              key={index}
              src={avatar.src}
              alt=""
              className="
                w-14 h-14
                md:w-20 md:h-20
                rounded-full
                object-cover
                mx-auto
              "
            />
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10">
        {/* Heading */}
        <div className="text-center relative">
          <h2
            className="
              logo-font
              text-[36px]
              sm:text-[44px]
              md:text-[60px]
              lg:text-[72px]
              leading-[0.95]
              tracking-[-0.04em]
            "
          >
            <span className="bg-[#DDE8DA] px-3 md:px-4 rounded-full">
              What
            </span>{" "}
            our customer
            <br />
            says About Us
          </h2>

          <img
            src="/yellow-stroke.png"
            alt=""
            className="
              absolute
              left-1/2
              -translate-x-1/2
              top-[70px]
              sm:top-[85px]
              md:top-[110px]
              lg:left-150
              lg:top-35
              w-[180px]
              sm:w-[240px]
              md:w-[320px]
              lg:w-[420px]
            "
          />
        </div>

        {/* Testimonial Card */}
        <div
          className="
            mt-12
            md:mt-16
            max-w-2xl
            mx-auto
            bg-[#E8EDE8]
            rounded-[24px]
            md:rounded-[40px]
            px-6
            md:px-10
            py-8
            md:py-12
            relative
          "
        >
          <span
            className="
              absolute
              left-4
              md:left-17
              top-2
              md:top-6
              text-[50px]
              md:text-[90px]
              text-[#C9CECA]
              leading-none
            "
          >
            ❝
          </span>

          <p
            className="
              font-satoshi
              text-center
              text-[15px]
              sm:text-[16px]
              md:text-[20px]
              leading-[1.8]
              text-[#2B2B2B]
              max-w-2xl
              mx-auto
            "
          >
            Elementum delivered the site within the timeline
            as they requested. In the end, the client found a
            50% increase in traffic within days since its launch.
            They also had an impressive ability to use technologies
            that the company hadn't used, which have also proved to
            be easy to use and reliable.
          </p>

          <span
            className="
              absolute
              right-4
              md:right-40
              bottom-0
              md:bottom-2
              text-[50px]
              md:text-[90px]
              text-[#C9CECA]
              leading-none
            "
          >
            ❞
          </span>
        </div>
      </div>
    </section>
  );
}
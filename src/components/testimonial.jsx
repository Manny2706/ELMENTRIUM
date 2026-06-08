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
    <section className="relative bg-[#F5F5F5] py-32 overflow-hidden min-h-[850px]">

      {/* Floating Avatars */}
      {avatars.map((avatar, index) => (
        <img
          key={index}
          src={avatar.src}
          alt=""
          className={`absolute rounded-full object-cover ${avatar.className}`}
        />
      ))}

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center relative">

          <h2
            className="
              logo-font
              text-[48px]
              md:text-[72px]
              leading-[0.9]
              tracking-[-0.04em]
            "
          >
            <span className="bg-[#DDE8DA] px-4 rounded-full">
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
              left-150
              -translate-x-1/2
              top-35
              w-[420px]
            "
          />
        </div>

        {/* Testimonial Card */}
        <div
          className="
            mt-16
            max-w-2xl
            h-80
            mx-auto
            bg-[#E8EDE8]
            rounded-[40px]
            px-10
            py-12
            relative
          "
        >
          <span
            className="
              absolute
              left-17
              top-6
              text-[90px]
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
              text-[20px]
              leading-[1.8]
              text-[#2B2B2B]
              max-w-2xl
              mx-auto
            "
          >
             Elementum delivered the site within the timeline <br/>
            as they requested. In the end, the client found a
            50% <br/>increase in traffic within days since its launch.
            They <br/>also had an impressive ability to use technologies
            that<br/> the company hadn't used, which have also proved to<br/>
            be easy to use and reliable.
          </p>

          <span
            className="
              absolute
              right-40
              bottom-2
              text-[90px]
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
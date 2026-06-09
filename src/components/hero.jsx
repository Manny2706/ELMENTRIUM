export default function Hero() {
  const avatars = [
    "/avatars/Ellipse255.png",
    "/avatars/Ellipse 256.png",
    "/avatars/Ellipse 257.png",
    "/avatars/Ellipse 258.png",
    "/avatars/Ellipse 259.png",
    "/avatars/Ellipse 260.png",
    "/avatars/Ellipse 261.png",
    "/avatars/Ellipse262.png",
  ];

  return (
    <section className="relative overflow-hidden bg-white min-h-screen lg:h-[1200px]">
      {/* Background Curves */}
      <img
        src="/Vector 2510.png"
        alt=""
        className="
        hidden lg:block
          absolute
          top-[55%]
          left-[-120px]
          md:left-[-80px]
          lg:top-85
          lg:left-0
          lg:-translate-x-1/3
          w-[250px]
          md:w-auto
          pointer-events-none
        "
      />

      <img
        src="/Vector 2511.png"
        alt=""
        className="
        hidden lg:block
          absolute
          top-[55%]
          left-0
          md:left-10
          lg:top-85
          lg:left-20
          lg:-translate-x-1/3
          w-[250px]
          md:w-auto
          pointer-events-none
        "
      />

      <div className="container mx-auto px-4 md:px-6 pt-12 md:pt-16 lg:pt-20">
        {/* Purple Shape */}
        <img
          src="/purple-shape.png"
          alt=""
          className="
            absolute
            right-2
            md:right-8
            lg:right-15
            top-20
            md:top-24
            lg:top-34
            w-20
            md:w-32
            lg:w-48
            rotate-[180deg]
            scale-60
            pointer-events-none
          "
        />

        {/* Heading */}
        <div className="max-w-6xl mx-auto text-center relative">
          <h1
            className="
              logo-font
              text-[36px]
              sm:text-[48px]
              md:text-[60px]
              lg:text-[80px]
              leading-[1.1]
              tracking-[-0.03em]
              text-black
              relative
              z-20
            "
          >
            The thinkers and
            <br />

            {/* Yellow Stroke */}
            <img
              src="/yellow-stroke.png"
              alt=""
              className="
                absolute
                left-1/2
                -translate-x-1/2
                top-[60px]
                sm:top-[110px]
                md:top-[50px]
                lg:left-150
                lg:top-18
                w-[180px]
                sm:w-[250px]
                md:w-[320px]
                lg:w-[420px]
              "
            />

            doers were ch{""}
            <span className="inline-block bg-[#E8B5DF] px-2 md:px-4 py-2 md:py-3 rounded-full">
              anging
            </span>

            <br />

            the{""}
            <span className="inline-block bg-[#DDE8DA] px-4 md:px-8 py-1 rounded-full">
              status
            </span>{""}
            Quo with
          </h1>

          <p
            className="
              mt-6 md:mt-8
              max-w-2xl
              mx-auto
              text-[#555]
              text-sm
              md:text-base
              leading-relaxed
              font-satoshi
              px-4 md:px-0
            "
          >
            We are a team of strategists, designers, communicators,
            researchers. Together, we believe that progress only
            happens when you refuse to play things safe.
          </p>
        </div>

        {/* Mobile Avatar Grid */}
        <div className="grid grid-cols-4 gap-3 mt-12 md:hidden max-w-sm mx-auto">
          {avatars.map((avatar, index) => (
            <img
              key={index}
              src={avatar}
              alt=""
              className="w-16 h-16 rounded-full object-cover border-4 border-white"
            />
          ))}
        </div>

        {/* Tablet Avatar Grid */}
        <div className="hidden md:grid lg:hidden grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
          {avatars.map((avatar, index) => (
            <img
              key={index}
              src={avatar}
              alt=""
              className="w-24 h-24 rounded-full object-cover border-4 border-white mx-auto"
            />
          ))}
        </div>

        {/* Desktop Avatar Layout - Unchanged */}
        <div className="relative h-[350px] mt-16 lg:mt-20 hidden lg:block">
          <img
            src={avatars[0]}
            alt=""
            className="absolute left-0 bottom-10 w-28 h-28 rounded-full object-cover border-4 border-white"
          />

          <img
            src={avatars[1]}
            alt=""
            className="absolute left-24 bottom-16 w-28 h-28 rounded-full object-cover border-4 border-white"
          />

          <img
            src={avatars[2]}
            alt=""
            className="absolute left-[28%] bottom-28 w-36 h-36 rounded-full object-cover border-4 border-white"
          />

          <img
            src={avatars[3]}
            alt=""
            className="absolute left-[37%] bottom-0 w-32 h-32 rounded-full object-cover border-4 border-white"
          />

          <img
            src={avatars[4]}
            alt=""
            className="absolute left-[54%] bottom-20 w-36 h-36 rounded-full object-cover border-4 border-white"
          />

          <img
            src={avatars[5]}
            alt=""
            className="absolute left-[76%] bottom-24 w-36 h-36 rounded-full object-cover border-4 border-white"
          />

          <img
            src={avatars[6]}
            alt=""
            className="absolute right-0 bottom-10 w-32 h-32 rounded-full object-cover border-4 border-white"
          />

          <img
            src={avatars[7]}
            alt=""
            className="absolute left-[62%] bottom-10 w-32 h-32 rounded-full object-cover border-4 border-white"
          />
        </div>
      </div>
    </section>
  );
}
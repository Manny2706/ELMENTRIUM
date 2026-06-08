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
    <section className="relative overflow-hidden bg-[white] h-300">

      <img
        src="/Vector 2510.png"
        alt=""
        className="
          absolute
          top-85
          left-0
          -translate-x-1/3
          
          pointer-events-none
        
        "
      /><img
        src="/Vector 2511.png"
        alt=""
        className="
          absolute
          top-85
          left-20
          -translate-x-1/3
          
          pointer-events-none
        
        "
      />

      <div className="container mx-auto px-6 pt-16 lg:pt-20">
<img
        src="/purple-shape.png"
        alt=""
        className="
          absolute
          right-15
          top-34
          w-32
          md:w-48
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
              text-[42px]
              md:text-[72px]
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
            <img
            src="/yellow-stroke.png"
            alt=""
            className="
              absolute
              left-150
              -translate-x-1/2
              top-18
              w-[420px]
            "
          />
            doers were ch{""}

            <span className="inline-block bg-[#E8B5DF] px-0  md:px-[8] py-3 rounded-full">anging 
            </span>

            <br />

            the{" "}

            <span className="inline-block bg-[#DDE8DA] px-5 md:px-8 py-1 rounded-full">
              status
            </span>{" "}

            Quo with
          </h1>

          <p
            className="
              mt-8
              max-w-2xl
              mx-auto
              text-[#555]
              text-sm
              md:text-base
              leading-relaxed
              font-satoshi
            "
          >
            We are a team of strategists, designers, communicators,
            researchers. Together, we believe that progress only
            happens when you refuse to play things safe.
          </p>
        </div>

        {/* Avatars */}
        <div className="relative h-[350px] mt-16 lg:mt-20 hidden md:block">

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
            className="absolute left-[62%] bottom-10 w-32 h-32 rounded-full object-cover border-4 border-white "
          />
        </div>

      </div>
    </section>
  );
}
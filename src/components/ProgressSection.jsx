export default function ProgressSection() {
  return (
    <section className="relative bg-white min-h-screen lg:h-[1050px] overflow-hidden lg:overflow-visible">
      {/* Glow */}
      <div
        className="
          absolute
          left-1/2
          top-0
          -translate-x-1/2
          -translate-y-1/2
          w-[120px]
          h-[120px]
          md:w-[140px]
          md:h-[140px]
          lg:w-[166px]
          lg:h-[166px]
          rounded-full
          bg-[#FF2020]
          blur-[100px]
          opacity-100
          pointer-events-none
          z-[10]
        "
      />

      {/* Main Red Curve */}
      <img
        src="/Vector 2517.png"
        alt=""
        className="
        hidden lg:block
          absolute
          left-0
          md:left-10
          lg:left-20
          top-[400px]
          md:top-[500px]
          lg:top-[250px]
          w-full
          pointer-events-none
          select-none
          z-0
          scale-[0.8]
          md:scale-[0.85]
          lg:scale-90
        "
      />

      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-6 lg:px-0">
        {/* MOBILE + TABLET LAYOUT */}
        <div className="lg:hidden py-16 md:py-20 space-y-20">
          {/* Section 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="relative inline-block">
              <img
                src="/yellow-stroke.png"
                alt=""
                className="
                  absolute
                  left-1/2
                  -translate-x-1/2
                  top-[20px]
                  w-[140px]
                  md:w-[180px]
                "
              />

              <h2
                className="
                  logo-font
                  relative
                  z-10
                  text-[34px]
                  md:text-[48px]
                  leading-[0.95]
                  tracking-[-0.04em]
                "
              >
                Tomorrow should
                <br />
                be better than{" "}
                <span className="bg-[#DDE8DA] rounded-full">
                  today
                </span>
              </h2>
            </div>

            <p
              className="
                font-satoshi
                mt-6
                text-[#555]
                leading-7
                max-w-xl
              "
            >
              We are a team of strategists, designers communicators,
              researchers. Together, we believe that progress only
              happens when you refuse to play things safe.
            </p>

            <button className="mt-6 flex items-center gap-3 font-satoshi">
              Read more
              <span>→</span>
            </button>

            <div className="relative mt-10">
              <img
                src="/Polygon 3.png"
                alt=""
                className="
                  absolute
                  right-0
                  top-0
                  w-[70px]
                  md:w-[90px]
                  z-0
                "
              />

              <img
                src="/image 348.png"
                alt=""
                className="
                  relative
                  z-10
                  w-[260px]
                  h-[260px]
                  md:w-[340px]
                  md:h-[340px]
                  rounded-full
                  object-cover
                "
              />
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-10">
              <img
                src="/Polygon 1.png"
                alt=""
                className="
                  absolute
                  left-0
                  top-10
                  w-[70px]
                  md:w-[90px]
                  z-0
                "
              />

              <img
                src="/Polygon 1.png"
                alt=""
                className="
                  absolute
                  right-0
                  bottom-0
                  w-[80px]
                  md:w-[100px]
                  z-20
                "
              />

              <img
                src="/image 348 (1).png"
                alt=""
                className="
                  relative
                  z-10
                  w-[240px]
                  h-[240px]
                  md:w-[320px]
                  md:h-[320px]
                  rounded-full
                  object-cover
                "
              />
            </div>

            <div className="relative inline-block">
              <img
                src="/yellow-stroke.png"
                alt=""
                className="
                  absolute
                  right-0
                  top-[55px]
                  md:top-[75px]
                  w-[160px]
                  md:w-[220px]
                "
              />

              <h2
                className="
                  logo-font
                  text-[34px]
                  md:text-[48px]
                  leading-[0.95]
                  tracking-[-0.04em]
                "
              >
                <span className="bg-[#DDE8DA] rounded-full">
                  See
                </span>{" "}
                how we can
                <br />
                help you progress
              </h2>
            </div>

            <p
              className="
                font-satoshi
                mt-6
                text-[#555]
                leading-7
                max-w-xl
              "
            >
              We add a layer of fearless insights and action that
              allows change makers to accelerate their progress in
              areas such as brand, design, digital, comms and social
              research.
            </p>

            <button className="mt-6 flex items-center gap-3 font-satoshi">
              Read more
              <span>→</span>
            </button>
          </div>
        </div>

        {/* DESKTOP LAYOUT - UNCHANGED */}
        <div className="hidden lg:block">
          {/* TOP LEFT CONTENT */}
          <div className="absolute left-[80px] top-[80px] z-20 max-w-[500px]">
            <div className="relative inline-block">
              <img
                src="/yellow-stroke.png"
                alt=""
                className="
                  absolute
                  left-0
                  top-[28px]
                  w-[220px]
                  z-0
                "
              />

              <h2
                className="
                  logo-font
                  relative
                  z-10
                  text-[40px]
                  leading-[0.92]
                  tracking-[-0.04em]
                "
              >
                Tomorrow should
                <br />
                be better than{" "}
                <span className="bg-[#DDE8DA] px-0 rounded-full">
                  today
                </span>
              </h2>
            </div>

            <p
              className="
                font-satoshi
                mt-8
                text-[#555]
                leading-8
                max-w-[430px]
              "
            >
              We are a team of strategists, designers communicators,
              researchers. Together, we believe that progress only
              happens when you refuse to play things safe.
            </p>

            <button className="mt-8 flex items-center gap-4 font-satoshi">
              Read more
              <span>→</span>
            </button>
          </div>

          {/* TOP RIGHT IMAGE */}
          <div className="absolute right-[80px] top-[20px]">
            <img
              src="/Polygon 3.png"
              alt=""
              className="
                absolute
                left-85
                top-8
                w-[110px]
                z-0
              "
            />

            <img
              src="/image 348.png"
              alt=""
              className="
                relative
                z-10
                w-[420px]
                h-[420px]
                rounded-full
                object-cover
              "
            />
          </div>

          {/* BOTTOM LEFT IMAGE */}
          <div className="absolute left-[70px] top-[520px]">
            <img
              src="/Polygon 1.png"
              alt=""
              className="
                absolute
                left-4
                top-20
                w-[120px]
                rotate-[0deg]
                z-0
              "
            />

            <img
              src="/Polygon 1.png"
              alt=""
              className="
                absolute
                left-60
                top-70
                w-[130px]
                rotate-0
                z-20
              "
            />

            <img
              src="/image 348 (1).png"
              alt=""
              className="
                relative
                z-10
                top-15
                left-10
                w-[320px]
                h-[320px]
                rounded-full
                object-cover
              "
            />
          </div>

          {/* BOTTOM RIGHT CONTENT */}
          <div className="absolute right-[220px] top-[620px] z-20 max-w-[520px]">
            <div className="relative">
              <img
                src="/yellow-stroke.png"
                alt=""
                className="
                  absolute
                  right-0
                  top-20
                  w-[270px]
                "
              />

              <h2
                className="
                  logo-font
                  text-[45px]
                  leading-[0.92]
                  tracking-[-0.04em]
                "
              >
                <span className="bg-[#DDE8DA] px-0 rounded-full">
                  See
                </span>{" "}
                how we can
                <br />
                help you progress
              </h2>
            </div>

            <p
              className="
                font-satoshi
                mt-8
                text-[#555]
                leading-8
                max-w-[500px]
              "
            >
              We add a layer of fearless insights and action that
              allows change makers to accelerate their progress in
              areas such as brand, design, digital, comms and social
              research.
            </p>

            <button className="mt-8 flex items-center gap-4 font-satoshi">
              Read more
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
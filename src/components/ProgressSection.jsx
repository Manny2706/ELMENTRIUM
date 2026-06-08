export default function ProgressSection() {
  return (
    <section className="relative bg-[white] h-[1050px] overflow-visible">
<div
  className="
    absolute
    left-1/2
    top-0
    -translate-x-1/2
    -translate-y-1/2
    w-[166px]
    h-[166px]
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
          absolute
          left-20
          top-[250px]
          w-full
          pointer-events-none
          select-none
          z-0
          scale-90
        "
      />

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
    </section>
  );
}
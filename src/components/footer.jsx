export default function Footer() {
  return (
    <footer className="relative bg-[#DDE8DA] overflow-hidden">

      {/* Decorative Arrow */}
      <img
        src="/footer-arrow.png  "
        alt=""
        className="
          absolute
          top-0
          left-[30%]
          -translate-x-1
          w-48
          pointer-events-none
        "
      />
      <img
        src="/footer-arrow.png  "
        alt=""
        className="
          absolute
          top-0
          left-[43%]
          -translate-x-1/3
          w-48
          pointer-events-none
        "
      />

      {/* Purple Shape */}
      <img
        src="/purple-shape.png"
        alt=""
        className="
          absolute
          right-15
          top-24
          w-32
          md:w-48
          pointer-events-none
        "
      />

      <div className="max-w-7xl mx-auto px-6 pt-40 pb-16">

        {/* Newsletter Section */}
        <div className="text-center">

          <h2
            className="
              logo-font
              text-[48px]
              md:text-[80px]
              lg:text-[96px]
              leading-[0.9]
              tracking-[-0.04em]
            "
          >
            Subscribe to
            <br />
            our newsletter
          </h2>

          <p
            className="
              font-satoshi
              mt-6
              text-[#333]
              text-lg
            "
          >
            To make your stay special and even more memorable
          </p>

          <button
            className="
              mt-8
              bg-black
              text-white
              px-10
              py-4
              rounded-full
              font-satoshi
              hover:scale-105
              transition-all
            "
          >
            Subscribe Now
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-black/20 mt-24 pt-16">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* Company */}
            <div>
              <h3 className="font-gerbil text-2xl mb-8">
                Company
              </h3>

              <ul className="space-y-6 font-satoshi text-[#333]">
                <li>Home</li>
                <li>Studio</li>
                <li>Service</li>
                <li>Blog</li>
              </ul>
            </div>

            {/* Policies */}
            <div>
              <h3 className="font-gerbil text-2xl mb-8">
                Terms & Policies
              </h3>

              <ul className="space-y-6 font-satoshi text-[#333]">
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Explore</li>
                <li>Accesibility</li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="font-gerbil text-2xl mb-8">
                Follow Us
              </h3>

              <ul className="space-y-6 font-satoshi text-[#333]">
                <li>Instagram</li>
                <li>LinkedIn</li>
                <li>Youtube</li>
                <li>Twitter</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-gerbil text-2xl mb-8">
                Terms & Policies
              </h3>

              <div className="space-y-8 font-satoshi text-[#333]">
                <p>
                  1498w Fluton ste, STE
                  <br />
                  2D Chcigo, IL 63867.
                </p>

                <p>(123) 456789000</p>

                <p>info@elementum.com</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
export default function Footer() {
  return (
    <footer className="relative bg-[#DDE8DA] overflow-hidden">
      {/* Decorative Arrow */}
      <img
        src="/footer-arrow.png"
        alt=""
        className="
          hidden lg:block
          absolute
          top-0
          left-[30%]
          -translate-x-1
          w-48
          pointer-events-none
        "
      />

      <img
        src="/footer-arrow.png"
        alt=""
        className="
          hidden lg:block
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
          right-4 md:right-8 lg:right-15
          top-12 md:top-20 lg:top-24
          w-20 md:w-32 lg:w-48
          pointer-events-none
        "
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-24 md:pt-32 lg:pt-40 pb-16">
        {/* Newsletter Section */}
        <div className="text-center">
          <h2
            className="
              logo-font
              text-[40px]
              sm:text-[56px]
              md:text-[72px]
              lg:text-[96px]
              leading-[0.95]
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
              text-base md:text-lg
              px-4 md:px-0
            "
          >
            To make your stay special and even more memorable
          </p>

          <button
            className="
              mt-8
              bg-black
              text-white
              px-8 md:px-10
              py-3 md:py-4
              rounded-full
              font-satoshi
              text-sm md:text-base
              hover:scale-105
              transition-all
            "
          >
            Subscribe Now
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-black/20 mt-16 md:mt-20 lg:mt-24 pt-12 md:pt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
            {/* Company */}
            <div>
              <h3 className="font-gerbil text-xl md:text-2xl mb-6 md:mb-8">
                Company
              </h3>

              <ul className="space-y-4 md:space-y-6 font-satoshi text-[#333]">
                <li>Home</li>
                <li>Studio</li>
                <li>Service</li>
                <li>Blog</li>
              </ul>
            </div>

            {/* Policies */}
            <div>
              <h3 className="font-gerbil text-xl md:text-2xl mb-6 md:mb-8">
                Terms & Policies
              </h3>

              <ul className="space-y-4 md:space-y-6 font-satoshi text-[#333]">
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Explore</li>
                <li>Accessibility</li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="font-gerbil text-xl md:text-2xl mb-6 md:mb-8">
                Follow Us
              </h3>

              <ul className="space-y-4 md:space-y-6 font-satoshi text-[#333]">
                <li>Instagram</li>
                <li>LinkedIn</li>
                <li>Youtube</li>
                <li>Twitter</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-gerbil text-xl md:text-2xl mb-6 md:mb-8">
                Terms & Policies
              </h3>

              <div className="space-y-5 md:space-y-8 font-satoshi text-[#333]">
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

      {/* Copyright */}
      <div className="mt-[10px] text-center px-4 pb-6">
        <p className="font-satoshi text-[12px] md:text-[14px] font-medium text-black/70">
          ©2023 Elementum. All rights reserved
        </p>
      </div>
    </footer>
  );
}
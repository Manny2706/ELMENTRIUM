

export default function Navbar() {
  return (
    <nav className="relative h-20 bg-[#F5F5F5] px-6 lg:px-24 flex items-center">
  <h1 className="logo-font text-2xl font-medium">
    Elementum
  </h1>

  <ul className=" menu-items absolute left-1/2 -translate-x-1/2 hidden md:flex gap-12 text-sm">
    <li>Home</li>
    <li>Studio</li>
    <li>Services</li>
    <li>Contact</li>
    <li>FAQs</li>
  </ul>

  <button className="ml-auto flex flex-col gap-2">
    <span className="w-10 h-[2px] bg-black"></span>
    <span className="w-10 h-[2px] bg-black"></span>
  </button>
</nav>
  );
}
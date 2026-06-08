"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    "Home",
    "Studio",
    "Services",
    "Contact",
    "FAQs",
  ];

  return (
    <>
      <nav className="relative h-20 bg-[#F5F5F5] px-4 md:px-6 lg:px-24 flex items-center z-50">
        {/* Logo */}
        <h1 className="logo-font text-xl md:text-2xl font-medium">
          Elementum
        </h1>

        {/* Desktop Menu */}
        <ul className="menu-items absolute left-1/2 -translate-x-1/2 hidden lg:flex gap-12 text-sm">
          {menuItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(true)}
          className="ml-auto flex flex-col gap-1.5 md:gap-2"
          aria-label="Open menu"
        >
          <span className="w-8 md:w-10 h-[2px] bg-black"></span>
          <span className="w-8 md:w-10 h-[2px] bg-black"></span>
        </button>
      </nav>

      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className={`
          fixed inset-0 bg-black/40 z-40 transition-opacity duration-300
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      {/* Side Panel */}
      <div
        className={`
          fixed top-0 right-0 h-full w-[280px] bg-white z-50
          shadow-xl transition-transform duration-300
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="logo-font text-2xl">Elementum</h2>

          <button
            onClick={() => setIsOpen(false)}
            className="text-3xl"
          >
            ×
          </button>
        </div>

        {/* Menu */}
        <ul className="flex flex-col p-6 gap-6 font-satoshi text-lg">
          {menuItems.map((item) => (
            <li
              key={item}
              className="   font-satoshi cursor-pointer hover:translate-x-1 transition-transform"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
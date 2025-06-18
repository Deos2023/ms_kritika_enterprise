
"use client"
import React, { useState } from 'react';
import Link from 'next/link'; // Ensure you're using Next.js routing

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50 text-neutral-700">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-[#8B6B4A] rounded-full flex items-center justify-center text-white font-bold text-lg">
            MS
          </div>
          <span className="text-xl font-bold">Kritika Enterprises Aya Center</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="font-medium hover:text-[#8B6B4A]">Home</Link>
          <Link href="#services" className="hover:text-[#8B6B4A]">Services</Link>
          <Link href="#gallery" className="hover:text-[#8B6B4A]">Gallery</Link>
          <Link href="#testimonials" className="hover:text-[#8B6B4A]">Testimonials</Link>
          <Link href="#contact" className="hover:text-[#8B6B4A]">Contact</Link>
          <a href="tel:+916289429854" className="bg-[#8B6B4A] text-white px-4 py-2 rounded hover:bg-[#6D543A]">Call Now</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-[#8B6B4A]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 shadow-md space-y-3">
          <Link href="/" className="block hover:text-[#8B6B4A]">Home</Link>
          <Link href="#services" className="block hover:text-[#8B6B4A]">Services</Link>
          <Link href="#gallery" className="block hover:text-[#8B6B4A]">Gallery</Link>
          <Link href="#testimonials" className="block hover:text-[#8B6B4A]">Testimonials</Link>
          <Link href="#contact" className="block hover:text-[#8B6B4A]">Contact</Link>
          <a href="tel:+916289429854" className="block bg-[#8B6B4A] text-white text-center py-2 rounded hover:bg-[#6D543A]">
            Call Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

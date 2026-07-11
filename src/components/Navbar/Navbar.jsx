"use client";
import { Menu, CircleX } from "lucide-react";
import Image from "next/image.js";
import Link from "next/link";
import { useState } from "react";

export default function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "mmorpg", href: "/MMORPG" },
    { name: "shooter", href: "/shooter" },
    { name: "sailing", href: "/sailing" },
    { name: "permadeath", href: "/permadeath" },
    { name: "superhero", href: "/superhero" },
    { name: "pixel", href: "/pixel" },
  ];

  return (
    <nav className="bg-[#3A497B] w-5/6 top-0 rounded-3xl mx-auto text-white shadow-lg sticky z-50"> 
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="text-2xl font-bold flex items-center gap-2">
          <Image src="/logo-sm.png" width={50} height={200} alt="Game Over Logo" className="" />
            Game Over
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-blue-400 transition-colors duration-300 uppercase font-nekro "
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <CircleX /> : <Menu />}
          </button>
        </div>
      </div>

      {/*  Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 px-4 pb-4 absolute w-full z-50 shadow-lg rounded-3xl pt-1">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-blue-400 transition-colors duration-300 py-1 uppercase font-nekro"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
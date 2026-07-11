"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { title: "Home", href: "/" },
  { title: "About", href: "#about" },
  { title: "Services", href: "#services" },
  { title: "Gallery", href: "#gallery" },
  { title: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-24">

        <Link
          href="/"
          className="text-4xl font-black tracking-[8px] gold"
        >
          MJ
        </Link>

        <nav className="hidden lg:flex gap-10">

          {links.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-white hover:text-[#D4AF37] duration-300 uppercase tracking-[2px]"
            >
              {item.title}
            </Link>
          ))}

        </nav>

        <a
          href="#contact"
          className="btn"
        >
          CONTACT
        </a>

      </div>
    </header>
  );
}

"use client";

import { Instagram, Phone } from "lucide-react";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-8 left-8 z-50 flex flex-col gap-4">

      <a
        href="tel:09931693826"
        className="w-14 h-14 rounded-full bg-[#D4AF37] text-black flex items-center justify-center shadow-lg hover:scale-110 duration-300"
      >
        <Phone size={22} />
      </a>

      <a
        href="https://instagram.com/mj.fit.ir"
        target="_blank"
        className="w-14 h-14 rounded-full bg-[#D4AF37] text-black flex items-center justify-center shadow-lg hover:scale-110 duration-300"
      >
        <Instagram size={22} />
      </a>

    </div>
  );
}

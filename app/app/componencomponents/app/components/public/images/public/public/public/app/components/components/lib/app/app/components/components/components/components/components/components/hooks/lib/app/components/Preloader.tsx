"use client";

import { useEffect, useState } from "react";

export default function Preloader() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);

  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center">

      <div className="text-center">

        <h1 className="text-[90px] font-black text-[#D4AF37] tracking-[12px] animate-pulse">
          MJ
        </h1>

        <p className="uppercase tracking-[8px] text-white/60 mt-5">
          Elite Fitness
        </p>

      </div>

    </div>
  );
}

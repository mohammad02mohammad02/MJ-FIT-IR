"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const scroll = () => {
      const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress =
        (window.scrollY / total) * 100;

      setWidth(progress);
    };

    window.addEventListener("scroll", scroll);

    return () =>
      window.removeEventListener("scroll", scroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[4px] bg-[#D4AF37] z-[999]"
      style={{ width: `${width}%` }}
    />
  );
}

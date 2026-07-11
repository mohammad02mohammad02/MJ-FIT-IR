"use client";

import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [position, setPosition] = useState({
    x: -200,
    y: -200,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-0 w-[350px] h-[350px] rounded-full blur-[140px]"
      style={{
        left: position.x - 175,
        top: position.y - 175,
        background: "rgba(212,175,55,.12)",
        transition: "all .15s linear",
      }}
    />
  );
}

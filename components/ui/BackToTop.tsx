"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 500);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="
        fixed
        bottom-6
        right-6
        z-50
        h-14
        w-14
        rounded-full
        bg-cyan-400
        text-black
        text-2xl
        font-bold
        shadow-lg
        transition-all
        duration-300
        hover:scale-110
        hover:bg-cyan-300
      "
    >
      ↑
    </button>
  );
}
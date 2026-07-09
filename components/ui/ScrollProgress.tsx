"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (totalHeight <= 0) {
        setProgress(0);
        return;
      }

      const percentage = (scrollTop / totalHeight) * 100;
      setProgress(percentage);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-[9999] h-1 bg-cyan-400 transition-all duration-150"
      style={{
        width: `${progress}%`,
      }}
    />
  );
}
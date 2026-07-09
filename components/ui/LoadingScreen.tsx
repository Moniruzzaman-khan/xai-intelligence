"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[99999]
        flex
        items-center
        justify-center
        bg-[#050816]
      "
    >
      <div className="text-center">

        <div
          className="
            mx-auto
            h-24
            w-24
            rounded-full
            border-4
            border-cyan-400
            border-t-transparent
            animate-spin
          "
        />

        <h1 className="mt-8 text-5xl font-bold tracking-widest text-cyan-400">
          XAI
        </h1>

        <p className="mt-3 text-slate-400">
          Initializing Intelligence...
        </p>

      </div>
    </div>
  );
}
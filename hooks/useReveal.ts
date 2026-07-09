"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function useReveal() {
  useEffect(() => {
    gsap.from(".reveal", {
      opacity: 0,
      y: 80,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);
}
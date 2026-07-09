"use client";

import { motion } from "framer-motion";

export default function Aurora() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-[8] overflow-hidden">

      <motion.div
        animate={{
          x: [0, 200, -100, 0],
          y: [0, -100, 100, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[10%] top-[10%] h-[500px] w-[500px] rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,.22), transparent 70%)",
        }}
      />

      <motion.div
        animate={{
          x: [0, -150, 100, 0],
          y: [0, 150, -80, 0],
          scale: [1, .8, 1.1, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[8%] bottom-[5%] h-[600px] w-[600px] rounded-full blur-[160px]"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,.18), transparent 70%)",
        }}
      />

      <motion.div
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -120, 80, 0],
          scale: [1, 1.15, .95, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,.18), transparent 70%)",
        }}
      />

    </div>
  );
}
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import TiltCard from "./TiltCard";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <TiltCard>
        <motion.div
        whileHover={{
            y: -8,
            scale: 1.02,
        }}
        transition={{
            duration: 0.3,
        }}
        className={`
            group
            relative
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            shadow-[0_8px_32px_rgba(0,0,0,.35)]
            ${className}
        `}
        >
        {/* Top Glow */}
        <div
            className="
            absolute
            inset-x-0
            top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-cyan-400
            to-transparent
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-100
            "
        />

        {/* Hover Glow */}
        <div
            className="
            absolute
            inset-0
            bg-gradient-to-br
            from-cyan-500/10
            via-transparent
            to-blue-500/10
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
            "
        />

        <div className="relative z-10">
            {children}
        </div>
        </motion.div>
    </TiltCard>
    
  );
}
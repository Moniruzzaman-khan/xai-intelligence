"use client";

import { motion } from "framer-motion";
import HeroScene from "../three/HeroScene";
import Counter from "@/components/ui/Counter";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-8 lg:grid-cols-2">

        {/* Left Side */}
        <div>

          {/* Floating Badge */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: [0, -6, 0],
            }}
            transition={{
              opacity: { duration: 0.5 },
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300 backdrop-blur-md"
          >
            ✨ AI Powered Intelligence Platform
          </motion.span>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-8 font-bold leading-tight text-4xl sm:text-5xl lg:text-7xl"
          >
            Transform
            <br />

            <span className="animated-gradient-text">
              Raw Data
            </span>

            <br />

            Into Intelligence
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 max-w-xl text-base leading-8 text-slate-400 sm:text-lg"
          >
            XAI helps businesses convert complex raw data into meaningful
            insights through intelligent automation, real-time analytics,
            and beautiful visual experiences.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-col gap-5 sm:flex-row"
          >
            <button
              className="
              rounded-full
              bg-cyan-500
              px-8
              py-4
              font-semibold
              text-white
              transition-all
              duration-300
              hover:scale-105
              hover:bg-cyan-400
              hover:text-black
              active:scale-95
              shadow-[0_0_35px_rgba(34,211,238,.35)]
              hover:shadow-[0_0_60px_rgba(34,211,238,.7)]
              "
            >
              Get Started
            </button>

            <button
              className="
              rounded-full
              border
              border-slate-700
              px-8
              py-4
              transition-all
              duration-300
              hover:border-cyan-400
              hover:bg-slate-900
              "
            >
              Watch Demo
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-14 flex flex-wrap gap-10"
          >
            <div>
              <h3 className="text-3xl font-bold text-cyan-400">
                <Counter end={500} suffix="+" />
              </h3>

              <p className="text-sm text-slate-500">
                Companies
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">
                <Counter end={10} suffix="M+" />
              </h3>

              <p className="text-sm text-slate-500">
                Data Processed
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">
                <Counter end={99} suffix="%" />
              </h3>

              <p className="text-sm text-slate-500">
                Accuracy
              </p>
            </div>
          </motion.div>

          {/* Trusted Companies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-16"
          >
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-slate-500">
              Trusted by innovative companies
            </p>

            <div className="flex flex-wrap items-center gap-8 text-xl font-semibold text-slate-600 sm:text-2xl">

              <span className="transition hover:text-cyan-400">
                OpenAI
              </span>

              <span className="transition hover:text-cyan-400">
                Microsoft
              </span>

              <span className="transition hover:text-cyan-400">
                NVIDIA
              </span>

              <span className="transition hover:text-cyan-400">
                Google
              </span>

            </div>
          </motion.div>

        </div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="relative flex items-center justify-center"
        >

          {/* Glow Orbs */}
          <div
            className="absolute h-[450px] w-[450px] rounded-full blur-[120px]"
            style={{
              background:
                "radial-gradient(circle, rgba(34,211,238,.18), transparent 70%)",
            }}
          />

          <div
            className="absolute h-[320px] w-[320px] rounded-full blur-[90px]"
            style={{
              background:
                "radial-gradient(circle, rgba(59,130,246,.18), transparent 70%)",
            }}
          />

          <HeroScene />

        </motion.div>

      </div>
    </section>
  );
}
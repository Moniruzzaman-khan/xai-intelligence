"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="mx-auto max-w-6xl px-8">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="relative overflow-hidden rounded-[36px] border border-cyan-500/20 bg-white/5 p-12 text-center backdrop-blur-xl"
        >

          {/* Animated Border */}
          <div className="absolute inset-0 rounded-[36px] bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-violet-500/20 opacity-40 blur-2xl" />

          <div className="relative z-10">

            {/* Badge */}

            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="mb-8 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300 backdrop-blur-md"
            >
              🚀 Start Your AI Journey
            </motion.div>

            <h2 className="text-4xl font-bold leading-tight sm:text-6xl">
              Ready to Transform
              <br />

              <span className="animated-gradient-text">
                Your Business?
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
              Join thousands of organizations using AI to automate
              workflows, reduce costs, improve productivity and unlock
              valuable business insights.
            </p>

            {/* Buttons */}

            <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:justify-center">

              <button
                className="
                rounded-full
                bg-cyan-400
                px-9
                py-4
                font-semibold
                text-black
                transition-all
                duration-300
                hover:scale-105
                hover:bg-cyan-300
                shadow-[0_0_40px_rgba(34,211,238,.45)]
                hover:shadow-[0_0_70px_rgba(34,211,238,.8)]
                "
              >
                Start Free Trial
              </button>

              <button
                className="
                rounded-full
                border
                border-slate-700
                bg-white/5
                px-9
                py-4
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-cyan-400
                hover:bg-slate-900
                hover:scale-105
                "
              >
                Contact Sales
              </button>

            </div>

            {/* Stats */}

            <div className="mt-16 grid grid-cols-1 gap-8 text-center sm:grid-cols-3">

              <div>
                <h3 className="text-4xl font-bold text-cyan-400">
                  500+
                </h3>

                <p className="mt-2 text-slate-500">
                  Enterprise Clients
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-cyan-400">
                  99.9%
                </h3>

                <p className="mt-2 text-slate-500">
                  AI Accuracy
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-cyan-400">
                  24/7
                </h3>

                <p className="mt-2 text-slate-500">
                  Expert Support
                </p>
              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}
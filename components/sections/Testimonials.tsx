"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-8">

        <div className="text-center">
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            Trusted Worldwide
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Loved by Modern Teams
          </h2>

          <p className="mt-6 text-slate-400">
            Companies rely on XAI to transform business data into actionable intelligence.
          </p>
        </div>

        <div className="mt-20 grid gap-8 grid-cols-1 md:grid-cols-3">

          {/* Card 1 */}

          <motion.div
            whileHover={{ y: -10 }}
            className="rounded-3xl border border-slate-800 bg-[#0B1220]/70 p-8"
          >
            <div className="mb-6 flex">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="leading-8 text-slate-300">
              XAI helped our team reduce reporting time by more than 70%.
            </p>

            <div className="mt-8 flex items-center gap-4">

              <div className="h-14 w-14 rounded-full bg-cyan-500"></div>

              <div>
                <h4 className="font-semibold">
                  Sarah Johnson
                </h4>

                <p className="text-sm text-slate-500">
                  Product Manager
                </p>
              </div>

            </div>

          </motion.div>

          {/* Card 2 */}

          <motion.div
            whileHover={{ y: -10 }}
            className="rounded-3xl border border-slate-800 bg-[#0B1220]/70 p-8"
          >
            <div className="mb-6 flex">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="leading-8 text-slate-300">
              The AI dashboard gives us instant insights that were impossible before.
            </p>

            <div className="mt-8 flex items-center gap-4">

              <div className="h-14 w-14 rounded-full bg-blue-500"></div>

              <div>
                <h4 className="font-semibold">
                  David Chen
                </h4>

                <p className="text-sm text-slate-500">
                  CTO
                </p>
              </div>

            </div>

          </motion.div>

          {/* Card 3 */}

          <motion.div
            whileHover={{ y: -10 }}
            className="rounded-3xl border border-slate-800 bg-[#0B1220]/70 p-8"
          >
            <div className="mb-6 flex">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="leading-8 text-slate-300">
              Beautiful UI, powerful analytics and incredible performance.
            </p>

            <div className="mt-8 flex items-center gap-4">

              <div className="h-14 w-14 rounded-full bg-violet-500"></div>

              <div>
                <h4 className="font-semibold">
                  Michael Brown
                </h4>

                <p className="text-sm text-slate-500">
                  CEO
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
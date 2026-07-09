"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="relative py-32 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-5xl px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-slate-800 bg-white/5 p-10 backdrop-blur-xl shadow-[0_0_40px_rgba(34,211,238,.08)]"
        >

          <div className="text-center">

            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10">

              <Mail
                size={38}
                className="text-cyan-400"
              />

            </div>

            <h2 className="text-4xl font-bold lg:text-5xl">
              Stay Updated
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
              Subscribe to receive AI news, product updates,
              feature releases and exclusive content directly
              in your inbox.
            </p>

          </div>

          {/* Subscribe Form */}

          <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-5 sm:flex-row">

            <input
              type="email"
              placeholder="Enter your email address"
              className="
                flex-1
                rounded-full
                border
                border-slate-700
                bg-slate-900/40
                px-6
                py-4
                text-white
                outline-none
                transition-all
                duration-300
                placeholder:text-slate-500
                focus:border-cyan-400
                focus:ring-2
                focus:ring-cyan-400/30
              "
            />

            <button
              className="
                rounded-full
                bg-cyan-400
                px-10
                py-4
                font-semibold
                text-black
                transition-all
                duration-300
                hover:scale-105
                hover:bg-cyan-300
                hover:shadow-[0_0_30px_rgba(34,211,238,.6)]
                active:scale-95
              "
            >
              Subscribe
            </button>

          </div>

          {/* Bottom Text */}

          <p className="mt-8 text-center text-sm text-slate-500">
            No spam. Unsubscribe anytime. We respect your privacy.
          </p>

        </motion.div>

      </div>

    </section>
  );
}
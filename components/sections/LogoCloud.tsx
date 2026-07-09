"use client";

import { motion } from "framer-motion";

const companies = [
  "OpenAI",
  "Microsoft",
  "Google",
  "NVIDIA",
  "Amazon",
  "Meta",
  "Stripe",
  "Vercel",
];

export default function LogoCloud() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-slate-500 uppercase tracking-[0.3em] text-sm">
            Trusted By Innovative Companies
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-8">

          {companies.map((company) => (
            <motion.div
              key={company}
              whileHover={{
                scale: 1.05,
                y: -5,
              }}
              className="
                rounded-2xl
                border
                border-slate-800
                bg-white/5
                backdrop-blur-xl
                py-6
                text-center
                font-semibold
                text-slate-300
                transition-all
                duration-300
                hover:border-cyan-400
                hover:text-cyan-400
                hover:shadow-[0_0_30px_rgba(34,211,238,.2)]
              "
            >
              {company}
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
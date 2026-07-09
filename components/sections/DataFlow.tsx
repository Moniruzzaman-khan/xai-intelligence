"use client";

import { motion } from "framer-motion";
import { Database, Cpu, Sparkles } from "lucide-react";

export default function DataFlow() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            Intelligence Pipeline
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            From Raw Data
            <br />
            To Business Intelligence
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            Every piece of information passes through an intelligent AI
            pipeline before becoming valuable business insight.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-24 grid gap-8 lg:grid-cols-3">

          {/* Card 1 */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group rounded-3xl border border-slate-800 bg-[#0B1220]/70 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/40"
          >
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10">
              <Database className="text-cyan-400" size={34} />
            </div>

            <h3 className="text-2xl font-semibold">
              Ingest Data
            </h3>

            <p className="mt-5 leading-8 text-slate-400">
              Collect structured and unstructured data from databases,
              APIs and business applications.
            </p>
          </motion.div>

          {/* Card 2 */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group rounded-3xl border border-slate-800 bg-[#0B1220]/70 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/40"
          >
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10">
              <Cpu className="text-cyan-400" size={34} />
            </div>

            <h3 className="text-2xl font-semibold">
              Analyze with AI
            </h3>

            <p className="mt-5 leading-8 text-slate-400">
              Machine learning models analyze, classify and understand
              your business data automatically.
            </p>
          </motion.div>

          {/* Card 3 */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="group rounded-3xl border border-slate-800 bg-[#0B1220]/70 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/40"
          >
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10">
              <Sparkles className="text-cyan-400" size={34} />
            </div>

            <h3 className="text-2xl font-semibold">
              Generate Insight
            </h3>

            <p className="mt-5 leading-8 text-slate-400">
              Deliver intelligent recommendations, predictions and
              actionable insights for faster decision making.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
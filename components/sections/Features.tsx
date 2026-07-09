"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Zap,
  Workflow,
  ShieldCheck,
} from "lucide-react";
import GlassCard from "../ui/GlassCard";

export default function Features() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-8">

        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold">
            Powerful Features
          </h2>

          <p className="mt-6 text-slate-400">
            Everything you need to build modern AI applications.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">

          {/* Card 1 */}

          <GlassCard className="p-8">

            <BrainCircuit className="mb-6 text-cyan-400" size={40} />

            <h3 className="text-2xl font-semibold">
              AI Intelligence
            </h3>

            <p className="mt-4 text-slate-400">
              Powerful AI models analyze data with speed and accuracy.
            </p>
          </GlassCard>

          {/* Card 2 */}

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-slate-800 bg-[#0B1220]/70 p-8"
          >
            <Zap className="mb-6 text-cyan-400" size={40} />

            <h3 className="text-2xl font-semibold">
              Real-time Processing
            </h3>

            <p className="mt-4 text-slate-400">
              Process millions of events instantly with low latency.
            </p>
          </motion.div>

          {/* Card 3 */}

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-slate-800 bg-[#0B1220]/70 p-8"
          >
            <Workflow className="mb-6 text-cyan-400" size={40} />

            <h3 className="text-2xl font-semibold">
              Workflow Automation
            </h3>

            <p className="mt-4 text-slate-400">
              Automate repetitive tasks and increase productivity.
            </p>
          </motion.div>

          {/* Card 4 */}

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-slate-800 bg-[#0B1220]/70 p-8"
          >
            <ShieldCheck className="mb-6 text-cyan-400" size={40} />

            <h3 className="text-2xl font-semibold">
              Enterprise Security
            </h3>

            <p className="mt-4 text-slate-400">
              Secure infrastructure with enterprise-grade protection.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
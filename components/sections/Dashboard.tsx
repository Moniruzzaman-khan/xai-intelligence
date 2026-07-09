"use client";

import { motion } from "framer-motion";
import StatCard from "@/components/ui/StatCard";
import LineChart from "@/components/ui/LineChart";

export default function Dashboard() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            Intelligence Dashboard
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Monitor Every Insight
          </h2>

          <p className="mt-6 text-slate-400">
            Understand your business with real-time AI analytics.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: .95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mt-20 overflow-hidden rounded-3xl border border-slate-800 bg-[#0B1220]/70 backdrop-blur-xl"
        >

          <div className="grid grid-cols-1 lg:grid-cols-12">

            {/* Sidebar */}

            <div className="lg:col-span-3 border-r border-slate-800 p-8">

              <h3 className="mb-10 text-xl font-semibold">
                XAI
              </h3>

              <ul className="space-y-6 text-slate-400">

                <li className="text-cyan-400">
                  Dashboard
                </li>

                <li>Analytics</li>

                <li>Reports</li>

                <li>Automation</li>

                <li>Settings</li>

              </ul>

            </div>

            {/* Content */}

            <div className="lg:col-span-9 p-8">

              <div className="grid gap-6 md:grid-cols-3">

                <StatCard
                  title="Revenue"
                  value="$82K"
                  change="+18%"
                />

                <StatCard
                  title="AI Accuracy"
                  value="99.2%"
                  change="+3.2%"
                />

                <StatCard
                  title="Active Models"
                  value="24"
                  change="+5"
                />

              </div>

              {/* Fake Chart */}

              <div className="mt-10">
                <LineChart />
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
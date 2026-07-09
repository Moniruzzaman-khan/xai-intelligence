"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$19",
    desc: "Perfect for individuals.",
    button: "Get Started",
    popular: false,
    features: [
      "AI Dashboard",
      "Basic Analytics",
      "Email Support",
      "5 Projects",
    ],
  },
  {
    name: "Pro",
    price: "$49",
    desc: "Best for growing teams.",
    button: "Start Pro",
    popular: true,
    features: [
      "Everything in Starter",
      "Unlimited Projects",
      "AI Automation",
      "API Access",
      "Priority Support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "For large organizations.",
    button: "Contact Sales",
    popular: false,
    features: [
      "Unlimited Everything",
      "Dedicated AI",
      "White Label",
      "SSO",
      "Dedicated Manager",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold">
            Choose Your Plan
          </h2>

          <p className="mt-5 text-slate-400">
            Flexible pricing for every business size.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {plans.map((plan, index) => (

            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * .15 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className={`relative rounded-3xl border p-8 backdrop-blur-xl transition-all duration-300
              ${
                plan.popular
                  ? "border-cyan-400 bg-cyan-500/10"
                  : "border-slate-800 bg-white/5"
              }`}
            >

              {plan.popular && (
                <span className="absolute right-6 top-6 rounded-full bg-cyan-400 px-3 py-1 text-xs font-bold text-black">
                  MOST POPULAR
                </span>
              )}

              <h3 className="text-3xl font-bold">
                {plan.name}
              </h3>

              <p className="mt-4 text-slate-400">
                {plan.desc}
              </p>

              <div className="mt-8">
                <span className="text-5xl font-bold">
                  {plan.price}
                </span>

                {plan.price !== "Custom" && (
                  <span className="text-slate-400">
                    /month
                  </span>
                )}
              </div>

              <div className="mt-10 space-y-4">

                {plan.features.map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <Check
                      size={18}
                      className="text-cyan-400"
                    />

                    <span>{item}</span>

                  </div>

                ))}

              </div>

              <button
                className={`mt-10 w-full rounded-full py-4 font-semibold transition-all duration-300
                ${
                  plan.popular
                    ? "bg-cyan-400 text-black hover:bg-cyan-300 hover:scale-105"
                    : "border border-slate-700 hover:border-cyan-400 hover:bg-slate-900"
                }`}
              >
                {plan.button}
              </button>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}
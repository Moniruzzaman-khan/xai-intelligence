"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is XAI?",
    answer:
      "XAI transforms raw business data into meaningful AI insights.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes, you can cancel or change your subscription whenever you like.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. We use enterprise-grade encryption and security.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-32">
      <div className="mx-auto max-w-5xl px-8">

        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="rounded-2xl border border-slate-800 bg-white/5"
            >

              <button
                onClick={() => setOpen(open === index ? -1 : index)}
                className="flex w-full items-center justify-between p-6"
              >
                <span className="font-semibold">
                  {faq.question}
                </span>

                {open === index ? (
                  <Minus className="text-cyan-400" />
                ) : (
                  <Plus className="text-cyan-400" />
                )}
              </button>

              {open === index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="border-t border-slate-800 p-6 text-slate-400"
                >
                  {faq.answer}
                </motion.div>
              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
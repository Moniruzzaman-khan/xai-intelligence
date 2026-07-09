"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

export default function Contact() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            Contact Us
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Let's Build Something Amazing
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            We'd love to hear about your AI project. Send us a message and we'll get back to you shortly.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            <div className="rounded-3xl border border-slate-800 bg-white/5 p-6 backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <Mail className="text-cyan-400" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-slate-400">
                    hello@xai.com
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-white/5 p-6 backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <Phone className="text-cyan-400" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-slate-400">
                    +880 1234 567890
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-white/5 p-6 backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <MapPin className="text-cyan-400" />
                <div>
                  <h3 className="font-semibold">Office</h3>
                  <p className="text-slate-400">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-800 bg-white/5 p-8 backdrop-blur-xl"
          >

            <div className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-slate-700 bg-slate-900/40 p-4 outline-none focus:border-cyan-400"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-xl border border-slate-700 bg-slate-900/40 p-4 outline-none focus:border-cyan-400"
              />

              <textarea
                rows={6}
                placeholder="Tell us about your project..."
                className="w-full rounded-xl border border-slate-700 bg-slate-900/40 p-4 outline-none focus:border-cyan-400"
              />

              <button
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-cyan-400
                  px-8
                  py-4
                  font-semibold
                  text-black
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-cyan-300
                "
              >
                <Send size={18} />
                Send Message
              </button>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
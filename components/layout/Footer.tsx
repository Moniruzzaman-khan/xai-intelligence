"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Mail,
  Phone,
  ArrowUpRight,
} from "lucide-react";

const company = [
  "About",
  "Careers",
  "Blog",
  "Press",
];

const product = [
  "Dashboard",
  "Pricing",
  "API",
  "Documentation",
];

const resources = [
  "Help Center",
  "Privacy Policy",
  "Terms of Service",
  "Contact",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-800 py-20">

      {/* Background Glow */}

      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-8">

        <div className="grid gap-12 lg:grid-cols-5">

          {/* Brand */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h2 className="text-4xl font-bold text-cyan-400">
              XAI
            </h2>

            <p className="mt-6 max-w-md leading-8 text-slate-400">
              Building next-generation AI intelligence platforms
              that transform business data into meaningful
              insights through automation and analytics.
            </p>

            <div className="mt-8 flex gap-4">

              <a
                href="#"
                className="rounded-full border border-slate-700 p-3 transition-all duration-300 hover:scale-110 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-400"
              >
                <Globe size={20} />
              </a>

              <a
                href="mailto:hello@xai.com"
                className="rounded-full border border-slate-700 p-3 transition-all duration-300 hover:scale-110 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-400"
              >
                <Mail size={20} />
              </a>

              <a
                href="tel:+880123456789"
                className="rounded-full border border-slate-700 p-3 transition-all duration-300 hover:scale-110 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-400"
              >
                <Phone size={20} />
              </a>

            </div>

          </motion.div>

          {/* Company */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: .1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold">
              Company
            </h3>

            <ul className="mt-6 space-y-4">

              {company.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-slate-400 transition hover:text-cyan-400"
                  >
                    {item}
                    <ArrowUpRight size={14} />
                  </a>
                </li>
              ))}

            </ul>
          </motion.div>

          {/* Product */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: .2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold">
              Product
            </h3>

            <ul className="mt-6 space-y-4">

              {product.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-slate-400 transition hover:text-cyan-400"
                  >
                    {item}
                    <ArrowUpRight size={14} />
                  </a>
                </li>
              ))}

            </ul>
          </motion.div>

          {/* Resources */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: .3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold">
              Resources
            </h3>

            <ul className="mt-6 space-y-4">

              {resources.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-slate-400 transition hover:text-cyan-400"
                  >
                    {item}
                    <ArrowUpRight size={14} />
                  </a>
                </li>
              ))}

            </ul>
          </motion.div>

        </div>

        {/* Bottom */}

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-slate-800 pt-8 text-sm text-slate-500 md:flex-row">

          <p>
            © 2026 XAI Intelligence. All rights reserved.
          </p>

          <div className="flex gap-6">

            <a href="#" className="hover:text-cyan-400">
              Privacy
            </a>

            <a href="#" className="hover:text-cyan-400">
              Terms
            </a>

            <a href="#" className="hover:text-cyan-400">
              Cookies
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}
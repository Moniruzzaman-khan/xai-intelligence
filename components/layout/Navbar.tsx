"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 z-50 w-full backdrop-blur-md"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        <h1 className="text-xl font-bold tracking-wider">
          XAI
        </h1>

        <div className="hidden gap-10 text-sm md:flex">
          <a href="#">Features</a>
          <a href="#">Solutions</a>
          <a href="#">Resources</a>
          <a href="#">Pricing</a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      {open && (
        <div className="absolute left-0 top-full w-full border-t border-slate-800 bg-[#050816] md:hidden">
          <nav className="flex flex-col p-6">
            <a href="#" className="py-3">Home</a>
            <a href="#" className="py-3">Features</a>
            <a href="#" className="py-3">Dashboard</a>
            <a href="#" className="py-3">Contact</a>
          </nav>
        </div>
      )}

      </div>
    </motion.nav>
  );
}
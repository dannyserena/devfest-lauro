"use client"

import { motion, type Variants } from "framer-motion"

const stats = [
  { k: "Data", v: "07 Nov 2026", sub: "Sábado • 08h–18h" },
  { k: "Local", v: "SENAI Lauro", sub: "Bahia • RMS" },
  { k: "Builders", v: "200+", sub: "Devs, PMs, Founders" },
  { k: "Tema", v: "Agentic Era", sub: "Build • Secure • Scale" },
]

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.5 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export function StatsGrid() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3"
    >
      {stats.map((s) => (
        <motion.div
          key={s.k}
          variants={item}
          className="rm-static rounded-2xl bg-white/70 border border-white/20 shadow-xl backdrop-blur-md px-5 py-4 md:px-6 md:py-5"
        >
          <div className="font-mono text-[10px] tracking-[0.14em] text-foreground/40">
            {s.k.toUpperCase()}
          </div>
          <div className="mt-1 font-bold text-[16px] md:text-[18px] tracking-[-0.02em]">
            {s.v}
          </div>
          <div className="text-[12px] text-foreground/45 mt-0.5">{s.sub}</div>
        </motion.div>
      ))}
    </motion.div>
  )
}

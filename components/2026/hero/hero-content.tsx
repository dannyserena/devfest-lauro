"use client"

import { ArrowUpRight } from "lucide-react"
import { motion, type Variants } from "framer-motion"
import { INSCRICAO_URL } from "@/content/2026/links"

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const words = [
  { text: "Build.", className: "text-foreground" },
  { text: "Secure.", className: "text-foreground [text-shadow:0_0_18px_rgba(74,163,255,0.35)]" },
  { text: "Scale.", className: "bg-[image:var(--brand-gradient)] bg-clip-text text-transparent" },
]

export function HeroContent() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="max-w-[1080px]">
      <motion.div
        variants={item}
        className="rm-static inline-flex items-center gap-3 pl-1 pr-4 py-1 rounded-full bg-foreground/[0.06] border border-foreground/10 backdrop-blur-md"
      >
        <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-foreground text-background text-[11px] font-bold tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-trilha-community animate-pulse motion-reduce:animate-none" />
          CONFIRMADO
        </span>
        <span className="font-mono text-[11px] tracking-[0.08em] text-foreground/70">
          07 NOV 2026 • SENAI LAURO DE FREITAS • 200+ BUILDERS
        </span>
      </motion.div>

      <h1 className="mt-8 text-[14vw] md:text-[102px] leading-[0.85] font-[900] tracking-[-0.06em]">
        {words.map((w) => (
          <motion.span key={w.text} variants={item} className={`rm-static block ${w.className}`}>
            {w.text}
          </motion.span>
        ))}
      </h1>

      <div className="mt-8 flex flex-col lg:flex-row lg:items-end gap-8">
        <motion.p
          variants={item}
          className="rm-static text-[20px] md:text-[26px] leading-[1.15] tracking-[-0.02em] font-medium text-foreground/90 max-w-[520px]"
        >
          Developers and Builders in the{" "}
          <span className="text-foreground/50">Agentic Era.</span>
          <span className="text-[15px] font-normal text-foreground/50 mt-3 block leading-[1.5]">
            O maior encontro hands-on da RMS. De prompts a produção, com quem
            está construindo o futuro com IA, Cloud e Mobile.
          </span>
        </motion.p>

        <motion.div variants={item} className="rm-static flex flex-wrap gap-3">
          <a
            href={INSCRICAO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 h-[48px] px-6 rounded-full bg-trilha-build text-black font-bold text-[15px] hover:brightness-110 transition"
          >
            Garantir ingresso 1º lote
            <span className="w-6 h-6 rounded-full bg-black text-trilha-build grid place-items-center transition-transform group-hover:translate-x-0.5">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>
          <a
            href="#patrocinadores"
            className="inline-flex items-center h-[48px] px-6 rounded-full bg-white/70 border border-white/20 text-foreground font-medium text-[15px] shadow-xl backdrop-blur-md transition hover:bg-white/90"
          >
            Ser patrocinador
          </a>
        </motion.div>
      </div>
    </motion.div>
  )
}

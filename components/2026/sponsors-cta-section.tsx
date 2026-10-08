"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { MEDIA_KIT_URL } from "@/content/2026/links"
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/components/2026/motion"

// Logos sempre sobre fundo claro (#f7f7f7 = fundo do JPG do SENAI), inclusive
// no dark mode — as versões coloridas não têm variante pra fundo escuro.
const apoiadores = [
  { name: "SENAI", logo: "/sponsors/2026/senai.jpg", width: 436, height: 110 },
  { name: "Casa do Código", logo: "/sponsors/2026/casa-do-codigo.svg", width: 330, height: 96 },
]

export function SponsorsCtaSection() {
  return (
    <section id="patrocinadores" className="mx-auto max-w-[1280px] px-6 py-20">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={staggerContainer(0.1)}
        className="mb-10"
      >
        <motion.div
          variants={staggerItem}
          className="font-mono text-[11px] tracking-[0.16em] text-foreground/40 mb-4"
        >
          APOIO
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 max-w-[720px]">
          {apoiadores.map((a) => (
            <motion.div
              key={a.name}
              variants={staggerItem}
              className="rounded-2xl bg-[#f7f7f7] border border-foreground/10 h-[120px] md:h-[140px] grid place-items-center px-8"
            >
              <Image
                src={a.logo}
                alt={a.name}
                width={a.width}
                height={a.height}
                className="h-auto max-h-[64px] md:max-h-[72px] w-auto max-w-full"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={fadeUp}
        className="rounded-[28px] bg-trilha-build p-[1px]"
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
          className="rounded-[27px] bg-trilha-build text-black p-8 md:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8"
        >
          <div>
            <motion.div
              variants={staggerItem}
              className="font-mono text-[11px] tracking-[0.16em] text-black/60 font-bold"
            >
              PATROCINADORES • COTAS ABERTAS
            </motion.div>
            <motion.h3
              variants={staggerItem}
              className="mt-3 text-[28px] md:text-[36px] font-black leading-[0.95] tracking-[-0.03em] max-w-[520px]"
            >
              Conecte sua marca a quem está construindo o futuro da Bahia.
            </motion.h3>
            <motion.p
              variants={staggerItem}
              className="mt-3 text-[14px] leading-[1.5] text-black/60 max-w-[460px]"
            >
              200+ builders qualificados, alta visibilidade, geração de leads
              real e associação a Google Developers Group.
            </motion.p>
          </div>
          <motion.div variants={staggerItem} className="flex flex-col gap-3 shrink-0">
            <a
              href={MEDIA_KIT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-7 rounded-full bg-black text-trilha-build font-bold text-[14px] inline-flex items-center justify-center hover:brightness-125 transition"
            >
              Baixar media kit
            </a>
            <span className="font-mono text-[11px] text-black/50 text-center">
              3 cotas Diamond • 6 Gold • 8 Community
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

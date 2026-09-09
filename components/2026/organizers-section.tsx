"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem, viewportOnce } from "@/components/2026/motion"

const organizers = [
  {
    name: "GDG Lauro de Freitas",
    desc: "Google Developer Group — comunidade que organiza o evento.",
    src: "/images/gdg-logo.png",
    href: "https://gdg.community.dev/gdg-lauro-de-freitas/",
  },
  {
    name: "Women Techmakers Lauro de Freitas",
    desc: "Iniciativa do Technovation por representatividade de mulheres em tech.",
    src: "/images/wtm-logo.png",
    href: "https://www.womentechmakers.com/",
  },
]

export function OrganizersSection() {
  return (
    <section className="border-t border-foreground/[0.06]">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={staggerContainer(0.12)}
        className="mx-auto max-w-[1280px] px-6 py-16 md:py-20"
      >
        <motion.div
          variants={staggerItem}
          className="font-mono text-[11px] tracking-[0.16em] text-foreground/40 mb-8 text-center md:text-left"
        >
          REALIZAÇÃO
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-4">
          {organizers.map((o) => (
            <motion.a
              key={o.name}
              href={o.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={staggerItem}
              className="flex flex-col items-center gap-4 rounded-2xl bg-card border border-foreground/10 p-8 text-center hover:border-foreground/20 transition"
            >
              <div className="flex items-center justify-center rounded-lg bg-white px-4 py-3">
                <img
                  src={o.src}
                  alt={o.name}
                  className="h-12 w-auto max-w-[220px] object-contain"
                />
              </div>
              <div>
                <div className="font-semibold text-[15px] text-foreground">
                  {o.name}
                </div>
                <div className="mt-1 max-w-[280px] text-[13px] text-foreground/50">
                  {o.desc}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

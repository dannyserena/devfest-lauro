"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { fadeUp, viewportOnce } from "@/components/2026/motion"
import { DevFestLogo } from "@/components/2026/devfest-logo"

export function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-background">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={fadeUp}
        className="mx-auto max-w-[1280px] px-6 py-12 md:py-16"
      >
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div>
            <div className="flex items-center gap-2.5">
              <DevFestLogo className="h-6 w-auto shrink-0 text-foreground" />
              <span className="font-black tracking-[-0.02em]">
                Lauro de Freitas
              </span>
            </div>
            <div className="mt-3 text-[13px] leading-[1.5] text-foreground/45 max-w-[320px]">
              Uma iniciativa GDG Lauro de Freitas. Organizado pela comunidade,
              para a comunidade. Não afiliado ao Google LLC.
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-[13px]">
            <div>
              <div className="font-mono text-[11px] tracking-[0.14em] text-foreground/30 mb-3">
                NAVEGAÇÃO
              </div>
              <div className="space-y-2 text-foreground/60">
                <a href="#trilhas" className="block hover:text-foreground">
                  Trilhas
                </a>
                <a href="#local" className="block hover:text-foreground">
                  Local
                </a>
                <a
                  href="#patrocinadores"
                  className="block hover:text-foreground"
                >
                  Patrocinadores
                </a>
                <Link href="/2025" className="block hover:text-foreground">
                  Edição 2025
                </Link>
              </div>
            </div>
            <div>
              <div className="font-mono text-[11px] tracking-[0.14em] text-foreground/30 mb-3">
                CONTATO
              </div>
              <div className="space-y-2 text-foreground/60">
                <a
                  href="mailto:gdglaurodefreitas@gmail.com"
                  className="block hover:text-foreground"
                >
                  gdglaurodefreitas@gmail.com
                </a>
                <a href="#" className="block hover:text-foreground">
                  Seja voluntário
                </a>
                <a href="#" className="block hover:text-foreground">
                  Código de conduta
                </a>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1 flex items-center justify-center md:justify-end">
              <img
                src="/images/2026/android-mascot.png"
                alt="Mascote Android do DevFest Lauro de Freitas"
                className="h-32 w-auto object-contain md:h-40"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-foreground/10 flex flex-col md:flex-row justify-between gap-3 font-mono text-[11px] tracking-[0.08em] text-foreground/25">
          <span>
            © 2026 GDG Lauro de Freitas • Feito com ♥ e muito café na RMS
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-[2px] bg-trilha-scale inline-block" />
            <span className="w-3 h-[2px] bg-trilha-secure inline-block" />
            <span className="w-3 h-[2px] bg-trilha-build inline-block" />
            <span className="w-3 h-[2px] bg-trilha-community inline-block" />
            BUILD SECURE SCALE
          </span>
        </div>
      </motion.div>
    </footer>
  )
}

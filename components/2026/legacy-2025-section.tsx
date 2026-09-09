"use client"

import { useState } from "react"
import { ArrowUpRight, Play, Quote } from "lucide-react"
import { motion } from "framer-motion"
import { stats2025 } from "@/content/2026/stats"
import { INSCRICAO_URL } from "@/content/2026/links"
import { fadeIn, fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/components/2026/motion"

const RECAP_2025_VIDEO_ID = "Wr0RiuX9dLY"
const RECAP_2025_INSTAGRAM_URL =
  "https://www.instagram.com/p/DR52YGNAJbJ/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA=="

export function Legacy2025Section() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <section className="mx-auto max-w-[1280px] px-6 py-20 md:py-28">
      {/* Força o tema escuro do 2026 (independente do toggle da página)
          pra essa seção se destacar como um "spotlight" de prova social,
          reaproveitando os mesmos tokens (bg-background, brand-gradient
          etc.) já calibrados pro escuro em vez de cor solta. */}
      <div className="theme-2026-dark">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeIn}
          className="theme-2026 relative rounded-[28px] overflow-hidden bg-background text-foreground border border-foreground/10 p-[1px] shadow-[0_0_120px_-40px_var(--color-trilha-community)]"
        >
          <div className="pointer-events-none absolute -top-24 -right-16 w-72 h-72 rounded-full bg-trilha-community/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 w-72 h-72 rounded-full bg-trilha-build/10 blur-[100px]" />

          <div className="relative rounded-[27px] bg-gradient-to-b from-foreground/[0.04] to-transparent overflow-hidden">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                variants={staggerContainer(0.1)}
                className="relative p-8 md:p-12"
              >
                <motion.div
                  variants={staggerItem}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-trilha-community/15 to-trilha-build/10 border border-trilha-community/30 text-[var(--trilha-community-on-surface)] font-mono text-[11px] tracking-wide shadow-[0_0_16px_-4px_var(--color-trilha-community)]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-trilha-community animate-pulse" />{" "}
                  RECAP DA EDIÇÃO • 2025
                </motion.div>

                <motion.h2
                  variants={fadeUp}
                  className="mt-6 text-[32px] md:text-[44px] font-bold leading-[0.95] tracking-[-0.04em]"
                >
                  A energia de quem viveu{" "}
                  <span className="bg-[image:var(--brand-gradient)] bg-clip-text text-transparent">
                    o DevFest 2025.
                  </span>
                </motion.h2>
                <motion.p
                  variants={staggerItem}
                  className="mt-4 text-[15px] leading-[1.6] text-foreground/55 max-w-[480px]"
                >
                  Ingressos esgotados em poucas semanas, auditórios lotados e
                  a prova de que a Bahia é um polo de tecnologia de classe
                  mundial.
                </motion.p>

                <motion.div
                  variants={staggerItem}
                  className="mt-10 grid grid-cols-2 gap-3"
                >
                  {stats2025.map((s) => {
                    const Icon = s.icon
                    return (
                      <div
                        key={s.l}
                        className="rounded-2xl bg-foreground/[0.03] border border-foreground/10 p-4 transition-colors hover:border-trilha-community/40"
                      >
                        <Icon className="w-4 h-4 text-foreground/35 mb-3" />
                        <div className="text-[22px] font-black tracking-[-0.03em]">
                          {s.n}
                        </div>
                        <div className="font-mono text-[10px] tracking-[0.12em] text-foreground/45 mt-1">
                          {s.l.toUpperCase()}
                        </div>
                      </div>
                    )
                  })}
                </motion.div>

                <motion.div
                  variants={staggerItem}
                  className="mt-8 flex flex-wrap items-center gap-5"
                >
                  <a
                    href={INSCRICAO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-2 h-11 px-5 rounded-full bg-trilha-build text-black font-bold text-[14px] overflow-hidden transition hover:brightness-110"
                  >
                    <span className="relative z-10">
                      Garantir meu lugar em 2026
                    </span>
                    <span className="relative z-10 w-6 h-6 rounded-full bg-black text-trilha-build grid place-items-center transition-transform group-hover:translate-x-0.5">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                    <span className="absolute inset-0 -translate-x-[120%] skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />
                  </a>
                  <a
                    href={RECAP_2025_INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] font-medium text-foreground/50 underline decoration-foreground/20 underline-offset-4 transition hover:text-foreground/80"
                  >
                    Ver fotos da edição 2025
                  </a>
                </motion.div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                variants={{
                  hidden: { opacity: 0, scale: 0.96 },
                  show: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 },
                  },
                }}
                className="relative p-3 lg:p-4"
              >
                <div className="relative h-full min-h-[320px] rounded-[18px] overflow-hidden bg-black border border-foreground/10">
                  {isVideoPlaying ? (
                    <div className="h-full">
                      <iframe
                        src={`https://www.youtube.com/embed/${RECAP_2025_VIDEO_ID}?autoplay=1`}
                        title="DevFest Lauro de Freitas 2025 — vídeo oficial"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setIsVideoPlaying(true)}
                      aria-label="Assistir aftermovie do DevFest 2025"
                      className="group relative block h-full w-full overflow-hidden"
                    >
                      <iframe
                        src={`https://www.youtube.com/embed/${RECAP_2025_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${RECAP_2025_VIDEO_ID}&controls=0&showinfo=0&modestbranding=1&rel=0&disablekb=1&iv_load_policy=3&fs=0&cc_load_policy=0`}
                        title=""
                        tabIndex={-1}
                        aria-hidden="true"
                        allow="autoplay; encrypted-media"
                        className="pointer-events-none absolute top-1/2 left-1/2 h-[180%] w-[180%] -translate-x-1/2 -translate-y-1/2"
                      />

                      <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/55" />

                      <div className="absolute inset-x-4 top-4 flex items-center justify-between">
                        <div className="font-mono text-[11px] text-white/70 tracking-[0.14em] drop-shadow">
                          DEVFEST LAURO • 2025
                        </div>
                        <div className="w-2 h-2 rounded-full bg-trilha-community animate-pulse" />
                      </div>

                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                        <div className="relative">
                          <span className="absolute inset-0 scale-150 rounded-full bg-trilha-community/50 blur-xl transition-transform duration-500 group-hover:scale-[2]" />
                          <div className="relative w-16 h-16 rounded-full bg-white text-black grid place-items-center shadow-2xl transition-transform group-hover:scale-110">
                            <Play className="w-7 h-7 ml-0.5" />
                          </div>
                        </div>
                        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-white drop-shadow">
                          Assistir aftermovie 2025
                        </span>
                      </div>

                      <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                        <div className="flex items-start gap-2 text-left">
                          <Quote className="w-4 h-4 shrink-0 mt-0.5 text-trilha-community" />
                          <p className="text-[13px] leading-snug italic text-white/90">
                            “A melhor experiência de comunidade tech que já
                            vivi na RMS!”
                            <span className="mt-1 block not-italic text-[11px] text-white/50">
                              — Participante, DevFest 2025
                            </span>
                          </p>
                        </div>
                      </div>
                    </button>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

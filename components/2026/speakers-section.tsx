"use client"

import Image from "next/image"
import { Sparkles, BadgeCheck } from "lucide-react"
import { motion } from "framer-motion"
import { keynote, speakers } from "@/content/2026/speakers"
import { trilhas } from "@/content/2026/trilhas"
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/components/2026/motion"

// Enquanto a curadoria não fecha, mostra 6 "vagas" com a cor das
// trilhas alternando, deixando claro que o line-up está em aberto —
// sem inventar nomes ou fotos de palestrantes que ainda não existem.
const vagasPlaceholder = Array.from({ length: 6 }, (_, i) => trilhas[i % trilhas.length])

export function SpeakersSection() {
  const hasLineup = speakers.length > 0

  return (
    <section id="palestrantes" className="mx-auto max-w-[1280px] px-6 py-20 md:py-28">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={staggerContainer(0.1)}
        className="flex flex-wrap items-end justify-between gap-6 mb-12"
      >
        <div>
          <motion.div
            variants={staggerItem}
            className="font-mono text-[11px] tracking-[0.16em] text-foreground/40 mb-4"
          >
            QUEM CONSTRÓI EM CIMA DO PALCO
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-[36px] md:text-[54px] font-bold leading-[0.95] tracking-[-0.04em]"
          >
            {hasLineup ? (
              "Palestrantes 2026"
            ) : (
              <>
                Curadoria em{" "}
                <span className="text-foreground/30">andamento.</span>
              </>
            )}
          </motion.h2>
        </div>
        <motion.p
          variants={staggerItem}
          className="max-w-[380px] text-[14px] leading-[1.6] text-foreground/50"
        >
          {hasLineup
            ? "15 builders curados a dedo, um por trilha por horário. Sem enrolação, sem venda disfarçada de palestra."
            : "15 vagas, curadoria brutal, um por trilha por horário. As confirmações saem aqui assim que fecharem — e nas redes do GDG Lauro."}
        </motion.p>
      </motion.div>

      {hasLineup ? (
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0 }}
          variants={staggerContainer(0.06)}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
        >
          {/* Keynote — ocupa a linha inteira pra puxar o olho antes dos demais cards. */}
          <motion.div
            variants={staggerItem}
            className="relative col-span-full rounded-2xl p-[1.5px] overflow-hidden bg-gradient-to-br from-trilha-build via-trilha-build/30 to-trilha-scale/40"
          >
            <div className="relative overflow-hidden rounded-[15px] bg-card flex flex-col sm:flex-row sm:items-stretch">
              <div className="pointer-events-none absolute -top-16 -right-10 h-48 w-48 rounded-full bg-trilha-build/20 blur-[80px]" />
              <div className="pointer-events-none absolute -bottom-16 left-1/3 h-48 w-48 rounded-full bg-trilha-scale/15 blur-[80px]" />

              <div className="relative aspect-square sm:aspect-auto sm:w-[240px] md:w-[280px] shrink-0 bg-foreground/[0.03]">
                {keynote.photo && (
                  <Image
                    src={keynote.photo}
                    alt={keynote.name}
                    fill
                    sizes="(min-width: 768px) 280px, (min-width: 640px) 240px, 100vw"
                    className="object-cover object-[50%_25%]"
                  />
                )}
              </div>

              <div className="relative flex flex-col justify-center p-6 md:p-8">
                <div className="inline-flex w-fit items-center gap-2 pl-1.5 pr-3 py-1 rounded-full bg-foreground/[0.06] border border-foreground/10 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-trilha-build animate-pulse motion-reduce:animate-none" />
                  <Sparkles className="w-3 h-3 text-trilha-build" />
                  <span className="font-mono text-[11px] font-bold tracking-[0.14em] text-foreground/70">
                    KEYNOTE
                  </span>
                </div>
                <h3 className="text-[26px] md:text-[34px] font-bold tracking-[-0.03em] leading-[1.05]">
                  {keynote.name}
                </h3>
                <div className="mt-1.5 text-[13px] md:text-[14px] text-foreground/55">
                  {[keynote.role, keynote.company].filter(Boolean).join(" · ")}
                </div>
                <p className="mt-4 text-[16px] md:text-[19px] font-semibold leading-[1.35] tracking-[-0.01em] text-foreground/85 max-w-[620px]">
                  {keynote.talk}
                </p>
              </div>
            </div>
          </motion.div>

          {speakers.map((s) => {
            const trilha = trilhas.find((t) => t.id === s.trilha)
            const color = trilha?.color ?? "#F4B400"
            return (
              <motion.div
                key={s.id}
                variants={staggerItem}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="group relative rounded-2xl p-[1.5px] overflow-hidden transition-shadow duration-300"
                style={{
                  background: `linear-gradient(160deg, ${color}, color-mix(in srgb, ${color} 15%, transparent) 45%, transparent 70%)`,
                }}
              >
                <div
                  className="relative rounded-[15px] overflow-hidden bg-card h-full transition-shadow duration-300 group-hover:shadow-[0_20px_45px_-18px_var(--card-glow)]"
                  style={{ ["--card-glow" as string]: `${color}70` }}
                >
                  <div className="aspect-square relative bg-foreground/[0.03] overflow-hidden">
                    {s.photo ? (
                      <Image
                        src={s.photo}
                        alt={s.name}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                        className="object-cover object-[50%_25%] transition-transform duration-500 group-hover:scale-[1.06]"
                      />
                    ) : (
                      // Foto ainda não recebida — iniciais na cor da trilha
                      <div
                        className="absolute inset-0 grid place-items-center pb-10 text-[48px] md:text-[64px] font-bold tracking-[-0.04em] text-white/90"
                        style={{
                          background: `radial-gradient(circle at 30% 20%, ${color}, color-mix(in srgb, ${color} 35%, #0a0a0a) 70%)`,
                        }}
                      >
                        {s.name
                          .split(" ")
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join("")}
                      </div>
                    )}

                    {/* shine sweep */}
                    <div className="pointer-events-none absolute inset-0 overflow-hidden">
                      <div className="absolute -inset-y-8 -left-1/3 w-1/3 -translate-x-[200%] rotate-12 bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[420%]" />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/5" />

                    <div className="absolute top-2 left-2">
                      <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-md border border-white/15">
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: color }}
                        />
                        <span className="font-mono text-[9px] font-bold tracking-[0.12em] text-white">
                          {s.trilha}
                        </span>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2">
                      <BadgeCheck
                        className="w-5 h-5 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]"
                        fill={color}
                        stroke="white"
                        strokeWidth={2}
                      />
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <div className="font-bold text-[13px] md:text-[14px] text-white leading-tight truncate">
                        {s.name}
                      </div>
                      <div className="text-[10px] md:text-[11px] text-white/60 mt-0.5 truncate">
                        {[s.role, s.company].filter(Boolean).join(" · ")}
                      </div>
                    </div>
                  </div>

                  <div className="p-3">
                    <div className="text-[11px] md:text-[12px] text-foreground/70 leading-[1.35] line-clamp-2">
                      {s.talk}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      ) : (
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.06)}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {vagasPlaceholder.map((t, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="rounded-2xl border border-dashed border-foreground/15 bg-foreground/[0.02] p-6 flex flex-col items-center justify-center text-center min-h-[180px] opacity-70"
            >
              <div
                className="w-10 h-10 rounded-full grid place-items-center mb-3"
                style={{ backgroundColor: `${t.color}18` }}
              >
                <t.icon className="w-4 h-4" style={{ color: t.color }} />
              </div>
              <div
                className="font-mono text-[10px] font-bold tracking-[0.12em]"
                style={{ color: `var(--trilha-${t.id.toLowerCase()}-on-surface)` }}
              >
                TRILHA {t.id}
              </div>
              <div className="mt-1 text-[13px] text-foreground/40">
                Palestrante em confirmação
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

    </section>
  )
}

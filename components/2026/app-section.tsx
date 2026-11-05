"use client"

import Image from "next/image"
import { Bell, CalendarClock, MapPin, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { APP_URL } from "@/content/2026/links"
import { fadeIn, fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/components/2026/motion"

const recursos = [
  {
    icon: CalendarClock,
    title: "Agenda ao vivo",
    text: "Trilhas, horários e salas sempre atualizados — sem ir até o mural.",
  },
  {
    icon: Bell,
    title: "Avisos em tempo real",
    text: "Receba o alerta antes da sua palestra começar e fique sabendo de qualquer mudança.",
  },
  {
    icon: MapPin,
    title: "Ache a sala certa",
    text: "Auditório, A8, A9 e Laboratório B8: chegue direto onde você quer estar.",
  },
]

const trilhaBars = [
  { time: "10:05", color: "bg-trilha-build", w: "w-[78%]" },
  { time: "11:05", color: "bg-trilha-secure", w: "w-[64%]" },
  { time: "13:00", color: "bg-trilha-scale", w: "w-[86%]" },
]

function Phone() {
  return (
    <div className="relative mx-auto w-[250px] md:w-[270px]">
      <div className="pointer-events-none absolute -inset-10 rounded-full bg-[image:var(--brand-gradient)] opacity-25 blur-[70px]" />
      <div className="relative rounded-[42px] border border-foreground/20 bg-gradient-to-b from-foreground/25 to-foreground/5 p-[3px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]">
        <div className="relative overflow-hidden rounded-[39px] bg-background p-3 pb-5">
          <div className="mx-auto mb-3 h-[22px] w-[84px] rounded-full bg-black" />
          <div className="px-1">
            <div className="font-mono text-[9px] tracking-[0.16em] text-foreground/40">GDG TALKS</div>
            <div className="mt-1 text-[17px] font-bold leading-tight tracking-[-0.03em]">
              DevFest Lauro
              <br />
              <span className="text-foreground/40">07 NOV 2026</span>
            </div>
          </div>
          <div className="mt-3 flex gap-1.5 px-1">
            {[
              ["BUILD", "bg-trilha-build"],
              ["SECURE", "bg-trilha-secure"],
              ["SCALE", "bg-trilha-scale"],
            ].map(([label, dot]) => (
              <span
                key={label}
                className="inline-flex items-center gap-1 rounded-full border border-foreground/10 bg-foreground/[0.05] px-2 py-1 font-mono text-[8px] tracking-wider"
              >
                <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
                {label}
              </span>
            ))}
          </div>
          <div className="mt-3 space-y-2 px-1">
            {trilhaBars.map((b) => (
              <div key={b.time} className="flex items-center gap-2 rounded-xl border border-foreground/[0.08] bg-foreground/[0.04] p-2">
                <span className="font-mono text-[9px] text-foreground/45">{b.time}</span>
                <span className={`h-7 w-[3px] rounded-full ${b.color}`} />
                <span className="flex-1 space-y-1.5">
                  <span className={`block h-1.5 rounded-full bg-foreground/25 ${b.w}`} />
                  <span className="block h-1.5 w-[45%] rounded-full bg-foreground/10" />
                </span>
              </div>
            ))}
          </div>
          <div className="mx-1 mt-3 flex items-center gap-2 rounded-2xl border border-foreground/10 bg-foreground/[0.07] p-2.5 backdrop-blur">
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-[image:var(--brand-gradient)] text-black">
              <Bell className="h-3.5 w-3.5" />
            </span>
            <span className="text-[10px] leading-[1.35] text-foreground/70">
              Sua próxima palestra começa em <b className="text-foreground">5 min</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function AppSection() {
  return (
    <section id="aplicativo" className="mx-auto max-w-[1280px] px-6 py-20 md:py-28">
      {/* Mesmo recurso do recap 2025: força o escuro pra a seção virar um
          "spotlight" premium, independente do toggle da página. */}
      <div className="theme-2026-dark">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeIn}
          className="theme-2026 relative overflow-hidden rounded-[28px] border border-foreground/10 bg-background p-[1px] text-foreground shadow-[0_0_120px_-40px_var(--color-trilha-build)]"
        >
          <div className="pointer-events-none absolute -top-24 -left-16 h-72 w-72 rounded-full bg-trilha-build/15 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-trilha-scale/15 blur-[100px]" />

          <div className="relative overflow-hidden rounded-[27px] bg-gradient-to-b from-foreground/[0.04] to-transparent">
            <div className="grid items-center gap-10 p-8 md:p-12 lg:grid-cols-[1.1fr_0.9fr]">
              <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={staggerContainer(0.1)}>
                <motion.div
                  variants={staggerItem}
                  className="inline-flex items-center gap-2 rounded-full border border-trilha-build/30 bg-gradient-to-r from-trilha-build/15 to-trilha-scale/10 px-3 py-1 font-mono text-[11px] tracking-wide text-[var(--trilha-build-on-surface)]"
                >
                  <Sparkles className="h-3 w-3" /> APP OFICIAL • GDG TALKS
                </motion.div>

                <motion.h2
                  variants={fadeUp}
                  className="mt-6 text-[32px] font-bold leading-[0.95] tracking-[-0.04em] md:text-[48px]"
                >
                  O DevFest inteiro{" "}
                  <span className="bg-[image:var(--brand-gradient)] bg-clip-text text-transparent">
                    no seu bolso.
                  </span>
                </motion.h2>
                <motion.p
                  variants={staggerItem}
                  className="mt-4 max-w-[500px] text-[15px] leading-[1.6] text-foreground/55"
                >
                  Baixe o GDG Talks e viva o dia 07/11 sem perder nada: agenda das três trilhas,
                  avisos na hora certa e o caminho até cada sala.
                </motion.p>

                <motion.ul variants={staggerContainer(0.08)} className="mt-8 space-y-4">
                  {recursos.map(({ icon: Icon, title, text }) => (
                    <motion.li key={title} variants={staggerItem} className="flex gap-4">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-foreground/10 bg-foreground/[0.06]">
                        <Icon className="h-[18px] w-[18px]" />
                      </span>
                      <span>
                        <span className="block text-[14px] font-semibold">{title}</span>
                        <span className="mt-0.5 block text-[13px] leading-[1.5] text-foreground/50">{text}</span>
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.div variants={staggerItem} className="mt-9 flex flex-wrap items-center gap-4">
                  <a
                    href={APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Baixar o app GDG Talks na Google Play"
                    className="inline-flex transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-105"
                  >
                    <Image src="/images/googleplay.png" alt="Disponível na Google Play" width={180} height={60} />
                  </a>
                  <span className="font-mono text-[11px] tracking-wide text-foreground/40">GRATUITO • ANDROID</span>
                </motion.div>
              </motion.div>

              <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={fadeUp} className="py-6">
                <Phone />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

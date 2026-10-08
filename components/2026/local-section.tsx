"use client"

import { Calendar, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/components/2026/motion"

export function LocalSection() {
  return (
    <section id="local" className="border-t border-foreground/[0.06] bg-card/40">
      <div className="mx-auto max-w-[1280px] px-6 py-20 md:py-24 grid lg:grid-cols-[0.9fr_1.1fr] gap-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
        >
          <motion.div
            variants={staggerItem}
            className="font-mono text-[11px] tracking-[0.16em] text-foreground/40 mb-4"
          >
            ONDE TUDO ACONTECE
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-[36px] md:text-[48px] font-bold leading-[0.95] tracking-[-0.04em]"
          >
            SENAI Lauro de
            <br />
            <span className="text-foreground/40">Freitas</span>
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="mt-4 text-[15px] leading-[1.6] text-foreground/55 max-w-[420px]"
          >
            Estrutura premium, auditórios climatizados, labs maker e
            estacionamento. A 5 min do aeroporto.
          </motion.p>

          <div className="mt-8 space-y-4">
            <motion.div
              variants={staggerItem}
              className="flex gap-3 p-4 rounded-2xl bg-background border border-foreground/10"
            >
              <div className="w-10 h-10 rounded-xl bg-foreground/10 grid place-items-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-[14px]">
                  SENAI Lauro de Freitas
                </div>
                <div className="text-[13px] text-foreground/50 leading-[1.4] mt-1">
                  Av. Santos Dumont, 3000 - Centro
                  <br />
                  Lauro de Freitas - BA, 42700-000
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={staggerItem}
              className="flex gap-3 p-4 rounded-2xl bg-background border border-foreground/10"
            >
              <div className="w-10 h-10 rounded-xl bg-foreground/10 grid place-items-center shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-[14px]">
                  07 de Novembro de 2026 • Sábado
                </div>
                <div className="text-[13px] text-foreground/50 mt-1">
                  08h credenciamento • 09h abertura • 17h encerramento 
                  hour
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={staggerItem} className="mt-6 flex gap-2">
            <a
              href="https://maps.google.com/?q=SENAI+CIMATEC+Lauro+de+Freitas"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 px-4 rounded-full bg-foreground text-background text-[13px] font-semibold inline-flex items-center hover:opacity-90 transition"
            >
              Ver no Maps
            </a>
            <a
              href="#local"
              className="h-10 px-4 rounded-full bg-foreground/10 border border-foreground/10 text-[13px] font-medium inline-flex items-center hover:bg-foreground/15 transition"
            >
              Como chegar
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="relative"
        >
          <div className="rounded-[24px] overflow-hidden border border-foreground/10 bg-card p-2">
            <div className="aspect-[4/3] md:aspect-[16/11] rounded-[16px] overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=SENAI+CIMATEC+Lauro+de+Freitas,+Av.+Santos+Dumont,+3000,+Lauro+de+Freitas+-+BA,+42700-000&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                title="Mapa — SENAI CIMATEC Lauro de Freitas"
              />
            </div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer(0.08, 0.3)}
            className="mt-4 grid grid-cols-3 gap-2"
          >
            {[
              { l: "Estacionamento", v: "Gratuito" },
              { l: "Acessibilidade", v: "Total" },
              { l: "Wi-Fi", v: "10 Gbps" },
            ].map((item) => (
              <motion.div
                key={item.l}
                variants={staggerItem}
                className="rounded-xl bg-card border border-foreground/10 px-3 py-3"
              >
                <div className="font-mono text-[9px] tracking-[0.12em] text-foreground/35">
                  {item.l.toUpperCase()}
                </div>
                <div className="mt-1 text-[13px] font-semibold">{item.v}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { Check, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/components/2026/motion"

const mudancas = [
  {
    t: "Hands-on & Aprendizado Prático",
    d: "Trilhas focadas em resolução de problemas, labs ao vivo e reviews de arquitetura real.",
  },
  {
    t: "Agentic-first",
    d: "ADK, Function Calling, Multimodal Live e A2A. Tudo o que move a nova era da IA.",
  },
  {
    t: "Curadoria Focada em Builders",
    d: "Conteúdo validado por quem está ativamente construindo e entregando produtos no mercado.",
  },
  {
    t: "Comunidade Local, Ambição Global",
    d: "A RMS conectada aos maiores ecossistemas de tecnologia do mundo.",
  },
]

export function ManifestoSection() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-20 md:py-28">
      <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 md:gap-16 items-start">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.12)}
        >
          <motion.div
            variants={staggerItem}
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] text-foreground/40 mb-6"
          >
            <span className="w-8 h-[1px] bg-foreground/20" /> MANIFESTO 2026
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-[38px] md:text-[56px] leading-[0.95] tracking-[-0.04em] font-bold"
          >
            <span className="text-foreground/30">Em 2025</span> conectamos.
            <br />
            <span className="text-foreground">Em 2026</span>{" "}
            <span className="bg-[image:var(--brand-gradient)] bg-clip-text text-transparent">
              construímos.
            </span>
          </motion.h2>

          <div className="mt-10 grid md:grid-cols-2 gap-8 text-[15px] leading-[1.7] text-foreground/60">
            <motion.p variants={staggerItem}>
              A era dos demos acabou. O DevFest Lauro 2026 é um dia inteiro de
              código, arquitetura e produto real. Sem bullshit, sem palestra
              de venda.
              <br />
              <br />
              Vamos do prompt ao deploy: agentes com ADK e Gemini, apps
              impecáveis com Flutter, infra que não quebra com Cloud e
              Firebase.
            </motion.p>
            <motion.p variants={staggerItem}>
              Mas potência sem controle é risco. Por isso trouxemos uma
              trilha inteira de <span className="text-foreground font-medium">Secure</span>:
              DevSecOps, privacidade desde o design e blockchain onde faz
              sentido.
              <br />
              <br />E para fechar:{" "}
              <span className="text-foreground font-medium">
                Scale. Do localhost pro mundo
              </span>{" "}
              — produto, go-to-market e carreira para builders que querem
              impacto global, direto da Bahia.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="lg:sticky lg:top-[88px]"
        >
          <div className="rounded-[24px] p-7 md:p-8 bg-card border border-foreground/10">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-trilha-build/15 grid place-items-center">
                <Sparkles className="w-4 h-4 text-trilha-build" />
              </div>
              <div className="font-mono text-[11px] tracking-[0.14em] text-foreground/50">
                O QUE MUDA EM 2026
              </div>
            </div>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={staggerContainer(0.1, 0.15)}
              className="space-y-5"
            >
              {mudancas.map((m) => (
                <motion.div key={m.t} variants={staggerItem} className="flex gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-foreground/10 grid place-items-center shrink-0">
                    <Check className="w-3 h-3 text-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-[14px] tracking-[-0.01em] text-foreground">
                      {m.t}
                    </div>
                    <div className="text-[13px] leading-[1.5] text-foreground/50 mt-1">
                      {m.d}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

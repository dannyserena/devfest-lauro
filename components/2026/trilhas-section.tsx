import { ArrowUpRight } from "lucide-react"
import { trilhas } from "@/content/2026/trilhas"

export function TrilhasSection() {
  return (
    <section id="trilhas" className="border-t border-white/[0.06] bg-card/40">
      <div className="mx-auto max-w-[1280px] px-6 py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <div className="font-mono text-[11px] tracking-[0.16em] text-foreground/40 mb-4">
              3 TRILHAS • 1 PROPÓSITO
            </div>
            <h2 className="text-[36px] md:text-[54px] font-bold leading-[0.95] tracking-[-0.04em]">
              Escolha seu <span className="text-foreground/30">lado.</span>{" "}
              Ou viva os três.
            </h2>
          </div>
          <p className="max-w-[380px] text-[14px] leading-[1.6] text-foreground/50">
            Cada trilha é um palco dedicado, com curadoria independente e
            labs práticos. Você circula livre.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-[1px] rounded-[28px] overflow-hidden bg-white/10 p-[1px]">
          {trilhas.map((t) => {
            const Icon = t.icon
            return (
              <div
                key={t.id}
                className="group relative bg-card p-7 md:p-8 flex flex-col min-h-[480px] hover:bg-white/[0.03] transition-colors"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition"
                  style={{
                    background: `linear-gradient(90deg, ${t.color}, transparent)`,
                  }}
                />
                <div className="flex items-start justify-between">
                  <div
                    className="w-12 h-12 rounded-[14px] grid place-items-center"
                    style={{ backgroundColor: `${t.color}18` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: t.color }} />
                  </div>
                  <div
                    className="font-mono text-[11px] font-bold tracking-[0.14em] px-2.5 py-1 rounded-full border"
                    style={{
                      color: t.color,
                      borderColor: `${t.color}30`,
                      backgroundColor: `${t.color}12`,
                    }}
                  >
                    TRILHA {t.numero}
                  </div>
                </div>

                <h3
                  className="mt-8 text-[36px] font-[900] tracking-[-0.04em] leading-[0.9]"
                  style={{ color: t.color }}
                >
                  {t.id}
                </h3>
                <div className="mt-3 text-[18px] font-semibold tracking-[-0.02em] text-foreground leading-[1.2]">
                  {t.headline}
                </div>
                <p className="mt-3 text-[14px] leading-[1.6] text-foreground/55">
                  {t.desc}
                </p>

                <div className="mt-auto pt-8">
                  <div className="flex flex-wrap gap-2">
                    {t.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[11px] font-medium tracking-wide text-foreground/70 group-hover:bg-white/[0.08] transition"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-[13px] font-medium text-foreground/40 group-hover:text-foreground/80 transition">
                    Ver grade da trilha
                    <span className="w-5 h-5 rounded-full bg-white/10 grid place-items-center group-hover:bg-foreground group-hover:text-background transition">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

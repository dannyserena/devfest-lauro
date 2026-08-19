import Link from "next/link"
import { Play } from "lucide-react"
import { stats2025 } from "@/content/2026/stats"

export function Legacy2025Section() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-20 md:py-28">
      <div className="rounded-[28px] overflow-hidden bg-card border border-white/10 p-[1px]">
        <div className="rounded-[27px] bg-gradient-to-b from-white/[0.04] to-transparent overflow-hidden">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 md:p-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-trilha-community/15 border border-trilha-community/20 text-trilha-community font-mono text-[11px] tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-trilha-community animate-pulse" />{" "}
                EDIÇÃO ANTERIOR
              </div>

              <h2 className="mt-6 text-[32px] md:text-[44px] font-bold leading-[0.95] tracking-[-0.04em]">
                2025 foi{" "}
                <span className="bg-[linear-gradient(100deg,#F4B400_0%,#FF7A1A_35%,#EA4335_50%,#4285F4_100%)] bg-clip-text text-transparent">
                  histórico.
                </span>
                <br />
                <span className="text-foreground/40">2026 será lendário.</span>
              </h2>
              <p className="mt-4 text-[15px] leading-[1.6] text-foreground/55 max-w-[480px]">
                Lotamos o SENAI, conectamos a RMS e mostramos que a Bahia
                produz tecnologia de ponta. A barra subiu.
              </p>

              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {stats2025.map((s) => {
                  const Icon = s.icon
                  return (
                    <div
                      key={s.l}
                      className="rounded-2xl bg-background border border-white/10 p-4"
                    >
                      <Icon className="w-4 h-4 text-foreground/30 mb-3" />
                      <div className="text-[22px] font-black tracking-[-0.03em]">
                        {s.n}
                      </div>
                      <div className="font-mono text-[10px] tracking-[0.12em] text-foreground/40 mt-1">
                        {s.l.toUpperCase()}
                      </div>
                    </div>
                  )
                })}
              </div>

              <Link
                href="/2025"
                className="mt-8 inline-flex items-center gap-2 h-11 px-5 rounded-full bg-foreground text-background font-semibold text-[14px] hover:opacity-90 transition"
              >
                <Play className="w-4 h-4" /> Ver como foi 2025
              </Link>
            </div>

            <div className="relative bg-background p-3 lg:p-4">
              <div className="h-full rounded-[18px] overflow-hidden bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 grid place-items-center p-6">
                <div className="w-full space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="font-mono text-[11px] text-foreground/30 tracking-[0.14em]">
                      DEVFEST LAURO • 2025
                    </div>
                    <div className="w-2 h-2 rounded-full bg-trilha-secure animate-pulse" />
                  </div>
                  <Link
                    href="/2025"
                    className="aspect-[16/10] rounded-xl bg-background border border-white/10 relative overflow-hidden group flex"
                  >
                    <div className="absolute inset-0 grid place-items-center">
                      <div className="w-16 h-16 rounded-full bg-foreground text-background grid place-items-center shadow-xl group-hover:scale-105 transition">
                        <Play className="w-7 h-7 ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                      <div className="text-[12px] font-medium text-foreground">
                        Reveja a página completa da edição 2025
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

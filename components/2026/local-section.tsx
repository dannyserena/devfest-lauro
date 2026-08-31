import { Calendar, MapPin } from "lucide-react"

export function LocalSection() {
  return (
    <section id="local" className="border-t border-foreground/[0.06] bg-card/40">
      <div className="mx-auto max-w-[1280px] px-6 py-20 md:py-24 grid lg:grid-cols-[0.9fr_1.1fr] gap-10">
        <div>
          <div className="font-mono text-[11px] tracking-[0.16em] text-foreground/40 mb-4">
            ONDE TUDO ACONTECE
          </div>
          <h2 className="text-[36px] md:text-[48px] font-bold leading-[0.95] tracking-[-0.04em]">
            SENAI Lauro de
            <br />
            <span className="text-foreground/40">Freitas</span>
          </h2>
          <p className="mt-4 text-[15px] leading-[1.6] text-foreground/55 max-w-[420px]">
            Estrutura premium, auditórios climatizados, labs maker e
            estacionamento. A 5 min do aeroporto.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex gap-3 p-4 rounded-2xl bg-background border border-foreground/10">
              <div className="w-10 h-10 rounded-xl bg-foreground/10 grid place-items-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-[14px]">
                  SENAI CIMATEC Lauro de Freitas
                </div>
                <div className="text-[13px] text-foreground/50 leading-[1.4] mt-1">
                  Av. Santos Dumont, 3000 - Centro
                  <br />
                  Lauro de Freitas - BA, 42700-000
                </div>
              </div>
            </div>
            <div className="flex gap-3 p-4 rounded-2xl bg-background border border-foreground/10">
              <div className="w-10 h-10 rounded-xl bg-foreground/10 grid place-items-center shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-[14px]">
                  21 de Novembro de 2026 • Sábado
                </div>
                <div className="text-[13px] text-foreground/50 mt-1">
                  08h credenciamento • 09h abertura • 18h encerramento + happy
                  hour
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-2">
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
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[24px] overflow-hidden border border-foreground/10 bg-card p-2">
            <div className="aspect-[4/3] md:aspect-[16/11] rounded-[16px] bg-background relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(66,133,244,0.25),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(244,180,0,0.18),transparent_35%)]" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-trilha-scale grid place-items-center shadow-[0_0_0_8px_rgba(66,133,244,0.18),0_8px_24px_rgba(0,0,0,0.4)]">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-trilha-scale rotate-45" />
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 whitespace-nowrap px-3 py-1.5 rounded-full bg-card border border-foreground/15 text-[12px] font-semibold shadow-lg">
                    SENAI Lauro de Freitas
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {[
              { l: "Estacionamento", v: "Gratuito" },
              { l: "Acessibilidade", v: "Total" },
              { l: "Wi-Fi", v: "10 Gbps" },
            ].map((item) => (
              <div
                key={item.l}
                className="rounded-xl bg-card border border-foreground/10 px-3 py-3"
              >
                <div className="font-mono text-[9px] tracking-[0.12em] text-foreground/35">
                  {item.l.toUpperCase()}
                </div>
                <div className="mt-1 text-[13px] font-semibold">{item.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

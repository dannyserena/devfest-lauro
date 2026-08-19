import { Check, Sparkles } from "lucide-react"

const mudancas = [
  {
    t: "Hands-on > Slides",
    d: "70% do tempo é oficina, lab e review de arquitetura.",
  },
  {
    t: "Agentic-first",
    d: "ADK, Function Calling, Multimodal Live, A2A. Tudo que importa.",
  },
  {
    t: "Curadoria brutal",
    d: "15 builders que estão shipando, não só falando.",
  },
  {
    t: "Comunidade local, ambição global",
    d: "RMS no mapa de IA do Brasil.",
  },
]

export function ManifestoSection() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-20 md:py-28">
      <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 md:gap-16 items-start">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] text-foreground/40 mb-6">
            <span className="w-8 h-[1px] bg-white/20" /> MANIFESTO 2026
          </div>
          <h2 className="text-[38px] md:text-[56px] leading-[0.95] tracking-[-0.04em] font-bold">
            <span className="text-foreground/30">Em 2025</span> conectamos.
            <br />
            <span className="text-foreground">Em 2026</span>{" "}
            <span className="bg-[linear-gradient(100deg,#F4B400_0%,#FF7A1A_35%,#EA4335_50%,#4285F4_100%)] bg-clip-text text-transparent">
              construímos.
            </span>
          </h2>

          <div className="mt-10 grid md:grid-cols-2 gap-8 text-[15px] leading-[1.7] text-foreground/60">
            <p>
              A era dos demos acabou. O DevFest Lauro 2026 é um dia inteiro de
              código, arquitetura e produto real. Sem bullshit, sem palestra
              de venda.
              <br />
              <br />
              Vamos do prompt ao deploy: agentes com ADK e Gemini, apps
              impecáveis com Flutter, infra que não quebra com Cloud e
              Firebase.
            </p>
            <p>
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
            </p>
          </div>
        </div>

        <div className="lg:sticky lg:top-[88px]">
          <div className="rounded-[24px] p-7 md:p-8 bg-card border border-white/10">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-trilha-build/15 grid place-items-center">
                <Sparkles className="w-4 h-4 text-trilha-build" />
              </div>
              <div className="font-mono text-[11px] tracking-[0.14em] text-foreground/50">
                O QUE MUDA EM 2026
              </div>
            </div>
            <div className="space-y-5">
              {mudancas.map((m) => (
                <div key={m.t} className="flex gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-white/10 grid place-items-center shrink-0">
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

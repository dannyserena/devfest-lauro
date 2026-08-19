import { ArrowUpRight } from "lucide-react"

const stats = [
  { k: "Data", v: "21 Nov 2026", sub: "Sábado • 08h–18h" },
  { k: "Local", v: "SENAI Lauro", sub: "Bahia • RMS" },
  { k: "Builders", v: "200+", sub: "Devs, PMs, Founders" },
  { k: "Tema", v: "Agentic Era", sub: "Build • Secure • Scale" },
]

const tickerWords = [
  "GDG Lauro de Freitas",
  "Google",
  "WTM",
  "SENAI CIMATEC",
  "Build",
  "Secure",
  "Scale",
  "Gemini",
  "Flutter",
  "Cloud",
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* TODO(2026): quando houver foto oficial do evento, adicionar aqui
          um <img> de fundo (ex: /images/2026/hero.jpg) com opacidade ~0.35
          + gradiente escuro por cima, como no mockup aprovado. Por ora o
          hero usa só o gradiente para não versionar um asset placeholder. */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_0%,rgba(244,180,0,0.15),transparent_60%),radial-gradient(40%_50%_at_90%_20%,rgba(66,133,244,0.2),transparent),radial-gradient(35%_50%_at_10%_30%,rgba(234,67,53,0.18),transparent)]" />

      <div className="relative mx-auto max-w-[1280px] px-6 pt-16 md:pt-24 pb-8">
        <div className="max-w-[1080px]">
          <div className="inline-flex items-center gap-3 pl-1 pr-4 py-1 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md">
            <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-foreground text-background text-[11px] font-bold tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-trilha-community animate-pulse" />
              CONFIRMADO
            </span>
            <span className="font-mono text-[11px] tracking-[0.08em] text-foreground/70">
              21 NOV 2026 • SENAI LAURO DE FREITAS • 200+ BUILDERS
            </span>
          </div>

          <h1 className="mt-8 text-[14vw] md:text-[102px] leading-[0.85] font-[900] tracking-[-0.06em]">
            <span className="block text-foreground">Build.</span>
            <span className="block text-foreground">Secure.</span>
            <span className="block bg-[linear-gradient(100deg,#F4B400_0%,#FF7A1A_35%,#EA4335_50%,#4285F4_100%)] bg-clip-text text-transparent">
              Scale.
            </span>
          </h1>

          <div className="mt-8 flex flex-col lg:flex-row lg:items-end gap-8">
            <p className="text-[20px] md:text-[26px] leading-[1.15] tracking-[-0.02em] font-medium text-foreground/90 max-w-[520px]">
              Developers and Builders in the{" "}
              <span className="text-foreground/50">Agentic Era.</span>
              <span className="text-[15px] font-normal text-foreground/50 mt-3 block leading-[1.5]">
                O maior encontro hands-on da RMS. De prompts a produção, com
                quem está construindo o futuro com IA, Cloud e Mobile.
              </span>
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#ingressos"
                className="group inline-flex items-center gap-2 h-[48px] px-6 rounded-full bg-trilha-build text-black font-bold text-[15px] hover:brightness-110 transition"
              >
                Garantir ingresso 1º lote
                <span className="w-6 h-6 rounded-full bg-black text-trilha-build grid place-items-center group-hover:translate-x-0.5 transition">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </a>
              <a
                href="#patrocinadores"
                className="inline-flex items-center h-[48px] px-6 rounded-full bg-white/[0.08] border border-white/10 text-foreground font-medium text-[15px] hover:bg-white/[0.12] transition backdrop-blur-md"
              >
                Ser patrocinador
              </a>
            </div>
          </div>

          <div className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-[1px] rounded-[20px] overflow-hidden bg-white/10 p-[1px]">
            {stats.map((s) => (
              <div key={s.k} className="bg-card px-5 py-4 md:px-6 md:py-5">
                <div className="font-mono text-[10px] tracking-[0.14em] text-foreground/40">
                  {s.k.toUpperCase()}
                </div>
                <div className="mt-1 font-bold text-[16px] md:text-[18px] tracking-[-0.02em]">
                  {s.v}
                </div>
                <div className="text-[12px] text-foreground/45 mt-0.5">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative border-y border-white/[0.06] overflow-hidden">
        <div className="flex w-max animate-[ticker_30s_linear_infinite]">
          {Array.from({ length: 2 }).map((_, row) => (
            <div key={row} className="flex items-center gap-10 pr-10 py-3">
              {tickerWords.map((w) => (
                <span
                  key={`${row}-${w}`}
                  className="flex items-center gap-10 font-mono text-[12px] tracking-[0.18em] text-foreground/25"
                >
                  {w}
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

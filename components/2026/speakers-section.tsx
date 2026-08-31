import Image from "next/image"
import { Mail, Sparkles } from "lucide-react"
import { speakers } from "@/content/2026/speakers"
import { trilhas } from "@/content/2026/trilhas"

const trilhaColor = Object.fromEntries(trilhas.map((t) => [t.id, t.color]))

// Enquanto a curadoria não fecha, mostra 6 "vagas" com a cor das
// trilhas alternando, deixando claro que o line-up está em aberto —
// sem inventar nomes ou fotos de palestrantes que ainda não existem.
const vagasPlaceholder = Array.from({ length: 6 }, (_, i) => trilhas[i % trilhas.length])

export function SpeakersSection() {
  const hasLineup = speakers.length > 0

  return (
    <section id="palestrantes" className="mx-auto max-w-[1280px] px-6 py-20 md:py-28">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
        <div>
          <div className="font-mono text-[11px] tracking-[0.16em] text-foreground/40 mb-4">
            QUEM CONSTRÓI EM CIMA DO PALCO
          </div>
          <h2 className="text-[36px] md:text-[54px] font-bold leading-[0.95] tracking-[-0.04em]">
            {hasLineup ? (
              "Palestrantes 2026"
            ) : (
              <>
                Curadoria em{" "}
                <span className="text-foreground/30">andamento.</span>
              </>
            )}
          </h2>
        </div>
        <p className="max-w-[380px] text-[14px] leading-[1.6] text-foreground/50">
          {hasLineup
            ? "15 builders curados a dedo, um por trilha por horário. Sem enrolação, sem venda disfarçada de palestra."
            : "15 vagas, curadoria brutal, um por trilha por horário. As confirmações saem aqui assim que fecharem — e nas redes do GDG Lauro."}
        </p>
      </div>

      {hasLineup ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {speakers.map((s) => (
            <div
              key={s.id}
              className="rounded-2xl overflow-hidden bg-card border border-foreground/10 group"
            >
              <div className="aspect-[4/3] relative bg-foreground/[0.03]">
                <Image
                  src={s.photo}
                  alt={s.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <div
                  className="font-mono text-[10px] font-bold tracking-[0.12em]"
                  style={{ color: `var(--trilha-${s.trilha.toLowerCase()}-on-surface)` }}
                >
                  {s.trilha}
                </div>
                <div className="mt-1 font-semibold text-[15px] text-foreground">
                  {s.name}
                </div>
                <div className="text-[13px] text-foreground/50">
                  {s.role} · {s.company}
                </div>
                <div className="mt-2 text-[13px] text-foreground/70 leading-[1.4]">
                  {s.talk}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {vagasPlaceholder.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl border border-dashed border-foreground/15 bg-foreground/[0.02] p-6 flex flex-col items-center justify-center text-center min-h-[180px]"
            >
              <div
                className="w-10 h-10 rounded-full grid place-items-center mb-3"
                style={{ backgroundColor: `${t.color}18` }}
              >
                <Sparkles className="w-4 h-4" style={{ color: t.color }} />
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
            </div>
          ))}
        </div>
      )}

      <div className="mt-8 rounded-2xl bg-card border border-foreground/10 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-[14px] text-foreground/60">
          <span className="text-foreground font-semibold">
            Quer palestrar no DevFest 2026?
          </span>{" "}
          Mande sua proposta de talk — trilhas Build, Secure ou Scale.
        </div>
        <a
          href="mailto:gdg@laurodefreitas.dev?subject=Proposta%20de%20talk%20-%20DevFest%202026"
          className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-foreground text-background text-[13px] font-semibold shrink-0 hover:opacity-90 transition"
        >
          <Mail className="w-4 h-4" /> Enviar proposta
        </a>
      </div>
    </section>
  )
}

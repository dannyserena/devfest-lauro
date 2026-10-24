"use client"

import { useState } from "react"
import Image from "next/image"
import { CircleDashed, Coffee, FlaskConical, HandHeart, Sparkles, Utensils } from "lucide-react"
import { motion } from "framer-motion"
import {
  agenda,
  labItems,
  labSpace,
  trackSpace,
  type AgendaBlock,
  type AgendaGeral,
  type AgendaLabItem,
  type AgendaSession,
  type AgendaTrack,
} from "@/content/2026/agenda"
import { keynote, speakers } from "@/content/2026/speakers"
import { trilhas } from "@/content/2026/trilhas"
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/components/2026/motion"

type Filter = "ALL" | AgendaTrack | "WORKSHOP"

const filters: { id: Filter; label: string }[] = [
  { id: "ALL", label: "Tudo" },
  { id: "BUILD", label: "Build" },
  { id: "SECURE", label: "Secure" },
  { id: "SCALE", label: "Scale" },
  { id: "WORKSHOP", label: "Workshops" },
]

const WORKSHOP_COLOR = "var(--color-trilha-community)"
const WORKSHOP_TEXT = "var(--trilha-community-on-surface)"

const trackOrder: AgendaTrack[] = ["BUILD", "SECURE", "SCALE"]
// coluna 1 = horário; 2–4 = trilhas; 5 = laboratório
const trackColumn: Record<AgendaTrack, number> = { BUILD: 2, SECURE: 3, SCALE: 4 }
const LAB_COLUMN = 5

const photoById = new Map(
  [...speakers, keynote].map((s) => [s.id, s.photo] as const),
)

const trilhaById = Object.fromEntries(trilhas.map((t) => [t.id, t])) as Record<
  AgendaTrack,
  (typeof trilhas)[number]
>

const trackTextVar = (t: AgendaTrack) => `var(--trilha-${t.toLowerCase()}-on-surface)`

const blockIndex = new Map(agenda.map((b, i) => [b.id, i] as const))
// linha 1 da grade = cabeçalho das colunas
const rowOf = (id: string) => (blockIndex.get(id) ?? 0) + 2

const initials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")

function Avatar({ name, photo, size = 26 }: { name: string; photo?: string; size?: number }) {
  return (
    <span
      className="relative grid shrink-0 place-items-center overflow-hidden rounded-full bg-foreground/10 text-[9px] font-bold text-foreground/60"
      style={{ width: size, height: size }}
    >
      {photo ? (
        <Image
          src={photo}
          alt=""
          fill
          sizes={`${size}px`}
          className="object-cover object-[50%_25%]"
        />
      ) : (
        initials(name)
      )}
    </span>
  )
}

function SessionCard({ s, dim }: { s: AgendaSession; dim?: boolean }) {
  const t = trilhaById[s.track]
  const photo = s.speakerId ? photoById.get(s.speakerId) : undefined
  return (
    <div
      className={`flex h-full flex-col gap-3 rounded-xl border p-3.5 transition-opacity duration-300 ${
        s.community || s.curation
          ? "border-dashed border-foreground/20 bg-transparent"
          : "border-foreground/10 bg-card"
      } ${dim ? "opacity-25" : ""}`}
      style={{ borderLeft: `3px solid ${t.color}` }}
    >
      <div
        className="font-mono text-[10px] font-bold tracking-[0.12em] lg:hidden"
        style={{ color: trackTextVar(s.track) }}
      >
        {s.track} · {trackSpace[s.track].toUpperCase()}
      </div>
      <div
        className={`text-[13px] font-semibold leading-[1.35] tracking-[-0.01em] ${
          s.curation ? "text-foreground/50" : "text-foreground"
        }`}
      >
        {s.title}
      </div>
      <div className="mt-auto flex items-center gap-2">
        {s.curation ? (
          <span className="grid h-[26px] w-[26px] shrink-0 place-items-center rounded-full bg-foreground/[0.06]">
            <CircleDashed className="h-3.5 w-3.5 text-foreground/50" />
          </span>
        ) : s.community ? (
          <span className="grid h-[26px] w-[26px] shrink-0 place-items-center rounded-full bg-foreground/[0.06]">
            <HandHeart className="h-3.5 w-3.5 text-foreground/50" />
          </span>
        ) : (
          <Avatar name={s.who} photo={photo} />
        )}
        <span className="text-[12px] leading-tight text-foreground/60">{s.who}</span>
      </div>
    </div>
  )
}

function LabCard({ item, dim }: { item: AgendaLabItem; dim?: boolean }) {
  const photo = item.speakerId ? photoById.get(item.speakerId) : undefined
  if (item.prep) {
    return (
      <div
        className={`flex h-full flex-col gap-1.5 rounded-xl border border-dashed border-foreground/15 p-3.5 transition-opacity duration-300 ${
          dim ? "opacity-25" : ""
        }`}
      >
        <div className="flex items-center gap-1.5 font-mono text-[10px] font-bold tracking-[0.12em] text-foreground/40">
          <FlaskConical className="h-3 w-3" />
          {item.tag}
        </div>
        <div className="text-[12px] leading-[1.35] text-foreground/50">{item.title}</div>
      </div>
    )
  }
  return (
    <div
      className={`flex h-full flex-col gap-3 rounded-xl border border-foreground/10 bg-card p-3.5 transition-opacity duration-300 ${
        dim ? "opacity-25" : ""
      }`}
      style={{ borderLeft: `3px solid ${WORKSHOP_COLOR}` }}
    >
      <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-0.5">
        <span
          className="font-mono text-[10px] font-bold tracking-[0.12em]"
          style={{ color: WORKSHOP_TEXT }}
        >
          {item.tag}
        </span>
        <span className="font-mono text-[10px] text-foreground/45">{item.time}</span>
      </div>
      <div className="text-[13px] font-semibold leading-[1.35] tracking-[-0.01em] text-foreground">
        {item.title}
      </div>
      <div className="mt-auto flex items-center gap-2">
        <Avatar name={item.who} photo={photo} />
        <span className="text-[12px] leading-tight text-foreground/60">{item.who}</span>
      </div>
    </div>
  )
}

const geralIcon = { welcome: Sparkles, coffee: Coffee, lunch: Utensils } as const

function GeralCard({ b }: { b: AgendaGeral }) {
  const Icon = b.icon ? geralIcon[b.icon] : null
  const photo = b.speakerId ? photoById.get(b.speakerId) : undefined

  if (b.highlight) {
    return (
      <div className="h-full rounded-xl bg-gradient-to-br from-trilha-build via-trilha-build/30 to-trilha-scale/40 p-[1.5px]">
        <div className="flex h-full items-center gap-4 rounded-[10px] bg-card p-4">
          <Avatar name={b.subtitle ?? b.title} photo={photo} size={52} />
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 font-mono text-[10px] font-bold tracking-[0.14em] text-foreground/60">
              <Sparkles className="h-3 w-3 text-trilha-build" />
              {b.tag}
            </div>
            <div className="mt-1 text-[16px] font-bold leading-tight tracking-[-0.02em] md:text-[18px]">
              {b.title}
            </div>
            <div className="mt-0.5 text-[12.5px] text-foreground/60">{b.subtitle}</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-full items-center gap-3 rounded-xl border border-foreground/10 bg-foreground/[0.03] px-4 py-3">
      {Icon && <Icon className="h-4 w-4 shrink-0 text-foreground/40" />}
      <div className="min-w-0">
        <div className="text-[13.5px] font-semibold leading-tight tracking-[-0.01em]">
          {b.title}
        </div>
        <div className="mt-0.5 text-[12px] text-foreground/50">
          {[b.subtitle, b.space].filter(Boolean).join(" · ")}
        </div>
      </div>
    </div>
  )
}

const matchesSession = (f: Filter, s: AgendaSession) => f === "ALL" || f === s.track
const matchesLab = (f: Filter) => f === "ALL" || f === "WORKSHOP"

function DesktopGrid({ filter }: { filter: Filter }) {
  return (
    <div
      className="hidden gap-3 lg:grid"
      style={{ gridTemplateColumns: "88px repeat(3, minmax(0, 1fr)) minmax(0, 1.1fr)" }}
    >
      {/* cabeçalho das colunas */}
      {trackOrder.map((id) => (
        <div
          key={id}
          className="flex items-center gap-2 border-b-2 pb-3"
          style={{ gridRow: 1, gridColumn: trackColumn[id], borderColor: trilhaById[id].color }}
        >
          <span className="font-mono text-[11px] font-bold tracking-[0.14em]" style={{ color: trackTextVar(id) }}>
            {id}
          </span>
          <span className="text-[12px] text-foreground/45">{trackSpace[id]}</span>
        </div>
      ))}
      <div
        className="flex items-center gap-2 border-b-2 pb-3"
        style={{ gridRow: 1, gridColumn: LAB_COLUMN, borderColor: WORKSHOP_COLOR }}
      >
        <span className="font-mono text-[11px] font-bold tracking-[0.14em]" style={{ color: WORKSHOP_TEXT }}>
          WORKSHOPS
        </span>
        <span className="text-[12px] text-foreground/45">Laboratório</span>
      </div>

      {agenda.map((b, i) => {
        const row = i + 2
        const [start, end] = b.time.split(" – ")
        return (
          <div key={`time-${b.id}`} className="contents">
            <div
              className="pt-3 font-mono text-[11px] leading-[1.5] text-foreground/50"
              style={{ gridRow: row, gridColumn: 1 }}
            >
              {start}
              <br />
              <span className="text-foreground/30">{end}</span>
            </div>

            {b.kind === "geral" ? (
              <div
                // com `tracks` o laboratório tem workshop ao lado, mais alto: não estica o card
                className={b.span === "tracks" ? "self-start" : undefined}
                style={{
                  gridRow: row,
                  gridColumn: b.span === "tracks" ? "2 / 5" : "2 / 6",
                }}
              >
                <GeralCard b={b} />
              </div>
            ) : (
              b.sessions.map((s) => (
                <div key={`${b.id}-${s.track}`} style={{ gridRow: row, gridColumn: trackColumn[s.track] }}>
                  <SessionCard s={s} dim={!matchesSession(filter, s)} />
                </div>
              ))
            )}
          </div>
        )
      })}

      {labItems.map((item) => (
        <div
          key={item.id}
          style={{ gridRow: `${rowOf(item.from)} / ${rowOf(item.to) + 1}`, gridColumn: LAB_COLUMN }}
        >
          <LabCard item={item} dim={!matchesLab(filter)} />
        </div>
      ))}
    </div>
  )
}

function MobileList({ filter }: { filter: Filter }) {
  return (
    <div className="flex flex-col gap-4 lg:hidden">
      {agenda.map((b: AgendaBlock) => {
        const [start, end] = b.time.split(" – ")
        const sessions = b.kind === "sessoes" ? b.sessions.filter((s) => matchesSession(filter, s)) : []
        const lab = labItems.filter((l) => l.from === b.id && matchesLab(filter))
        // com filtro ativo, esconde blocos sem nada pra mostrar (geral sempre aparece)
        if (b.kind === "sessoes" && sessions.length === 0 && lab.length === 0) return null
        return (
          <div key={b.id} className="flex gap-3">
            <div className="w-[52px] shrink-0 pt-3 font-mono text-[11px] leading-[1.5] text-foreground/50">
              {start}
              <br />
              <span className="text-foreground/30">{end}</span>
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-2">
              {b.kind === "geral" && <GeralCard b={b} />}
              {sessions.map((s) => (
                <SessionCard key={`${b.id}-${s.track}`} s={s} />
              ))}
              {lab.map((l) => (
                <LabCard key={l.id} item={l} />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export function ScheduleSection() {
  const [filter, setFilter] = useState<Filter>("ALL")

  return (
    <section
      id="programacao"
      className="border-t border-foreground/[0.06] bg-card/40"
    >
      <div className="mx-auto max-w-[1280px] px-6 py-20 md:py-28">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
          className="mb-10 flex flex-wrap items-end justify-between gap-6"
        >
          <div>
            <motion.div
              variants={staggerItem}
              className="mb-4 font-mono text-[11px] tracking-[0.16em] text-foreground/40"
            >
              07 NOV 2026 • SENAI LAURO DE FREITAS
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-[36px] font-bold leading-[0.95] tracking-[-0.04em] md:text-[54px]"
            >
              Programação <span className="text-foreground/30">do dia.</span>
            </motion.h2>
          </div>
          <motion.p
            variants={staggerItem}
            className="max-w-[380px] text-[14px] leading-[1.6] text-foreground/50"
          >
            Três trilhas em paralelo, workshops no laboratório e intervalos pra
            networking. Você circula livre.
          </motion.p>
        </motion.div>

        <div
          role="group"
          aria-label="Filtrar programação por trilha"
          className="mb-8 flex flex-wrap gap-2"
        >
          {filters.map((f) => {
            const active = filter === f.id
            return (
              <button
                key={f.id}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(f.id)}
                className={`h-9 rounded-full border px-4 text-[13px] font-medium transition ${
                  active
                    ? "border-foreground bg-foreground text-background"
                    : "border-foreground/15 text-foreground/70 hover:border-foreground/30"
                }`}
              >
                {f.label}
              </button>
            )
          })}
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          variants={fadeUp}
        >
          <DesktopGrid filter={filter} />
          <MobileList filter={filter} />
        </motion.div>

        <p className="mt-8 text-[12px] text-foreground/40">
          Grade sujeita a ajustes até o dia do evento. Workshops no {labSpace}.
        </p>
      </div>
    </section>
  )
}

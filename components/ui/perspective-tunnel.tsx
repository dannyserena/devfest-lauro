"use client"

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion"
import { Camera } from "lucide-react"
import { useEffect, useRef, useState, type ReactNode } from "react"

export interface TunnelItem {
  /** Caminho da imagem. Sem `src`, renderiza um card placeholder "a revelar". */
  src?: string
  title: string
  alt?: string
}

interface TunnelCardData {
  item: TunnelItem
  angleCos: number
  angleSin: number
  radiusFactorX: number
  radiusFactorY: number
  rotationZ: number
  index: number
}

interface Stage {
  width: number
  height: number
  isMobile: boolean
}

const SPRING = { stiffness: 60, damping: 25, mass: 0.5 }
// Cores do Google (trilhas) reaproveitadas nos placeholders.
const TILE_COLORS = [
  "var(--color-trilha-scale)",
  "var(--color-trilha-secure)",
  "var(--color-trilha-build)",
  "var(--color-trilha-community)",
]

function buildCards(items: TunnelItem[]): TunnelCardData[] {
  return items.map((item, i) => {
    // Ângulo áureo: distribui os cards em espiral sem se sobreporem.
    const a = i * 137.5 * (Math.PI / 180)
    return {
      item,
      angleCos: Math.cos(a),
      angleSin: Math.sin(a),
      radiusFactorX: 0.28 + (i % 3) * 0.08,
      radiusFactorY: 0.26 + (i % 2) * 0.09,
      rotationZ: (i % 2 === 0 ? 1 : -1) * (3 + (i % 5) * 2),
      index: i,
    }
  })
}

function CardFace({ item, index }: { item: TunnelItem; index: number }) {
  const color = TILE_COLORS[index % TILE_COLORS.length]
  return (
    <div className="group relative h-full w-full overflow-hidden rounded-2xl bg-foreground/10 shadow-2xl shadow-black/30 ring-1 ring-foreground/15 transition-all duration-500 hover:ring-trilha-scale/70">
      {item.src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.src}
          alt={item.alt ?? item.title}
          draggable={false}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      ) : (
        <div
          aria-hidden="true"
          className="grid h-full w-full place-items-center"
          style={{
            background: `radial-gradient(circle at 30% 20%, color-mix(in srgb, ${color} 35%, transparent), transparent 70%), repeating-linear-gradient(0deg, transparent 0 11px, color-mix(in srgb, ${color} 12%, transparent) 11px 12px)`,
          }}
        >
          <Camera className="h-8 w-8 opacity-40" style={{ color }} />
        </div>
      )}
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/10 to-transparent p-4 sm:p-5">
        <span className="font-mono text-xs uppercase tracking-widest text-white/95 drop-shadow-md sm:text-sm">
          {item.title}
        </span>
      </div>
    </div>
  )
}

function TunnelCard({
  card,
  progress,
  pointer,
  total,
  stage,
}: {
  card: TunnelCardData
  progress: MotionValue<number>
  pointer: { x: MotionValue<number>; y: MotionValue<number> }
  total: number
  stage: Stage
}) {
  const span = 0.55
  const start = (card.index / total) * (1 - span)
  const local = useTransform(progress, [start, start + span], [0, 1])

  const z = useTransform(local, [0, 1], [stage.isMobile ? -1200 : -1700, stage.isMobile ? 350 : 500])
  const opacity = useTransform(local, [0, 0.18, 0.82, 0.98], [0, 1, 1, 0])

  const width = stage.isMobile
    ? Math.max(130, Math.min(180, stage.width * 0.38))
    : Math.max(180, Math.min(270, stage.width * 0.18))

  const baseX = card.angleCos * stage.width * card.radiusFactorX
  const baseY = card.angleSin * stage.height * card.radiusFactorY
  const pan = stage.isMobile ? 20 : 45

  const transform = useTransform([z, pointer.x, pointer.y], ([cz, px, py]: number[]) => {
    return `translate3d(calc(-50% + ${baseX - px * pan}px), calc(-50% + ${baseY - py * pan}px), ${cz}px) rotateZ(${card.rotationZ}deg)`
  })

  return (
    <motion.div
      style={{ width, transform, opacity, zIndex: card.index + 1 }}
      className="pointer-events-auto absolute left-1/2 top-1/2 aspect-[4/5] select-none will-change-transform"
    >
      <CardFace item={card.item} index={card.index} />
    </motion.div>
  )
}

interface PerspectiveTunnelProps {
  items: TunnelItem[]
  /** Conteúdo central (título) — some conforme o túnel avança. */
  intro: ReactNode
  /** Conteúdo que surge ao final do túnel. */
  outro?: ReactNode
  /** Altura da "pista" de scroll; quanto maior, mais lento o voo. */
  scrollLength?: string
}

/**
 * Túnel 3D guiado pelo scroll da página (sticky + useScroll), sem sequestrar
 * a roda do mouse: o usuário continua rolando a página normalmente.
 */
export function PerspectiveTunnel({ items, intro, outro, scrollLength = "320vh" }: PerspectiveTunnelProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const cards = useRef(buildCards(items)).current
  const [stage, setStage] = useState<Stage>({ width: 1440, height: 900, isMobile: false })

  useEffect(() => {
    const update = () =>
      setStage({ width: window.innerWidth, height: window.innerHeight, isMobile: window.innerWidth < 768 })
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start start", "end end"] })
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 30, restDelta: 0.0001 })

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const pointer = { x: useSpring(rawX, SPRING), y: useSpring(rawY, SPRING) }
  useEffect(() => {
    if (reduce) return
    const onMove = (e: PointerEvent) => {
      rawX.set((e.clientX / window.innerWidth - 0.5) * 2)
      rawY.set((e.clientY / window.innerHeight - 0.5) * 2)
    }
    window.addEventListener("pointermove", onMove, { passive: true })
    return () => window.removeEventListener("pointermove", onMove)
  }, [reduce, rawX, rawY])

  const titleScale = useTransform(progress, [0, 0.4, 0.8], [0.7, 1, 1.3])
  const titleOpacity = useTransform(progress, [0, 0.1, 0.65, 0.8], [0.3, 1, 1, 0])
  const hintOpacity = useTransform(progress, [0, 0.1], [1, 0])
  const outroOpacity = useTransform(progress, [0.82, 0.95], [0, 1])

  // Movimento reduzido: sem túnel, só uma grade estática das fotos.
  if (reduce) {
    return (
      <div className="mx-auto max-w-[1280px] px-6 py-16">
        <div className="mb-12 flex flex-col items-center text-center">{intro}</div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {cards.map((c) => (
            <div key={c.index} className="aspect-[4/5]">
              <CardFace item={c.item} index={c.index} />
            </div>
          ))}
        </div>
        {outro && <div className="mt-12 flex flex-col items-center text-center">{outro}</div>}
      </div>
    )
  }

  return (
    <div ref={trackRef} style={{ height: scrollLength }} className="relative">
      <div
        className="sticky top-0 flex h-[100svh] w-full items-center justify-center overflow-hidden"
        style={{ perspective: stage.isMobile ? "900px" : "1200px", transformStyle: "preserve-3d" }}
      >
        <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:radial-gradient(color-mix(in_srgb,var(--foreground)_22%,transparent)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_60%,transparent_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,color-mix(in_srgb,var(--color-trilha-scale)_16%,transparent)_0%,transparent_70%)]" />
        <div className="pointer-events-none absolute h-[48vmin] w-[48vmin] rounded-full border border-trilha-scale/20" />
        <div className="pointer-events-none absolute h-[76vmin] w-[76vmin] rounded-full border border-dashed border-foreground/10" />

        <motion.div
          style={{ scale: titleScale, opacity: titleOpacity }}
          className="pointer-events-none z-0 flex max-w-xl flex-col items-center px-6 text-center"
        >
          {intro}
        </motion.div>

        {outro && (
          <motion.div
            style={{ opacity: outroOpacity }}
            className="pointer-events-none absolute inset-0 z-30 flex flex-col items-center justify-center px-6 text-center"
          >
            {outro}
          </motion.div>
        )}

        <motion.div
          style={{ opacity: hintOpacity }}
          className="pointer-events-none absolute bottom-8 z-20 flex flex-col items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-foreground/50"
        >
          <span>Role para viajar</span>
          <div className="h-6 w-px bg-gradient-to-b from-trilha-scale to-transparent" />
        </motion.div>

        <div className="pointer-events-none absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
          {cards.map((card) => (
            <TunnelCard key={card.index} card={card} progress={progress} pointer={pointer} total={cards.length} stage={stage} />
          ))}
        </div>
      </div>
    </div>
  )
}

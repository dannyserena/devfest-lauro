"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

const POSTER_SRC = "/images/hero_devfestlauro-poster.jpg"
const VIDEO_SOURCES = [
  { src: "/assets/hero-animation/hero-boardwalk.webm", type: "video/webm" },
  { src: "/hero_video_devfest.mp4", type: "video/mp4" },
] as const

// O clipe fonte não fecha um loop perfeito (câmera avança ao longo do
// calçadão), então em vez de confiar num corte seco no `loop` nativo,
// mantemos duas cópias do vídeo e, pouco antes do vídeo ativo terminar,
// a outra já entra tocando por baixo e cross-fade dissolve uma na outra —
// aí o corte fica escondido dentro da transição.
const CROSSFADE_SECONDS = 1

interface NetworkInformation {
  saveData?: boolean
  effectiveType?: string
}

function isSlowConnection() {
  const connection = (navigator as Navigator & { connection?: NetworkInformation }).connection
  if (!connection) return false
  return Boolean(connection.saveData) || /2g/.test(connection.effectiveType ?? "")
}

export function HeroVideoBackground({ className }: { className?: string }) {
  const videoRefs = [useRef<HTMLVideoElement>(null), useRef<HTMLVideoElement>(null)] as const
  const [enableVideo, setEnableVideo] = useState(false)
  const [activeIndex, setActiveIndex] = useState<0 | 1>(0)
  const isHandingOffRef = useRef(false)

  // Checagem síncrona (mediaquery + conexão) num único efeito: evita que um
  // segundo render ligue o vídeo por um instante antes de desligar de novo,
  // o que já dispararia o download do arquivo sem chance de cancelar.
  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)")
    const evaluate = () => setEnableVideo(!mql.matches && !isSlowConnection())
    evaluate()
    mql.addEventListener("change", evaluate)
    return () => mql.removeEventListener("change", evaluate)
  }, [])

  // Dispara a troca de vídeo ativo quando faltam CROSSFADE_SECONDS pro fim.
  useEffect(() => {
    if (!enableVideo) return
    const current = videoRefs[activeIndex].current
    if (!current) return

    isHandingOffRef.current = false
    current.currentTime = 0
    current.play().catch(() => {})

    const onTimeUpdate = () => {
      if (isHandingOffRef.current) return
      const { duration, currentTime } = current
      if (!duration || Number.isNaN(duration)) return
      if (duration - currentTime <= CROSSFADE_SECONDS) {
        isHandingOffRef.current = true
        const next = videoRefs[1 - activeIndex].current
        if (next) {
          next.currentTime = 0
          next.play().catch(() => {})
        }
        setActiveIndex((i) => (1 - i) as 0 | 1)
      }
    }

    // Rede de segurança: se por algum motivo o timeupdate não pegar a
    // janela de crossfade a tempo (ex.: metadata atrasada), o `ended`
    // ainda garante que o loop continue, mesmo que sem a dissolve suave.
    const onEnded = () => {
      current.currentTime = 0
      current.play().catch(() => {})
    }

    current.addEventListener("timeupdate", onTimeUpdate)
    current.addEventListener("ended", onEnded)
    return () => {
      current.removeEventListener("timeupdate", onTimeUpdate)
      current.removeEventListener("ended", onEnded)
    }
  }, [enableVideo, activeIndex])

  // Depois que o crossfade termina visualmente, pausa e rebobina o vídeo
  // que saiu de cena — ele fica pronto pra ser a próxima ponta do loop.
  useEffect(() => {
    if (!enableVideo) return
    const outgoingIndex = (1 - activeIndex) as 0 | 1
    const timer = window.setTimeout(() => {
      const outgoing = videoRefs[outgoingIndex].current
      if (outgoing) {
        outgoing.pause()
        outgoing.currentTime = 0
      }
    }, CROSSFADE_SECONDS * 1000)
    return () => window.clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, enableVideo])

  useEffect(() => {
    if (!enableVideo) return
    const onVisibilityChange = () => {
      if (document.hidden) {
        videoRefs.forEach((ref) => ref.current?.pause())
      } else {
        videoRefs[activeIndex].current?.play().catch(() => {})
      }
    }
    document.addEventListener("visibilitychange", onVisibilityChange)
    return () => document.removeEventListener("visibilitychange", onVisibilityChange)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enableVideo, activeIndex])

  return (
    <div className={className}>
      {([0, 1] as const).map((i) => (
        <motion.video
          key={i}
          ref={videoRefs[i]}
          className="absolute inset-0 h-full w-full object-cover object-top"
          initial={false}
          animate={{ opacity: i === activeIndex ? 1 : 0 }}
          transition={{ duration: CROSSFADE_SECONDS, ease: "linear" }}
          muted
          playsInline
          preload={enableVideo ? "auto" : "none"}
          poster={i === 0 ? POSTER_SRC : undefined}
          aria-hidden="true"
        >
          {enableVideo &&
            VIDEO_SOURCES.map((source) => (
              <source key={source.src} src={source.src} type={source.type} />
            ))}
        </motion.video>
      ))}
      {/* Véu de contraste: mantém o vídeo praticamente intacto até bem perto
          do rodapé, só clareando o suficiente pra legibilidade do
          subtítulo/CTA/stats sobre grama e calçadão — sem lavar a imagem
          inteira de branco. */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-45% via-white/25 via-78% to-background to-100%" />
    </div>
  )
}

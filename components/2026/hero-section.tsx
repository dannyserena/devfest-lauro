"use client"

import { HeroContent } from "@/components/2026/hero/hero-content"
import { HeroVideoBackground } from "@/components/2026/hero/hero-video-background"
import { StatsGrid } from "@/components/2026/hero/stats-grid"

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
      {/* Fallback instantâneo: pinta no primeiro frame, antes do poster/vídeo
          carregarem, e continua visível nas bordas/gradiente inferior do vídeo. */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_0%,rgba(244,180,0,0.15),transparent_60%),radial-gradient(40%_50%_at_90%_20%,rgba(66,133,244,0.2),transparent),radial-gradient(35%_50%_at_10%_30%,rgba(234,67,53,0.18),transparent)]" />

      <HeroVideoBackground className="absolute inset-x-0 top-0 h-[560px] md:h-[680px]" />

      <div className="relative mx-auto max-w-[1280px] px-6 pt-16 md:pt-24 pb-8">
        <HeroContent />
        <StatsGrid />
      </div>

      <div className="relative border-y border-foreground/[0.06] overflow-hidden">
        <div className="flex w-max animate-[ticker_30s_linear_infinite] motion-reduce:animate-none">
          {Array.from({ length: 2 }).map((_, row) => (
            <div key={row} className="flex items-center gap-10 pr-10 py-3">
              {tickerWords.map((w) => (
                <span
                  key={`${row}-${w}`}
                  className="flex items-center gap-10 font-mono text-[12px] tracking-[0.18em] text-foreground/25"
                >
                  {w}
                  <span className="w-1 h-1 rounded-full bg-foreground/20" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

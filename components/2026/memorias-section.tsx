"use client"

import { PerspectiveTunnel } from "@/components/ui/perspective-tunnel"
import { memorias } from "@/content/2026/memorias"

export function MemoriasSection() {
  return (
    <section id="memorias" aria-label="Álbum de memórias do DevFest 2026">
      <PerspectiveTunnel
        items={memorias}
        intro={
          <>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.4em] text-trilha-scale">
              $ git log --memories
            </p>
            <h2 className="text-5xl font-bold leading-[0.9] tracking-tighter sm:text-7xl md:text-8xl">
              OBRIGADO,
              <br />
              <span className="bg-[image:var(--brand-gradient)] bg-clip-text text-transparent">BUILDERS.</span>
            </h2>
            <p className="mt-4 max-w-[38ch] text-sm font-light text-foreground/60 sm:text-base">
              Mais de 200 pessoas fizeram o DevFest Lauro de Freitas 2026 acontecer. Role a página e atravesse
              o túnel das nossas memórias.
            </p>
          </>
        }
        outro={
          <>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.4em] text-trilha-community">
              exit code 0
            </p>
            <p className="text-4xl font-bold tracking-tighter sm:text-6xl">
              Até a próxima <span className="bg-[image:var(--brand-gradient)] bg-clip-text text-transparent">build.</span>
            </p>
          </>
        }
      />
    </section>
  )
}

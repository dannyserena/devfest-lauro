import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-background">
      <div className="mx-auto max-w-[1280px] px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex gap-[3px]">
                <span className="w-2 h-2 rounded-full bg-trilha-scale" />
                <span className="w-2 h-2 rounded-full bg-trilha-secure" />
                <span className="w-2 h-2 rounded-full bg-trilha-build" />
                <span className="w-2 h-2 rounded-full bg-trilha-community" />
              </div>
              <span className="font-black tracking-[-0.02em]">
                DevFest Lauro de Freitas
              </span>
            </div>
            <div className="mt-3 text-[13px] leading-[1.5] text-foreground/45 max-w-[320px]">
              Uma iniciativa GDG Lauro de Freitas. Organizado pela comunidade,
              para a comunidade. Não afiliado ao Google LLC.
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-[13px]">
            <div>
              <div className="font-mono text-[11px] tracking-[0.14em] text-foreground/30 mb-3">
                NAVEGAÇÃO
              </div>
              <div className="space-y-2 text-foreground/60">
                <a href="#trilhas" className="block hover:text-foreground">
                  Trilhas
                </a>
                <a href="#local" className="block hover:text-foreground">
                  Local
                </a>
                <a
                  href="#patrocinadores"
                  className="block hover:text-foreground"
                >
                  Patrocinadores
                </a>
                <Link href="/2025" className="block hover:text-foreground">
                  Edição 2025
                </Link>
              </div>
            </div>
            <div>
              <div className="font-mono text-[11px] tracking-[0.14em] text-foreground/30 mb-3">
                CONTATO
              </div>
              <div className="space-y-2 text-foreground/60">
                <a
                  href="mailto:gdg@laurodefreitas.dev"
                  className="block hover:text-foreground"
                >
                  gdg@laurodefreitas.dev
                </a>
                <a href="#" className="block hover:text-foreground">
                  Seja voluntário
                </a>
                <a href="#" className="block hover:text-foreground">
                  Código de conduta
                </a>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="rounded-2xl bg-card border border-foreground/10 p-4">
                <div className="font-mono text-[10px] tracking-[0.12em] text-foreground/30">
                  STATUS DO EVENTO
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-trilha-community animate-pulse" />
                  <span className="text-[13px] font-medium">
                    Proposta visual v1 • Sprint em andamento
                  </span>
                </div>
                <div className="mt-3 text-[11px] leading-[1.4] text-foreground/40">
                  Data: 21 Nov 2026 • Local: SENAI Lauro • 200+ builders
                  esperados
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-foreground/10 flex flex-col md:flex-row justify-between gap-3 font-mono text-[11px] tracking-[0.08em] text-foreground/25">
          <span>
            © 2026 GDG Lauro de Freitas • Feito com ♥ e muito café na RMS
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-[2px] bg-trilha-scale inline-block" />
            <span className="w-3 h-[2px] bg-trilha-secure inline-block" />
            <span className="w-3 h-[2px] bg-trilha-build inline-block" />
            <span className="w-3 h-[2px] bg-trilha-community inline-block" />
            BUILD SECURE SCALE
          </span>
        </div>
      </div>
    </footer>
  )
}

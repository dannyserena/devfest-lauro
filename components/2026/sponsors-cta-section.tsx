export function SponsorsCtaSection() {
  return (
    <section id="patrocinadores" className="mx-auto max-w-[1280px] px-6 py-20">
      <div className="rounded-[28px] bg-trilha-build p-[1px]">
        <div className="rounded-[27px] bg-trilha-build text-black p-8 md:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div>
            <div className="font-mono text-[11px] tracking-[0.16em] text-black/60 font-bold">
              PATROCINADORES • COTAS ABERTAS
            </div>
            <h3 className="mt-3 text-[28px] md:text-[36px] font-black leading-[0.95] tracking-[-0.03em] max-w-[520px]">
              Conecte sua marca a quem está construindo o futuro da Bahia.
            </h3>
            <p className="mt-3 text-[14px] leading-[1.5] text-black/60 max-w-[460px]">
              200+ builders qualificados, alta visibilidade, geração de leads
              real e associação a Google Developers Group.
            </p>
          </div>
          <div className="flex flex-col gap-3 shrink-0">
            <a
              href="mailto:gdg@laurodefreitas.dev?subject=Media%20Kit%20DevFest%202026"
              className="h-12 px-7 rounded-full bg-black text-trilha-build font-bold text-[14px] inline-flex items-center justify-center hover:bg-card transition"
            >
              Baixar media kit
            </a>
            <span className="font-mono text-[11px] text-black/50 text-center">
              3 cotas Diamond • 6 Gold • 8 Community
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

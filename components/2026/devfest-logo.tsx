import Image from "next/image"

interface DevFestLogoProps {
  className?: string
}

/**
 * Lockup oficial "DevFest Lauro de Freitas 2026 | GDG". O PNG original vem
 * com fundo branco e texto preto; geramos duas versões com fundo
 * transparente — uma com o texto escuro (tema claro) e outra com o texto
 * branco (tema escuro) — e alternamos pela classe .theme-2026-dark no <html>.
 * `className` controla a altura (a largura segue a proporção 955×249).
 */
export function DevFestLogo({ className = "h-10" }: DevFestLogoProps) {
  return (
    <span className={`relative inline-block aspect-[955/249] shrink-0 ${className}`}>
      <Image
        src="/images/2026/devfest-lauro-2026-logo.png"
        alt="DevFest Lauro de Freitas 2026 — Google Developer Groups"
        fill
        priority
        sizes="200px"
        className="object-contain [.theme-2026-dark_&]:hidden"
      />
      <Image
        src="/images/2026/devfest-lauro-2026-logo-dark.png"
        alt="DevFest Lauro de Freitas 2026 — Google Developer Groups"
        fill
        priority
        sizes="200px"
        className="object-contain hidden [.theme-2026-dark_&]:block"
      />
    </span>
  )
}

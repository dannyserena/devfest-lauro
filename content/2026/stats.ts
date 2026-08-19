import type { LucideIcon } from "lucide-react"
import { Layers, MicVocal, Sparkles, Users } from "lucide-react"

export interface EdicaoStat {
  n: string
  l: string
  icon: LucideIcon
}

// Números da edição 2025 — ajustar quando o relatório final do evento
// (ficha de credenciamento + contagem de ingressos Sympla) for fechado.
export const stats2025: EdicaoStat[] = [
  { n: "200+", l: "Devs", icon: Users },
  { n: "3", l: "Trilhas", icon: Layers },
  { n: "15", l: "Palestrantes", icon: MicVocal },
  { n: "SOLD OUT", l: "Ingressos", icon: Sparkles },
]

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
  { n: "SOLD OUT", l: "Ingressos esgotados", icon: Sparkles },
  { n: "200+", l: "Builders conectados", icon: Users },
  { n: "15+", l: "Especialistas no palco", icon: MicVocal },
  { n: "10h+", l: "Conteúdo hands-on", icon: Layers },
]

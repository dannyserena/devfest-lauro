export interface Lote {
  /** texto do botão de ingressos */
  label: string
  /** preço mostrado no botão, quando já definido */
  preco?: string
  /** selo vermelho no canto do botão */
  selo?: string
}

const LOTE_2: Lote = { label: "Garantir ingresso 2º lote", selo: "ÚLTIMAS UNIDADES" }
const LOTE_3: Lote = { label: "Garantir ingresso 3º lote", preco: "R$ 50" }

// Virada do 2º para o 3º lote: 1º/nov/2026 00:00, horário de Brasília/Bahia (UTC-3).
const VIRADA_LOTE_3 = new Date("2026-11-01T00:00:00-03:00")

export function loteAtual(agora: Date = new Date()): Lote {
  return agora >= VIRADA_LOTE_3 ? LOTE_3 : LOTE_2
}

/** Lote que o servidor renderiza (HTML estático); o navegador corrige com loteAtual(). */
export const LOTE_INICIAL = LOTE_2

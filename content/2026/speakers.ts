export interface Speaker {
  id: string
  name: string
  role: string
  company: string
  /** photo em /public/speakers/2026/<arquivo> */
  photo: string
  talk: string
  trilha: "BUILD" | "SECURE" | "SCALE"
}

// Vazio até o line-up 2026 ser confirmado (curadoria em andamento).
// Quando os palestrantes forem fechados, popular este array — o
// componente components/2026/speakers-section.tsx já sabe renderizar
// os cards reais assim que speakers.length > 0, sem precisar de
// nenhuma alteração de código.
export const speakers: Speaker[] = []

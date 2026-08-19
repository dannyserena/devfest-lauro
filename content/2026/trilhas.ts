import type { LucideIcon } from "lucide-react"
import { Hammer, Rocket, ShieldCheck } from "lucide-react"

export interface Trilha {
  id: "BUILD" | "SECURE" | "SCALE"
  numero: string
  /** Hex fixo — aplicado via style inline (Tailwind JIT não detecta
   *  classes montadas dinamicamente tipo `bg-trilha-${id}`). */
  color: string
  icon: LucideIcon
  headline: string
  desc: string
  tags: string[]
}

export const trilhas: Trilha[] = [
  {
    id: "BUILD",
    numero: "01",
    color: "#F4B400",
    icon: Hammer,
    headline: "De prompts a produtos.",
    desc: "Tire do playground e coloque em produção. Arquitetura de agentes, modelos, front e back de verdade.",
    tags: ["ADK", "Gemini 2.0", "Flutter", "Firebase", "Cloud Run", "Vertex AI"],
  },
  {
    id: "SECURE",
    numero: "02",
    color: "#EA4335",
    icon: ShieldCheck,
    headline: "Potência sem controle é risco.",
    desc: "Segurança, privacidade e confiança para sistemas que tomam decisões sozinhos.",
    tags: ["DevSecOps", "IAM", "LGPD", "Blockchain", "Model Armor", "OWASP LLM"],
  },
  {
    id: "SCALE",
    numero: "03",
    color: "#4285F4",
    icon: Rocket,
    headline: "Do localhost pro mundo.",
    desc: "Produto, distribuição e carreira. Como transformar código em empresa e em legado.",
    tags: ["Product-Led", "Arquitetura", "Growth", "WTM", "Carreira", "Liderança"],
  },
]

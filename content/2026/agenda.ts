export type AgendaTrack = "BUILD" | "SECURE" | "SCALE"

/** Sala fixa de cada trilha — vira o subtítulo do cabeçalho de coluna. */
export const trackSpace: Record<AgendaTrack, string> = {
  BUILD: "Auditório",
  SECURE: "Bloco C",
  SCALE: "Bloco A",
}

export const labSpace = "Laboratório de Informática"

export interface AgendaSession {
  track: AgendaTrack
  title: string
  who: string
  /** casa com content/2026/speakers.ts — puxa a foto do card */
  speakerId?: string
  /** pessoa sem entrada em speakers.ts: o card mostra as iniciais */
  person?: boolean
  /** espaço aberto sem palestrante (Q&A, mentoria) */
  community?: boolean
}

interface BlockBase {
  id: string
  /** "HH:MM – HH:MM" */
  time: string
}

export interface AgendaGeral extends BlockBase {
  kind: "geral"
  title: string
  subtitle?: string
  tag?: string
  space: string
  icon?: "welcome" | "coffee" | "lunch"
  speakerId?: string
  highlight?: boolean
  /** "tracks" deixa a coluna do laboratório livre pro workshop que atravessa o bloco */
  span?: "all" | "tracks"
}

export interface AgendaSessoes extends BlockBase {
  kind: "sessoes"
  /** sempre na ordem BUILD, SECURE, SCALE */
  sessions: AgendaSession[]
}

export type AgendaBlock = AgendaGeral | AgendaSessoes

/** Item do laboratório — pode atravessar vários blocos (`from` → `to`). */
export interface AgendaLabItem {
  id: string
  time: string
  from: string
  to: string
  tag: string
  title: string
  who: string
  speakerId?: string
  person?: boolean
  /** bastidores (preparação/testes): aparece discreto */
  prep?: boolean
}

// Fonte: "Grade DevFest Lauro de Freitas 2026.csv". Evento: sábado, 07/11/2026.
export const agenda: AgendaBlock[] = [
  {
    id: "credenciamento",
    kind: "geral",
    time: "08:30 – 09:00",
    title: "Credenciamento & Boas-vindas",
    subtitle: "Recepção dos participantes",
    space: "Auditório Unificado",
    icon: "welcome",
  },
  {
    id: "abertura",
    kind: "geral",
    time: "09:00 – 09:15",
    title: "Abertura Oficial do DevFest Lauro de Freitas 2026",
    subtitle: "Organização GDG & WTM",
    space: "Auditório Unificado",
  },
  {
    id: "keynote",
    kind: "geral",
    time: "09:15 – 10:00",
    tag: "KEYNOTE DE ABERTURA",
    title: "Novidades & Ecossistema Google",
    subtitle: "Ghabryel Henrique Ferreira (GDE Angular)",
    space: "Auditório Unificado",
    speakerId: "ghabryel-ferreira",
    highlight: true,
  },
  {
    id: "t1005",
    kind: "sessoes",
    time: "10:05 – 10:45",
    sessions: [
      {
        track: "BUILD",
        who: "Danielle Teixeira",
        speakerId: "danielle-teixeira",
        title: "Mobile Multimodal: Quando o Aplicativo Começa a Ver, Ouvir e Entender (SDCE)",
      },
      {
        track: "SECURE",
        who: "Marcus Vinicius",
        speakerId: "marcus-vinicius",
        title: "Potência sem controle é risco: Harness e Guardrails para domar a Era Agêntica",
      },
      {
        track: "SCALE",
        who: "Lucas Lion",
        speakerId: "lucas-lion",
        title: "Antes de criar mais uma classe: Usecases, Services, Repositories e responsabilidades no design de código",
      },
    ],
  },
  {
    id: "coffee-manha",
    kind: "geral",
    time: "10:45 – 11:05",
    title: "Coffee break da manhã & networking",
    subtitle: "20 min",
    space: "Área de Convivência",
    icon: "coffee",
  },
  {
    id: "t1105",
    kind: "sessoes",
    time: "11:05 – 11:45",
    sessions: [
      {
        track: "BUILD",
        who: "Eric Rosário",
        speakerId: "eric-rosario",
        title: "IA Agêntica na Prática: Conhecendo o Agentforce",
      },
      {
        track: "SECURE",
        who: "Amanda Couto",
        speakerId: "amanda-couto",
        title: "AI-Native by Design: por que segurança precisa nascer com o produto, não depois dele",
      },
      {
        track: "SCALE",
        who: "Emanuele Rangel",
        speakerId: "emanuele-rangel",
        title: "Refatoração Kamu: 10 Anos em 10 Dias",
      },
    ],
  },
  {
    id: "almoco",
    kind: "geral",
    time: "11:45 – 13:00",
    title: "Almoço & networking",
    space: "Praça de Alimentação / Externa",
    icon: "lunch",
  },
  {
    id: "t1300",
    kind: "sessoes",
    time: "13:00 – 13:40",
    sessions: [
      {
        track: "BUILD",
        who: "Elienaide Machado",
        speakerId: "elienaide-machado",
        title: "Do Prompt ao Produto: como transformar IA em soluções que realmente geram valor",
      },
      {
        track: "SECURE",
        who: "Isaac Santiago",
        person: true,
        title: "IA nas empresas: como proteger dados sem impedir a inovação",
      },
      {
        track: "SCALE",
        who: "Paulo Sampaio",
        person: true,
        title: "containers mais leves, apps mais resilientes",
      },
    ],
  },
  {
    id: "t1345",
    kind: "sessoes",
    time: "13:45 – 14:25",
    sessions: [
      {
        track: "BUILD",
        who: "Manoeli Morais",
        speakerId: "manoeli-morais",
        title: "Prompt é Diálogo: o que a Engenharia de Prompt tem a ensinar sobre Comunicação Humana",
      },
      {
        track: "SECURE",
        who: "Esdras Jesus",
        speakerId: "esdras-jesus",
        title: "Como arquivos .md se tornaram o cérebro do desenvolvimento",
      },
      {
        track: "SCALE",
        who: "Achilles Froes",
        speakerId: "achilles-froes",
        title: "Tudo que aprendi em 23 anos como Engenheiro de Software",
      },
    ],
  },
  {
    id: "t1430",
    kind: "sessoes",
    time: "14:30 – 15:10",
    sessions: [
      {
        track: "BUILD",
        who: "Poliana Lima",
        speakerId: "poliana-lima",
        title: "Do currículo à candidatura: construindo um agente de IA com n8n, LLMs e Human-in-the-Loop",
      },
      {
        track: "SECURE",
        who: "Brenda Costa",
        speakerId: "brenda-costa",
        title: "Do Design System ao código: como a IA está mudando a construção de interfaces",
      },
      {
        track: "SCALE",
        who: "Gabriel Maia",
        speakerId: "gabriel-maia",
        title: "LinkedIn além do currículo: como construir oportunidades através da sua presença profissional",
      },
    ],
  },
  {
    id: "coffee-tarde",
    kind: "geral",
    time: "15:10 – 15:30",
    title: "Coffee break da tarde & networking",
    subtitle: "20 min",
    space: "Área de Convivência",
    icon: "coffee",
  },
  {
    id: "t1530",
    kind: "sessoes",
    time: "15:30 – 16:10",
    sessions: [
      {
        track: "BUILD",
        who: "Tata Ribeiro",
        speakerId: "tata-ribeiro",
        title: "Do player ao builder: o que aprendemos formando novos talentos para a indústria de games",
      },
      {
        track: "SECURE",
        who: "Espaço Comunidade",
        community: true,
        title: "Q&A, discussões de DevSecOps e networking",
      },
      {
        track: "SCALE",
        who: "Mentoria & Liderança",
        community: true,
        title: "Discussões de arquitetura de software e carreira",
      },
    ],
  },
  {
    id: "encerramento",
    kind: "geral",
    time: "16:30 – 17:00",
    title: "Encerramento geral, sorteios & foto oficial",
    subtitle: "Organização GDG & WTM",
    space: "Auditório Unificado",
  },
]

export const labItems: AgendaLabItem[] = [
  {
    id: "lab-prep-1",
    time: "10:05 – 10:45",
    from: "t1005",
    to: "t1005",
    tag: "BASTIDORES",
    title: "Preparação e testes do laboratório",
    who: "Equipe Técnica",
    prep: true,
  },
  {
    id: "lab-prep-2",
    time: "11:05 – 11:45",
    from: "t1105",
    to: "t1105",
    tag: "BASTIDORES",
    title: "Testes de ambiente dos workshops",
    who: "Equipe Técnica",
    prep: true,
  },
  {
    id: "workshop-1",
    time: "13:00 – 14:25",
    from: "t1300",
    to: "t1345",
    tag: "WORKSHOP 1",
    title: "Transformando Dados em Produto - Governança Automatizada com Power BI, MCP e Antigravity",
    who: "Bernardo Nogueira",
    speakerId: "bernardo-nogueira",
  },
  {
    id: "workshop-2",
    time: "15:30 – 16:30",
    from: "t1530",
    to: "t1530",
    tag: "WORKSHOP 2",
    title: "Engenharia do Caos e escalabilidade de sistemas distribuídos com GCP: uma abordagem pedagógica",
    who: "Rafael Levi",
    speakerId: "rafael-levi",
  },
]

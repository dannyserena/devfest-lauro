export interface Speaker {
  id: string
  name: string
  role: string
  company: string
  /** photo em /public/speakers/2026/<arquivo>; sem foto → card mostra as iniciais */
  photo?: string
  talk: string
  trilha: "BUILD" | "SECURE" | "SCALE"
}

// Primeira leva do line-up 2026, a partir das propostas confirmadas no CFP.
// Fotos baixadas das URLs enviadas no formulário (ou enviadas depois).
// Manoeli ainda sem foto acessível (pasta privada no Drive) — usa iniciais.
export const speakers: Speaker[] = [
  {
    id: "elienaide-machado",
    name: "Elienaide Machado",
    role: "Consultora de Tecnologia",
    company: "Machado Estratégia & Negócios",
    photo: "/speakers/2026/elienaide-machado.jpeg",
    talk: "Do Prompt ao Produto: como transformar IA em soluções que realmente geram valor",
    trilha: "BUILD",
  },
  {
    id: "eric-rosario",
    name: "Eric Rosário",
    role: "Senior Software Engineer",
    company: "Accenture",
    photo: "/speakers/2026/eric-rosario.jpeg",
    talk: "IA Agêntica na Prática: Conhecendo o Agentforce",
    trilha: "BUILD",
  },
  {
    id: "emanuele-rangel",
    name: "Emanuele Rangel",
    role: "Consultora de Desenvolvimento",
    company: "ThoughtWorks",
    photo: "/speakers/2026/emanuele-rangel.jpeg",
    talk: "Refatoração Kamu: 10 Anos em 10 Dias",
    trilha: "BUILD",
  },
  {
    id: "esdras-jesus",
    name: "Esdras Jesus",
    role: "Especialista de Sistemas",
    company: "Unidas",
    photo: "/speakers/2026/esdras-jesus.jpeg",
    talk: "Como arquivos .md se tornaram o cérebro do desenvolvimento",
    trilha: "BUILD",
  },
  {
    id: "tata-ribeiro",
    name: "Tata Ribeiro",
    role: "Fundadora & Gerente de Projetos",
    company: "Black XP",
    photo: "/speakers/2026/tata-ribeiro.jpeg",
    talk: "Do player ao builder: o que aprendemos formando novos talentos para a indústria de games",
    trilha: "SCALE",
  },
  {
    id: "danielle-teixeira",
    name: "Danielle Teixeira",
    role: "Consultora Mobile",
    company: "Freelancer",
    photo: "/speakers/2026/danielle-teixeira.jpeg",
    talk: "Mobile Multimodal: Quando o Aplicativo Começa a Ver, Ouvir e Entender",
    trilha: "BUILD",
  },
  {
    id: "manoeli-morais",
    name: "Manoeli Morais",
    role: "Instrutora e Treinadora",
    company: "Comunicação, Gestão & TI",
    talk: "Prompt é Diálogo: o que a Engenharia de Prompt tem a ensinar sobre Comunicação Humana",
    trilha: "SCALE",
  },
  {
    id: "gabriel-maia",
    name: "Gabriel Maia",
    role: "Desenvolvedor Full Stack",
    company: "Prefeitura de Lauro de Freitas",
    photo: "/speakers/2026/gabriel-maia.jpeg",
    talk: "LinkedIn além do currículo: como construir oportunidades através da sua presença profissional",
    trilha: "SCALE",
  },
  {
    id: "bernardo-nogueira",
    name: "Bernardo Nogueira",
    role: "Analista de Sistemas",
    company: "SESAB",
    photo: "/speakers/2026/bernardo-nogueira.jpeg",
    talk: "Transformando Dados em Produto: Governança Automatizada com Power BI, MCP e Antigravity",
    trilha: "SECURE",
  },
  {
    id: "lucas-lion",
    name: "Lucas Lion",
    role: "Analista de Sistemas",
    company: "Netra Tecnologia",
    photo: "/speakers/2026/lucas-lion.jpeg",
    talk: "A IA escreveu o código. Mas quem decidiu a arquitetura?",
    trilha: "SCALE",
  },
  {
    id: "achilles-froes",
    name: "Achilles Froes",
    role: "Tech Lead / Software Engineer",
    company: "Achilles",
    photo: "/speakers/2026/achilles-froes.jpeg",
    talk: "Tudo que aprendi em 23 anos como Engenheiro de Software",
    trilha: "SCALE",
  },
]

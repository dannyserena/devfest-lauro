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
    trilha: "SCALE",
  },
  {
    id: "esdras-jesus",
    name: "Esdras Jesus",
    role: "Especialista de Sistemas",
    company: "Unidas",
    photo: "/speakers/2026/esdras-jesus.jpeg",
    talk: "Como arquivos .md se tornaram o cérebro do desenvolvimento",
    trilha: "SECURE",
  },
  {
    id: "tata-ribeiro",
    name: "Tata Ribeiro",
    role: "Fundadora & Gerente de Projetos",
    company: "Black XP",
    photo: "/speakers/2026/tata-ribeiro.jpeg",
    talk: "Do player ao builder: o que aprendemos formando novos talentos para a indústria de games",
    trilha: "BUILD",
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
    photo: "/speakers/2026/manoeli-morais.jpeg",
    talk: "Prompt é Diálogo: o que a Engenharia de Prompt tem a ensinar sobre Comunicação Humana",
    trilha: "BUILD",
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
  {
    id: "brenda-costa",
    name: "Brenda Costa",
    role: "Desenvolvedora Front-end",
    company: "Target Sistemas",
    photo: "/speakers/2026/brenda-costa.jpeg",
    talk: "Do Design System ao código: como a IA está mudando a construção de interfaces",
    trilha: "SECURE",
  },
  {
    id: "poliana-lima",
    name: "Poliana Lima",
    role: "Desenvolvedora de Automações",
    company: "Squadra Digital",
    photo: "/speakers/2026/poliana-lima.jpeg",
    talk: "Do currículo à candidatura: construindo um agente de IA com n8n, LLMs e Human-in-the-Loop",
    trilha: "BUILD",
  },
  {
    id: "marcus-vinicius",
    name: "Marcus Vinicius",
    role: "Engenheiro de Software",
    company: "Elastic Code",
    photo: "/speakers/2026/marcus-vinicius.jpeg",
    talk: "Potência sem controle é risco: Harness e Guardrails para domar a Era Agêntica",
    trilha: "SECURE",
  },
  {
    id: "rafael-levi",
    name: "Rafael Levi",
    role: "Educador em Sistemas Distribuídos",
    company: "",
    photo: "/speakers/2026/rafael-levi.jpeg",
    talk: "Engenharia do Caos e escalabilidade de sistemas distribuídos com GCP: uma abordagem pedagógica",
    trilha: "SCALE",
  },
  {
    id: "amanda-couto",
    name: "Amanda Couto",
    role: "Senior Product Manager",
    company: "AI Product & Growth",
    photo: "/speakers/2026/amanda-couto.jpeg",
    talk: "AI-Native by Design: por que segurança precisa nascer com o produto, não depois dele",
    trilha: "SECURE",
  },
  {
    id: "breno-holanda",
    name: "Breno Holanda",
    role: "Cientista de Dados",
    company: "",
    photo: "/speakers/2026/breno-holanda.jpeg",
    talk: "O futuro da IA Generativa: tendências, desafios, impactos nas profissões e na sociedade",
    trilha: "BUILD",
  },
]

// Keynote fica fora da grade — tem card próprio, em destaque, no topo da seção.
export const keynote: Speaker = {
  id: "ghabryel-ferreira",
  name: "Ghabryel Henrique Ferreira",
  role: "AI Engineer",
  company: "Google Developer Expert Angular",
  photo: "/speakers/2026/ghabryel-ferreira.jpeg",
  talk: "Arquitetura Limpa no Frontend: Escalando Aplicações para o Mundo Real",
  trilha: "BUILD",
}

"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  ExternalLink,
  Users,
  FileText,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";

interface Speaker {
  id: string;
  name: string;
  title: string;
  company: string;
  bio: string;
  talkTitle: string;
  talkDescription: string;
  image: string;
  social: {
    linkedin?: string;
    github?: string;
    instagram?: string;
    website?: string;
  };
  tags: string[];
}

const speakers: Speaker[] = [
  {
    id: "1",
    name: "Lucas Lion",
    title: "Analista de Sistemas",
    company: "Netra Tecnologia",
    bio: "Sou Lucas Lion, analista de sistemas na NETRA com três anos de experiência em tecnologia e foco fullstack. Atuo desde 2024 como analista, após dois anos em suporte técnico desenvolvendo soluções para usuários. Estou concluindo ADS, treinando no Fullcycle, apaixonado por PHP e já representei a comunidade como embaixador no RogaDX 2025 e atualmente no DevFest Lauro de Freitas 2025.",
    talkTitle:
      "Conventional Commits: Facilitando colaboração e versionamento com commits estruturados",
    talkDescription:
      "Nesta palestra mostra como os Conventional Commits ajudam a padronizar mensagens, resolver problemas comuns de versionamento e melhorar a colaboração em equipe. Serão explicados os tipos de commits, benefícios, formas de implementação e ferramentas de apoio.",
    image: "/speakers/lucas-lion.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/lucas-lion-122b15189/",
      github: "https://github.com/Lucas-Lion",
      instagram: "https://www.instagram.com/lucas_lionv/",
    },
    tags: [],
  },
  {
    id: "2",
    name: "Breno Holanda",
    title: "Cientista de Dados",
    company: "Sistema Jornal do Commercio de Comunicação",
    bio: "Cientista de Dados e Professor Universitário. Atuo com Ciências de Dados focado em Inteligência Artificial e Machine Learning. Sou apaixonado pelo Sport Club do Recife e, nas horas vagas, gosto de assistir aos jogos do meu time e explorar novos hobbies ligados à tecnologia e inovação.",
    talkTitle: "Aplicando LLMs em projetos reais: Um agente de IA via WhatsApp",
    talkDescription:
      "Nesta palestra, você vai conhecer a arquitetura de um agente de IA que responde perguntas em linguagem natural via WhatsApp, gera queries SQL com OpenAI GPT-5 e consulta um banco de dados MySQL em tempo real. Um projeto prático que mostra como LLMs podem ser aplicadas de forma eficiente em fluxos de atendimento e consulta de dados.",
    image: "/speakers/breno.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/brenoholanda/",
    },
    tags: [],
  },
  {
    id: "3",
    name: "Elienaide Machado",
    title: "CEO na SS Software",
    company: "SS Software",
    bio: "Filha caçula de um casal com 5 filhas, a mais independente que cedo pensou em morar sozinha, em viajar, mas muito apegada a família. Esposa dedicada, profissional exemplar com foco na qualidade de entregas e satisfação do cliente. Tia amada e querida dos sobrinhos. Amo praia, bons restaurantes e estar com a família.",
    talkTitle:
      "Do Zero ao Lançamento: Como construir um software de sucesso para o varejo",
    talkDescription:
      "Nesta palestra mostra como criar software vai além do código, exigindo validação de mercado, equipe e visão de negócio. Com base no case do Themis Lojas, serão abordados desafios, estratégias e lições aprendidas para transformar ideias em produtos reais.",
    image: "/speakers/elienaide.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/elienaide-machado-8874b234",
    },
    tags: [],
  },
  {
    id: "4",
    name: "Ives Túlio",
    title: "Professor Pesquisador",
    company: "CIMATEC | FIAP",
    bio: "Professor pesquisador com sólida formação acadêmica e trajetória multidisciplinar, que integra a Química Computacional,  o campo da Inteligência Artificial e ensino. Formado em Química pela UFBA, possuo Doutorado e Mestrado pela mesma instituição e experiência profissional  no desenvolvimento de soluções tecnológicas baseadas em IA, pesquisa científica, ensino básico e superiror. Meu objetivo é contribuir com desenvolvimento e análise de projetos estratégicos, aliando rigor científico, experiência prática e compromisso com a educação e a pesquisa de excelência",
    talkTitle: "Build with ADK: Construindo Agentes de IA.",
    talkDescription:
      "Este workshop tem como objetivo introduzir os conceitos fundamentais sobre agentes de inteligência artificial e demonstrar, de forma prática, como desenvolver soluções utilizando o Agent Development Kit do Google. Na parte teórica, serão apresentados os principais conceitos, componentes e plataformas de desenvolvimento, e na parte prática construiremos três protótipos: um agente conversacional, um agente com ferramentas integradas e um agente com capacidade de busca no Google. Ao final, os participantes terão experiência prática para aplicar agentes de IA em diferentes contextos.",
    image: "/speakers/ives.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/ivestulio/",
    },
    tags: [],
  },
  {
    id: "5",
    name: "Rebecca Tatini",
    title: "Product Designer Specialist",
    company: "GFT | Banco Safra",
    bio: "Product Designer Specialist na GFT, consultora no Banco Safra há 4 anos. Com 9 anos de experiência em UX, UI, research e estratégia de produto, atuo em projetos digitais web e mobile, com entregas de ponta a ponta e uso de IA e vibe coding. Economista pela UFOP, pós-graduada em Product Management pela BBI of Chicago e mestranda em Antropologia na UFBA. Também trabalho com identidade visual e sou membro do GDG e WTM Google, unindo tecnologia, comportamento e visão de negócio em cada projeto.",
    talkTitle:
      "Além do prompt: Reposicionamento estratégico de UX na era de IA.",
    talkDescription:
      "Esta palestra vai explorar como a inteligência artificial está impactando profundamente o papel do UX — passando de uma corrida por funcionalidades para a criação de experiências transformadoras e estratégicas. Vamos navegar pelos estágios dessa evolução, discutir por que o UX deve assumir liderança nesse processo e mostrar o papel do profissional de UX como protagonista na criação de experiências humanas. Uma palestra para reposicionar o UX como diferencial competitivo na era da inteligência artificial — se apropriando, com consciência e intenção, das ferramentas e possibilidades que a IA oferece nessa jornada.",
    image: "/speakers/rebecca.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/rebeccatatini/",
    },
    tags: [],
  },
  {
    id: "6",
    name: "Caio Moura",
    title: "CTO na Zeki",
    company: "Zeki",
    bio: "Sou dev com mais de 10 anos explorando o universo de desenvolvimento, otimizando processos e criando soluções nem sempre escaláveis, mas sempre eficazes para cada desafio. Trabalhei muitos anos em software house, e atualmente empreendo no Zeki, uma Martek Soteropolitana que ajuda empresários varejistas a automatizar o pós venda com inteligência.",
    talkTitle: "Deploy Sob Medida: Da Startup à Enterprise",
    talkDescription:
      "Nessa talk vou falar sobre formas de fazer deploy de uma aplicação pra diferentes tipos de projeto, desde um MVP, startups até projetos enterprise. Vou passar por todas as formas que eu ja fiz deploy e dar um roadmap de como escolher qual ferramenta escolher para cada tipo de projeto/cliente. Hoje eu uso Firebase, Cloud Run, VM do google cloud, Kubernetes.",
    image: "/speakers/caio.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/caiobdmoura/",
    },
    tags: [],
  },
  {
    id: "7",
    name: "Luiz Siqueira e Moises Falcão",
    title: "Engenheiros de Software",
    company: "Sistema Jornal do Commercio de Comunicação",
    bio: "Luiz Siqueira, com mais de 10 anos de experiência em desenvolvimento de software, Luiz Siqueira é engenheiro de software, formado em Ciência da Computação e pós-graduado em Arquitetura Full Cycle. Atua como Coordenador de Engenharia de Software no Sistema Jornal do Commercio de Comunicação (SJCC), É cofundador da Nlake e do papodedev.com.br. Moisés Falcão, profissional com 25 anos de atuação em tecnologia, inovação e produtos digitais. É gerente de Inovação e Tecnologia no Sistema Jornal do Commercio de Comunicação, CPO na nLake e cofundador do PapoDeDev. Também é autor da newsletter e podcast Agilidade Executiva.",
    talkTitle: "Devs que voam: A Arte de construir equipes fora da curva",
    talkDescription:
      "Nesta palestra, Moisés Falcão e Luiz Siqueira compartilham aprendizados práticos sobre a formação de times de engenharia de software maduros, conectando suas trajetórias pessoais ao desenvolvimento de equipes de alta performance nas empresas em que atuam. A partir de experiências reais, os palestrantes mostram como decisões técnicas, cultura organizacional e foco em resultado caminham juntos — revelando o que funcionou, o que falhou e como essas vivências moldaram lideranças mais conscientes e times mais eficazes.",
    image: "/speakers/luiz-moises.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/luizs/",
      instagram: "https://www.instagram.com/luizsiqueira.s/",
    },
    tags: [],
  },
  {
    id: "8",
    name: "Ana Dias",
    title: "Senior Android Engineer",
    company: "Teachable",
    bio: "Desenvolvedora mobile há mais de 6 anos e apaixonada por tecnologia e educação, Ana é a prova de que desenvolver um app vai muito além de escolher entre Compose ou XML. É preciso estratégia, arquitetura sólida e experiência real.",
    talkTitle: "Android em 2025: Estratégias para Construir e Publicar um App",
    talkDescription:
      "Ana vai compartilhar a experiência real do desenvolvimento do app Teachable, mostrando como o projeto evoluiu desde o MVP até a publicação na Google Play. Na talk, ela abordará as decisões arquiteturais que garantiram a escalabilidade do app, os desafios e aprendizados do processo de produção e o passo a passo para lançar um aplicativo com sucesso.",
    image: "/speakers/ana.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/ana-souza-dias",
      instagram: "https://www.instagram.com/anabaiana_/",
    },
    tags: [],
  },
  {
    id: "9",
    name: "Kaique Dias Pereira",
    title: "Analista de MiS",
    company: "TEL Centro de Contatos",
    bio: "Kaique, Analista de MIS na TEL, é um entusiasta por tecnologia e adora transformar ideias em produtos de impacto. Ele vai compartilhar sua visão prática, mostrando como extrair valor máximo de seus dados.",
    talkTitle: "Analise e Gereciamento de Dados com DuckDB",
    talkDescription:
      "Kaique mostrará como analisar, metrificar e padronizar dados de forma eficiente para gerar insights estratégicos. Você aprenderá a explorar múltiplas fontes de dados, a usar SQL com ferramentas como o DuckDB para criar relatórios inteligentes e a desenvolver uma mentalidade analítica capaz de transformar informações em resultados reais para o negócio.",
    image: "/speakers/kaique.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/kaique-dias-aa1055212",
      github: "https://github.com/diaszin",
    },
    tags: [],
  },
  {
    id: "10",
    name: "Phil",
    title: "Fundador da DeTrash",
    company: "DeTrash",
    bio: "Kaique é fundador da DeTrash, empresa pioneira em finanças regenerativas com blockchain, responsável pela primeira solução global para gestão sustentável de resíduos usando essa tecnologia. Desde 2021, atua desenhando e orientando projetos em blockchain e é palestrante reconhecido em eventos de destaque na América Latina sobre o tema.",
    talkTitle: "Construindo ReFi com Blockchain",
    talkDescription:
      "Phil apresentará como usar o blockchain para criar soluções em Finanças Regenerativas (ReFi), unindo tecnologia e sustentabilidade. Na talk, ele explicará os princípios para construir produtos baseados em blockchain, mostrará como o ReFi gera impacto ambiental e social real e detalhará o caso da Rede Recy da DeTrash, a primeira solução global de gestão sustentável de resíduos em blockchain.",
    image: "/speakers/phil.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/philipptvoh",
      github: "https://github.com/detrash",
      instagram: "https://www.instagram.com/whosphilipp",
    },
    tags: [],
  },
  {
    id: "11",
    name: "Lucas Carapiá",
    title: "Chainlink Advocate",
    company: "",
    bio: "Advogado e professor especializado em Direito dos Criptoativos e Blockchain, atua com regulação, inovação e impacto tecnológico no mercado e no sistema jurídico. Trabalha para aproximar o direito do ecossistema de tecnologia, participando de projetos de educação e consultoria. É entusiasta de blockchain, smart contracts, tokenização e Web3, e acredita no poder da inovação para transformar negócios e instituições.",
    talkTitle:
      "Segurança Jurídica e Inovação: caminhos para desenvolver a partir do ecossistema regulado de Blockchain e Criptoativos.",
    talkDescription:
      "Nesta palestra, Lucas mostrará como a regulação é peça-chave para garantir segurança jurídica e impulsionar oportunidades no universo do blockchain e dos criptoativos. Ele explicará o novo cenário regulatório, o impacto de tecnologias como smart contracts e tokenização e como compreender o lado jurídico é essencial para desenvolver projetos de forma segura, escalável e sustentável.",
    image: "/speakers/lucas-carapia.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/lucascarapia/",
      instagram: "https://www.instagram.com/lcarapia/",
    },
    tags: [],
  },
  {
    id: "12",
    name: "Ramon Mota",
    title: "Android Developer",
    company: "Zup Innovation",
    bio: "Soteropolitano e torcedor do Bahêa, é um Android Developer na Zup com mais de 14 anos de experiência em desenvolvimento de software, sendo 8 deles dedicados à criação de aplicativos Android. É Especialista em Computação Ubíqua pelo IFBA. Nas horas livres, é forrozeiro, praticante de jiu-jítsu e surfista júnior, além de criador de conteúdo no @ramonmluz.dev.",
    talkTitle:
      "Do Paradigma Imperativo ao Declarativo -  Migrando o App do Android View para Jetpack Compose.",
    talkDescription:
      "Nesta palestra, Ramon irá abordar os conceitos relacionados a diferença entre o paradigma imperativo do Android View e o declarativo do Jetpack Compose, através de um exemplo prático da migração de um aplicativo existente, escrito em Android View, para o Jetpack Compose.",
    image: "/speakers/ramon.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/ramonmluz/",
      instagram: "https://www.instagram.com/ramonmluz.dev/",
    },
    tags: [],
  },
  {
    id: "13",
    name: "Yan Falcão",
    title: "Desenvolvedor Mobile II",
    company: "Ília",
    bio: "Soteropolitano, apaixonado por fotografia e desenvolvimento mobile. Atualmente, tenho desenvolvido um gosto por idiomas. Formado pelo IFBA, descobri o desenvolvimento meio por acaso, mas ele ficou e abriu novos caminhos.",
    talkTitle:
      " Acessibilidade visual com Android Compose: contraste, escala de texto e boas práticas.",
    talkDescription:
      "Seu app é acessível para seus pais e avós? E para você, daqui a alguns anos? Vamos explorar como contraste, escalonamento de texto e boas práticas podem transformar a experiência de pessoas com diferentes necessidades visuais.",
    image: "/speakers/yan.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/yan-santos-falcao/",
      github: "https://github.com/yanfalcao",
      instagram: "https://www.instagram.com/yansfalcao/",
    },
    tags: [],
  },
  {
    id: "14",
    name: "Loren Cavalcante",
    title: "Analista de dados",
    company: "Ford Brasil",
    bio: "Sou desenvolvedora e analista de dados desde 2022, com experiência em projetos freelance para pequenas empresas, onde aprofundei meu entendimento sobre métricas, custos e produtividade.",
    talkTitle:
      "Sem dados, sem inteligência: O verdadeiro motor da IA e do Machine Learning.",
    talkDescription:
      "O objetivo desta palestra é explorar como a qualidade dos dados é o verdadeiro alicerce da Inteligência Artificial e do Machine Learning. Antes de qualquer modelo sofisticado, existe um processo essencial: coletar, limpar e compreender os dados. ",
    image: "/speakers/loren.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/lorencavalcante/",
      instagram: "https://www.instagram.com/sadsaturn.23/?next=%2F",
    },
    tags: [],
  },
  {
    id: "15",
    name: "Kenneth Rohde Christiansen",
    title: "Engenheiro Principal e GDE ",
    company: "Intel Corporation",
    bio: "Kenneth Rohde Christiansen é engenheiro principal na equipe de Engenharia da Plataforma Web da Intel. Em sua função, Kenneth lidera diversas iniciativas para garantir que a plataforma web funcione a favor da Intel — tornando-se uma verdadeira plataforma de desenvolvimento de aplicações, impulsionando o uso do Windows e do Chrome OS, operando de forma otimizada em dispositivos Intel e expondo todo o potencial do hardware aos desenvolvedores.",
    talkTitle: "O PC com IA e a era da web moderna.",
    talkDescription:
      "Na Intel, lideramos o avanço da inovação, com roteiros de hardware planejados com grande antecedência. Nossa missão se estende à plataforma web, garantindo que ela aproveite rapidamente as novas capacidades do hardware. Desde a habilitação de novos formatos até o uso de aceleradores de hardware, estamos comprometidos em aprimorar a experiência na web.",
    image: "/speakers/kenneth.jpeg",
    social: {
      linkedin: "",
      instagram: "",
    },
    tags: [],
  },
  {
    id: "16",
    name: "Gabriel Sampaio",
    title: " Founder da Gabuldev e GDE Flutter",
    company: "Gabuldev",
    bio: "Fundador da Gabuldev, Especialista em Desenvolvimento Mobile no WillBank, é reconhecido como Google Developer Expert em Flutter & Dart, Engenheiro de Computação e meio maratonista (21km).",
    talkTitle:
      "Monetize seu App Flutter: Stripe, Play Store e App Store na Prática",
    talkDescription:
      "Na Intel, lideramos o avanço da inovação, com roteiros de hardware planejados com grande antecedência. Nossa missão se estende à plataforma web, garantindo que ela aproveite rapidamente as novas capacidades do hardware. Desde a habilitação de novos formatos até o uso de aceleradores de hardware, estamos comprometidos em aprimorar a experiência na web.",
    image: "/speakers/gabriel.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/gabuldev/",
      github: "https://github.com/gabuldev",
      instagram: "https://www.instagram.com/gabul.dev/",
      website: "https://www.youtube.com/gabuldev",
    },
    tags: [],
  },
  {
    id: "17",
    name: "Tainah Teixeira",
    title: "Analista de Dados de Qualidade Pleno",
    company: "Grupo Boticário",
    bio: "Pós Graduada em Gestão da Qualidade com foco na área de dados e na gestão de reclamações do Grupo Boticário atualmente, tenho aptidão com ferramentas Google em específico Appshet e Looker. Vencedora do Hackathon 2024.",
    talkTitle:
      "A transformação digital não é exclusividade dos times tech. Ela acontece onde a estratégia encontra a ferramenta certa",
    talkDescription:
      "A transformação digital não é exclusividade dos times tech. Ela acontece onde a estratégia encontra a ferramenta certa. Descubra a história real e inspiradora de como uma profissional da área de Qualidade no Grupo Boticário — sem background técnico formal — se tornou uma embaixadora da cultura de dados e da eficiência operacional.",
    image: "/speakers/tainah.jpeg",
    social: {
      linkedin:
        "https://www.linkedin.com/in/tainah-reis-04888966?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
    tags: [],
  },
  {
    id: "18",
    name: "Davi Almeida",
    title: "Consultor Scrum Master",
    company: "",
    bio: "Com 9 anos de experiência em Gestão em TI/Ciência de Dados, ele não só domina o framework, mas também o ambiente híbrido/remoto, é especialista no uso de ferramentas colaborativas como Teams, Zoom, Miro e Jira. Ele provará que o verdadeiro desafio do Scrum é gestão de gente.",
    talkTitle:
      "Scrum na Prática: A Estrutura para Gestão de Pessoas e de Conflitos",
    talkDescription:
      "Esta palestra revela como o Scrum (estrutura/framework) aborda a gestão de pessoas de forma prática. Os participantes começarão com um exemplo real sobre como lidar com situações que afetam a equipe. Em seguida, a apresentação explorará como essa Estrutura aborda a gestão de pessoas. Será mostrado também, por que empresas valorizam profissionais com esse conhecimento. Ao final, os participantes entenderão como o Scrum pode ser um caminho que transforma a dinâmica de equipes, além de criar um caminho inicial para quem deseja ingressar nessa área.",
    image: "/speakers/davi.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/davials",
    },
    tags: [],
  },
  {
    id: "19",
    name: "Danielle Teixeira",
    title: "Organizadora GDG & Embaixadora WTM",
    company: "Hitts Brasil",
    bio: "Apaixonada por tecnologia que transforma. Atuo há mais de 5 anos no desenvolvimento de aplicativos móveis escaláveis para Android e iOS, com foco em desempenho, usabilidade e acessibilidade. Tenho orgulho de ter contribuído com soluções de grande impacto nacional, como os aplicativos oficiais da Justiça Eleitoral (e-Título, Pardal e Mesários), utilizados por milhões de brasileiros.",
    talkTitle:
      "Do pacman ou flutterman: Gamificacao Apps imersivos com Realidade Aumentada",
    talkDescription:
      "Esqueça o que você sabe sobre aplicativos. Aplicativos não são mais sobre telas chatas, botões estáticos ou listas infinitas. Eles são sobre experiências. E a experiência mais visceral, mais delirante que podemos oferecer hoje, está na Realidade Aumentada. Mantenha a mente aberta pra sair do mundo 2D e começar a construir a realidade. A ferramenta para isso? Flutter.",
    image: "/speakers/danielle.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/danielle-teixeira-93493376/",
      github: "https://github.com/dannyserena",
      instagram: "https://www.instagram.com/dannyserena/",
    },
    tags: [],
  },
];

export function SpeakersSection() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Carousel Effect
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % speakers.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, speakers.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % speakers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + speakers.length) % speakers.length);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <section id="palestrantes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Conheça Nossos Palestrantes!
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Profissionais renomados da indústria tech compartilharão seus
            conhecimentos e experiências em palestras e workshops práticos.
          </p>

          {/* CFP Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              disabled
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-full font-medium bg-transparent cursor-pointer"
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSegy1WKqkF4q8EVptpPoWdHsj-68WGivlaQlx5tdCq5n2VIAA/viewform",
                  "_blank"
                )
              }
            >
              <FileText className="w-4 h-4 mr-2" />
              Call for Papers - Seja um Palestrante!
            </Button>
          </div>
        </div>

        {/* Speakers Carousel */}
        <div className="relative mb-12">
          {/* Desktop: Featured Carousel */}
          <div className="hidden md:block">
            {/* Controls */}
            <div className="flex justify-center items-center gap-4 mb-8">
              <Button
                variant="outline"
                size="sm"
                onClick={prevSlide}
                className="rounded-full w-10 h-10 p-0"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={toggleAutoPlay}
                className="rounded-full w-10 h-10 p-0"
              >
                {isAutoPlaying ? (
                  <Pause className="w-4 h-4" />
                ) : (
                  <Play className="w-4 h-4" />
                )}
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={nextSlide}
                className="rounded-full w-10 h-10 p-0"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Featured Speaker in Center */}
            <div className="flex justify-center items-center min-h-[500px] relative overflow-visible py-8">
              {speakers.map((speaker, index) => {
                const isActive = index === currentIndex;
                const isNext = index === (currentIndex + 1) % speakers.length;
                const isPrev =
                  index ===
                  (currentIndex - 1 + speakers.length) % speakers.length;

                let position = "translate-x-[200%]";
                let scale = "scale-75";
                let zIndex = "z-0";
                let opacity = "opacity-0";

                if (isActive) {
                  position = "translate-x-0";
                  scale = "scale-100";
                  zIndex = "z-30";
                  opacity = "opacity-100";
                } else if (isNext) {
                  position = "translate-x-[80%]";
                  scale = "scale-100";
                  zIndex = "z-20";
                  opacity = "opacity-70";
                } else if (isPrev) {
                  position = "-translate-x-[80%]";
                  scale = "scale-100";
                  zIndex = "z-20";
                  opacity = "opacity-70";
                }

                return (
                  <Card
                    key={speaker.id}
                    className={`absolute cursor-pointer transition-all duration-700 ease-in-out transform bg-white border-0 w-80 ${position} ${scale} ${zIndex} ${opacity} ${
                      isActive
                        ? "shadow-2xl ring-4 ring-blue-500/30"
                        : "shadow-lg hover:shadow-xl"
                    }`}
                    onClick={() => {
                      if (!isActive) setCurrentIndex(index);
                      else setSelectedSpeaker(speaker);
                    }}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="relative mb-4">
                        <img
                          src={speaker.image || "/placeholder.svg"}
                          alt={speaker.name}
                          className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-white shadow-lg transition-all duration-300"
                        />
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                          <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                            {isActive ? "✨ Em Destaque" : "Confirmado"}
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {speaker.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {speaker.title}
                      </p>
                      <p className="text-sm font-medium text-blue-600 mb-3">
                        {speaker.company}
                      </p>

                      <div className="flex flex-wrap gap-1 justify-center mb-4">
                        {speaker.tags.slice(0, 2).map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <p className="text-sm text-gray-700 font-medium line-clamp-2 mb-4">
                        {speaker.talkTitle}
                      </p>

                      {isActive && (
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedSpeaker(speaker);
                          }}
                        >
                          Ver Detalhes
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {speakers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-gradient-to-r from-blue-500 to-green-500 scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Mobile: Grid layout */}
          <div className="md:hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {speakers.map((speaker) => (
                <Card
                  key={speaker.id}
                  className="group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg"
                  onClick={() => setSelectedSpeaker(speaker)}
                >
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-4">
                      <img
                        src={speaker.image || "/placeholder.svg"}
                        alt={speaker.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                          Confirmado
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {speaker.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {speaker.title}
                    </p>
                    <p className="text-sm font-medium text-blue-600 mb-3">
                      {speaker.company}
                    </p>

                    <div className="flex flex-wrap gap-1 justify-center mb-4">
                      {speaker.tags.slice(0, 2).map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <p className="text-sm text-gray-700 font-medium line-clamp-2">
                      {speaker.talkTitle}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* More Speakers Coming */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
            <Users className="w-5 h-5 text-blue-600" />
            <span className="text-gray-700 font-medium">
              Mais palestrantes serão anunciados em breve!
            </span>
          </div>
        </div>

        {/* Speaker Modal */}
        <Dialog
          open={!!selectedSpeaker}
          onOpenChange={() => setSelectedSpeaker(null)}
        >
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            {selectedSpeaker && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-gray-900">
                    {selectedSpeaker.name}
                  </DialogTitle>
                </DialogHeader>

                <div className="space-y-6">
                  {/* Speaker Info */}
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <img
                        src={selectedSpeaker.image || "/placeholder.svg"}
                        alt={selectedSpeaker.name}
                        className="w-32 h-32 rounded-full object-cover border-4 border-gray-200 mx-auto sm:mx-0"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {selectedSpeaker.title}
                      </h3>
                      <p className="text-lg text-blue-600 font-medium mb-4">
                        {selectedSpeaker.company}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {selectedSpeaker.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Social Links */}
                      <div className="flex gap-3">
                        {selectedSpeaker.social.linkedin && (
                          <a
                            href={selectedSpeaker.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors"
                          >
                            <Linkedin className="w-4 h-4" />
                          </a>
                        )}
                        {selectedSpeaker.social.github && (
                          <a
                            href={selectedSpeaker.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {selectedSpeaker.social.website && (
                          <a
                            href={selectedSpeaker.social.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-green-100 text-green-600 rounded-full hover:bg-green-200 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                        {selectedSpeaker.social.instagram && (
                          <a
                            href={selectedSpeaker.social.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-pink-100 text-pink-600 rounded-full hover:bg-pink-200 transition-colors"
                          >
                            <Instagram className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Biography */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Sobre
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedSpeaker.bio}
                    </p>
                  </div>

                  {/* Talk Details */}
                  <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Palestra
                    </h4>
                    <h5 className="text-xl font-bold text-blue-600 mb-3">
                      {selectedSpeaker.talkTitle}
                    </h5>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedSpeaker.talkDescription}
                    </p>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

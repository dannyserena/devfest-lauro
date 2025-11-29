"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, User, Filter } from "lucide-react";

interface AgendaItem {
  id: string;
  time: string;
  title: string;
  speaker: string;
  type: "keynote" | "palestra" | "workshop" | "break" | "networking";
  track: "auditorio" | "techA" | "techB" | "geral";
  location: string;
  description: string;
  duration: string;
}

const agendaItems: AgendaItem[] = [
  {
    id: "1",
    time: "08:00 - 09:00",
    title: "Credenciamento",
    speaker: "Equipe de Organização",
    type: "networking",
    track: "geral",
    location: "Hall de Entrada",
    description:
      "Recepção dos participantes com credenciamento.",
    duration: "60 min",
  },
  {
    id: "2",
    time: "09:00 - 09:15",
    title: "Abertura Oficial",
    speaker: "Equipe de Organização",
    type: "keynote",
    track: "geral",
    location: "Sala 1 (Auditório)",
    description:
      "Abertura do DevFest com apresentação da organização e orientações gerais.",
    duration: "15 min",
  },
  {
    id: "3",
    time: "09:15 - 10:00",
    title: "O PC com IA e a Era da Web Moderna",
    speaker: "Kenneth Rohde Christiansen",
    type: "palestra",
    track: "auditorio",
    location: "Sala 1 (Auditório)",
    description:
      "Como a evolução dos PCs com aceleração de IA está redefinindo aplicações e a web moderna.",
    duration: "45 min",
  },
  {
    id: "4",
    time: "10:00 - 10:05",
    title: "Intervalo de Transição",
    speaker: "Equipe de Organização",
    type: "break",
    track: "geral",
    location: "Áreas de circulação",
    description:
      "Curto intervalo para organização e transição entre as próximas sessões.",
    duration: "5 min",
  },
  {
    id: "5",
    time: "10:05 - 10:35",
    title: "Além do prompt: Reposicionamento estratégico de UX na era de IA",
    speaker: "Rebecca Tatini",
    type: "palestra",
    track: "auditorio",
    location: "Sala 1 (Auditório)",
    description:
      "Como a inteligência artificial está reposicionando o papel do UX de forma estratégica.",
    duration: "30 min",
  },
  {
    id: "6",
    time: "10:05 - 10:35",
    title:
      "Scrum na Prática: A Estrutura para Gestão de Pessoas e de Conflitos",
    speaker: "Davi Almeida",
    type: "palestra",
    track: "techA",
    location: "Sala 2 (Tech A)",
    description:
      "Como o Scrum pode apoiar a gestão de pessoas e conflitos em times de tecnologia.",
    duration: "30 min",
  },
  {
    id: "7",
    time: "10:05 - 10:35",
    title:
      "Monetize seu App Flutter: Stripe, Play Store e App Store na Prática",
    speaker: "Gabriel Sampaio",
    type: "palestra",
    track: "techB",
    location: "Sala 3 (Tech B)",
    description:
      "Estratégias práticas para monetização de aplicativos Flutter com foco em produção.",
    duration: "30 min",
  },
  {
    id: "8",
    time: "11:25 - 11:55",
    title: "Coffee Break (Manhã)",
    speaker: "Equipe de Organização",
    type: "break",
    track: "geral",
    location: "Área de Coffee",
    description: "Pausa para café, descanso e networking entre participantes.",
    duration: "30 min",
  },
  {
    id: "9",
    time: "12:00 - 12:30",
    title:
      "Segurança Jurídica e Inovação: caminhos para desenvolver a partir do ecossistema regulado de Blockchain e Criptoativos",
    speaker: "Lucas Carapiá",
    type: "palestra",
    track: "auditorio",
    location: "Auditório",
    description:
      "Como a regulação em blockchain e cripto pode impulsionar inovação com segurança jurídica.",
    duration: "30 min",
  },
  {
    id: "10",
    time: "12:00 - 12:30",
    title: "Análise e Gerenciamento de Dados com DuckDB",
    speaker: "Kaique Dias Pereira",
    type: "palestra",
    track: "techA",
    location: "Sala 16 (Tech A)",
    description:
      "Uso do DuckDB para explorar, analisar e padronizar dados de maneira eficiente.",
    duration: "30 min",
  },
  {
    id: "11",
    time: "12:00 - 12:30",
    title: "Android em 2025: Estratégias para Construir e Publicar um App",
    speaker: "Ana Dias",
    type: "palestra",
    track: "techB",
    location: "Laboratório 1° Andar (Tech B)",
    description:
      "Boas práticas modernas para desenvolver e publicar apps Android em produção.",
    duration: "30 min",
  },
  {
    id: "13",
    time: "12:35 - 13:05",
    title: "Deploy Sob Medida: Da Startup à Enterprise",
    speaker: "Caio Moura",
    type: "palestra",
    track: "auditorio",
    location: "Auditório",
    description:
      "Como adaptar estratégias de deploy para diferentes portes de projeto, de MVP a enterprise.",
    duration: "30 min",
  },
  {
    id: "14",
    time: "12:35 - 13:05",
    title:
      "Do pacman ou flutterman: Gamificação e Apps imersivos com Realidade Aumentada",
    speaker: "Danielle Teixeira",
    type: "palestra",
    track: "techA",
    location: "Sala 16 (Tech A)",
    description:
      "Como usar Flutter e Realidade Aumentada para criar apps gamificados e experiências imersivas.",
    duration: "30 min",
  },
  {
    id: "15",
    time: "12:35 - 13:05",
    title:
      "Do Paradigma Imperativo ao Declarativo - Migrando o App do Android View para Jetpack Compose",
    speaker: "Ramon Mota",
    type: "palestra",
    track: "techB",
    location: "Laboratório 1° Andar (Tech B)",
    description:
      "Migração de aplicações Android clássicas para Jetpack Compose com foco em arquitetura e prática.",
    duration: "30 min",
  },
  {
    id: "16",
    time: "13:10 - 14:10",
    title: "Almoço e Networking",
    speaker: "Equipe de Organização",
    type: "networking",
    track: "geral",
    location: "Área de Alimentação",
    description:
      "Intervalo para almoço, descanso e conexão com outros participantes.",
    duration: "90 min",
  },
  {
    id: "17",
    time: "14:15 - 14:45",
    title:
      "Sem dados, sem inteligência: O verdadeiro motor da IA e do Machine Learning",
    speaker: "Loren Cavalcante",
    type: "palestra",
    track: "auditorio",
    location: "Auditório",
    description:
      "Por que dados de qualidade são a base real para projetos de IA e Machine Learning.",
    duration: "30 min",
  },
  {
    id: "18",
    time: "14:15 - 14:45",
    title:
      "Do Zero ao Lançamento: Como construir um software de sucesso para o varejo",
    speaker: "Elienaide Machado",
    type: "palestra",
    track: "techA",
    location: "Sala 16 (Tech A)",
    description:
      "Lições práticas de produto, mercado e tecnologia a partir do case Themis Lojas.",
    duration: "30 min",
  },
  {
    id: "19",
    time: "14:15 - 15:15",
    title: "Build with ADK: Construindo Agentes de IA",
    speaker: "Ives Túlio",
    type: "workshop",
    track: "techB",
    location: "Laboratório 1° Andar (Tech B)",
    description:
      "Introdução prática à construção de agentes de IA utilizando o Agent Development Kit do Google.",
    duration: "60 min",
  },
  {
    id: "20",
    time: "14:45 - 14:50",
    title: "Intervalo de Transição",
    speaker: "Equipe de Organização",
    type: "break",
    track: "geral",
    location: "Áreas de circulação",
    description: "Pausa rápida para troca de sala.",
    duration: "5 min",
  },
  {
    id: "21",
    time: "14:55 - 15:20",
    title:
      "A transformação digital não é exclusividade dos times tech. Ela acontece onde a estratégia encontra a ferramenta certa",
    speaker: "Tainah Teixeira",
    type: "palestra",
    track: "auditorio",
    location: "Auditório",
    description:
      "Como profissionais de áreas de negócio podem liderar iniciativas de transformação digital usando dados.",
    duration: "30 min",
  },
  {
    id: "22",
    time: "14:55 - 15:20",
    title:
      "Conventional Commits: Facilitando colaboração e versionamento com commits estruturados",
    speaker: "Lucas Lion",
    type: "palestra",
    track: "techA",
    location: "Sala 16 (Tech A)",
    description:
      "Como padronizar mensagens de commit para melhorar colaboração, versionamento e automação.",
    duration: "30 min",
  },
  {
    id: "23",
    time: "15:20 - 15:25",
    title: "Intervalo de Transição",
    speaker: "Equipe de Organização",
    type: "break",
    track: "geral",
    location: "Áreas de circulação",
    description: "Curto intervalo antes do próximo bloco de palestras.",
    duration: "5 min",
  },
  {
    id: "24",
    time: "15:25 - 15:55",
    title: "Construindo ReFi com Blockchain",
    speaker: "Phil",
    type: "palestra",
    track: "auditorio",
    location: "Auditório",
    description:
      "Como criar soluções em Finanças Regenerativas (ReFi) usando blockchain para impacto ambiental e social.",
    duration: "30 min",
  },
  {
    id: "25",
    time: "15:25 - 15:55",
    title: "Aplicando LLMs em projetos reais: Um agente de IA via WhatsApp",
    speaker: "Breno Holanda",
    type: "palestra",
    track: "techA",
    location: "Sala 16 (Tech A)",
    description:
      "Arquitetura de um agente de IA que responde em linguagem natural via WhatsApp integrado a banco de dados.",
    duration: "30 min",
  },
  {
    id: "26",
    time: "15:25 - 15:55",
    title:
      "Acessibilidade visual com Android Compose: contraste, escala de texto e boas práticas",
    speaker: "Yan Falcão",
    type: "palestra",
    track: "techB",
    location: "Laboratório 1° Andar (Tech B)",
    description:
      "Como garantir acessibilidade visual em apps Android usando Jetpack Compose.",
    duration: "30 min",
  },
  {
    id: "27",
    time: "16:00 - 16:30",
    title: "Coffee Break (Tarde)",
    speaker: "Equipe de Organização",
    type: "break",
    track: "geral",
    location: "Área de Coffee",
    description: "Momento para recarregar as energias e fortalecer conexões.",
    duration: "30 min",
  },
  {
    id: "28",
    time: "16:35 - 17:15",
    title: "Devs que voam: A arte de construir equipes fora da curva",
    speaker: "Luiz Siqueira e Moises Falcão",
    type: "palestra",
    track: "auditorio",
    location: "Auditório",
    description:
      "Aprendizados práticos sobre formação de times de engenharia de alta performance.",
    duration: "40 min",
  },
  {
    id: "29",
    time: "17:20 - 17:40",
    title: "Sorteios e Encerramento",
    speaker: "Equipe de Organização",
    type: "keynote",
    track: "geral",
    location: "Auditório",
    description:
      "Encerramento oficial do evento, agradecimentos e sorteio de brindes.",
    duration: "30 min",
  },
];

const trackColors = {
  auditorio: "bg-blue-100 text-blue-800",
  techA: "bg-green-100 text-green-800",
  techB: "bg-purple-100 text-purple-800",
  geral: "bg-gray-100 text-gray-800",
};

const typeColors = {
  keynote: "bg-blue-500 text-white",
  palestra: "bg-green-500 text-white",
  workshop: "bg-purple-500 text-white",
  break: "bg-gray-400 text-white",
  networking: "bg-orange-500 text-white",
};

const trackLabels: Record<AgendaItem["track"], string> = {
  auditorio: "Auditório",
  techA: "Tech A",
  techB: "Tech B",
  geral: "Geral",
};

export function AgendaSection() {
  const [selectedTrack, setSelectedTrack] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");

  const filteredItems = agendaItems.filter((item) => {
    const trackMatch = selectedTrack === "all" || item.track === selectedTrack;
    const typeMatch = selectedType === "all" || item.type === selectedType;
    return trackMatch && typeMatch;
  });

  const tracks = [
    { value: "all", label: "Todas as Trilhas" },
    { value: "auditorio", label: "Sala 1 – Auditório" },
    { value: "techA", label: "Sala 2 – Tech A" },
    { value: "techB", label: "Sala 3 – Tech B" },
    { value: "geral", label: "Geral / Coffee / Abertura" },
  ];

  const types = [
    { value: "all", label: "Todos os Tipos" },
    { value: "keynote", label: "Keynote" },
    { value: "palestra", label: "Palestra" },
    { value: "workshop", label: "Workshop" },
    { value: "networking", label: "Networking" },
  ];

  return (
    <section id="agenda" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Programação Completa
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Um dia inteiro de conteúdo técnico de alta qualidade, networking e
            aprendizado colaborativo.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <select
              value={selectedTrack}
              onChange={(e) => setSelectedTrack(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {tracks.map((track) => (
                <option key={track.value} value={track.value}>
                  {track.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {types.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Agenda Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {filteredItems.map((item, index) => (
              <Card
                key={item.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    {/* Time Column */}
                    <div className="bg-gray-50 p-6 md:w-48 flex-shrink-0">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="font-bold text-lg text-gray-900">
                          {item.time}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{item.duration}</p>
                    </div>

                    {/* Content Column */}
                    <div className="p-6 flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {item.title}
                          </h3>
                          <div className="flex items-center gap-2 mb-2">
                            <User className="w-4 h-4 text-gray-500" />
                            <span className="text-gray-700 font-medium">
                              {item.speaker}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 mb-3">
                            <MapPin className="w-4 h-4 text-gray-500" />
                            <span className="text-gray-600">
                              {item.location}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-col gap-2">
                          <Badge
                            className={`${typeColors[item.type]} px-3 py-1`}
                          >
                            {item.type.charAt(0).toUpperCase() +
                              item.type.slice(1)}
                          </Badge>
                          <Badge
                            variant="secondary"
                            className={`${
                              trackColors[item.track]
                            } px-3 py-1 flex justify-center items-center text-center`}
                          >
                            {trackLabels[item.track]}
                          </Badge>
                        </div>
                      </div>

                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Event Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Informações Importantes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
              <div>
                <h4 className="font-semibold mb-2">Certificado</h4>
                <p>
                  Todos os participantes receberão certificado de participação
                  digital.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Material</h4>
                <p>
                  Slides e materiais complementares serão disponibilizados após
                  o evento.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Networking</h4>
                <p>
                  Aproveite os intervalos para conhecer outros profissionais da
                  área.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

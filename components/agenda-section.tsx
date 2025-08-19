"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, MapPin, User, Filter } from "lucide-react"

interface AgendaItem {
  id: string
  time: string
  title: string
  speaker: string
  type: "keynote" | "palestra" | "workshop" | "break" | "networking"
  track: "principal" | "mobile" | "web" | "cloud" | "ai"
  location: string
  description: string
  duration: string
}

const agendaItems: AgendaItem[] = [
  {
    id: "1",
    time: "08:00",
    title: "Credenciamento e Coffee de Boas-vindas",
    speaker: "Organização",
    type: "networking",
    track: "principal",
    location: "Hall de Entrada",
    description: "Recepção dos participantes com café da manhã",
    duration: "60 min",
  },
  {
    id: "2",
    time: "09:00",
    title: "Abertura Oficial do DevFest Lauro de Freitas",
    speaker: "GDG Lauro de Freitas",
    type: "keynote",
    track: "principal",
    location: "Auditório Principal",
    description: "Apresentação do evento e boas-vindas à comunidade",
    duration: "30 min",
  },
  {
    id: "3",
    time: "09:30",
    title: "O Futuro do React: Server Components e Suspense",
    speaker: "Ana Silva",
    type: "palestra",
    track: "web",
    location: "Auditório Principal",
    description: "Exploração dos React Server Components e suas implicações",
    duration: "45 min",
  },
  {
    id: "4",
    time: "09:30",
    title: "Flutter vs React Native: Escolhendo a Stack Certa",
    speaker: "Rafael Oliveira",
    type: "palestra",
    track: "mobile",
    location: "Sala 1",
    description: "Comparação técnica entre as principais frameworks mobile",
    duration: "45 min",
  },
  {
    id: "5",
    time: "10:15",
    title: "Coffee Break",
    speaker: "Organização",
    type: "break",
    track: "principal",
    location: "Hall de Entrada",
    description: "Pausa para networking e café",
    duration: "30 min",
  },
  {
    id: "6",
    time: "10:45",
    title: "Kubernetes na Prática: Do Zero à Produção",
    speaker: "Carlos Santos",
    type: "workshop",
    track: "cloud",
    location: "Lab de Informática",
    description: "Workshop hands-on sobre implementação de Kubernetes",
    duration: "90 min",
  },
  {
    id: "7",
    time: "10:45",
    title: "IA Generativa: Construindo Aplicações Inteligentes",
    speaker: "Mariana Costa",
    type: "palestra",
    track: "ai",
    location: "Auditório Principal",
    description: "Como integrar modelos de IA generativa em aplicações",
    duration: "45 min",
  },
  {
    id: "8",
    time: "12:15",
    title: "Almoço e Networking",
    speaker: "Organização",
    type: "networking",
    track: "principal",
    location: "Refeitório",
    description: "Almoço com oportunidades de networking",
    duration: "90 min",
  },
  {
    id: "9",
    time: "13:45",
    title: "Painel: O Futuro da Tecnologia na Bahia",
    speaker: "Diversos Palestrantes",
    type: "keynote",
    track: "principal",
    location: "Auditório Principal",
    description: "Discussão sobre o ecossistema tech baiano",
    duration: "60 min",
  },
  {
    id: "10",
    time: "15:00",
    title: "Encerramento e Sorteios",
    speaker: "Organização",
    type: "keynote",
    track: "principal",
    location: "Auditório Principal",
    description: "Encerramento oficial com sorteios de brindes",
    duration: "30 min",
  },
]

const trackColors = {
  principal: "bg-blue-100 text-blue-800",
  mobile: "bg-green-100 text-green-800",
  web: "bg-purple-100 text-purple-800",
  cloud: "bg-orange-100 text-orange-800",
  ai: "bg-red-100 text-red-800",
}

const typeColors = {
  keynote: "bg-blue-500 text-white",
  palestra: "bg-green-500 text-white",
  workshop: "bg-purple-500 text-white",
  break: "bg-gray-400 text-white",
  networking: "bg-orange-500 text-white",
}

export function AgendaSection() {
  const [selectedTrack, setSelectedTrack] = useState<string>("all")
  const [selectedType, setSelectedType] = useState<string>("all")

  const filteredItems = agendaItems.filter((item) => {
    const trackMatch = selectedTrack === "all" || item.track === selectedTrack
    const typeMatch = selectedType === "all" || item.type === selectedType
    return trackMatch && typeMatch
  })

  const tracks = [
    { value: "all", label: "Todas as Trilhas" },
    { value: "principal", label: "Principal" },
    { value: "web", label: "Web" },
    { value: "mobile", label: "Mobile" },
    { value: "cloud", label: "Cloud" },
    { value: "ai", label: "IA/ML" },
  ]

  const types = [
    { value: "all", label: "Todos os Tipos" },
    { value: "keynote", label: "Keynote" },
    { value: "palestra", label: "Palestra" },
    { value: "workshop", label: "Workshop" },
    { value: "networking", label: "Networking" },
  ]

  return (
    <section id="agenda" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Programação Completa</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Um dia inteiro de conteúdo técnico de alta qualidade, networking e aprendizado colaborativo.
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
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    {/* Time Column */}
                    <div className="bg-gray-50 p-6 md:w-48 flex-shrink-0">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="font-bold text-lg text-gray-900">{item.time}</span>
                      </div>
                      <p className="text-sm text-gray-600">{item.duration}</p>
                    </div>

                    {/* Content Column */}
                    <div className="p-6 flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                          <div className="flex items-center gap-2 mb-2">
                            <User className="w-4 h-4 text-gray-500" />
                            <span className="text-gray-700 font-medium">{item.speaker}</span>
                          </div>
                          <div className="flex items-center gap-2 mb-3">
                            <MapPin className="w-4 h-4 text-gray-500" />
                            <span className="text-gray-600">{item.location}</span>
                          </div>
                        </div>

                        <div className="flex flex-col gap-2">
                          <Badge className={`${typeColors[item.type]} px-3 py-1`}>
                            {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                          </Badge>
                          <Badge variant="secondary" className={`${trackColors[item.track]} px-3 py-1`}>
                            {item.track.charAt(0).toUpperCase() + item.track.slice(1)}
                          </Badge>
                        </div>
                      </div>

                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Informações Importantes</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
              <div>
                <h4 className="font-semibold mb-2">Certificado</h4>
                <p>Todos os participantes receberão certificado de participação digital.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Material</h4>
                <p>Slides e materiais complementares serão disponibilizados após o evento.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Networking</h4>
                <p>Aproveite os intervalos para conhecer outros profissionais da área.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

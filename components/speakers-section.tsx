"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Twitter, ExternalLink, Users, FileText } from "lucide-react"

interface Speaker {
  id: string
  name: string
  title: string
  company: string
  bio: string
  talkTitle: string
  talkDescription: string
  image: string
  social: {
    linkedin?: string
    github?: string
    twitter?: string
    website?: string
  }
  tags: string[]
}

const speakers: Speaker[] = [
  {
    id: "1",
    name: "Ana Silva",
    title: "Senior Frontend Developer",
    company: "Google",
    bio: "Ana é uma desenvolvedora frontend sênior com mais de 8 anos de experiência em React, TypeScript e arquiteturas modernas. Atualmente trabalha no Google e é ativa na comunidade open source.",
    talkTitle: "O Futuro do React: Server Components e Suspense",
    talkDescription:
      "Uma exploração profunda dos React Server Components e como eles estão revolucionando o desenvolvimento web moderno.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "https://linkedin.com/in/anasilva",
      github: "https://github.com/anasilva",
      twitter: "https://twitter.com/anasilva",
    },
    tags: ["React", "TypeScript", "Frontend"],
  },
  {
    id: "2",
    name: "Carlos Santos",
    title: "Cloud Architect",
    company: "Microsoft",
    bio: "Carlos é arquiteto de soluções cloud com especialização em Azure e Kubernetes. Palestrante internacional e autor de diversos artigos sobre DevOps e infraestrutura.",
    talkTitle: "Kubernetes na Prática: Do Zero à Produção",
    talkDescription:
      "Um workshop hands-on sobre como implementar e gerenciar aplicações em Kubernetes em ambiente de produção.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "https://linkedin.com/in/carlossantos",
      github: "https://github.com/carlossantos",
    },
    tags: ["Kubernetes", "DevOps", "Cloud"],
  },
  {
    id: "3",
    name: "Mariana Costa",
    title: "AI/ML Engineer",
    company: "OpenAI",
    bio: "Mariana é engenheira de machine learning especializada em processamento de linguagem natural. Doutora em Ciência da Computação e pesquisadora ativa em IA.",
    talkTitle: "IA Generativa: Construindo Aplicações Inteligentes",
    talkDescription:
      "Como integrar modelos de IA generativa em aplicações web e mobile, com exemplos práticos e cases de uso.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "https://linkedin.com/in/marianacosta",
      github: "https://github.com/marianacosta",
      website: "https://marianacosta.dev",
    },
    tags: ["AI/ML", "Python", "NLP"],
  },
  {
    id: "4",
    name: "Rafael Oliveira",
    title: "Mobile Developer",
    company: "Nubank",
    bio: "Rafael é desenvolvedor mobile sênior com experiência em Flutter, React Native e desenvolvimento nativo. Contribuidor ativo para projetos open source.",
    talkTitle: "Flutter vs React Native: Escolhendo a Stack Certa",
    talkDescription:
      "Uma comparação técnica detalhada entre as principais frameworks de desenvolvimento mobile multiplataforma.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "https://linkedin.com/in/rafaeloliveira",
      github: "https://github.com/rafaeloliveira",
      twitter: "https://twitter.com/rafaeloliveira",
    },
    tags: ["Flutter", "React Native", "Mobile"],
  },
]

export function SpeakersSection() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null)

  return (
    <section id="palestrantes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Conheça Nossos Especialistas!</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Profissionais renomados da indústria tech compartilharão seus conhecimentos e experiências em palestras e
            workshops práticos.
          </p>

          {/* CFP Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-full font-medium bg-transparent"
            >
              <FileText className="w-4 h-4 mr-2" />
              Call for Papers - Seja um Palestrante!
            </Button>
            <span className="text-sm text-gray-500">Inscrições abertas até 15/10/2025</span>
          </div>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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

                <h3 className="text-xl font-bold text-gray-900 mb-1">{speaker.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{speaker.title}</p>
                <p className="text-sm font-medium text-blue-600 mb-3">{speaker.company}</p>

                <div className="flex flex-wrap gap-1 justify-center mb-4">
                  {speaker.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <p className="text-sm text-gray-700 font-medium line-clamp-2">{speaker.talkTitle}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* More Speakers Coming */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
            <Users className="w-5 h-5 text-blue-600" />
            <span className="text-gray-700 font-medium">Mais palestrantes serão anunciados em breve!</span>
          </div>
        </div>

        {/* Speaker Modal */}
        <Dialog open={!!selectedSpeaker} onOpenChange={() => setSelectedSpeaker(null)}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            {selectedSpeaker && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-gray-900">{selectedSpeaker.name}</DialogTitle>
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
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{selectedSpeaker.title}</h3>
                      <p className="text-lg text-blue-600 font-medium mb-4">{selectedSpeaker.company}</p>

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
                        {selectedSpeaker.social.twitter && (
                          <a
                            href={selectedSpeaker.social.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-blue-100 text-blue-400 rounded-full hover:bg-blue-200 transition-colors"
                          >
                            <Twitter className="w-4 h-4" />
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
                      </div>
                    </div>
                  </div>

                  {/* Biography */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Sobre</h4>
                    <p className="text-gray-700 leading-relaxed">{selectedSpeaker.bio}</p>
                  </div>

                  {/* Talk Details */}
                  <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Palestra</h4>
                    <h5 className="text-xl font-bold text-blue-600 mb-3">{selectedSpeaker.talkTitle}</h5>
                    <p className="text-gray-700 leading-relaxed">{selectedSpeaker.talkDescription}</p>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

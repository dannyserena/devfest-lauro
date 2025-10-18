"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Mail, Heart } from "lucide-react"

interface Sponsor {
  name: string
  logo: string
  website?: string
  level: "diamond" | "platinum" | "gold" | "silver" | "bronze" | "apoio"
}

const sponsors: Sponsor[] = [
  {
    name: "Google",
    logo: "/sponsors/googleDev.png?height=120&width=200",
    website: "https://google.com",
    level: "diamond",
  },
  // {
  //   name: "Microsoft",
  //   logo: "/placeholder.svg?height=120&width=200",
  //   website: "https://microsoft.com",
  //   level: "platinum",
  // },
  // {
  //   name: "AWS",
  //   logo: "/placeholder.svg?height=120&width=200",
  //   website: "https://aws.amazon.com",
  //   level: "platinum",
  // },
  // {
  //   name: "Vercel",
  //   logo: "/placeholder.svg?height=100&width=180",
  //   website: "https://vercel.com",
  //   level: "gold",
  // },
  // {
  //   name: "GitHub",
  //   logo: "/placeholder.svg?height=100&width=180",
  //   website: "https://github.com",
  //   level: "gold",
  // },
  // {
  //   name: "JetBrains",
  //   logo: "/placeholder.svg?height=100&width=180",
  //   website: "https://jetbrains.com",
  //   level: "gold",
  // },
  // {
  //   name: "Code Aces",
  //   logo: "/sponsors/codeAces.jpeg?height=80&width=160",
  //   website: "https://codeaces.com.br/",
  //   level: "silver",
  // },
  // {
  //   name: "iFood",
  //   logo: "/placeholder.svg?height=80&width=160",
  //   website: "https://ifood.com.br",
  //   level: "silver",
  // },
  // {
  //   name: "Stone",
  //   logo: "/placeholder.svg?height=80&width=160",
  //   website: "https://stone.com.br",
  //   level: "silver",
  // },
  {
    name: "Code Aces",
    logo: "/sponsors/codeAces.png?height=80&width=160",
    website: "https://codeaces.com.br/",
    level: "bronze",
  },
  {
    name: "SENAI Bahia",
    logo: "/sponsors/senai.png?height=80&width=160",
    website: "https://www.senaibahia.com.br/",
    level: "apoio",
  },
  {
    name: "FIAP",
    logo: "/sponsors/fiap.png?height=80&width=160",
    website: "https://www.fiap.com.br/",
    level: "apoio",
  },
]

const sponsorLevels = {
  diamond: {
    title: "Diamond",
    color: "from-blue-400 to-cyan-400",
    textColor: "text-blue-600",
    bgColor: "bg-blue-50",
    logoSize: "h-32",
  },
  platinum: {
    title: "Platinum",
    color: "from-gray-300 to-gray-500",
    textColor: "text-gray-600",
    bgColor: "bg-gray-50",
    logoSize: "h-28",
  },
  gold: {
    title: "Gold",
    color: "from-yellow-400 to-orange-400",
    textColor: "text-yellow-600",
    bgColor: "bg-yellow-50",
    logoSize: "h-24",
  },
  silver: {
    title: "Silver",
    color: "from-gray-200 to-gray-400",
    textColor: "text-gray-500",
    bgColor: "bg-gray-50",
    logoSize: "h-20",
  },
  bronze: {
    title: "Bronze",
    color: "from-orange-400 to-red-400",
    textColor: "text-orange-600",
    bgColor: "bg-orange-50",
    logoSize: "h-16",
  },
  apoio: {
    title: "Apoio",
    color: "from-green-400 to-blue-400",
    textColor: "text-green-600",
    bgColor: "bg-green-50",
    logoSize: "h-16",
  },
}

export function SponsorsSection() {
  const groupedSponsors = sponsors.reduce(
    (acc, sponsor) => {
      if (!acc[sponsor.level]) {
        acc[sponsor.level] = []
      }
      acc[sponsor.level].push(sponsor)
      return acc
    },
    {} as Record<string, Sponsor[]>,
  )

  return (
    <section id="patrocinadores" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Nossos Patrocinadores</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Agradecemos às empresas que tornam este evento possível e apoiam o crescimento da comunidade tech na Bahia.
          </p>

          {/* CTA for Companies */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:gdglaurodefreitas@gmail.com"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium cursor-pointer inline-flex items-center"
            >
              <Mail className="w-4 h-4 mr-2" />
              Seja um Patrocinador!
            </a>
            <span className="text-sm text-gray-500">Entre em contato para conhecer nossos planos</span>
          </div>
        </div>

         {/* Sponsors by Level */}
        <div className="space-y-16">
          {Object.entries(sponsorLevels).map(([level, config]) => {
            const levelSponsors = groupedSponsors[level]
            if (!levelSponsors || levelSponsors.length === 0) return null

            return (
              <div key={level} className="text-center">
                {/* Level Title */}
                <div className="mb-8">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className={`w-12 h-1 bg-gradient-to-r ${config.color} rounded-full`}></div>
                    <h3 className={`text-2xl font-bold ${config.textColor}`}>{config.title}</h3>
                    <div className={`w-12 h-1 bg-gradient-to-r ${config.color} rounded-full`}></div>
                  </div>
                </div>

                {/* Sponsors Grid */}
                <div
                  className={`grid gap-8 ${
                    level === "diamond"
                      ? "grid-cols-1 max-w-md mx-auto"
                      : level === "platinum"
                        ? "grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto"
                        : level === "gold"
                          ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto"
                          : levelSponsors.length === 1
                            ? "grid-cols-1 max-w-xs mx-auto"
                            : levelSponsors.length === 2
                              ? "grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto" 
                              : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 max-w-5xl mx-auto" 
                  }`}
                >
                  {levelSponsors.map((sponsor, index) => (
                    <Card
                      key={index}
                      className={`${config.bgColor} border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer`}
                      onClick={() => sponsor.website && window.open(sponsor.website, "_blank")}
                    >
                      <CardContent className="p-8 flex items-center justify-center">
                        <div className="text-center">
                          <img
                            src={sponsor.logo || "/placeholder.svg"}
                            alt={sponsor.name}
                            className={`${config.logoSize} w-auto mx-auto object-contain mb-4 group-hover:scale-105 transition-transform duration-300`}
                          />
                          <h4 className="font-semibold text-gray-800 mb-2">{sponsor.name}</h4>
                          {sponsor.website && (
                            <div className="flex items-center justify-center gap-1 text-sm text-gray-600 group-hover:text-blue-600 transition-colors">
                              <span>Visitar site</span>
                              <ExternalLink className="w-3 h-3" />
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                    // /sponsors/googleDev.png
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Sponsorship Benefits */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white text-center">
            <Heart className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Quer apoiar o DevFest Lauro de Freitas?</h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Junte-se a nós nesta iniciativa de fortalecer a comunidade tech baiana. Oferecemos diversos planos de
              patrocínio com benefícios exclusivos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/media-kit/MIDIA-KIT-Devfest-Lauro-2025.pdf"
                download
                className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-full font-medium cursor-pointer inline-flex items-center"
              >
                Download do Media Kit - PT-BR
              </a>
              <a
                href="/media-kit/MIDIA-KIT-Devfest-Lauro-2025-EN.pdf"
                download
                className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-full font-medium cursor-pointer inline-flex items-center"
              >
                Download do Media Kit - EN-EN
              </a>
              <a
                href="mailto:gdglaurodefreitas@gmail.com"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-full font-medium bg-transparent cursor-pointer inline-flex items-center"
              >
                Falar com a Organização
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

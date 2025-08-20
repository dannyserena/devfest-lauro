import { ExternalLink, Users, Heart, Code, Linkedin, Github, Twitter } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const organizers = [
  {
    name: "Danielle Teixeira",
    role: "Embaixadora WTM & Organizer GDG",
    bio: "Líder apaixonada por diversidade e inclusão na tecnologia, promovendo oportunidades para mulheres no setor tech.",
    image: "/placeholder.svg?height=200&width=200",
    social: { linkedin: "#", github: "#", twitter: "#" },
  },
  {
    name: "Flavio Escobar",
    role: "Organizador GDG",
    bio: "Desenvolvedor experiente e entusiasta de tecnologias Google, dedicado ao crescimento da comunidade local.",
    image: "/placeholder.svg?height=200&width=200",
    social: { linkedin: "#", github: "#", twitter: "#" },
  },
  {
    name: "Michele Teixeira",
    role: "Organizadora",
    bio: "Profissional de tecnologia comprometida com o desenvolvimento da comunidade tech em Lauro de Freitas.",
    image: "/placeholder.svg?height=200&width=200",
    social: { linkedin: "#", github: "#", twitter: "#" },
  },
  {
    name: "Edy Borges",
    role: "Organizador GDG",
    bio: "Desenvolvedor e mentor, focado em compartilhar conhecimento e inspirar novos talentos na área de tecnologia.",
    image: "/placeholder.svg?height=200&width=200",
    social: { linkedin: "#", github: "#", twitter: "#" },
  },
  {
    name: "Marcelo Rangel",
    role: "Organizador",
    bio: "Especialista em tecnologia com paixão por eventos e networking, contribuindo para o ecossistema tech local.",
    image: "/placeholder.svg?height=200&width=200",
    social: { linkedin: "#", github: "#", twitter: "#" },
  },
  {
    name: "Lucas Lion",
    role: "Desenvolvedor Fullstack",
    bio: "Desenvolvedor fullstack experiente, contribuindo com expertise técnica e visão prática para o evento.",
    image: "/placeholder.svg?height=200&width=200",
    social: { linkedin: "#", github: "#", twitter: "#" },
  },
  {
    name: "Matheus Maia",
    role: "Organizador",
    bio: "Profissional de tecnologia dedicado ao fortalecimento da comunidade desenvolvedora regional.",
    image: "/placeholder.svg?height=200&width=200",
    social: { linkedin: "#", github: "#", twitter: "#" },
  },
  {
    name: "Nadson",
    role: "Organizador",
    bio: "Entusiasta de tecnologia comprometido com a organização de eventos de qualidade para a comunidade.",
    image: "/placeholder.svg?height=200&width=200",
    social: { linkedin: "#", github: "#", twitter: "#" },
  },
  {
    name: "Amanda",
    role: "Organizadora",
    bio: "Profissional dedicada ao crescimento e desenvolvimento da comunidade tech em Lauro de Freitas.",
    image: "/placeholder.svg?height=200&width=200",
    social: { linkedin: "#", github: "#", twitter: "#" },
  },
]

export function OrganizersSection() {
  return (
    <section id="organizacao" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Equipe Organizadora</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conheça a equipe apaixonada por tecnologia que está trabalhando para tornar o DevFest Lauro de Freitas 2025
            uma experiência inesquecível para toda a comunidade.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {organizers.map((organizer, index) => (
            <Card key={index} className="border-0 shadow-lg bg-white overflow-hidden hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <Image
                    src={organizer.image || "/placeholder.svg"}
                    alt={organizer.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{organizer.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{organizer.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{organizer.bio}</p>

                <div className="flex justify-center gap-3">
                  <a
                    href={organizer.social.linkedin}
                    className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={organizer.social.github}
                    className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={organizer.social.twitter}
                    className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          {/* GDG Lauro de Freitas */}
          <Card className="border-0 shadow-xl bg-white overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-blue-500 to-green-500 p-8 text-white text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Image
                    src="/images/gdg-logo.png"
                    alt="GDG Lauro de Freitas"
                    width={60}
                    height={30}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">GDG Lauro de Freitas</h3>
                <p className="text-blue-100">Google Developer Group</p>
              </div>

              <div className="p-8">
                <p className="text-gray-600 leading-relaxed mb-6">
                  O Google Developer Group (GDG) Lauro de Freitas é uma comunidade local de desenvolvedores interessados
                  em tecnologias Google. Organizamos meetups, workshops e eventos para compartilhar conhecimento e
                  conectar profissionais da região metropolitana de Salvador.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Mais de 500 membros ativos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-red-500" />
                    <span className="text-gray-700">Eventos mensais desde 2020</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Code className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Foco em tecnologias Google</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-medium flex-1 cursor-pointer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visite nosso site
                  </Button>
                  <Button
                    variant="outline"
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-full font-medium bg-transparent flex-1 cursor-pointer"
                  >
                    Junte-se ao grupo
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Women Techmakers */}
          <Card className="border-0 shadow-xl bg-white overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-8 text-white text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Image
                    src="/images/wtm-logo.png"
                    alt="Women Techmakers"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">Women Techmakers</h3>
                <p className="text-pink-100">Diversidade e Inclusão</p>
              </div>

              <div className="p-8">
                <p className="text-gray-600 leading-relaxed mb-6">
                  Women Techmakers é uma iniciativa do Google que visa aumentar a representatividade feminina na
                  tecnologia. Em Lauro de Freitas, promovemos eventos, mentorias e oportunidades para mulheres na área
                  tech.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-pink-600" />
                    <span className="text-gray-700">Mais de 200 mulheres conectadas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-red-500" />
                    <span className="text-gray-700">Programa de mentoria ativo</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Code className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Workshops exclusivos</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-full font-medium flex-1 cursor-pointer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Conheça a iniciativa
                  </Button>
                  <Button
                    variant="outline"
                    className="border-2 border-pink-600 text-pink-600 hover:bg-pink-50 px-4 py-2 rounded-full font-medium bg-transparent flex-1 cursor-pointer"
                  >
                    Participe da rede
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Faça Parte da Nossa Comunidade!</h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Junte-se a centenas de desenvolvedores e profissionais de tecnologia que fazem parte das nossas
              comunidades locais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-full font-medium cursor-pointer"
              >
                Participar do GDG
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-6 py-3 rounded-full font-medium bg-transparent cursor-pointer"
              >
                Conhecer WTM
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

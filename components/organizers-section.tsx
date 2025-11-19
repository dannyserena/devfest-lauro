import {
  ExternalLink,
  Users,
  Heart,
  Code,
  Linkedin,
  Github,
  Instagram,
  X,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const organizers = [
  {
    name: "Danielle Teixeira",
    role: "Organizadora GDG & Embaixadora WTM",
    bio: "Senior Mobile Developer @Hitts Brasil",
    image: "/organizers/danielle.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/danielle-teixeira-93493376/",
      github: "https://github.com/dannyserena",
      instagram: "https://www.instagram.com/dannyserena/",
    },
  },
  {
    name: "Flavio Escobar",
    role: "Organizador GDG",
    bio: "CTO @CodeAces",
    image: "/organizers/flavio.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/flavioescobar",
      github: "https://github.com/flavioescobar",
      instagram: "https://www.instagram.com/flavioescobar1/",
    },
  },
  {
    name: "Edy Borges",
    role: "Organizador GDG",
    bio: "CTO @Netra",
    image: "/organizers/edy.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/ediaimoborges/",
      github: "https://github.com/edyonil",
      instagram: "https://www.instagram.com/edyoniloficial/",
    },
  },
  {
    name: "Marcelo Rangel",
    role: "Organizador GDG",
    bio: "Senior Developer @Netra",
    image: "/organizers/marcelo.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/marcelorangel/",
      github: "https://github.com/mrangelba",
      instagram: "https://www.instagram.com/mrangelba.dev/",
    },
  },
  {
    name: "Michele Teixeira",
    role: "Organizadora GDG",
    bio: "UX Designer Freelancer",
    image: "/organizers/michele.png",
    social: {
      linkedin: "https://www.linkedin.com/in/michele-teixeira-b375b3257/",
      instagram: "https://www.instagram.com/chelinhateixeira/",
    },
  },
  {
    name: "Gabriel Santa Ritta",
    role: "Embaixador DevFest",
    bio: "Web3 Tech Lead @DUX",
    image: "/organizers/gabriel.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/gabrielsritta/",
      github: "https://github.com/gabrielfst30",
      x: "https://x.com/gabrielfst30",
    },
  },
  {
    name: "Nadson Santos",
    role: "Embaixador DevFest",
    bio: "Mid Developer @Netra",
    image: "/organizers/nadson.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/nadson-souza/",
      github: "https://github.com/Nadson-Santos",
      instagram: "https://www.instagram.com/nadsonsdsantos/",
    },
  },
  {
    name: "Lucas Lion",
    role: "Embaixador DevFest",
    bio: "Junior Developer @Netra",
    image: "/organizers/lucas.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/lucas-lion-122b15189/",
      github: "https://github.com/Lucas-Lion",
      instagram: "https://www.instagram.com/lucas_lionv/",
    },
  },
  {
    name: "Matheus Maia",
    role: "Embaixador DevFest",
    bio: "Junior Developer @Netra",
    image: "/organizers/matheus.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/matheus-maia-832b97222",
      github: "https://github.com/MatheusDLM",
      instagram: "https://www.instagram.com/matheus.maia100/",
    },
  },
  {
    name: "Amanda Melquiades",
    role: "Embaixadora DevFest",
    bio: "Junior Developer @Netra",
    image: "/organizers/amanda.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/amanda-victoria-554363161/",
      github: "https://github.com/avmsantos",
      instagram: "https://www.instagram.com/avmsantos/",
    },
  },
  {
    name: "Natali Correira",
    role: "Embaixadora DevFest",
    bio: "Product Owner @OllieDigital",
    image: "/organizers/natali.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/natali-correia-1813058a/",
    },
  },
  {
    name: "Andreia Escobar",
    role: "Embaixadora DevFest",
    bio: "Marketing Director @CodeAces",
    image: "/organizers/andreia.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/silvaandreia/",
    },
  },
  {
    name: "Daniele Siqueira",
    role: "Embaixadora DevFest",
    bio: "Financial Manager @colegioAnalise",
    image: "/organizers/daniele.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/daniele-oliveira-1b6173229/",
      instagram: "https://www.instagram.com/danni.siq/",
    },
  },
];

export function OrganizersSection() {
  return (
    <section id="organizacao" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Equipe Organizadora
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conheça a equipe apaixonada por tecnologia que está trabalhando para
            tornar o DevFest Lauro de Freitas 2025 uma experiência inesquecível
            para toda a comunidade.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-16">
          {organizers.map((organizer, index) => (
            <Card
              key={index}
              className="border-0 shadow-md bg-white overflow-hidden hover:shadow-lg transition-shadow h-full"
            >
              <CardContent className="p-4 text-center h-full flex flex-col">
                <div className="relative w-16 h-16 mx-auto mb-3">
                  <Image
                    src={organizer.image || "/placeholder.svg"}
                    alt={organizer.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-1 leading-tight">
                  {organizer.name}
                </h3>
                <p className="text-blue-600 font-medium mb-2 text-sm">
                  {organizer.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-2 flex-grow">
                  {organizer.bio}
                </p>

                <div className="flex justify-center gap-2 mt-auto">
                  <a
                    href={organizer.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>

                  {organizer.social.github && (
                    <a
                      href={organizer.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}

                  {organizer.social.instagram && (
                    <a
                      href={organizer.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-pink-100 text-pink-600 rounded-full hover:bg-pink-200 transition-colors"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  )}

                  {organizer.social.x && (
                    <a
                      href={organizer.social.x}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  )}
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
                <h3 className="text-2xl font-bold mb-2">
                  GDG Lauro de Freitas
                </h3>
                <p className="text-blue-100">Google Developer Group</p>
              </div>

              <div className="p-8">
                <p className="text-gray-600 leading-relaxed mb-6">
                  O Google Developer Group (GDG) Lauro de Freitas é uma
                  comunidade local de desenvolvedores interessados em
                  tecnologias Google. Organizamos meetups, workshops e eventos
                  para compartilhar conhecimento e conectar profissionais da
                  região metropolitana de Salvador.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">
                      Mais de 500 membros ativos
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-red-500" />
                    <span className="text-gray-700">
                      Eventos trimestrais desde 2018
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Code className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">
                      Foco em tecnologias Google
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://gdg.community.dev/gdg-lauro-de-freitas/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-medium flex items-center justify-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visite nosso site
                  </a>
                  <a
                    href="https://gdg.community.dev/gdg-lauro-de-freitas/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-full font-medium bg-transparent flex-1 text-center"
                  >
                    Junte-se ao grupo
                  </a>
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
                  Women Techmakers é uma iniciativa do Google que visa aumentar
                  a representatividade feminina na tecnologia. Em Lauro de
                  Freitas, promovemos eventos, mentorias e oportunidades para
                  mulheres na área tech.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-pink-600" />
                    <span className="text-gray-700">
                      Mais de 200 mulheres conectadas
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-red-500" />
                    <span className="text-gray-700">
                      Programa de mentoria ativo
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Code className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Workshops exclusivos</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://developers.google.com/womentechmakers?hl=pt-br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-full font-medium flex-1 flex items-center justify-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Conheça a iniciativa
                  </a>

                  <a
                    href="https://developers.google.com/womentechmakers/members?hl=pt-br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-pink-600 text-pink-600 hover:bg-pink-50 px-4 py-2 rounded-full font-medium bg-transparent flex-1 text-center"
                  >
                    Participe da rede
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Faça Parte da Nossa Comunidade!
            </h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Junte-se a centenas de desenvolvedores e profissionais de
              tecnologia que fazem parte das nossas comunidades locais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://developers.google.com/community/gdg"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-full font-medium cursor-pointer"
              >
                Participar do GDG
              </a>
              <a
                href="https://developers.google.com/womentechmakers?hl=pt-br"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-6 py-3 rounded-full font-medium bg-transparent cursor-pointer"
              >
                Conhecer WTM
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

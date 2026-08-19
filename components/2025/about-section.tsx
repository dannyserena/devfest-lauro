import { Code, Users, Lightbulb, Network } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Tecnologias Modernas",
      description: "Workshops e palestras sobre as mais recentes tecnologias e frameworks do mercado.",
    },
    {
      icon: <Users className="w-8 h-8 text-red-500" />,
      title: "Networking",
      description: "Conecte-se com desenvolvedores, estudantes e profissionais da região.",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
      title: "Inspiração",
      description: "Histórias inspiradoras e cases de sucesso da comunidade tech baiana.",
    },
    {
      icon: <Network className="w-8 h-8 text-green-600" />,
      title: "Comunidade",
      description: "Fortaleça os laços da comunidade desenvolvedora local e regional.",
    },
  ]

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">O que é o DevFest Lauro de Freitas?</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            O DevFest é um evento global organizado pelo Google Developer Groups (GDG) que acontece em diversas cidades
            ao redor do mundo. Em Lauro de Freitas, reunimos a comunidade desenvolvedora da Bahia para compartilhar
            conhecimento, inspirar inovação e fortalecer nossa rede de contatos.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Este evento é voltado para desenvolvedores, estudantes, profissionais de TI e entusiastas de tecnologia que
            desejam aprender, compartilhar experiências e se conectar com a comunidade tech local. Os ingressos estão
            disponíveis no Sympla.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">O que esperar do evento?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
            <div>
              <h4 className="font-semibold mb-2">Palestras Técnicas</h4>
              <p>Apresentações sobre desenvolvimento web, mobile, cloud, IA/ML e muito mais.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Workshops Práticos</h4>
              <p>Sessões hands-on para aprender na prática com especialistas.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Networking</h4>
              <p>Coffee breaks, almoço e momentos para conhecer outros profissionais.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

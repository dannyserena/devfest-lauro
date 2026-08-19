import { Smartphone, Bell, MapPin, Users } from "lucide-react"
import Image from "next/image"

export function MobileSection() {
  const features = [
    {
      icon: <Smartphone className="w-8 h-8 text-blue-600" />,
      title: "Tudo na palma da mão",
      description: "Veja a programação completa, palestras, trilhas e horários direto no app.",
    },
    {
      icon: <Bell className="w-8 h-8 text-red-500" />,
      title: "Notificações em tempo real",
      description: "Receba avisos sobre início de palestras, mudanças de sala e comunicados importantes.",
    },
    {
      icon: <MapPin className="w-8 h-8 text-yellow-500" />,
      title: "Mapa e localização",
      description: "Encontre auditórios, espaços de workshop, credenciamento e áreas de networking facilmente.",
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Conecte-se com a galera",
      description: "Acompanhe quem está palestrando, veja detalhes e se organize para não perder nada.",
    },
  ]

  return (
    <section id="aplicativo" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            App oficial do DevFest Lauro de Freitas
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Criamos um app exclusivo para você aproveitar ao máximo a experiência do DevFest.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Com ele, você acompanha a agenda em tempo real, recebe notificações importantes, encontra as salas com
            facilidade e se organiza para assistir as palestras e workshops que mais interessam.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow bg-white">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Por que usar o app durante o evento?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
            <div>
              <h4 className="font-semibold mb-2">Agenda sempre atualizada</h4>
              <p>Acompanhe qualquer ajuste de horário ou sala sem precisar ir até o mural.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Experiência organizada</h4>
              <p>Monte mentalmente sua trilha de conteúdo e não perca as palestras que você mais quer ver.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Mais imersão no evento</h4>
              <p>Use o app como seu guia oficial para aproveitar cada momento do DevFest Lauro de Freitas.</p>
            </div>
          </div>


          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.dtcoders.gdgtalks"
              target="_blank"
              className="
      inline-flex items-center justify-center
      transition-transform duration-300 ease-out
      hover:scale-105 hover:-translate-y-1
    "
            >
              <Image
                src="/images/googleplay.png"
                alt="Disponível na Google Play"
                width={180}
                height={60}
                className="cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

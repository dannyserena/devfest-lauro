import { MapPin, Car, Bus, Clock, Phone, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function LocationSection() {
  return (
    <section id="local" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Onde o Conhecimento Acontece</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            O DevFest Lauro de Freitas acontecerá no moderno campus do SENAI, com toda a infraestrutura necessária para
            um evento de excelência.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Location Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">SENAI Lauro de Freitas</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Endereço Completo</p>
                    <p className="text-gray-600">
                      Av. Luiz Tarquínio Pontes, 938
                      <br />
                      Jardim Aeroporto, Senai, Lauro de Freitas - BA
                      <br />
                      CEP: 42702-000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Horário do Evento</p>
                    <p className="text-gray-600">
                      29 de Novembro de 2025
                      <br />
                      08:00 às 17:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Contato do Local</p>
                    <p className="text-gray-600">
                      (71) 3287-8058
                      <br />
                      cacsenailauro@fieb.org.br
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Access Instructions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg bg-blue-50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Car className="w-6 h-6 text-blue-600" />
                    <h4 className="font-semibold text-gray-900">De Carro</h4>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Estacionamento gratuito disponível</li>
                    <li>• Acesso pela BR-324</li>
                    <li>• Próximo ao Shopping Lauro de Freitas</li>
                    <li>• GPS: SENAI Lauro de Freitas</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-green-50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Bus className="w-6 h-6 text-green-600" />
                    <h4 className="font-semibold text-gray-900">Transporte Público</h4>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Linhas de ônibus: 1001, 1002</li>
                    <li>• Ponto: Centro de Lauro de Freitas</li>
                    <li>• Distância: 200m caminhando</li>
                    <li>• Uber/99: Disponível na região</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Facilities */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Infraestrutura do Local</h4>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                <div>
                  <p>✓ Auditório para 300 pessoas</p>
                  <p>✓ 3 salas de workshop</p>
                  <p>✓ Laboratório de informática</p>
                </div>
                <div>
                  <p>✓ Wi-Fi de alta velocidade</p>
                  <p>✓ Ar condicionado</p>
                  <p>✓ Acessibilidade completa</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="space-y-6">
            <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3836.543302!2d-38.3155542!3d-12.8898912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7163df92ba8b131%3A0x4e9638c8e8f832f3!2sSENAI%20Lauro%20de%20Freitas!5e0!3m2!1spt-BR!2sbr!4v1724270000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-96"
              ></iframe>
            </div>

            <div className="flex justify-end">
              <a
                href="https://www.google.com/maps/place/SENAI+Lauro+de+Freitas/@-12.8898912,-38.3155542,17z/data=!3m1!4b1!4m6!3m5!1s0x7163df92ba8b131:0x4e9638c8e8f832f3!8m2!3d-12.8898964!4d-38.3129793!16s%2Fg%2F1tkb5991?entry=ttu&g_ep=EgoyMDI1MDgxOC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium flex items-center justify-center"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Abrir no Google Maps
              </a>
            </div>

            {/* Nearby Places */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Pontos de Referência Próximos</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Shopping Lauro de Freitas (500m)</li>
                  <li>• Prefeitura de Lauro de Freitas (300m)</li>
                  <li>• Hospital Geral de Lauro de Freitas (1km)</li>
                  <li>• Estação de Metrô Lauro de Freitas (2km)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users } from "lucide-react"

export function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const eventDate = new Date("2025-11-29T09:00:00-03:00")

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = eventDate.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 pt-16"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500 rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-red-500 rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-yellow-500 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-green-500 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-red-500 to-green-600 bg-clip-text text-transparent">
              DevFest
            </span>
            <br />
            <span className="text-gray-800">Lauro de Freitas 2025</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Conectando e Inspirando a Comunidade Desenvolvedora da Bahia!
          </p>

          {/* Event Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 text-gray-700">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-600" />
              <span className="font-medium">29 de Novembro de 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-red-500" />
              <span className="font-medium">SENAI Lauro de Freitas, Bahia</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-green-600" />
              <span className="font-medium">Evento Pago</span>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contagem Regressiva</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-md mx-auto">
              {[
                { label: "Dias", value: timeLeft.days },
                { label: "Horas", value: timeLeft.hours },
                { label: "Minutos", value: timeLeft.minutes },
                { label: "Segundos", value: timeLeft.seconds },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-lg shadow-lg p-4 border border-gray-200">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600">
                    {item.value.toString().padStart(2, "0")}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold text-lg cursor-pointer"
              onClick={() => window.open("https://www.sympla.com.br/evento/devfest-lauro-de-freitas-2025/3117685", "_blank")}
            >
              Comprar Ingresso no Sympla
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-semibold text-lg bg-transparent cursor-pointer"
            >
              <a href="#sobre">Saiba Mais</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

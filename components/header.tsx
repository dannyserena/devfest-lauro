"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: "#inicio", label: "Início" },
    { href: "#sobre", label: "Sobre o Evento" },
    { href: "#aplicativo", label: "Aplicativo" },
    { href: "#palestrantes", label: "Palestrantes" },
    { href: "#agenda", label: "Agenda" },
    { href: "#patrocinadores", label: "Patrocinadores" },
    { href: "#local", label: "Local" },
    { href: "#contato", label: "Contato" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Image
              src="/images/gdg-logo.png"
              alt="GDG Lauro de Freitas"
              width={500}
              height={120}
              quality={100}
              className="h-16 w-auto"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-black-02 hover:text-devfest-blue font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden sm:block">
            <Button
              className="bg-devfest-blue hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium"
              onClick={() => window.open("https://www.sympla.com.br/evento/devfest-lauro-de-freitas-2025/3117685", "_blank")}
            >
              Comprar Ingresso
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-black-02 hover:text-devfest-blue font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button
                className="bg-devfest-blue hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium mt-4"
                onClick={() => window.open("https://www.sympla.com.br/evento/devfest-lauro-de-freitas-2025/3117685", "_blank")}
              >
                Comprar Ingresso
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

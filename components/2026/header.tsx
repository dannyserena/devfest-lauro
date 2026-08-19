"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react"

const navItems = [
  { href: "#trilhas", label: "Trilhas" },
  { href: "#palestrantes", label: "Palestrantes" },
  { href: "#local", label: "Local" },
  { href: "#patrocinadores", label: "Patrocinadores" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-white/[0.08]"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1280px] px-6 h-[68px] flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex gap-[3px]">
              <span className="w-2 h-2 rounded-full bg-trilha-scale" />
              <span className="w-2 h-2 rounded-full bg-trilha-secure" />
              <span className="w-2 h-2 rounded-full bg-trilha-build" />
              <span className="w-2 h-2 rounded-full bg-trilha-community" />
            </div>
            <div className="leading-none">
              <div className="font-black text-[15px] tracking-[-0.02em] flex items-center gap-1.5 text-foreground">
                DevFest <span className="font-medium text-foreground/60">Lauro</span>
                <span className="ml-1.5 text-[10px] font-bold px-1.5 py-0.5 rounded bg-foreground text-background tracking-wide">
                  2026
                </span>
              </div>
              <div className="font-mono text-[9px] tracking-[0.18em] text-foreground/40 mt-0.5">
                GDG LAURO DE FREITAS
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <span className="px-3.5 py-2 rounded-full text-[13px] font-medium bg-foreground text-background">
              DevFest 2026
            </span>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3.5 py-2 rounded-full text-[13px] font-medium text-foreground/60 hover:text-foreground hover:bg-white/[0.06] transition"
              >
                {item.label}
              </a>
            ))}

            <div className="relative group ml-1">
              <button className="px-3.5 py-2 rounded-full text-[13px] font-medium text-foreground/60 hover:text-foreground hover:bg-white/[0.06] flex items-center gap-1 transition">
                Edições Anteriores
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-40 p-1 rounded-xl bg-card border border-border opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition">
                <Link
                  href="/2025"
                  className="flex items-center justify-between px-3 py-2 rounded-lg text-[13px] hover:bg-white/[0.06] text-foreground/80 hover:text-foreground"
                >
                  2025 <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#ingressos"
            className="hidden md:inline-flex h-9 px-5 rounded-full bg-trilha-build text-black text-[13.5px] font-bold tracking-[-0.01em] items-center hover:brightness-110 transition"
          >
            Ingressos
          </a>
          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="lg:hidden w-9 h-9 rounded-full bg-white/[0.08] flex items-center justify-center text-foreground"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-background/95 backdrop-blur-md px-6 py-6 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block text-[16px] font-medium text-foreground/80"
            >
              {item.label}
            </a>
          ))}
          <Link
            href="/2025"
            onClick={() => setIsMenuOpen(false)}
            className="block text-[16px] font-medium text-foreground/50"
          >
            Edições Anteriores • 2025
          </Link>
          <a
            href="#ingressos"
            onClick={() => setIsMenuOpen(false)}
            className="block mt-2 h-11 px-5 rounded-full bg-trilha-build text-black text-[14px] font-bold items-center justify-center flex"
          >
            Ingressos
          </a>
        </div>
      )}
    </header>
  )
}

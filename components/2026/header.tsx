"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpRight, ChevronDown, Menu, Moon, Sun, X } from "lucide-react"
import { useTheme2026 } from "@/components/2026/theme-scope"
import { DevFestLogo } from "@/components/2026/devfest-logo"
import { INSCRICAO_URL } from "@/content/2026/links"

const navItems = [
  { href: "#trilhas", label: "Trilhas" },
  { href: "#palestrantes", label: "Palestrantes" },
  { href: "#local", label: "Local" },
  { href: "#patrocinadores", label: "Patrocinadores" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, toggle } = useTheme2026()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-foreground/[0.08]"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1280px] px-6 py-3 md:py-4 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex flex-col leading-none group">
            <div className="flex items-center gap-2">
              <DevFestLogo className="h-6 w-auto shrink-0 text-foreground" />
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-foreground text-background tracking-wide">
                2026
              </span>
            </div>
            <span className="mt-1.5 text-xs font-medium uppercase tracking-wider text-foreground/45">
              Lauro de Freitas
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[13.5px] font-medium text-foreground/70 hover:text-trilha-build transition-colors"
              >
                {item.label}
              </a>
            ))}

            <div className="relative group">
              <button className="flex items-center gap-1 text-[13.5px] font-medium text-foreground/70 hover:text-trilha-build transition-colors">
                Edições Anteriores
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-40 p-1 rounded-xl bg-card border border-border opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition">
                <Link
                  href="/2025"
                  className="flex items-center justify-between px-3 py-2 rounded-lg text-[13px] hover:bg-foreground/[0.06] text-foreground/80 hover:text-foreground"
                >
                  2025 <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="w-9 h-9 rounded-full bg-foreground/[0.06] backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-foreground/[0.14] transition-colors"
            aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <a
            href={INSCRICAO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex h-9 px-5 rounded-full bg-trilha-build text-black text-[13.5px] font-bold tracking-[-0.01em] items-center hover:brightness-110 transition"
          >
            Ingressos
          </a>
          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="lg:hidden w-9 h-9 rounded-full bg-foreground/[0.08] flex items-center justify-center text-foreground"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden border-t border-foreground/10 bg-background/95 backdrop-blur-md"
          >
            <motion.div
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } } }}
              className="px-6 py-6 space-y-4"
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  variants={{ hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0 } }}
                  className="block text-[16px] font-medium text-foreground/80"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.div variants={{ hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0 } }}>
                <Link
                  href="/2025"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-[16px] font-medium text-foreground/50"
                >
                  Edições Anteriores • 2025
                </Link>
              </motion.div>
              <motion.a
                href={INSCRICAO_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                variants={{ hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0 } }}
                className="block mt-2 h-11 px-5 rounded-full bg-trilha-build text-black text-[14px] font-bold items-center justify-center flex"
              >
                Ingressos
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

"use client"

import { createContext, useContext, useEffect, useState } from "react"

type Theme = "light" | "dark"

const STORAGE_KEY = "devfest-2026-theme"
// Classe própria (não a .dark genérica do shadcn) para não vazar o
// modo escuro da home 2026 para /2025, que fica sempre no tema claro.
const HTML_CLASS = "theme-2026-dark"

const ThemeContext = createContext<{ theme: Theme; toggle: () => void }>({
  theme: "light",
  toggle: () => {},
})

export function useTheme2026() {
  return useContext(ThemeContext)
}

export function ThemeScope({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light")
  const [hydrated, setHydrated] = useState(false)

  // Lê a preferência salva depois do mount (SSR sempre renderiza
  // claro, que já é o padrão desejado — evita mismatch de hidratação).
  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) === "dark") setTheme("dark")
    setHydrated(true)
  }, [])

  // Só sincroniza depois de ler o localStorage, senão esse efeito
  // roda uma vez com o estado inicial "light" e sobrescreve a
  // preferência salva antes do primeiro efeito ter a chance de agir.
  useEffect(() => {
    if (!hydrated) return
    document.documentElement.classList.toggle(HTML_CLASS, theme === "dark")
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme, hydrated])

  const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"))

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      <div className="theme-2026 min-h-screen bg-background text-foreground">
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

import type { Metadata } from "next"
import { ThemeScope } from "@/components/2026/theme-scope"
import { Header } from "@/components/2026/header"
import { HeroSection } from "@/components/2026/hero-section"
import { ManifestoSection } from "@/components/2026/manifesto-section"
import { TrilhasSection } from "@/components/2026/trilhas-section"
import { SpeakersSection } from "@/components/2026/speakers-section"
import { Legacy2025Section } from "@/components/2026/legacy-2025-section"
import { LocalSection } from "@/components/2026/local-section"
import { SponsorsCtaSection } from "@/components/2026/sponsors-cta-section"
import { Footer } from "@/components/2026/footer"

export const metadata: Metadata = {
  title: "DevFest Lauro de Freitas 2026",
  description:
    "Build. Secure. Scale. Developers and Builders in the Agentic Era — 21 de novembro de 2026, SENAI Lauro de Freitas.",
}

export default function HomePage() {
  return (
    <ThemeScope>
      <Header />
      <main>
        <HeroSection />
        <ManifestoSection />
        <TrilhasSection />
        <SpeakersSection />
        <Legacy2025Section />
        <LocalSection />
        <SponsorsCtaSection />
      </main>
      <Footer />
    </ThemeScope>
  )
}

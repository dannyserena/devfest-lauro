// EM CONSTRUÇÃO (Sprint 2026 · Stories #7-#13 substituem o restante):
// Header e Hero já são os componentes reais de components/2026/*.
// As seções abaixo (About até Organizers) ainda são a edição 2025
// "emprestada" temporariamente, só para a home nunca ficar em branco
// durante a migração. Cada uma será trocada por sua versão 2026
// (Manifesto, Trilhas, Legacy 2025 card, Local, Patrocinadores,
// Footer) nas próximas histórias do sprint.
import { Header } from "@/components/2026/header"
import { HeroSection } from "@/components/2026/hero-section"
import { AboutSection } from "@/components/2025/about-section"
import { SpeakersSection } from "@/components/2025/speakers-section"
import { AgendaSection } from "@/components/2025/agenda-section"
import { SponsorsSection } from "@/components/2025/sponsors-section"
import { LocationSection } from "@/components/2025/location-section"
import { OrganizersSection } from "@/components/2025/organizers-section"
import { Footer } from "@/components/2025/footer"
import { MobileSection } from "@/components/2025/mobile-section"

export default function HomePage() {
  return (
    <div className="theme-2026 min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <MobileSection />
        <SpeakersSection />
        <AgendaSection />
        <SponsorsSection />
        <LocationSection />
        <OrganizersSection />
      </main>
      <Footer />
    </div>
  )
}

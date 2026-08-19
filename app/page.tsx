// EM CONSTRUÇÃO (Sprint 2026 · Stories #10-#13 substituem o restante):
// Header, Hero, Manifesto, Trilhas e Legacy2025 já são componentes
// reais de components/2026/*. Sponsors/Location/Organizers/Footer
// abaixo ainda são a edição 2025 "emprestada" temporariamente, só
// para a home nunca ficar em branco durante a migração — serão
// trocadas por Local, Patrocinadores CTA e Footer 2026 nas próximas
// histórias.
import { Header } from "@/components/2026/header"
import { HeroSection } from "@/components/2026/hero-section"
import { ManifestoSection } from "@/components/2026/manifesto-section"
import { TrilhasSection } from "@/components/2026/trilhas-section"
import { Legacy2025Section } from "@/components/2026/legacy-2025-section"
import { SponsorsSection } from "@/components/2025/sponsors-section"
import { LocationSection } from "@/components/2025/location-section"
import { OrganizersSection } from "@/components/2025/organizers-section"
import { Footer } from "@/components/2025/footer"

export default function HomePage() {
  return (
    <div className="theme-2026 min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <ManifestoSection />
        <TrilhasSection />
        <Legacy2025Section />
        <SponsorsSection />
        <LocationSection />
        <OrganizersSection />
      </main>
      <Footer />
    </div>
  )
}

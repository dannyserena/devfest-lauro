import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SpeakersSection } from "@/components/speakers-section"
import { AgendaSection } from "@/components/agenda-section"
import { SponsorsSection } from "@/components/sponsors-section"
import { LocationSection } from "@/components/location-section"
import { OrganizersSection } from "@/components/organizers-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
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

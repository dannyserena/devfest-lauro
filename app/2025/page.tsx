import { Header } from "@/components/2025/header"
import { HeroSection } from "@/components/2025/hero-section"
import { AboutSection } from "@/components/2025/about-section"
import { SpeakersSection } from "@/components/2025/speakers-section"
import { AgendaSection } from "@/components/2025/agenda-section"
import { SponsorsSection } from "@/components/2025/sponsors-section"
import { LocationSection } from "@/components/2025/location-section"
import { OrganizersSection } from "@/components/2025/organizers-section"
import { Footer } from "@/components/2025/footer"
import { MobileSection } from "@/components/2025/mobile-section"

export default function DevFest2025Page() {
  return (
    <div className="min-h-screen bg-background">
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

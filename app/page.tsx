import { Layout } from "@/components/layout/Layout"
import { HeroSection } from "@/components/hero-section"
import { CountdownTimer } from "@/components/CountdownTimer"
import { StatsSection } from "@/components/stat-section"
import { SponsorsSection } from "@/components/sponsor-section"
import { CountdownSection } from "@/components/counter-section"
import { RaceSection } from "@/components/race-section"


const RACE_DATE = new Date("2026-10-03T04:00:00Z");
export default function HomePage() {
  return (
    <Layout>
      <HeroSection /> 
      <CountdownSection />
      <CountdownTimer targetDate={RACE_DATE} />
      <StatsSection /> 
      <RaceSection />
      <SponsorsSection />
    </Layout>
  )
}

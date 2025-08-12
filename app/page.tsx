import type { Metadata } from "next"
import { HeroSection } from "@/components/hero-section"
import { WhoItsFor } from "@/components/who-its-for"
import { KeyFeatures } from "@/components/key-features"
import { HowItWorks } from "@/components/how-it-works"
import { SocialProof } from "@/components/social-proof"
import { EmailCapture } from "@/components/email-capture"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Boxaloo - The Load Board Built for Box Trucks & Cargo Vans",
  description:
    "Join 400+ carriers, brokers, and dispatchers on the waitlist for Boxaloo - the specialized load board for box truck and cargo van loads. Direct messaging, targeted matching, all distance types.",
  keywords: "load board, box trucks, cargo vans, carriers, brokers, dispatchers, freight, logistics",
  openGraph: {
    title: "Boxaloo - The Load Board Built for Box Trucks & Cargo Vans",
    description: "Join 400+ carriers, brokers, and dispatchers on the waitlist for Boxaloo",
    type: "website",
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <WhoItsFor />
        <KeyFeatures />
        <HowItWorks />
        <SocialProof />
        <EmailCapture />
      </main>
      <Footer />
    </div>
  )
}

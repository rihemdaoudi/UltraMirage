import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import heroImage from "@/public/images/hero-marathon.jpeg"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Ultra Mirage Desert Marathon"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <p className="text-white/90 text-lg mb-4 tracking-widest uppercase">
          Ultra Marathon Experience Desert
        </p>

        <h1 className="font-display text-6xl md:text-8xl mb-6 leading-tight">
          ULTRA MIRAGE <br />
          <span className="bg-linear-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
            DESERT MARATHON
          </span>
        </h1>

        <p className="text-white/90 text-xl mb-12 max-w-2xl mx-auto">
          Push your limits in the heart of the Sahara.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link href="/register">
            <Button size="xl" className="bg-orange-500 hover:bg-orange-600">
              Register Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>

          <Link href="/umed-2026">
            <Button size="xl" variant="secondary">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

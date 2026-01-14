import { CountdownTimer } from "@/components/CountdownTimer"
import { ClientOnly } from "./ClientOnly"

const RACE_DATE = new Date("2026-10-03T04:00:00Z")

export function CountdownSection() {
  return (
    <section className="relative py-24 text-center overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-neutral-900 via-neutral-800 to-neutral-900" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-125 h-125 bg-orange-500/20 blur-[120px]" />

      <div className="relative z-10 container mx-auto px-4">
        <p className="uppercase tracking-widest text-white/70 mb-3">
          Next Edition
        </p>

        <h2 className="font-display text-4xl md:text-5xl text-white mb-14">
          October 3, 2026
        </h2>

         <ClientOnly>
          <CountdownTimer targetDate={RACE_DATE} />
        </ClientOnly>
      </div>
    </section>
  )
}

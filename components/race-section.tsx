import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import marathonImage from "@/public/NAS02557.jpg";

export function RaceSection() {
  const raceOptions = [
    { name: "UMED 100K Records", distance: "100 km" },
    { name: "UMED 50K Records", distance: "50 km" },
    { name: "Assurances BIAT 25km Desert Trail", distance: "25 km" }
  ];

  return (
    <section className="py-20 bg-linear-to-b from-background to-gray-50 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-100 lg:h-125 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src={marathonImage}
              alt="Ultra Marathon runners in the desert"
              fill
              className="object-cover"
            />
            {/* Badge on image */}
            <div className="absolute bottom-4 right-4 bg-[#F5C542] text-black px-4 py-2 rounded-full shadow-lg">
              <div className="text-2xl font-bold">3</div>
              <div className="text-xs font-semibold uppercase tracking-wide">Race Options</div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-[#F5C542] text-sm font-semibold tracking-widest uppercase">
              ULTRA MARATHON EXPERIENCE DESERT
            </p>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              UMED 2026
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Choose your challenge: 100KM, 50KM, or 25KM through the stunning Saharan landscape. 
              All-inclusive packages with accommodation, transport, and unforgettable memories.
            </p>

            {/* Race Options Labels */}
            <div className="flex flex-wrap gap-3 py-4">
              {raceOptions.map((race, index) => (
                <div 
                  key={index}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border-l-4 border-[#F5C542]"
                >
                  <span className="font-semibold text-base">{race.name}</span>
                  <span className="text-sm text-muted-foreground">({race.distance})</span>
                </div>
              ))}
            </div>

            <Link href="/umed-2026">
              <Button 
                size="lg" 
                className="bg-[#F5C542] hover:bg-[#e6b937] text-black font-semibold mt-4"
              >
                View Race Details
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Calendar, Clock, Users, Hotel, Car, DollarSign, Award, CheckCircle } from "lucide-react";
import heroImage from "@/public/images/hero-marathon.jpeg";
import umed100Track from "@/public/UMED100 2025_JPG.avif";
import umed50Track from "@/public/UMED50 2025_JPG.avif";
import umed25Track from "@/public/UMED25 2025.avif";

type RaceType = "100k" | "50k" | "25k";

const raceDetails = {
  "25k": {
    title: "Assurances BIAT 25km Desert Trail",
    race: {
      when: "Sat. 03 Oct. 2026",
      where: "Tozeur/Tunisia",
      startFinishLine: "TBC",
      distance: "26 km",
      maxTime: "5 hours",
      maxRunners: "300",
      itraPoints: "1",
      utmbQualifier: "TBC",
      checkPoints: "1 (Hydratation/Medical/Food)",
      hydrationPoints: "1",
      teamOption: "Yes, for 5 runners",
      difficulty: "Moderate",
      mandatoryEquipment: "Yes",
      doctorCertificate: "No",
      insurance: "Yes",
      finisherPrize: "Medal & Certificate"
    },
    transport: {
      tunisTozeur: "Thursday 01 Oct. 2026",
      tozeurTunis: "Sunday 04 Oct. 2026",
      hotelShuttle: "Yes"
    },
    accommodation: {
      type: "4* Hotel in Tozeur",
      checkIn: "01 Oct. 2026",
      checkOut: "04 Oct. 2026",
      nights: "3",
      singleOption: "Extra",
      mealPackage: "All Inclusive",
      beverage: "No"
    },
    price: "Euro 415"
  },
  "50k": {
    title: "ULTRA MIRAGE 50K",
    race: {
      when: "Sat. 03 Oct. 2026",
      where: "Tozeur/Tunisia",
      startFinishLine: "TBC",
      distance: "52 km",
      maxTime: "10 hours",
      maxRunners: "200",
      itraPoints: "2",
      utmbQualifier: "Yes",
      checkPoints: "2 (Hydratation/Medical/Food)",
      hydrationPoints: "4",
      teamOption: "Yes, for 5 runners",
      difficulty: "Moderate",
      mandatoryEquipment: "Yes",
      doctorCertificate: "No",
      insurance: "Yes",
      finisherPrize: "Medal & Certificate"
    },
    transport: {
      tunisTozeur: "Thursday 01 Oct. 2026",
      tozeurTunis: "Sunday 04 Oct. 2026",
      hotelShuttle: "Yes"
    },
    accommodation: {
      type: "4* Hotel in Tozeur",
      checkIn: "01 Oct. 2026",
      checkOut: "04 Oct. 2026",
      nights: "3",
      singleOption: "Extra",
      mealPackage: "All Inclusive",
      beverage: "No"
    },
    price: "Euro 455"
  },
  "100k": {
    title: "ULTRA MIRAGE 100K",
    race: {
      when: "Sat. 03 Oct. 2026",
      where: "Tozeur/Tunisia",
      startFinishLine: "TBC",
      distance: "100 km",
      maxTime: "20 hours",
      maxRunners: "100",
      itraPoints: "3",
      utmbQualifier: "Yes",
      checkPoints: "5 (Hydratation/Medical/Food)",
      hydrationPoints: "8",
      teamOption: "Yes, for 5 runners",
      difficulty: "Advanced",
      mandatoryEquipment: "Yes",
      doctorCertificate: "No",
      insurance: "Yes",
      finisherPrize: "Medal & Certificate"
    },
    transport: {
      tunisTozeur: "Thursday 01 Oct. 2026",
      tozeurTunis: "Sunday 04 Oct. 2026",
      hotelShuttle: "Yes"
    },
    accommodation: {
      type: "4* Hotel in Tozeur",
      checkIn: "01 Oct. 2026",
      checkOut: "04 Oct. 2026",
      nights: "3",
      singleOption: "Extra",
      mealPackage: "All Inclusive",
      beverage: "No"
    },
    price: "Euro 495"
  }
};

const schedule = [
  {
    day: "Day 1",
    date: "OCT 01, 2026",
    activities: [
      "10:00 - First bus departs from Tunis-Carthage Airport to Tozeur",
      "18:00 - Last bus departs from Tunis-Carthage Airport to Tozeur"
    ]
  },
  {
    day: "Day 2",
    date: "OCT 02, 2026",
    activities: [
      "08:00-12:00 - Race Registration done by Race Number ",
      "13:00-14:00 - Race briefing in English",
      "14:00-15:00 - Race briefing in French",
      "15:00-16:00 - Race briefing in Arabic "
    ]
  },
  {
    day: "Day 3",
    date: "OCT 03, 2026",
    activities: [
      "05:30 - Buses Depart from Tozeur to UMED Village",
      "06:30 - UMED Races Start",
      "12:00 - 25km Assurances BIAT Trail Closes",
      "16:30 - UMED50 Race closes",
      "17:00 - Buses Depart from UMED Village to Tozeur"
    ]
  },
  {
    day: "Day 4",
    date: "OCT 04, 2026",
    activities: [
      "02:30 - UMED100 Race Finish/ Last Bus back to Tozeur",
      "10:00 - Closing Ceremony",
      "11:00 - Bus depart from Tozeur to Tunis",
    ]
  }
];

const mandatoryEquipment = [
  "Back Pack (to carry a minimum of 2L of water)",
  "Survival blanket",
  "Whistle",
  "Lighter - UMED100",
  "Torch (head torch or equivalent) UMED100!",
  "Passport / ID card"
];

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-semibold text-sm text-muted-foreground">{label}</span>
      <span className="text-foreground">{value}</span>
    </div>
  );
}

export default function UMED2026Page() {
  const [activeRace, setActiveRace] = useState<RaceType>("100k");

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="UMED 2026"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white py-20">
          <p className="text-white/90 text-lg mb-4 tracking-widest uppercase">
            ULTRA MARATHON EXPERIENCE DESERT
          </p>
          
          <h1 className="font-display text-5xl md:text-7xl mb-6 leading-tight">
            UMED 2026
          </h1>

          <p className="text-white/90 text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            The ultimate desert running experience in the heart of the Tunisian Sahara
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-[#F5C542]" />
              <span className="text-lg">October 03, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-[#F5C542]" />
              <span className="text-lg">Tozeur, Tunisia</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-[#F5C542]" />
              <span className="text-lg">100KM • 50KM • 25KM</span>
            </div>
          </div>
        </div>
      </section>

      {/* What is UMED Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-center">
              What is UMED?
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              The Ultra Mirage© El Djerid (UMED) Race series is the first Ultra taking place in the stunning Tunisian Sahara desert.
              The Event is organised in the Djerid region once a year. .
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Three distances are offered: 100km , 50km , and  25km. All three are single stage races take runners across a wide diversity of terrains, ranging from soft sand, small dunes, rocks, dried river beds, oasis...
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
              Both medical and technical help as well as water supply will be available at each checkpoint.
              This race is open to all types of athletes, from professional ultra runners to anyone passionate about ultra trails.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information Section */}
      <section className="py-20 bg-linear-to-b from-gray-50 to-background dark:from-gray-900 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-center">
              ULTRA MIRAGE 2026 IMPORTANT INFORMATION
            </h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#F5C542] mt-0.5 shrink-0" />
                    <div>
                      <span className="font-semibold">Registrations:</span>
                      <ul className="mt-2 space-y-2 text-muted-foreground list-disc list-inside">
                        <li>Open 3rd of December 2025 (first come first served)</li>
                        <li>Close 3rd of September 2026 (or at max capacity)</li>
                        <li>Race entry only validated once full payment made</li>
                        <li>Able to postpone your entry for 1 year (subject to informing the organisation prior to September 2026)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Ready for the Desert Section */}
      <section className="py-20 bg-linear-to-b from-gray-50 to-background dark:from-gray-900 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              READY FOR THE DESERT?
            </h2>
            <p className="text-muted-foreground text-xl mb-8">
              Join runners from around the world for an unforgettable Sahara experience.
            </p>
            <Link href="/register">
              <Button 
                size="xl" 
                className="bg-[#F5C542] hover:bg-[#e6b937] text-black font-semibold text-lg px-8 py-6"
              >
                Register Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Records Section */}
      <section className="py-20 bg-linear-to-b from-background to-gray-50 dark:from-gray-900 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#F5C542] text-sm font-semibold tracking-widest uppercase mb-3">
              Hall of Fame
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-3">
              UMED Records
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Outstanding performances that have marked the history of Ultra Mirage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* 100K Records */}
            <Card className="relative overflow-hidden border-0 bg-linear-to-br from-gray-900 to-gray-800 text-white shadow-2xl">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,#F5C542,transparent_60%)]" />
              <CardHeader className="relative">
                <CardTitle className="text-2xl text-[#F5C542]">UMED 100K Records</CardTitle>
                <p className="text-sm text-white/70 mt-1">The ultimate distance of Ultra Mirage</p>
              </CardHeader>
              <CardContent className="relative grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className="font-semibold text-xs text-white/60 uppercase mb-1">Fastest Man</div>
                  <div className="font-bold text-lg">Rachid El Morabity</div>
                  <div className="text-white/70 text-sm">(Morocco)</div>
                  <div className="text-xs text-white/60 mt-1">2019 / 8h 21&apos; 29&apos;&apos;</div>
                </div>
                <div>
                  <div className="font-semibold text-xs text-white/60 uppercase mb-1">Fastest Woman</div>
                  <div className="font-bold text-lg">Elisabet Barnes</div>
                  <div className="text-white/70 text-sm">(Sweden)</div>
                  <div className="text-xs text-white/60 mt-1">2018 / 10h 25&apos; 19&apos;&apos;</div>
                </div>
                <div>
                  <div className="font-semibold text-xs text-white/60 uppercase mb-1">Youngest Finisher</div>
                  <div className="font-bold text-lg">Khalil Ben Gacem</div>
                  <div className="text-white/70 text-sm">(Tunisia)</div>
                  <div className="text-xs text-white/60 mt-1">2019 / 15y old</div>
                </div>
                <div>
                  <div className="font-semibold text-xs text-white/60 uppercase mb-1">Oldest Finisher</div>
                  <div className="font-bold text-lg">Garguiullo William</div>
                  <div className="text-white/70 text-sm">(Switzerland)</div>
                  <div className="text-xs text-white/60 mt-1">2025 / 71y old</div>
                </div>
              </CardContent>
            </Card>

            {/* 50K Records */}
            <Card className="relative overflow-hidden border border-[#F5C542]/30 bg-background shadow-xl">
              <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-[#F5C542] via-orange-400 to-red-500" />
              <CardHeader>
                <CardTitle className="text-2xl text-[#F5C542]">UMED 50K Records</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">The fast and intense desert challenge</p>
              </CardHeader>
              <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className="font-semibold text-xs text-muted-foreground uppercase mb-1">Fastest Man</div>
                  <div className="font-bold text-lg">Walid Mrad</div>
                  <div className="text-muted-foreground text-sm">(Tunisia)</div>
                  <div className="text-xs text-muted-foreground mt-1">2022 / 3h26&apos;31&quot;</div>
                </div>
                <div>
                  <div className="font-semibold text-xs text-muted-foreground uppercase mb-1">Fastest Woman</div>
                  <div className="font-bold text-lg">Bouchra Lundgren Eriksen</div>
                  <div className="text-muted-foreground text-sm">(Denmark)</div>
                  <div className="text-xs text-muted-foreground mt-1">2023 / 4h28&apos;15&quot;</div>
                </div>
                <div>
                  <div className="font-semibold text-xs text-muted-foreground uppercase mb-1">Youngest Finisher</div>
                  <div className="font-bold text-lg">Abderrahman Mseddi</div>
                  <div className="text-muted-foreground text-sm">(Tunisia)</div>
                  <div className="text-xs text-muted-foreground mt-1">2025 / 15y old</div>
                </div>
                <div>
                  <div className="font-semibold text-xs text-muted-foreground uppercase mb-1">Oldest Finisher</div>
                  <div className="font-bold text-lg">Andrzej Kolasa</div>
                  <div className="text-muted-foreground text-sm">(Poland)</div>
                  <div className="text-xs text-muted-foreground mt-1">2024 / 73y old</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tracking Details Section */}
      <section className="py-20 bg-linear-to-b from-gray-50 to-background dark:from-gray-900 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              2026 Race Details
            </h2>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {/* 100K Track */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">100Km track</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  The 100km race track is similar to the previous year (GPX file available). Expect a delightful scenery across the Sahara. Check points are spread 15-20km from each other. Hydration stations will also be available along the route.
                </p>
                <div className="relative w-full h-64 rounded-lg overflow-hidden border border-border/50">
                  <Image
                    src={umed100Track}
                    alt="UMED 100K 2025 race track"
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            {/* 50K Track */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">50Km track</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  The 52km race track (GPX file available) will follow the same path as the 100km race for the first 6km. Both races will share 2 Check Points (CP4 and CP5). Two hydrations points will be available.
                </p>
                <div className="relative w-full h-64 rounded-lg overflow-hidden border border-border/50">
                  <Image
                    src={umed50Track}
                    alt="UMED 50K 2025 race track"
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            {/* 25K Track */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">25Km track</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  The 26km race track (GPX file available) will follow the same path as the 50km race for the first 9km. Hydrations points will be available.
                </p>
                <div className="relative w-full h-64 rounded-lg overflow-hidden border border-border/50">
                  <Image
                    src={umed25Track}
                    alt="UMED 25K 2025 race track"
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Race Details Section */}
      <section className="py-20 bg-linear-to-b from-gray-50 to-background dark:from-gray-900 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Race Details
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose your challenge and discover all the details for each distance
            </p>
          </div>

        {/* Race Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <Button
            onClick={() => setActiveRace("100k")}
            variant={activeRace === "100k" ? "default" : "outline"}
            size="lg"
            className={`rounded-full px-6 ${
              activeRace === "100k"
                ? "bg-[#F5C542] hover:bg-[#e6b937] text-black font-semibold shadow-md"
                : "bg-background/60"
            }`}
          >
            UMED 100K
          </Button>
          <Button
            onClick={() => setActiveRace("50k")}
            variant={activeRace === "50k" ? "default" : "outline"}
            size="lg"
            className={`rounded-full px-6 ${
              activeRace === "50k"
                ? "bg-[#F5C542] hover:bg-[#e6b937] text-black font-semibold shadow-md"
                : "bg-background/60"
            }`}
          >
            UMED 50K
          </Button>
          <Button
            onClick={() => setActiveRace("25k")}
            variant={activeRace === "25k" ? "default" : "outline"}
            size="lg"
            className={`rounded-full px-6 ${
              activeRace === "25k"
                ? "bg-[#F5C542] hover:bg-[#e6b937] text-black font-semibold shadow-md"
                : "bg-background/60"
            }`}
          >
            Assurances BIAT 25KM
          </Button>
        </div>

        {/* Active Race Details */}
        <div className="max-w-5xl mx-auto space-y-6">
          <Card
            className={`border-2 bg-background/80 backdrop-blur-sm ${
              activeRace === "100k"
                ? "border-orange-400"
                : activeRace === "50k"
                ? "border-yellow-400"
                : "border-emerald-400"
            }`}
          >
              <CardHeader>
              <CardTitle className="text-3xl">
                {raceDetails[activeRace].title}
              </CardTitle>
              <div className="mt-4 flex flex-wrap gap-3 text-xs sm:text-sm">
                <div className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1">
                  <Award className="h-4 w-4 text-[#F5C542]" />
                  <span>{raceDetails[activeRace].race.distance}</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1">
                  <Clock className="h-4 w-4 text-[#F5C542]" />
                  <span>Max time: {raceDetails[activeRace].race.maxTime}</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1">
                  <Users className="h-4 w-4 text-[#F5C542]" />
                  <span>
                    {raceDetails[activeRace].race.maxRunners} runners max
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1">
                  <DollarSign className="h-4 w-4 text-[#F5C542]" />
                  <span>{raceDetails[activeRace].price}</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1">
                  <CheckCircle className="h-4 w-4 text-[#F5C542]" />
                  <span>
                    ITRA {raceDetails[activeRace].race.itraPoints} • UTMB{" "}
                    {raceDetails[activeRace].race.utmbQualifier}
                  </span>
                </div>
              </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* RACE Section */}
                <div>
                  <h3 className="font-bold text-xl mb-4 text-[#F5C542] uppercase">RACE</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <DetailRow label="When" value={raceDetails[activeRace].race.when} />
                    <DetailRow label="Where" value={raceDetails[activeRace].race.where} />
                    <DetailRow label="Start/Finish Line" value={raceDetails[activeRace].race.startFinishLine} />
                    <DetailRow label="Distance*" value={raceDetails[activeRace].race.distance} />
                    <DetailRow label="Max Time" value={raceDetails[activeRace].race.maxTime} />
                    <DetailRow label="Max Number of Runners" value={raceDetails[activeRace].race.maxRunners} />
                    <DetailRow label="ITRA Points**" value={raceDetails[activeRace].race.itraPoints} />
                    <DetailRow label="UTMB qualifier**" value={raceDetails[activeRace].race.utmbQualifier} />
                    <DetailRow label="Check Points" value={raceDetails[activeRace].race.checkPoints} />
                    <DetailRow label="Hydratation Points" value={raceDetails[activeRace].race.hydrationPoints} />
                    <DetailRow label="Team Option" value={raceDetails[activeRace].race.teamOption} />
                    <DetailRow label="Difficulty" value={raceDetails[activeRace].race.difficulty} />
                    <DetailRow label="Mandatory Equipment" value={raceDetails[activeRace].race.mandatoryEquipment} />
                    <DetailRow label="Doctor Certificate Required" value={raceDetails[activeRace].race.doctorCertificate} />
                    <DetailRow label="Insurance Included" value={raceDetails[activeRace].race.insurance} />
                    <DetailRow label="Finisher Prize" value={raceDetails[activeRace].race.finisherPrize} />
                  </div>
                </div>

                {/* TRANSPORT Section */}
                <div className="pt-6 border-t">
                  <h3 className="font-bold text-xl mb-4 text-[#F5C542] uppercase">TRANSPORT</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <DetailRow label="Tunis-Tozeur" value={raceDetails[activeRace].transport.tunisTozeur} />
                    <DetailRow label="Tozeur-Tunis" value={raceDetails[activeRace].transport.tozeurTunis} />
                    <DetailRow label="Hotel-Start/Finish Line-Hotel" value={raceDetails[activeRace].transport.hotelShuttle} />
                  </div>
                </div>

                {/* ACCOMMODATION Section */}
                <div className="pt-6 border-t">
                  <h3 className="font-bold text-xl mb-4 text-[#F5C542] uppercase">ACCOMMODATION</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <DetailRow label="Accommodation" value={raceDetails[activeRace].accommodation.type} />
                    <DetailRow label="Check-in" value={raceDetails[activeRace].accommodation.checkIn} />
                    <DetailRow label="Check-out" value={raceDetails[activeRace].accommodation.checkOut} />
                    <DetailRow label="Number of nights" value={raceDetails[activeRace].accommodation.nights} />
                    <DetailRow label="Single Option" value={raceDetails[activeRace].accommodation.singleOption} />
                    <DetailRow label="Meal Package" value={raceDetails[activeRace].accommodation.mealPackage} />
                    <DetailRow label="Beverage Included" value={raceDetails[activeRace].accommodation.beverage} />
                  </div>
                </div>

                {/* PRICE Section */}
                <div className="pt-6 border-t">
                  <h3 className="font-bold text-xl mb-4 text-[#F5C542] uppercase">PRICE</h3>
                  <div className="text-3xl font-bold">{raceDetails[activeRace].price}</div>
                </div>

                {/* Notes */}
                <div className="pt-4 border-t text-sm text-muted-foreground space-y-1">
                  <p>* Subject to last minute changes</p>
                  <p>** Subject to ITRA/UTMB evaluation</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              4-Day Program
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A complete experience from arrival to departure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {schedule.map((day, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-10 h-10 rounded-full bg-[#F5C542] text-black font-bold flex items-center justify-center">
                      {index + 1}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{day.day}</CardTitle>
                      <p className="text-sm text-muted-foreground">{day.date}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {day.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 text-[#F5C542] mt-0.5 shrink-0" />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mandatory Equipment Section */}
      <section className="py-20 bg-linear-to-b from-gray-50 to-background dark:from-gray-900 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-center">
              MANDATORY EQUIPMENT
            </h2>
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {mandatoryEquipment.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#F5C542] mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <p className="text-sm text-yellow-800 dark:text-yellow-200">
                    <strong>Note:</strong> All mandatory equipment will be checked at the race briefing. 
                    Runners without required equipment will not be allowed to start the race.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      
    </Layout>
  );
}

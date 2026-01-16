"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Calendar, Clock, Users, Hotel, Car, DollarSign, Award, CheckCircle } from "lucide-react";
//import tozeurImage from "@/public/images/tozeur-landscape.jpeg";

import { Leaf, Landmark, Mountain, Film } from "lucide-react";

const schedule = [
  {
    day: "Palm Groves",
    icon: Leaf,
    activities: [
      "Over 400,000 palm trees spread across 1,000 hectares, producing some of the finest dates in the world."
    ]
  },
  {
    day: "Traditional Architecture",
    icon: Landmark,
    activities: [
      "Unique brick patterns and designs that have been preserved for centuries in the old medina.",
    ]
  },
  {
    day: "Chott el Jerid",
    icon: Mountain,
    activities: [
      "The largest salt lake in the Sahara, famous for its stunning mirages and otherworldly landscapes.",
    ]
  },
  {
    day: "Star Wars Locations",
    icon: Film,
    activities: [
      "Several Star Wars filming locations are nearby, including the famous Mos Espa set.",
    ]
  }
];


export default function TozeurPage() {
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/tozeur-landscape.jpeg"
            alt="Tozeur"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white py-20">
          <p className="text-white/90 text-lg mb-4 tracking-widest uppercase">
            DISCOVER THE LOCATION
          </p>

          <h1 className="font-display text-5xl md:text-7xl mb-6 leading-tight">
            <span className="bg-linear-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
              TOZEUR
            </span>
          </h1>

          <p className="text-white/90 text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            A stunning oasis city in the heart of the Tunisian Sahara. Where
            history, culture, and natural beauty converge.
          </p>
        </div>
      </section>

      {/*OASIS Section */}
      <section className="py-15 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-center">
              THE OASIS CITY
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Tozeur is an oasis city in southwestern Tunisia, situated at the
                northern edge of Chott el Djerid. Known for its distinctive
                architecture, vast palm groves, and gateway to the Sahara, it's
                one of Tunisia's most enchanting destinations. The city has a
                rich history dating back to the Phoenician era and has served as
                a crucial stop on trans-Saharan trade routes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              WHAT TO SEE
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore the wonders of Tozeur and its surroundings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {schedule.map((day, index) => {
              const Icon = day.icon;

              return (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-[#F5C542] flex items-center justify-center">
                        <Icon className="h-5 w-5 text-black" />
                      </div>
                      <CardTitle className="text-xl">{day.day}</CardTitle>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-2">
                      {day.activities.map((activity, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle className="h-4 w-4 text-[#F5C542] mt-0.5 shrink-0" />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ready for the Desert Section */}
      <section className="py-28 bg-linear-to-r from-orange-400 to-yellow-300 text-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-black">
              EXPERIENCE TOZEUR
            </h2>
            <p className="text-black text-xl mb-8">
              Register for the marathon and discover this magical destination.
            </p>
            <Link href="/register">
              <Button
                size="xl"
                className="bg-white/20 hover:bg-white/30 text-black font-semibold text-lg px-8 py-6 backdrop-blur-md transition"
              >
                Register Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import { Layout } from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";
import ContactSection from "@/components/contact-section";


const team = [
  { name: "Amir Ben Gacem", 
    role: "Ultra Mirage Founder", 
    photo: "/team/member1.jpg"
  },
  {
    name: "Leila Ben Gacem",
    role: "Treasury & Sponsorship",
    photo: "/team/member2.jpg",
  },
  { name: "Wiem Ben Mahmoud BG", 
    role: "Head of Media & PR", 
    photo: "/team/member3.jpg" 
  },
  {
    name: "Brahim Ben Hadj Salah",
    role: "Track Coordinator",
    photo: "/team/member4.jpg",
  },
  {
    name: "Adel Beznine",
    role: "Race Director",
    photo: "/team/member5.jpg",
  },
  { name: "Majdi Calboussi",
    role: "Race Director", 
    photo: "/team/member6.jpg" 
  },
  {
    name: "Miloud Chetoui",
    role: "Race Logistics",
    photo: "/team/member7.jpg",
  },
  { name: "Khaled Chiboub", 
    role: "Race Timing", 
    photo: "/team/member8.jpg" 
  },
  { name: "Asma Hammami", 
    role: "Race Director", 
    photo: "/team/member9.jpg" 
  },
  { name: "Rayen Messai", 
    role: "Race Photography", 
    photo: "/team/member10.jpg" },
];

export default function OrganizationPage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gray-800 text-primary-foreground">
        <div className="relative z-10 container mx-auto px-4 text-center py-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight"
          >
            THE{" "}
            <span className="bg-linear-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
              TEAM
            </span>
          </motion.h1>

          <p className="mt-8 text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Meet the dedicated team behind UMED. Passionate about running,
            committed to excellence.
          </p>
        </div>
      </section>

      {/* What is UMED Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-center">
              Our Mission
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                To create an exceptional running experience that showcases the
                beauty of Tozeur and Tunisia, while promoting healthy
                lifestyles, international sports tourism, and supporting local
                community development. We aim to make UMED one of the premier
                desert running events in the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              THE ORGANISATION TEAM
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Meet the dedicated team behind UMED. Passionate about delivering
              excellence.
            </p>
          </div>
          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="relative overflow-hidden border border-[#F5C542]/30 bg-background shadow-xl hover:scale-[1.02] transition">
                  {/* Top gradient bar */}
                  <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-[#F5C542] via-orange-400 to-red-500" />

                  {/* Card content */}
                  <div className="p-6 text-center">
                    <div className="relative h-64 mb-4">
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-primary">
                      {member.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {member.role}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-gray-800 flex items-center justify-center text-center">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
          <Stat value="10" label="Core Team Members" />
          <Stat value="200+" label="Volunteers" />
          <Stat value="10" label="Events Organized" />
          <Stat value="10" label="Years of Experience" />
        </div>
      </section>
     <ContactSection/>
     

    </Layout>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="space-y-2">
      <p className="text-5xl font-extrabold bg-linear-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
        {value}
      </p>
      <p className="text-white">{label}</p>
    </div>
  );
}
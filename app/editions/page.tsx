"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Layout } from "@/components/layout/Layout";

const editions = [
  //{ year: 2016, videoId: "VIDEO_ID_2016" },
  { year: 2017, videoId: "jHo_WfeNqB8" },
  { year: 2018, videoId: "Xt1imRuMEu8" },
  { year: 2019, videoId: "uuXBodQI-w8" },
  { year: 2020, videoId: "891Eor8J68k" },
  { year: 2021, videoId: "_wRLtuG62d0" },
  { year: 2022, videoId: "g8EbOcGL2u0" },
  { year: 2023, videoId: "VIDEO_ID_2023" },
  { year: 2024, videoId: "VIDEO_ID_2024" },
];

export default function EditionsPage() {
  return (
    <Layout>
      <main className="min-h-screen bg-background text-foreground">
        {/* HERO */}
        <section className="relative py-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            Ultra Mirage
          </motion.h1>
          <p className="mt-4 text-lg text-muted-foreground">
            10 editions. A desert legend.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Relive the highlights from past editions (100k & 50k)
          </p>
        </section>

        {/* EDITIONS GRID */}
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {editions.map((edition, index) => (
              <motion.div
                key={edition.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="rounded-2xl overflow-hidden shadow-lg bg-card"
              >
                <div className="relative aspect-video">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${edition.videoId}`}
                    title={`Ultra Mirage ${edition.year}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold">Edition {edition.year}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Ultra Mirage 100k & 50k</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* YOUTUBE CTA */}
        <section className="py-16 bg-muted text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Watch all videos on YouTube
          </h2>
          <p className="mt-3 text-muted-foreground">
            Official channel: Ultra Mirage 100k & 50k
          </p>
          <div className="mt-6">
            <Link
              href="https://www.youtube.com/@UltraMiragekk"
              target="_blank"
              className="inline-block rounded-xl bg-primary px-8 py-3 text-primary-foreground font-medium hover:opacity-90 transition"
            >
              Go to YouTube Channel
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}

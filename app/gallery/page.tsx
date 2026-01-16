"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { galleryItems } from "@/data/gallery";
import { Layout } from "@/components/layout/Layout";

const filters = [
  { key: "all", label: "All" },
  { key: "race", label: "Race" },
  { key: "participants", label: "Participants" },
  { key: "location", label: "Location" },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeFilter
        );

  return (
    <Layout>
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Gallery
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Relive the Ultra Mirage experience through unforgettable moments.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={clsx(
                "px-6 py-2 rounded-full text-sm font-medium transition",
                activeFilter === filter.key
                  ? "bg-orange-500 text-white"
                  : "bg-muted text-muted-foreground hover:bg-muted/70"
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative aspect-4/3 overflow-hidden rounded-3xl group"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
    </Layout>
  );
}

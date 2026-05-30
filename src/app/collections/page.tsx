"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const collections = [
  {
    id: "resin",
    title: "The Ethereal Resin Series",
    description: "Capturing the fluid beauty of nature in high-clarity epoxy resin.",
    image: "https://images.unsplash.com/photo-1772459125358-e587337c4a92?auto=format&fit=crop&q=80&w=1200",
    count: 12
  },
  {
    id: "decor",
    title: "Modern Minimalist Decor",
    description: "Hand-thrown ceramics and artisanal objects for the contemporary home.",
    image: "https://images.unsplash.com/photo-1776972334890-018cb3b3e3c6?auto=format&fit=crop&q=80&w=1200",
    count: 8
  },
  {
    id: "personalized",
    title: "Bespoke Treasures",
    description: "Custom-made gifts that carry personal stories and memories.",
    image: "https://images.unsplash.com/photo-1777446695149-927b3aec69e1?auto=format&fit=crop&q=80&w=1200",
    count: 15
  }
];

const CollectionsPage = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />

      <section className="pt-40 pb-20 px-6 md:px-12 bg-luxury-cream">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <span className="text-secondary uppercase tracking-[0.4em] text-xs font-bold">Curated Series</span>
            <h1 className="text-5xl md:text-6xl font-serif text-text-main">Our Collections</h1>
            <p className="text-text-muted max-w-2xl mx-auto">
              Explore our themed collections, each representing a unique facet of craftsmanship and design.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-32">
          {collections.map((collection, idx) => (
            <motion.div 
              key={collection.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={`space-y-8 ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <div className="space-y-4">
                  <span className="text-secondary uppercase tracking-[0.4em] text-xs font-bold">{collection.count} Pieces</span>
                  <h2 className="text-4xl md:text-5xl font-serif text-text-main leading-tight">{collection.title}</h2>
                </div>
                <p className="text-text-muted text-lg leading-relaxed">
                  {collection.description}
                </p>
                <Link 
                  href={`/shop?category=${collection.id}`}
                  className="inline-flex items-center text-text-main uppercase tracking-widest text-sm font-bold border-b-2 border-secondary pb-1 group"
                >
                  Explore Collection
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
              </div>
              <div className={`relative aspect-[16/9] overflow-hidden ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <img 
                  src={collection.image} 
                  alt={collection.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CollectionsPage;

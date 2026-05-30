"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1776972334890-018cb3b3e3c6?auto=format&fit=crop&q=80&w=2000" 
            alt="Artisan Workshop" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center text-white px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-secondary uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Our Story</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-6">The Soul of Craft</h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              A journey through tradition, passion, and the pursuit of handcrafted perfection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-secondary uppercase tracking-[0.4em] text-xs font-bold">Our Mission</span>
              <h2 className="text-4xl md:text-5xl font-serif text-text-main">Preserving Artistry in a Digital Age</h2>
            </div>
            <p className="text-text-muted text-lg leading-relaxed">
              Founded in 2020, Artisan Alcove began as a small collective of artists who wanted to bring the beauty of handmade crafts to a global audience. We believe that in a world of mass production, there is something profoundly special about an object that has been touched by human hands.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h4 className="font-serif text-xl text-text-main">Authenticity</h4>
                <p className="text-sm text-text-muted">Every piece is genuine and unique, carrying the signature style of its creator.</p>
              </div>
              <div className="space-y-3">
                <h4 className="font-serif text-xl text-text-main">Sustainability</h4>
                <p className="text-sm text-text-muted">We prioritize eco-friendly materials and ethical production methods.</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1776584615508-e70141dc7823?auto=format&fit=crop&q=80&w=1000" 
              alt="Artisan working" 
              className="w-full aspect-[4/5] object-cover luxury-shadow"
            />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary/10 -z-10" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 md:px-12 bg-luxury-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-text-main mb-6">What Drives Us</h2>
            <div className="w-24 h-1 bg-secondary mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto luxury-shadow">
                <span className="text-3xl font-serif text-secondary">01</span>
              </div>
              <h3 className="text-2xl font-serif text-text-main">Master Craftsmanship</h3>
              <p className="text-text-muted leading-relaxed">
                We partner only with artisans who have demonstrated exceptional skill and dedication to their medium.
              </p>
            </div>
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto luxury-shadow">
                <span className="text-3xl font-serif text-secondary">02</span>
              </div>
              <h3 className="text-2xl font-serif text-text-main">Ethical Partnership</h3>
              <p className="text-text-muted leading-relaxed">
                Fair wages and respectful working conditions are at the heart of our relationship with every artisan.
              </p>
            </div>
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto luxury-shadow">
                <span className="text-3xl font-serif text-secondary">03</span>
              </div>
              <h3 className="text-2xl font-serif text-text-main">Global Community</h3>
              <p className="text-text-muted leading-relaxed">
                We bridge the gap between remote craft communities and collectors who appreciate their work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Artisans */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-4 md:space-y-0">
            <div className="space-y-4">
              <span className="text-secondary uppercase tracking-[0.4em] text-xs font-bold">The Creators</span>
              <h2 className="text-4xl md:text-5xl font-serif text-text-main">Meet Our Master Artisans</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { name: "Elena Rossi", craft: "Resin Specialist", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600" },
              { name: "Marcus Thorne", craft: "Master Woodworker", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600" },
              { name: "Sumi Tanaka", craft: "Ceramic Artist", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=600" }
            ].map((artisan, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden mb-6">
                  <img 
                    src={artisan.image} 
                    alt={artisan.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-2xl font-serif text-text-main">{artisan.name}</h3>
                <p className="text-secondary uppercase tracking-widest text-xs font-bold mt-2">{artisan.craft}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;

"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Floating Decorative Objects */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[10%] w-32 h-32 bg-secondary/10 rounded-full blur-3xl -z-10"
      />
      <motion.div 
        animate={{ 
          y: [0, 30, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-[15%] w-48 h-48 bg-accent/10 rounded-full blur-3xl -z-10"
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-secondary uppercase tracking-[0.4em] text-xs font-bold"
            >
              Exclusively Handcrafted
            </motion.span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] text-text-main">
              Artistry in Every <span className="italic text-secondary">Detail.</span>
            </h1>
          </div>
          
          <p className="text-text-muted text-lg md:text-xl leading-relaxed max-w-lg">
            Discover a curated collection of premium handmade crafts, from ethereal resin art to personalized treasures that tell your unique story.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link 
              href="/shop" 
              className="bg-text-main text-white px-8 py-4 uppercase tracking-widest text-sm font-bold hover:bg-secondary transition-all duration-300 flex items-center justify-center group"
            >
              Explore Collection
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
            <Link 
              href="/about" 
              className="border border-text-main text-text-main px-8 py-4 uppercase tracking-widest text-sm font-bold hover:bg-text-main hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              Our Story
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative aspect-[4/5] lg:aspect-square"
        >
          <div className="absolute inset-0 border-2 border-secondary/20 translate-x-6 translate-y-6 -z-10" />
          <img 
            src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&q=80&w=1200" 
            alt="Handmade Craftsmanship" 
            className="w-full h-full object-cover luxury-shadow"
          />
          
          {/* Floating Card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 bg-white p-6 luxury-shadow hidden md:block max-w-[200px]"
          >
            <p className="text-xs text-secondary uppercase tracking-widest font-bold mb-2">New Arrival</p>
            <p className="font-serif text-text-main italic">"The Ethereal Waves" Resin Tray</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

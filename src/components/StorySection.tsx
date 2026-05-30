"use client";

import React from "react";
import { motion } from "framer-motion";

const StorySection = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-luxury-cream overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img 
                  src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=600" 
                  alt="Crafting process" 
                  className="w-full aspect-[3/4] object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1516414447565-b14be0adf13e?auto=format&fit=crop&q=80&w=600" 
                  alt="Tools of the trade" 
                  className="w-full aspect-square object-cover"
                />
              </div>
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1776972334890-018cb3b3e3c6?auto=format&fit=crop&q=80&w=600" 
                  alt="Finished piece" 
                  className="w-full aspect-square object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1776584615508-e70141dc7823?auto=format&fit=crop&q=80&w=600" 
                  alt="Artisan at work" 
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-10 -left-10 w-40 h-40 border border-secondary/30 -z-10" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-secondary uppercase tracking-[0.4em] text-xs font-bold">Our Philosophy</span>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight text-text-main">
                Crafting Stories, <br />
                <span className="italic">One Piece at a Time.</span>
              </h2>
            </div>
            
            <p className="text-text-muted leading-relaxed text-lg">
              At Artisan Alcove, we believe that true luxury lies in the human touch. Every item in our collection is meticulously handcrafted by artisans who have dedicated their lives to mastering their craft.
            </p>
            
            <p className="text-text-muted leading-relaxed">
              We don't just sell products; we share the passion, the hours of labor, and the unique stories behind every creation. From the sustainable sourcing of materials to the final polish, we ensure that every piece meets the highest standards of quality and soul.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <h4 className="font-serif text-2xl text-secondary mb-1">100%</h4>
                <p className="text-xs uppercase tracking-widest text-text-main font-bold">Handmade</p>
              </div>
              <div>
                <h4 className="font-serif text-2xl text-secondary mb-1">50+</h4>
                <p className="text-xs uppercase tracking-widest text-text-main font-bold">Artisans</p>
              </div>
              <div>
                <h4 className="font-serif text-2xl text-secondary mb-1">Ethical</h4>
                <p className="text-xs uppercase tracking-widest text-text-main font-bold">Sourcing</p>
              </div>
              <div>
                <h4 className="font-serif text-2xl text-secondary mb-1">Unique</h4>
                <p className="text-xs uppercase tracking-widest text-text-main font-bold">Designs</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;

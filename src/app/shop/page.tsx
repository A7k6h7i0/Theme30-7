"use client";

import React, { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { motion } from "framer-motion";
import { Filter, ChevronDown } from "lucide-react";

const ShopPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Featured");

  const categories = ["All", "Resin Art", "Custom Photo Frames", "Home Decor", "Personalized Gifts"];

  const filteredProducts = useMemo(() => {
    let result = activeCategory === "All" 
      ? products 
      : products.filter(p => p.category === activeCategory);
    
    if (sortBy === "Price: Low to High") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === "Price: High to Low") {
      result = [...result].sort((a, b) => b.price - a.price);
    }
    
    return result;
  }, [activeCategory, sortBy]);

  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="pt-40 pb-20 px-6 md:px-12 bg-luxury-cream">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <span className="text-secondary uppercase tracking-[0.4em] text-xs font-bold">The Collection</span>
            <h1 className="text-5xl md:text-6xl font-serif text-text-main">Shop All Creations</h1>
            <p className="text-text-muted max-w-2xl mx-auto">
              Explore our full range of handcrafted treasures, each designed with passion and made to last a lifetime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Grid */}
      <section className="py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Controls */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 space-y-6 md:space-y-0 border-b border-secondary/10 pb-8">
            {/* Categories */}
            <div className="flex flex-wrap gap-4 md:gap-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs uppercase tracking-widest font-bold pb-2 transition-all relative ${
                    activeCategory === cat ? "text-secondary" : "text-text-muted hover:text-text-main"
                  }`}
                >
                  {cat}
                  {activeCategory === cat && (
                    <motion.div 
                      layoutId="activeCategory"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary" 
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-xs uppercase tracking-widest font-bold text-text-muted">
                <Filter size={14} className="mr-2" />
                Sort By:
              </div>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-xs uppercase tracking-widest font-bold text-text-main bg-transparent border-none focus:ring-0 cursor-pointer"
              >
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16"
          >
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                category={product.category}
              />
            ))}
          </motion.div>

          {filteredProducts.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-text-muted font-serif italic text-xl">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ShopPage;

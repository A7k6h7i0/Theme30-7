"use client";

import React, { useState, use } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ShoppingBag, ChevronLeft, ChevronRight, Star, Truck, ShieldCheck, RotateCcw } from "lucide-react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";

const ProductDetailPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  const product = products.find((p) => p.id === id);
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Product Not Found</h1>
          <Link href="/shop" className="text-secondary underline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-text-muted mb-12">
            <Link href="/" className="hover:text-secondary">Home</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-secondary">Shop</Link>
            <span>/</span>
            <span className="text-text-main">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Gallery */}
            <div className="space-y-6">
              <div className="relative aspect-square bg-luxury-cream overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImage}
                    src={product.images[activeImage]}
                    alt={product.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
                
                {/* Navigation Arrows */}
                <button 
                  onClick={() => setActiveImage((prev) => (prev === 0 ? product.images.length - 1 : prev - 1))}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-text-main hover:bg-secondary hover:text-white transition-all shadow-md"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={() => setActiveImage((prev) => (prev === product.images.length - 1 ? 0 : prev + 1))}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-text-main hover:bg-secondary hover:text-white transition-all shadow-md"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Thumbnails */}
              <div className="flex space-x-4 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`relative w-24 h-24 shrink-0 overflow-hidden border-2 transition-all ${
                      activeImage === idx ? "border-secondary" : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt={`${product.name} thumbnail ${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-secondary uppercase tracking-[0.4em] text-xs font-bold">{product.category}</span>
                <h1 className="text-4xl md:text-5xl font-serif text-text-main">{product.name}</h1>
                <div className="flex items-center space-x-4">
                  <p className="text-3xl text-secondary font-medium">${product.price.toFixed(2)}</p>
                  <div className="flex items-center text-yellow-500">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                    <span className="ml-2 text-xs text-text-muted uppercase tracking-widest">(12 Reviews)</span>
                  </div>
                </div>
              </div>

              <p className="text-text-muted leading-relaxed text-lg">
                {product.description}
              </p>

              <div className="space-y-4">
                <h4 className="text-xs uppercase tracking-widest font-bold text-text-main">Details & Craftsmanship</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
                  {product.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-text-muted">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="pt-8 space-y-6">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center border border-secondary/20">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 text-text-main hover:bg-secondary/10 transition-colors"
                    >
                      -
                    </button>
                    <span className="w-12 text-center text-sm font-bold">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 text-text-main hover:bg-secondary/10 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <button className="flex-1 bg-text-main text-white py-4 uppercase tracking-widest text-sm font-bold hover:bg-secondary transition-all duration-300 flex items-center justify-center group">
                    <ShoppingBag className="mr-2" size={18} />
                    Add to Bag
                  </button>
                  <button className="w-14 h-14 border border-secondary/20 flex items-center justify-center text-text-main hover:bg-secondary/10 transition-colors">
                    <Heart size={20} />
                  </button>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-secondary/10">
                <div className="flex flex-col items-center text-center space-y-2">
                  <Truck size={20} className="text-secondary" />
                  <span className="text-[10px] uppercase tracking-widest font-bold">Free Shipping</span>
                </div>
                <div className="flex flex-col items-center text-center space-y-2">
                  <ShieldCheck size={20} className="text-secondary" />
                  <span className="text-[10px] uppercase tracking-widest font-bold">Secure Payment</span>
                </div>
                <div className="flex flex-col items-center text-center space-y-2">
                  <RotateCcw size={20} className="text-secondary" />
                  <span className="text-[10px] uppercase tracking-widest font-bold">30-Day Returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-24 px-6 md:px-12 bg-luxury-cream">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-serif text-text-main mb-12 text-center">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((product) => (
                <ProductCard 
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  category={product.category}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
};

export default ProductDetailPage;

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      
      <Hero />

      {/* Featured Products */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:row justify-between items-end mb-16 space-y-4 md:space-y-0">
            <div className="space-y-4">
              <span className="text-secondary uppercase tracking-[0.4em] text-xs font-bold">Curated Selection</span>
              <h2 className="text-4xl md:text-5xl font-serif text-text-main">Featured Creations</h2>
            </div>
            <Link 
              href="/shop" 
              className="text-text-main uppercase tracking-widest text-xs font-bold border-b border-secondary pb-1 flex items-center group"
            >
              View All Products
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
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

      <StorySection />

      {/* Categories Grid */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-secondary uppercase tracking-[0.4em] text-xs font-bold">Explore by Category</span>
            <h2 className="text-4xl md:text-5xl font-serif text-text-main">Find Your Perfect Piece</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Resin Art */}
            <Link href="/shop?category=resin" className="group relative aspect-[4/5] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1772459125358-e587337c4a92?auto=format&fit=crop&q=80&w=800" 
                alt="Resin Art" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                <h3 className="text-3xl font-serif mb-2">Resin Art</h3>
                <span className="uppercase tracking-[0.3em] text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                  Shop Collection
                </span>
              </div>
            </Link>

            {/* Home Decor */}
            <Link href="/shop?category=decor" className="group relative aspect-[4/5] overflow-hidden md:translate-y-12">
              <img 
                src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800" 
                alt="Home Decor" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                <h3 className="text-3xl font-serif mb-2">Home Decor</h3>
                <span className="uppercase tracking-[0.3em] text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                  Shop Collection
                </span>
              </div>
            </Link>

            {/* Personalized Gifts */}
            <Link href="/shop?category=personalized" className="group relative aspect-[4/5] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800" 
                alt="Personalized Gifts" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                <h3 className="text-3xl font-serif mb-2">Personalized</h3>
                <span className="uppercase tracking-[0.3em] text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                  Shop Collection
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6 md:px-12 bg-text-main text-white">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <span className="text-secondary uppercase tracking-[0.4em] text-xs font-bold">Join the Circle</span>
          <h2 className="text-4xl md:text-5xl font-serif">Stay Inspired</h2>
          <p className="text-white/70 leading-relaxed">
            Subscribe to receive updates on new collections, artisan stories, and exclusive offers delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-0">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-white/10 border border-white/20 px-6 py-4 text-white focus:outline-none focus:border-secondary w-full"
            />
            <button className="bg-secondary text-white px-10 py-4 uppercase tracking-widest text-sm font-bold hover:bg-luxury-gold transition-colors shrink-0">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

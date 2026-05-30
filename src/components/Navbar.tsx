"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, Search, Menu, X, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Collections", href: "/collections" },
    { name: "Our Story", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 py-4",
        isScrolled 
          ? "bg-primary/90 backdrop-blur-md py-3 shadow-sm" 
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-text-main"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>

        {/* Logo */}
        <Link href="/" className="flex flex-col items-center">
          <span className="text-2xl md:text-3xl font-serif tracking-tighter text-text-main">
            ARTISAN <span className="text-secondary italic">ALCOVE</span>
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-text-muted -mt-1">
            Handcrafted Excellence
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest text-text-main hover:text-secondary transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-5">
          <button className="text-text-main hover:text-secondary transition-colors">
            <Search size={20} />
          </button>
          <button className="hidden sm:block text-text-main hover:text-secondary transition-colors">
            <Heart size={20} />
          </button>
          <button className="text-text-main hover:text-secondary transition-colors relative">
            <ShoppingBag size={20} />
            <span className="absolute -top-2 -right-2 bg-secondary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-primary z-[60] flex flex-col p-8"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={32} className="text-text-main" />
              </button>
            </div>
            
            <div className="flex flex-col space-y-8 mt-12">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-serif text-text-main hover:text-secondary"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-auto pt-12 border-t border-secondary/20">
              <p className="text-sm text-text-muted uppercase tracking-widest mb-4">Follow Us</p>
              <div className="flex space-x-6">
                <span className="text-text-main">Instagram</span>
                <span className="text-text-main">Pinterest</span>
                <span className="text-text-main">Facebook</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

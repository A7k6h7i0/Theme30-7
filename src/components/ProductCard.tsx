"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, ShoppingBag } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group relative flex flex-col"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-luxury-cream">
        <Link href={`/product/${id}`}>
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </Link>
        
        {/* Hover Actions */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-text-main hover:bg-secondary hover:text-white transition-all shadow-lg">
            <ShoppingBag size={18} />
          </button>
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-text-main hover:bg-secondary hover:text-white transition-all shadow-lg">
            <Heart size={18} />
          </button>
        </div>

        {/* Category Tag */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/80 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-widest text-text-main">
            {category}
          </span>
        </div>
      </div>

      <div className="mt-6 text-center">
        <Link href={`/product/${id}`}>
          <h3 className="text-lg font-serif text-text-main group-hover:text-secondary transition-colors">
            {name}
          </h3>
        </Link>
        <p className="mt-1 text-secondary font-medium">${price.toFixed(2)}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;

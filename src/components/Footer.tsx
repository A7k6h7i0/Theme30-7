import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const Instagram = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const Facebook = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const Twitter = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-luxury-cream pt-20 pb-10 px-6 md:px-12 border-t border-secondary/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Column */}
        <div className="space-y-6">
          <Link href="/" className="flex flex-col">
            <span className="text-2xl font-serif tracking-tighter text-text-main">
              ARTISAN <span className="text-secondary italic">ALCOVE</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-text-muted -mt-1">
              Handcrafted Excellence
            </span>
          </Link>
          <p className="text-text-muted text-sm leading-relaxed max-w-xs">
            Curating the finest handmade crafts from master artisans around the globe. Every piece tells a story of dedication and skill.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full border border-secondary/20 flex items-center justify-center text-text-main hover:bg-secondary hover:text-white transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-secondary/20 flex items-center justify-center text-text-main hover:bg-secondary hover:text-white transition-all">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-secondary/20 flex items-center justify-center text-text-main hover:bg-secondary hover:text-white transition-all">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm uppercase tracking-widest font-bold mb-6 text-text-main">Shop</h4>
          <ul className="space-y-4">
            <li><Link href="/shop" className="text-text-muted hover:text-secondary text-sm transition-colors">All Products</Link></li>
            <li><Link href="/shop?category=resin" className="text-text-muted hover:text-secondary text-sm transition-colors">Resin Art</Link></li>
            <li><Link href="/shop?category=decor" className="text-text-muted hover:text-secondary text-sm transition-colors">Home Decor</Link></li>
            <li><Link href="/shop?category=personalized" className="text-text-muted hover:text-secondary text-sm transition-colors">Personalized Gifts</Link></li>
            <li><Link href="/shop?category=frames" className="text-text-muted hover:text-secondary text-sm transition-colors">Custom Photo Frames</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-sm uppercase tracking-widest font-bold mb-6 text-text-main">Support</h4>
          <ul className="space-y-4">
            <li><Link href="/about" className="text-text-muted hover:text-secondary text-sm transition-colors">Our Story</Link></li>
            <li><Link href="/shipping" className="text-text-muted hover:text-secondary text-sm transition-colors">Shipping & Returns</Link></li>
            <li><Link href="/faq" className="text-text-muted hover:text-secondary text-sm transition-colors">FAQ</Link></li>
            <li><Link href="/contact" className="text-text-muted hover:text-secondary text-sm transition-colors">Contact Us</Link></li>
            <li><Link href="/privacy" className="text-text-muted hover:text-secondary text-sm transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h4 className="text-sm uppercase tracking-widest font-bold mb-6 text-text-main">Get in Touch</h4>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <MapPin size={18} className="text-secondary shrink-0 mt-1" />
              <p className="text-text-muted text-sm">123 Artisan Lane, Craft Village, CV 45678</p>
            </div>
            <div className="flex items-center space-x-3">
              <Phone size={18} className="text-secondary shrink-0" />
              <p className="text-text-muted text-sm">+1 (234) 567-890</p>
            </div>
            <div className="flex items-center space-x-3">
              <Mail size={18} className="text-secondary shrink-0" />
              <p className="text-text-muted text-sm">hello@artisanalcove.com</p>
            </div>
          </div>
          <div className="pt-4">
            <h5 className="text-xs uppercase tracking-widest font-bold mb-3 text-text-main">Newsletter</h5>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white border border-secondary/20 px-4 py-2 text-sm focus:outline-none focus:border-secondary w-full"
              />
              <button className="bg-secondary text-white px-4 py-2 text-sm uppercase tracking-widest hover:bg-luxury-gold transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-secondary/10 flex flex-col md:row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-text-muted text-[10px] uppercase tracking-widest">
          © 2026 Artisan Alcove. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

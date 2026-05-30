"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactPage = () => {
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
            <span className="text-secondary uppercase tracking-[0.4em] text-xs font-bold">Get in Touch</span>
            <h1 className="text-5xl md:text-6xl font-serif text-text-main">We'd Love to Hear From You</h1>
            <p className="text-text-muted max-w-2xl mx-auto">
              Whether you have a question about our collections, need help with an order, or just want to say hello, our team is here for you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-serif text-text-main">Contact Information</h2>
                <p className="text-text-muted">
                  Reach out to us through any of these channels. We typically respond within 24 hours.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-text-main mb-1">Email Us</h4>
                    <p className="text-text-muted">hello@artisanalcove.com</p>
                    <p className="text-text-muted">support@artisanalcove.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-text-main mb-1">Call Us</h4>
                    <p className="text-text-muted">+1 (234) 567-890</p>
                    <p className="text-text-muted">Mon - Fri: 9am - 6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-text-main mb-1">Visit Our Studio</h4>
                    <p className="text-text-muted">123 Artisan Lane</p>
                    <p className="text-text-muted">Craft Village, CV 45678</p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <h4 className="text-xs uppercase tracking-widest font-bold text-text-main mb-6">Follow Our Journey</h4>
                <div className="flex space-x-6">
                  {["Instagram", "Pinterest", "Facebook", "Twitter"].map((social) => (
                    <a key={social} href="#" className="text-text-muted hover:text-secondary transition-colors uppercase tracking-widest text-[10px] font-bold">
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-luxury-cream p-8 md:p-12 luxury-shadow">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-text-main">First Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-white border border-secondary/20 px-4 py-3 focus:outline-none focus:border-secondary text-sm"
                      placeholder="Jane"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-text-main">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-white border border-secondary/20 px-4 py-3 focus:outline-none focus:border-secondary text-sm"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-text-main">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-white border border-secondary/20 px-4 py-3 focus:outline-none focus:border-secondary text-sm"
                    placeholder="jane@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-text-main">Subject</label>
                  <select className="w-full bg-white border border-secondary/20 px-4 py-3 focus:outline-none focus:border-secondary text-sm">
                    <option>General Inquiry</option>
                    <option>Order Support</option>
                    <option>Custom Commission</option>
                    <option>Wholesale</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-text-main">Message</label>
                  <textarea 
                    rows={6}
                    className="w-full bg-white border border-secondary/20 px-4 py-3 focus:outline-none focus:border-secondary text-sm resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button className="w-full bg-text-main text-white py-4 uppercase tracking-widest text-sm font-bold hover:bg-secondary transition-all duration-300 flex items-center justify-center group">
                  <Send className="mr-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" size={18} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;

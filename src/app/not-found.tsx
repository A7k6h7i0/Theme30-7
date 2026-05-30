import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center pt-20">
        <span className="text-secondary text-8xl font-serif mb-4">404</span>
        <h1 className="text-4xl font-serif text-text-main mb-6">Page Not Found</h1>
        <p className="text-text-muted mb-10 max-w-md">
          The piece you are looking for doesn't seem to exist in our collection. It may have been moved or is no longer available.
        </p>
        <Link
          href="/shop"
          className="bg-text-main text-white px-10 py-4 uppercase tracking-widest text-sm font-bold hover:bg-secondary transition-all"
        >
          Explore Collection
        </Link>
      </div>
      <Footer />
    </main>
  );
};

export default NotFound;

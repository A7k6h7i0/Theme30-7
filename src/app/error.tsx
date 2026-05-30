"use client";

import React from "react";
import Link from "next/link";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary px-6 text-center">
      <h2 className="text-4xl font-serif text-text-main mb-4">Something went wrong</h2>
      <p className="text-text-muted mb-8 max-w-md">
        We apologize for the inconvenience. An unexpected error has occurred while crafting your experience.
      </p>
      <div className="flex space-x-4">
        <button
          onClick={() => reset()}
          className="bg-secondary text-white px-8 py-3 uppercase tracking-widest text-xs font-bold hover:bg-luxury-gold transition-colors"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="border border-text-main text-text-main px-8 py-3 uppercase tracking-widest text-xs font-bold hover:bg-text-main hover:text-white transition-colors"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error;

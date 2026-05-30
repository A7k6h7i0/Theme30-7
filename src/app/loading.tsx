import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 border-2 border-secondary/20 border-t-secondary rounded-full animate-spin" />
        <span className="text-sm uppercase tracking-[0.4em] text-secondary font-bold animate-pulse">
          Artisan Alcove
        </span>
      </div>
    </div>
  );
};

export default Loading;

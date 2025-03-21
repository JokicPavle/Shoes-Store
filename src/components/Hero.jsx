import React from "react";

export const Hero = () => {
  return (
    <div className="relative w-full">
      <img
        className="w-full h-[300px] md:h-[400px] xl:h-[600px] object-cover"
        src="https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="/"
      />
      {/* Centriranje teksta */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl md:text-5xl xl:text-7xl text-white font-bold">
          Welcome To
          <br />
          My&nbsp;
          <span className="text-4xl md:text-6xl xl:text-8xl font-bold italic text-orange-500">
            Shoes&nbsp;
          </span>
          Store
        </h1>
      </div>
    </div>
  );
};

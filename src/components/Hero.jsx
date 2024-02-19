import React from "react";

export const Hero = () => {
  return (
    <div className="relative w-full">
      <img
        className="w-full h-[700px] object-cover"
        src="https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="/"
      />
      <div className="absolute top-[30%] left-[30%] text-center">
        <h1 className="text-3xl xl:text-8xl text-white text-bold">
          Welcome To
          <br />
          My&nbsp;
          <span className="text-4xl xl:text-9xl text-bold italic text-orange-500">
            Shoes&nbsp;
          </span>
          Store
        </h1>
      </div>
    </div>
  );
};

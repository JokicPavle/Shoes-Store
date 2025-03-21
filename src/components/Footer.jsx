import React, { useDebugValue } from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="mt-20 py-10 bg-black text-white w-full flex justify-center flex-col">
      <div className="flex flex-wrap items-center justify-center">
        <Link to="/">
          <button className="p-1 mr-2 font-bold">
            Home
          </button>
        </Link>
        <Link to="/products">
          <button className="p-1 mr-2 font-bold">
            Products
          </button>
        </Link>
        <Link to="/gallery">
          <button className="p-1 mr-2 font-bold">
            Gallery
          </button>
        </Link>
        <Link to="/about">
          <button className="p-1 mr-2 font-bold">
            About
          </button>
        </Link>
        <Link to="/login">
          <button className="p-1 font-bold">
            Login
          </button>
        </Link>
      </div>
      <h1 className="text-center mt-10">
        All Rights Reserved : &copy; Copyright 2024 Pavle Jokic!
      </h1>
    </div>
  );
};

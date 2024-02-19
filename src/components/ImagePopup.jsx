import React from "react";
import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaTimes,
} from "react-icons/fa";
export const ImagePopup = ({ image, onClose, prevImage, nextImage }) => {
  if (!image) {
    return null;
  }

  return (
    <>
      <div
        // onClick={onClose}
        className="fixed top-0 left-0 w-[100%] h-[100%] text-black flex items-center justify-center bg-gray-800 bg-opacity-90 z-10"
      >
        <div className="bg-[#F6F6F6] p-8 rounded-lg w-[800px] h-auto z-50 relative">
          <button onClick={onClose}>
            <FaTimes size={30} className="absolute right-5 top-5" />
          </button>
          <button onClick={prevImage}>
            <FaArrowAltCircleLeft
              size={40}
              className="absolute left-10 top-[50%]"
            />
          </button>
          <button onClick={nextImage}>
            <FaArrowAltCircleRight
              size={40}
              className="absolute right-10 top-[50%]"
            />
          </button>
          <img
            src={image.image}
            alt={`img`}
            className="rounded-full mb-4 w-[450px] m-auto"
          />
          <button
            onClick={onClose}
            className="mt-4 bg-black text-white py-2 px-4 rounded hover:bg-orange-500"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

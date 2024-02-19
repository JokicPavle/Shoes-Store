import React, { useState } from "react";
import { data } from "../data/data";
import { ImagePopup } from "../components/ImagePopup";
export const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  return (
    <>
      <div className=" bg-[#F6F6F6]">
        <h1 className="text-center font-bold text-4xl my-10 text-orange-500 pt-10">
          This is a gallery of all my shoes available!
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mx-20 my-10">
          {data.map((img, ind) => (
            <button
              onClick={() => setSelectedImageIndex(ind)}
              className="border border-dotted"
            >
              <img key={ind} src={img.image} />
            </button>
          ))}
        </div>
        {selectedImageIndex >= 0 ? (
          <ImagePopup
            image={data[selectedImageIndex]}
            onClose={() => setSelectedImageIndex(null)}
            prevImage={() =>
              setSelectedImageIndex((prevIndex) =>
                prevIndex > 0 ? prevIndex - 1 : data.length - 1
              )
            }
            nextImage={() =>
              setSelectedImageIndex((prevIndex) =>
                prevIndex < data.length - 1 ? prevIndex + 1 : 0
              )
            }
          />
        ) : null}
      </div>
    </>
  );
};

import React, { useContext, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { ShopContext } from "../context/ShoppingCartContext";
import { Link } from "react-router-dom";

export const Product = (props) => {
  const { id, category, name, image, price, sizes } = props.data;
  const {
    cartItems,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    // selectedSize,
    // setSelectedSize,
  } = useContext(ShopContext);
  const quantity = cartItems[id];
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };
  return (
    <>
      <div className="border-orange-600 p-3 bg-[#f6f6f6] border rounded-xl hover:scale-105 duration-300">
        <Link to={`/shoesinfo/${id}`}>
          <img className="m-auto sm:w-[415px]" src={image} alt="/" />
        </Link>
        <div>
          <h1 className="text-2xl py-2 font-bold h-[80px]">{name}</h1>
        </div>
        <div className="flex justify-between">
          <h3 className="text-gray-400 font-semibold">{category}</h3>
          <h2 className="font-bold">{`$${price}`}</h2>
        </div>
        <div className="grid grid-cols-4 xl:flex">
          {sizes?.map((size, index) => (
            <div
              key={index}
              className={`border-orange-500 cursor-pointer py-1 my-2 px-4 border flex items-center justify-center text-center mx-1 rounded-2xl ${
                selectedSize === size ? "bg-gray-300" : ""
              }`}
              onClick={() => handleSizeClick(size)}
            >
              <button value={size}>{size}</button>
            </div>
          ))}
        </div>
        <div className="flex flex-col">
          {quantity > 0 && (
            <div className="m-auto">
              <button
                onClick={() => decreaseQuantity(id)}
                className="bg-red-500 p-1 text-2xl text-white rounded-full"
              >
                <FaMinus />
              </button>
              <span className="mx-4 text-4xl">{quantity}</span>
              <button
                onClick={() => increaseQuantity(id)}
                className="bg-green-500 p-1 text-2xl text-white rounded-full"
              >
                <FaPlus />
              </button>
            </div>
          )}
          <button
            onClick={() => addToCart(id)}
            className="my-2 py-2 px-5 bg-orange-600 rounded-2xl text-white font-bold"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
};

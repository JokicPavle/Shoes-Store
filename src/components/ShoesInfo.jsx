import React, { useContext } from "react";
import { ShopContext } from "../context/ShoppingCartContext";
import { data } from "../data/data";
import { useParams } from "react-router-dom";
import { FaMinus, FaPlus } from "react-icons/fa";
const ShoesInfo = () => {
  const { cartItems, addToCart, increaseQuantity, decreaseQuantity } =
    useContext(ShopContext);
  const { id } = useParams();
  const selectedProduct = data.find((product) => product.id === parseInt(id));
  const quantity = cartItems[selectedProduct.id];
  return (
    <>
      <div className="max-w-[90%] sm:max-w-[70%] border-orange-600 p-3 bg-[#f6f6f6] border rounded-xl flex flex-col mt-20 mx-auto sm:flex-row sm:justify-around">
        <img className="sm:w-[415px]" src={selectedProduct.image} alt="/" />
        <div>
          <div>
            <h1 className="sm:text-6xl py-2 font-bold h-[80px]">
              {selectedProduct.name}
            </h1>
          </div>
          <div className="flex justify-between sm:text-3xl my-10">
            <h3 className="text-gray-400 font-semibold">
              {selectedProduct.category}
            </h3>
            <h2 className="font-bold">{`$${selectedProduct.price}`}</h2>
          </div>
          <div className="grid grid-cols-4 xl:flex">
            {selectedProduct.sizes?.map((size, index) => (
              <div
                key={index}
                className="border-orange-500 py-1 my-2 px-4 border flex items-center justify-center text-center mx-1 rounded-2xl"
              >
                <h2 className="text-center flex justify-center items-center">
                  {size}
                </h2>
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
              className="my-10 py-2 px-5 bg-orange-600 rounded-2xl text-white font-bold"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoesInfo;

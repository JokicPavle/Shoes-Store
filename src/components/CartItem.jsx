import React, { useContext } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { ShopContext } from "../context/ShoppingCartContext";

export const CartItem = (props) => {
  const { id, category, name, image, price } = props.data;
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    selectedSize,
    updateCartItemCount,
  } = useContext(ShopContext);
  const quantity = cartItems[id];
  return (
    <div className="flex justify-between my-10 mx-4 border-orange-600 p-3 bg-[#f6f6f6] border rounded-xl">
      <div>
        <img className="m-auto w-[80px]" src={image} alt="/" />
      </div>
      <div>
        <h1 className="py-2 font-bold">{name}</h1>
        <h3 className="text-gray-400 font-semibold">{category}</h3>
        <h2 className="font-bold">$ {price}</h2>
        <p>Selected Size: {selectedSize}</p>
      </div>
      <div className="flex items-center">
        {quantity > 0 && (
          <div className="m-auto flex justify-between items-center">
            <div>
              <button
                onClick={() => decreaseQuantity(id)}
                className="bg-red-500 p-1 text-sm text-white rounded-full"
              >
                <FaMinus />
              </button>
            </div>
            <div>
              <input
                className="m-auto text-center mx-2 max-w-[40px]"
                value={cartItems[id]}
                onChange={(e) =>
                  updateCartItemCount(Number(e.target.value), id)
                }
              />
            </div>
            <div>
              <button
                onClick={() => increaseQuantity(id)}
                className="bg-green-500 p-1 text-sm text-white rounded-full"
              >
                <FaPlus />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

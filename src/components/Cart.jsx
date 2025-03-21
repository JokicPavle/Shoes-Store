import React, { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { data } from "../data/data";
import { ShopContext } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
export const Cart = ({ cartNav, setCartNav }) => {
  const { cartItems, removeAllItems, cartQuantity, getTotalCartAmount } =
    useContext(ShopContext);
  return (
    <>
      <div
        className={
          cartNav
            ? "absolute top-[70px] right-0 w-[100%] sm:w-[400px] h-auto bg-white z-10 duration-200 overflow-y-clip"
            : "absolute top-0 right-[-100%] w-[400px] h-auto bg-orange-200 z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setCartNav(!cartNav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h1 className="text-4xl font-bold text-center mt-16">
          Your Cart Items
        </h1>
        <div>
          {data.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem key={product.id} data={product} />;
            }
          })}
        </div>
        <div className="flex justify-center flex-col my-4">
          <button
            onClick={() => removeAllItems()}
            className="text-white bg-red-500 p-3 rounded-full max-w-[150px] m-auto"
          >
            Remove All
          </button>
          <h1 className="text-center my-6 text-2xl font-bold">
            Total Price: $
            <span className="text-gray-500">{getTotalCartAmount()}</span>
          </h1>
        </div>
      </div>
    </>
  );
};

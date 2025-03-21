import { useContext, useEffect, useState, useNavigate } from "react";
import { Link } from "react-router-dom";
import { Cart } from "./Cart";
import { FaArrowDown, FaBars } from "react-icons/fa";
import { ShopContext } from "../context/ShoppingCartContext";
import { Authentication } from "./Authentication";
export const Navbar = (props) => {
  const price = props.data.price;
  const [cartNav, setCartNav] = useState(false);
  const { cartQuantity, handleSignOut } = useContext(ShopContext);
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="border-b-gray-600 shadow-md py-3 w-full z-50">
        <div className="flex justify-between mx-2 items-center gap-1">
        <div className="logoWrapper mr-2">
          <Link to="/">
            <img
            className="mt-[-20px]"
            width={60}
            height={60}
            src="https://cdn.worldvectorlogo.com/logos/shoes-1.svg"
            alt="/"
            />
          </Link>
        </div>
        <div
         className="sm:hidden z-10 flex flex-col items-center"
       >
        <FaBars onClick={handleNav} size={30} className="cursor-pointer" />
       </div>
       {/* Desktop Links Start */}
       <div className="desktopLinksWrapper">
          <div className="hidden sm:flex">
             <Link to="/">
            <button className="p-3  text-gray border-double border-spacing-10 mx-2 hover:text-orange-500">
              Home
            </button>
          </Link>

          <Link to="/products">
            <button className="p-3  text-gray border-double border-spacing-10 mx-2 hover:text-orange-500">
              Products
            </button>
          </Link>
          <Link to="/gallery">
            <button className="p-3  text-gray border-double border-spacing-10 mx-2 hover:text-orange-500">
              Gallery
            </button>
          </Link>
          <Link to="/about">
            <button className="p-3  text-gray border-double border- mx-2 hover:text-orange-500">
              About
            </button>
          </Link>
        </div>
        </div>
        {/* Desktop Links End */}
        <div className="ml-auto">
          <Authentication />
        </div>
      {/* Mobile Links Start */}
       <div
          onClick={handleNav}
          className={`fixed top-0 left-0 h-screen w-full bg-black/90 px-4 py-7 text-gray-300 z-20 transition-transform duration-500 ease-in-out ${
            nav ? "translate-x-0" : "-translate-x-full"
          }`}
          
        >
          <ul className="h-full w-full text-center pt-12">
            <li className="text-2xl py-8">
              <Link to="/">
                <button>Home</button>
              </Link>
            </li>
            <li className="text-2xl py-8">
              <Link to="/products">
                <button>Products</button>
              </Link>
            </li>
            <li className="text-2xl py-8">
              <Link to="/gallery">
                <button>Gallery</button>
              </Link>
            </li>
            <li className="text-2xl py-8">
              <Link to="/about">
                <button>About</button>
              </Link>
            </li>
          </ul>
        </div>
      {/* Mobile Links End */}
      {cartNav && <Cart cartNav={cartNav} setCartNav={setCartNav} />}
       <button
        onClick={() => setCartNav(!cartNav)}
        className="mx-1 sm:mx-5 rounded-full border-orange-400 border-2 border-collapse p-3 relative"
      >
         <svg
           xmlns="http://www.w3.org/2000/svg"
           width="20"
           height="20"
           fill="currentColor"
           className="bi bi-cart-fill"
           viewBox="0 0 16 16"
         >
           <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />{" "}
         </svg>

         <span className="absolute right-[-10px] bottom-[-10px] rounded-full border-orange-600 bg-orange-600 text-white px-2 border-2">
          {cartQuantity()}
        </span>
      </button>
       </div>
      </div>
    </>
  );
};

    
import { useContext, useEffect, useState, useNavigate } from "react";
import { Link } from "react-router-dom";
import { Cart } from "./Cart";
import { FaArrowDown, FaBars } from "react-icons/fa";
import { ShopContext } from "../context/ShoppingCartContext";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
export const Authentication = (props) => {
  const [authenticatedUser, setAuthenticatedUser] = useState("");
  useEffect(() => {
    const listenAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthenticatedUser(user);
      } else {
        setAuthenticatedUser(null);
      }
    });
    return () => {
      listenAuth();
    };
  }, []);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <>
      {authenticatedUser === null ? (
        <div>
          <Link className="inline" to="/login">
            <button className="p-2 sm:p-3 sm:px-7 bg-orange-400 text-white border border-double border-spacing-10 mx-2 hover:bg-orange-800">
              Login
            </button>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row sm:justify-between items-center">
          <p className="text-center mb-1">
            Welcome <span className="font-bold">{authenticatedUser.email}</span>
          </p>
          <button
            onClick={handleSignOut}
            className="p-1 sm:p-3 sm:px-7 bg-orange-400 text-white border border-double border-spacing-10 sm:mx-2 hover:bg-orange-800"
          >
            Logout
          </button>
        </div>
      )}
    </>
  );
};

import React, { useState, createContext } from "react";
import { data } from "../data/data";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < data.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShoppingCartContext = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [searchValue, setSearchValue] = useState("");
  const [filteredItems, setFilteredItems] = useState(data);
  const navigate = useNavigate();
  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstPost, indexOfLastPost);
  // const [selectedSize, setSelectedSize] = useState(null);
  // function handleSignOut() {
  //   signOut(auth).then((value) => {
  //     console.log(value);
  //     console.log("signouted");
  //     navigate("/");
  //   });
  // }

  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }
  function previousPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function nextPage() {
    if (currentPage !== Math.ceil(filteredItems.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  }
  function searchItems(e) {
    const value = e.target.value;
    const filteredItem = data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredItems(filteredItem);
    setSearchValue(value);
  }
  function clearSearchItem() {
    setSearchValue("");
    setFilteredItems(data);
  }
  function addToCart(id, size) {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  }

  function removeFromCart(id) {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  }
  function increaseQuantity(id) {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  }
  function decreaseQuantity(id) {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  }
  function cartQuantity() {
    return Object.values(cartItems).reduce(
      (total, quantity) => total + quantity,
      0
    );
  }
  const updateCartItemCount = (newAmount, id) => {
    setCartItems((prev) => ({ ...prev, [id]: newAmount }));
  };
  function removeAllItems() {
    setCartItems(getDefaultCart());
  }
  function getTotalCartAmount() {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = data.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  }

  const contextValue = {
    cartItems,
    addToCart,
    cartQuantity,
    increaseQuantity,
    decreaseQuantity,
    getTotalCartAmount,
    removeFromCart,
    updateCartItemCount,
    removeAllItems,
    searchItems,
    filteredItems,
    currentItems,
    paginate,
    previousPage,
    nextPage,
    itemsPerPage,
    currentPage,
    searchValue,
    clearSearchItem,
    // selectedSize,
    // setSelectedSize,
    // handleSignOut,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

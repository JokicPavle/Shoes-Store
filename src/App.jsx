import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { AllProducts } from "./pages/AllProducts";
import { Gallery } from "./pages/Gallery";
import { About } from "./pages/About";
import { ShoppingCartContext } from "./context/ShoppingCartContext";
import { data } from "./data/data";
import ShoesInfo from "./components/ShoesInfo#";
import { Footer } from "./components/Footer";
function App() {
  return (
    <>
      <ShoppingCartContext>
        <Navbar data={Object.values(data)} />
        <Routes>
          <Route path="/" element={<Home />}>
            Home
          </Route>
          <Route path="/login" element={<Login />}>
            Login
          </Route>
          <Route path="/signup" element={<SignUp />}>
            SignUp
          </Route>
          <Route path="/products" element={<AllProducts />}>
            Products
          </Route>
          <Route path="/gallery" element={<Gallery />}>
            Gallery
          </Route>
          <Route path="/about" element={<About />}>
            About
          </Route>
          <Route path="/shoesinfo/:id" element={<ShoesInfo />} />
        </Routes>
        <Footer />
      </ShoppingCartContext>
    </>
  );
}

export default App;

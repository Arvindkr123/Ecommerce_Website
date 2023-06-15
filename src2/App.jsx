import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import Home from "./components/pages/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/pages/About";
import Products from "./components/pages/Products";
import ProductDetails from "./components/pages/ProductDetails";
import AuthContextProvider, {
  AuthContext,
} from "./components/Store/AuthContext";
import Contact from "./components/pages/Contact";
import Cart from "./components/Cart/Cart";
import Protected from "./components/pages/Protected";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Protected Component={Home} />}></Route>
            <Route
              path="/about"
              element={<Protected Component={About} />}
            ></Route>
            <Route
              path="/products"
              element={<Protected Component={Products} />}
            ></Route>
            <Route
              path="/products/:id"
              exact
              element={<Protected Component={ProductDetails} />}
            />
            <Route
              path="/contact"
              element={<Protected Component={Contact} />}
            />
            <Route path={"/cart"} element={<Cart />} />
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signUp" element={<SignUp />}></Route>
            <Route
              path="*"
              element={<h1 className="display-1">Page Not Found</h1>}
            ></Route>
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </>
  );
};

export default App;

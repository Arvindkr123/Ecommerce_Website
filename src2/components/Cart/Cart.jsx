import React, { useContext } from "react";
import { AuthContext } from "../Store/AuthContext";
import { HiMinus, HiPlus } from "react-icons/hi";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import "../../index.css";
import { auth, fs } from "../config/FirebaseConfig";

const Cart = () => {
  const {
    cartProducts,
    cartProudctIncrease,
    cartProudctDecrease,
    deleteCartHandler,
  } = useContext(AuthContext);

  return (
    <section>
      <div className="container-fluid overflow-hidden display-3">
        <div className="row">
          <h1 className="display-1 text-center mt-2 text-uppercase shadow bg-secondary">Cart Items</h1>
          {cartProducts.length > 0 ? (
            <div className="col d-flex flex-wrap">
              {cartProducts.map((cartProduct) => {
                return (
                  <div className="m-auto">
                    <div className="product m-5 ">
                      <div className="product-img">
                        <img src={cartProduct.imageUrl} alt="product image" />
                      </div>
                      <div className="product-text title">
                        {cartProduct.title}
                      </div>
                      <div className="product-text price">
                        <MdOutlineCurrencyRupee size={20} />
                        Price : {cartProduct.price}
                      </div>
                      <span style={{ fontSize: "20px" }}>Quantity</span>
                      <div className="product-text quantity-box">
                        <div
                          className="actions-btns minus"
                          style={{ cursor: "pointer" }}
                          onClick={() => cartProudctDecrease(cartProduct)}
                        >
                          <HiMinus size={20} />
                        </div>
                        <div>{cartProduct.qty}</div>
                        <div
                          className="actions-btns plus"
                          style={{ cursor: "pointer" }}
                          onClick={() => cartProudctIncrease(cartProduct)}
                        >
                          <HiPlus size={20} />
                        </div>
                      </div>
                      <div className="product-text cart-price">
                        Total Amount : <MdOutlineCurrencyRupee size={20} />{" "}
                        {cartProduct.TotalProductPrice}
                      </div>
                      <div
                        className="btn btn-danger btn-md cart-btn text-uppercase"
                        onClick={() => deleteCartHandler(cartProduct)}
                      >
                        delete
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <h2 className="bg-warning text-center m-5 p-5">
              No cart items here... go to store then come back
            </h2>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cart;

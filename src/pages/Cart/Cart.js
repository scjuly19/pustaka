import React from "react";
import { useData } from "../../context";
import "./Cart.css";
import { CartPrice } from "./component/CartPrice";
import { CartProduct } from "./component/CartProduct";

export function Cart() {
  const { cart } = useData();
  const isCartHasItem = cart.length > 0;
  return (
    <div className="cart-container">
      <div className="cart-main-container flex-center">
        <h3>MY CART {isCartHasItem && `(${cart.length})`}</h3>
        <div className="cart-manage">
          <div className="cart-manage-item">
            {isCartHasItem ? (
              cart.map((product) => (
                <CartProduct key={product._id} product={product} />
              ))
            ) : (
              <h1 className="text-center"> Your Cart Is Empty ! ☹️</h1>
            )}
          </div>
          {isCartHasItem && <CartPrice />}
        </div>
      </div>
    </div>
  );
}

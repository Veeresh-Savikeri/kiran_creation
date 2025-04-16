import React from "react";
import Navbar from "../Components/Navbar";
import CartCard from "../Components/CartCard";
import { useState, useEffect } from "react";
export default function Cart() {
const[cart,setCart]=useState({});
  
  useEffect(() => {
    const cartItems = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i); 
      if (key.startsWith("cart_")){
        const value = JSON.parse(localStorage.getItem(key)); 
        cartItems[key] = value; 
      } // Log the key
      
    }
    // Update the state with all cart items
   // Log all cart items
    setCart(cartItems);
  }, [1]);
  
  const cartItemsKeys =Object.keys(cart)


  
  return (
    <div>
      <Navbar />
      <h1 className="text-center m-3 fw-bold" style={{textShadow:"2px 2px 2px rgba(0,0,0,0.4)"}}>  <i
                className="fa fa-shopping-cart ms-4 me-4"
                aria-hidden="true"
                style={{ fontSize: "30px", marginRight: "20px" ,cursor: "pointer"}}
              ></i>Your Shopping Cart</h1>
      <div className="cart container ">

        {cartItemsKeys.map((item, index) => {
            return (
                <CartCard
                key={index}
                name={cart[item].title}
                price={cart[item].price}
                image={cart[item].pto}
                route={cart[item].route}
                />
            );
        })}
      </div>
    </div>
  );
}

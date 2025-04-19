import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState } from "react";
import Payment from "../Components/Payment";
import "../Css/order.css";

export default function Order() {
  const location = useLocation();
  const navigate = useNavigate();
  const orders = location.state;
  const [pay, setPay] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState("");

  const orderDetails = {
    product_name: orders.name,
    sides: orders.sides,
    quantity: orders.quantity,
    price: orders.price,
    corner: orders.corner,
    product_image: orders.image,
    name: name,
    phone: phone,
    address: address,
    payment: pay,
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="fw-bold text-center mt-3">Your Order</h1>
        <div className="orderCard shadow-lg p-3 mb-5 mt-3 rounded">
          <div
            className=" card d-flex flex-row justify-content-between align-items-center flex-wrap p-3 border border-3 border-dark m-auto"
            style={{ backgroundColor: "gray", width: "auto", color: "white" }}
          >
            <img
              src={orders.image}
              className=""
              alt="Order Image"
              width="150px"
              height="150px"
              style={{ borderRadius: "8px", border: "3px solid white" }}
            />
            <div className="d-flex flex-column justify-content-center align-items-start ms-3">
              <h2 className="card-title fw-bold text-warning">{orders.name}</h2>
              <h4 className="card-title fw-bold"> Sides : {orders.sides}</h4>
              <h4 className="card-title fw-bold"> Corner : {orders.corners}</h4>
              <h4 className="card-title fw-bold">
                {" "}
                Quantity : {orders.quantity}
              </h4>
              <h4 className="card-title fw-bold">Price : ₹{orders.price}</h4>
            </div>
          </div>
          <div className="orderCardText">
            <h2 className="text-center fw-bold">Add Additional Information</h2>
            <div>
              <label className="fw-bold">Name : </label>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Enter your name..."
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <label className="fw-bold">Phone No : </label>
              <input
                type="number"
                className="form-control mb-3"
                placeholder="Enter your number..."
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
              <label className="fw-bold">Address : </label>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Enter your address..."
                onChange={(e) => setAddress(e.target.value)}
                value={address}
              />
            </div>
            <button
              className="btn btn-primary fw-bold"
              onClick={() => {
                setPay(true);
                fetch("http://localhost:5000/order", {
                  // Corrected 'fatch' to 'fetch'
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(orderDetails),
                })
                  .then((res) => res.json())
                  .then((data) => console.log(data))
                  .catch((err) => console.log(err));
              }}
            >
              Next
            </button>
          </div>
        </div>
        {pay === true ? <Payment /> : null}
        {pay === true ? (
          <div className="container">
            <button
              className="btn btn-primary w-100 p-2 fs-3 fw-bold mb-5"
              onClick={() => {
                fetch("http://localhost:5000/order", {
                  // Corrected 'fatch' to 'fetch'
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ name: name }),
                })
                  .then((res) => res.json())
                  .then((data) => console.log(data))
                  .catch((err) => console.log(err));
                alert(`${name}, Your Order Placed Successfully`);
                navigate("/");
              }}
            >
              Order
            </button>
          </div>
        ) : null}
      </div>
      <Footer />
    </div>
  );
}

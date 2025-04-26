import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import '../Css/order.css'

import { useState, useEffect } from "react";
export default function OrderList() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/order")
      .then((response) => response.json())
      .then((data) => {
        setOrders(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  }, []);

  return (
    <div  style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJsdXUlMjB3aGl0ZXxlbnwwfHx8fDE2OTI5NzY1NTg&ixlib=rb-4.0.3&q=80&w=1080)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        position: "relative",
      }}>
      <Navbar />
      <h1 className="text-center fw-bold text-white" style={{textShadow:"2px 2px 2px black"}}>Order List</h1>
      <div className="container "
      >
        {orders.map((order, index) => {
          return (
            <div
              className="card  mb-5 p-4 shadow-lg d-flex flex-row justify-content-between align-item-center flex-wrap "
              key={index}
             
            >
              <div className="PodImg">
                <img
                  src={order.product_image}
                  alt=""
                  width="150px"
                  height="150px"
                  className="img-fluid rounded"
                />
              </div>
              <div  className="d-flex flex-column justify-content-between align-items-start">
                <h3 className="fw-bold text-warning">Product Info</h3>
                <h6 className="fw-bold">Product Name: {order.product_name}</h6>
                <h6 className="fw-bold">Product Price: {order.price}</h6>
                <h6 className="fw-bold">Product Quantity: {order.quantity}</h6>
                <h6 className="fw-bold">
                  Payment Status: {order.payment ? "May Paid" : "Not Paid"}
                </h6>
              </div>
              <div className="d-flex flex-column justify-content-between align-items-start">
                <h3 className="fw-bold text-warning">Personal Info</h3>
                <h6 className="fw-bold">Name: {order.name}</h6>
                <h6 className="fw-bold">Phone No: {order.phone}</h6>
                <h6 className="fw-bold">Address: {order.address}</h6>
                <h6 className="fw-bold">
                  Payment Status: {order.payment ? "May Paid" : "Not Paid"}
                </h6>
              </div>
              <div className="d-flex flex-column justify-content-between align-item-center">
              <input type="date" className="p-1 rounded boder boder-dark border-2" placeholder="Enter your number..." />
                <button className="btn btn-primary w-100">Approve</button>
                <button className="btn btn-success ">Deleverd</button>
                <button className="btn btn-danger">Delete</button>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

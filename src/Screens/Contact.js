import React from "react";
import Navbar from "../Components/Navbar";
import "../Css/menu.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const [name, setName] = useState("none");
  const [phone, setPhone] = useState(0);
  const [address, setAddress] = useState("none");
  const [message, setMessage] = useState("none");
  const [approve, setApprove] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div
        className="bg-dark text-white d-flex flex-wrap justify-content-between align-items-center"
        style={{
          minHeight: "75vh",
          width: "100%",
        }}
      >
        {/* Left Section */}
        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
          <div className="text-center text-md-start ps-md-5">
            <h1 className="text-white">Contact Us</h1>
            <p className="text-white">
              If you have any questions, feel free to reach out!
            </p>
          </div>
        </div>

        {/* Right Section (Contact Form) */}
        <div className="col-12 col-md-6 contact">
          <div style={{ width: "70%", margin: "auto" }}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="contact_number">Contact Number:</label>
            <input
              type="number"
              id="contact_number"
              className="form-control"
              onChange={(e) => setPhone(e.target.value)}
            />
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              className="form-control"
              onChange={(e) => setAddress(e.target.value)}
            />
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              className="form-control"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button
              className="btn btn-primary mt-3"
              style={{ width: "100%" }}
              onClick={() => {
                fetch("http://localhost:5000/contact", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    name: name,
                    phone: phone,
                    address: address,
                    message: message,
                    approve: approve,
                  }),
                })
                  .then((res) => res.json())
                  .then((data) => {
                    alert(data.message);
                    navigate("/");
                  });
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

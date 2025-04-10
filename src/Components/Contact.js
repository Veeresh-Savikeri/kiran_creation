import React from "react";
import Navbar from "./Navbar";
import '../Css/menu.css';

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div
        className="bg-dark text-white "
        style={{
          minHeight: "75vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div style={{ width: "50%" }}>
          <div className="position-absolute top-50 ps-5">
            <h1 className="text-white">Contact Us</h1>
            <p className="text-white">
              If you have any questions, feel free to reach out!
            </p>
          </div>
        </div>
        <div style={{ width: "50%", color: "white" }} className="cont">
          <div style={{ width: "70%", margin: "auto" }}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" className="form-control" />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" className="form-control" />
            <label htmlFor="contact_number">Contact Number:</label>
            <input type="number" id="contact_number" className="form-control" />
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" className="form-control" />
            <label htmlFor="message">Message:</label>
            <textarea id="message" className="form-control"></textarea>
            <button className="btn btn-primary mt-3" style={{ width: "100%" }}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

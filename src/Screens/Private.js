import React from "react";
import kiran from "../imgs/kiran.jpg";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

export default function Private() {
  return (
    <div
      style={{ backgroundColor: "#343a40", color: "white", minHeight: "100vh" }}
    >
      <Navbar />
      <div
        className="container card"
        style={{
          backgroundColor:"white",
          backgroundSize: "cover",
          minHeight: "70vh",
        }}
      >
        <div className="cards mt-5 btn  btn-dark border-success border-2 shadow text-decoration-none">
          <Link to="/private/p_contacts"  style={{ textDecoration: "none" }}>
            <h2 className="text-center fw-bold text-white">
              Contacted Persons
            </h2>
          </Link>
        </div>
        <div className="cards mt-5 btn btn-dark border border-success border-2 shadow">
          <h2 className="text-center fw-bold">Ordered Notification</h2>
        </div>
        <div className="cards mt-5 btn  btn-dark border border-success border-2 shadow">
          <h2 className="text-center fw-bold">Contact Notification</h2>
        </div>
        <div className="cards mt-5 btn  btn-dark border border-success border-2 shadow">
          <h2 className="text-center fw-bold">Contact Notification</h2>
        </div>
        <div className="cards mt-5 btn  btn-dark border border-success border-2 shadow">
          <h2 className="text-center fw-bold">Contact Notification</h2>
        </div>
      </div>
    </div>
  );
}

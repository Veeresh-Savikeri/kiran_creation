import React from "react";
import Navbar from "../Components/Navbar";
import kiran from "../imgs/kiran.jpg";
import pto from "../imgs/visitingCard.webp";
import Rel_card from "../Components/Rel_card";
import "../Css/std_vcard.css";

export default function StdVcard() {
  function scrollLeft() {
    const container = document.querySelector(".scroll-container");
    container.scrollBy({ left: -700, behavior: "smooth" });
  }

  function scrollRight() {
    const container = document.querySelector(".scroll-container");
    container.scrollBy({ left: 700, behavior: "smooth" });
  }

  return (
    <div>
      <Navbar />

      <div className="bg-light " style={{ minHeight: "100vh" }}>
        <div className="d-flex flex-wrap justify-content-between align-items-start container shadow-lg mt-5">
          {/* Left Box */}
          <div
            className="p-3 bg-light text-dark "
            style={{
              flex: "1 1 45%",
              margin: "10px",
              borderRadius: "10px",
              minHeight: "200px",
              minWidth: "300px",
            }}
          >
            <img
              src={pto}
              alt="Placeholder"
              className="img-fluid rounded border border-dark border-5"
              style={{ borderRadius: "10px", width: "100%", height: "50vh" }}
            />
            <div className="mt-5 row">
              <div className="col-1 me-5 mt-3" style={{ cursor: "pointer" }}>
                <img
                  src={pto}
                  alt=""
                  style={{
                    borderRadius: "10px",
                    width: "70px",
                    height: "70px",
                  }}
                />
              </div>
              <div className="col-1 me-5 mt-3" style={{ cursor: "pointer" }}>
                <img
                  src={pto}
                  alt=""
                  style={{
                    borderRadius: "10px",
                    width: "70px",
                    height: "70px",
                  }}
                />
              </div>
              <div className="col-1 me-5 mt-3" style={{ cursor: "pointer" }}>
                <img
                  src={pto}
                  alt=""
                  style={{
                    borderRadius: "10px",
                    width: "70px",
                    height: "70px",
                  }}
                />
              </div>
              <div className="col-1 me-5 mt-3" style={{ cursor: "pointer" }}>
                <img
                  src={pto}
                  alt=""
                  style={{
                    borderRadius: "10px",
                    width: "70px",
                    height: "70px",
                  }}
                />
              </div>
              <div className="col-1 me-5 mt-3" style={{ cursor: "pointer" }}>
                <img
                  src={pto}
                  alt=""
                  style={{
                    borderRadius: "10px",
                    width: "70px",
                    height: "70px",
                  }}
                />
              </div>
              <div className="col-1 me-5 mt-3" style={{ cursor: "pointer" }}>
                <img
                  src={pto}
                  alt=""
                  style={{
                    borderRadius: "10px",
                    width: "70px",
                    height: "70px",
                  }}
                />
              </div>
              <div className="col-1 me-5 mt-3" style={{ cursor: "pointer" }}>
                <img
                  src={pto}
                  alt=""
                  style={{
                    borderRadius: "10px",
                    width: "70px",
                    height: "70px",
                  }}
                />
              </div>
              <div className="col-1 me-5 mt-3" style={{ cursor: "pointer" }}>
                <img
                  src={pto}
                  alt=""
                  style={{
                    borderRadius: "10px",
                    width: "70px",
                    height: "70px",
                  }}
                />
              </div>
              <div className="col-1 me-5 mt-3" style={{ cursor: "pointer" }}>
                <img
                  src={pto}
                  alt=""
                  style={{
                    borderRadius: "10px",
                    width: "70px",
                    height: "70px",
                  }}
                />
              </div>
            </div>
            <button className="bg-success rounded p-3 w-100 text-light border border-light mt-3 fs-5">
              <i className="fab fa-whatsapp fs-3 me-2" aria-hidden="true"></i>
              Share Design On WhatsApp
            </button>
          </div>

          {/* Right Box */}
          <div
            className="p-3 bg-light text-dark "
            style={{
              flex: "1 1 45%",
              margin: "10px",
              borderRadius: "10px",
              minHeight: "200px",
              minWidth: "300px",
            }}
          >
            <h2 className="text-center fw-bold">Standard Visition Card</h2>
            <ul>
              <li>cdc</li>
              <li>cdc</li>
              <li>cd</li>
              <li>dc</li>
              <li>cd</li>
            </ul>
            <h4 className="text-start fw-bold mt-3">Deliver Speed</h4>
            <div className="row">
              <button className="col-1 w-50 rounded fs-5 p-2">Standard</button>
              <button className="col-2 w-50 rounded fs-5 p-2">
                Same Day Deliver
              </button>
            </div>
            <h4 className="text-start fw-bold mt-3">Corners</h4>
            <select
              name=""
              id=""
              className="w-100 rounded fs-6 p-2 border border-dark rounded border-3"
            >
              <option value="select">Select...</option>
              <option value="rounded">Rounded</option>
              <option value="sharp">Sharp</option>
            </select>
            <h4 className="text-start fw-bold mt-3">Quantity</h4>
            <div className="col">
              <div className="row-1 w-100 border border-dark rounded p-2 d-flex justify-content-between align-items-center mb-2">
                <span>100</span>
                <span>Rs-200</span>
                <span>25% sevings</span>
              </div>
              <div className="row-1 w-100 border border-dark rounded p-2 d-flex justify-content-between align-items-center mb-2">
                <span>100</span>
                <span>Rs-200</span>
                <span>25% sevings</span>
              </div>
              <div className="row-1 w-100 border border-dark rounded p-2 d-flex justify-content-between align-items-center mb-2">
                <span>100</span>
                <span>Rs-200</span>
                <span>25% sevings</span>
              </div>
              <div className="row-1 w-100 border border-dark rounded  p-2 d-flex justify-content-between align-items-center mb-2">
                <span>100</span>
                <span>Rs-200</span>
                <span>25% sevings</span>
              </div>
              <div className="row-1 w-100 border border-dark rounded  p-2 d-flex justify-content-between align-items-center mb-2">
                <span>100</span>
                <span>Rs-200</span>
                <span>25% sevings</span>
              </div>
            </div>
            <div className="row">
              <button className="col-1 w-50 rounded fs-5 p-2 bg-primary">
                Add To Cart
              </button>
              <button className="col-2 w-50 rounded fs-5 p-2 bg-primary">
                Order
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-start ms-5 mt-5 fw-bold">Related Products</h1>
        <div className="scroll-wrapper position-relative">
          <button className="btn btn-primary scroll-left" onClick={scrollLeft}>
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
          </button>

          <div className="scroll-container d-flex align-items-center">
            <Rel_card />
            <Rel_card />
            <Rel_card />
            <Rel_card />
            <Rel_card />
            <Rel_card />
            <Rel_card />
            <Rel_card />
          </div>

          <button
            className="btn btn-primary scroll-right"
            onClick={scrollRight}
          >
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

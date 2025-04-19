import React from "react";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import Rel_card from "../Components/Rel_card";
import stdVCard from "../imgs/stdVCard.png";
import clsVCard from "../imgs/clsVCard.webp";
import squVCard from "../imgs/squVCard.webp";
import svc1 from "../imgs/svc.webp";
import svc2 from "../imgs/svc2.jpg";
import svc3 from "../imgs/svc3.jpg";
import svc4 from "../imgs/svc4.jpg";
import svc5 from "../imgs/svc5.jpg";
import svc6 from "../imgs/svc6.avif";
import whatsapp from "../imgs/whatsapp.jpg";
import "../Css/std_vcard.css";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";

export default function StdVcard() {
  const [selectedImage, setSelectedImage] = useState(stdVCard);
  const [border, setBorder] = useState("none");
  const [selQuant, setSelQuant] = useState(100);
  const [sides, setSides] = useState("One Side");
  const [corners, setCorners] = useState("sharp");
  const [price, setPrice] = useState(250);
  const [pto, setPto] = useState(selectedImage);
  const navigate = useNavigate();


  function scrollLeft() {
    const container = document.querySelector(".scroll-container");
    container.scrollBy({ left: -700, behavior: "smooth" });
  }

  function scrollRight() {
    const container = document.querySelector(".scroll-container");
    container.scrollBy({ left: 700, behavior: "smooth" });
  }

  let orders = {
    name: "Standard Visiting Card",
    sides: sides,
    price: price,
    quantity: selQuant,
    sides: sides,
    corners: corners,
    image: selectedImage,
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
              src={selectedImage}
              alt="Placeholder"
              className="img-fluid rounded border border-dark border-5"
              style={{ borderRadius: "10px", width: "100%", height: "50vh" }}
            />
            <div className="mt-5 row">
              <div
                className="col-1 me-5 mt-3"
                style={{ cursor: "pointer" }}
                onClick={() => setSelectedImage(svc1)}
              >
                <img
                  src={svc1}
                  alt=""
                  style={{
                    borderRadius: "10px",
                    width: "70px",
                    height: "70px",
                    border: selectedImage == svc1 ? "3px solid black" : "none",
                  }}
                />
              </div>
              <div
                className="col-1 me-5 mt-3"
                style={{ cursor: "pointer" }}
                onClick={() => setSelectedImage(svc2)}
              >
                <img
                  src={svc2}
                  alt=""
                  style={{
                    borderRadius: "10px",
                    width: "70px",
                    height: "70px",
                    border: selectedImage == svc2 ? "3px solid black" : "none",
                  }}
                />
              </div>
              <div
                className="col-1 me-5 mt-3"
                style={{ cursor: "pointer" }}
                onClick={() => setSelectedImage(svc3)}
              >
                <img
                  src={svc3}
                  alt=""
                  style={{
                    borderRadius: "10px",
                    width: "70px",
                    height: "70px",
                    border: selectedImage == svc3 ? "3px solid black" : "none",
                  }}
                />
              </div>
              <div
                className="col-1 me-5 mt-3"
                style={{ cursor: "pointer" }}
                onClick={() => setSelectedImage(svc4)}
              >
                <img
                  src={svc4}
                  alt=""
                  style={{
                    borderRadius: "10px",
                    width: "70px",
                    height: "70px",
                    border: selectedImage == svc4 ? "3px solid black" : "none",
                  }}
                />
              </div>
              <div
                className="col-1 me-5 mt-3"
                style={{ cursor: "pointer" }}
                onClick={() => setSelectedImage(svc5)}
              >
                <img
                  src={svc5}
                  alt=""
                  style={{
                    borderRadius: "10px",
                    width: "70px",
                    height: "70px",
                    border: selectedImage == svc5 ? "3px solid black" : "none",
                  }}
                />
              </div>
              <div
                className="col-1 me-5 mt-3"
                style={{ cursor: "pointer" }}
                onClick={() => setSelectedImage(svc6)}
              >
                <img
                  src={svc6}
                  alt=""
                  style={{
                    borderRadius: "10px",
                    width: "70px",
                    height: "70px",
                    border: selectedImage == svc6 ? "3px solid black" : "none",
                  }}
                />
              </div>
              <div
                className="col-1 me-5 mt-3"
                style={{ cursor: "pointer" }}
                onClick={() => setSelectedImage(svc1)}
              >
                <img
                  src={svc1}
                  alt=""
                  style={{
                    borderRadius: "10px",
                    width: "70px",
                    height: "70px",
                  }}
                />
              </div>
              <div
                className="col-1 me-5 mt-3"
                style={{ cursor: "pointer" }}
                onClick={() => setSelectedImage(svc2)}
              >
                <img
                  src={svc2}
                  alt=""
                  style={{
                    borderRadius: "10px",
                    width: "70px",
                    height: "70px",
                  }}
                />
              </div>
              <div
                className="col-1 me-5 mt-3"
                style={{ cursor: "pointer" }}
                onClick={() => setSelectedImage(svc3)}
              >
                <img
                  src={svc3}
                  alt=""
                  style={{
                    borderRadius: "10px",
                    width: "70px",
                    height: "70px",
                  }}
                />
              </div>
              <div
                className="col-1 me-5 mt-3"
                style={{ cursor: "pointer" }}
                onClick={() => setSelectedImage(svc4)}
              >
                <img
                  src={svc4}
                  alt=""
                  style={{
                    borderRadius: "10px",
                    width: "70px",
                    height: "70px",
                  }}
                />
              </div>
              <div
                className="col-1 me-5 mt-3"
                style={{ cursor: "pointer" }}
                onClick={() => setSelectedImage(svc5)}
              >
                <img
                  src={svc5}
                  alt=""
                  style={{
                    borderRadius: "10px",
                    width: "70px",
                    height: "70px",
                  }}
                />
              </div>
              <div
                className="col-1 me-5 mt-3"
                style={{ cursor: "pointer" }}
                onClick={() => setSelectedImage(svc6)}
              >
                <img
                  src={svc6}
                  alt=""
                  style={{
                    borderRadius: "10px",
                    width: "70px",
                    height: "70px",
                  }}
                />
              </div>
            </div>
            <Link
              to="https://wa.me/9739263962"
              target="_blank"
              onClick={() => setSelectedImage(whatsapp)}
            >
              <button className="bg-success rounded p-3 w-100 text-light border border-light mt-3 fs-5">
                <i className="fab fa-whatsapp fs-3 me-2" aria-hidden="true"></i>
                Share Design On WhatsApp
              </button>
            </Link>
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
            <h4 className="text-start fw-bold mt-3">Sides</h4>
            <div className="row">
              <button
                className="col-1 w-50 rounded fs-5 p-2"
                style={{
                  borderStyle: "solid",
                  borderColor: "black",
                  borderWidth: border == "left" ? "3px" : "1px",
                }}
                onClick={() => {
                  setBorder("left");
                  setSides("One Side");
                }}
              >
                One Side
              </button>
              <button
                className="col-2 w-50 rounded fs-5 p-2 "
                style={{
                  borderStyle: "solid",
                  borderColor: "black",
                  borderWidth: border == "right" ? "3px" : "1px",
                }}
                onClick={() => {
                  setBorder("right");
                  setSides("Two Side");
                }}
              >
                Two Side
              </button>
            </div>
            <h4 className="text-start fw-bold mt-3">Corners</h4>
            <select
              name=""
              id=""
              className="w-100 rounded fs-6 p-2 border border-dark rounded border-3"
              onClick={(e) => {
                setCorners(e.target.value);
              }
              }
            >
              <option value="sharp">Sharp</option>
            </select>
            <h4 className="text-start fw-bold mt-3">Quantity</h4>
            <div className="col">
              <div
                className="row-1 w-100 rounded p-2 d-flex justify-content-between align-items-center mb-2"
                style={{
                  borderColor: "black",
                  borderStyle: "solid",
                  borderWidth: selQuant == 100 ? "3px" : "1px",
                }}
                onClick={() => {
                  setSelQuant(100);
                  setPrice(250);
                }}
              >
                <span>100</span>
                <span>Rs-250</span>
                <span>15% savings</span>
              </div>
              <div
                className="row-1 w-100  rounded p-2 d-flex justify-content-between align-items-center mb-2"
                style={{
                  borderColor: "black",
                  borderStyle: "solid",
                  borderWidth: selQuant == 200 ? "3px" : "1px",
                }}
                onClick={() => {
                  setSelQuant(200);
                  setPrice(340);
                }}
              >
                <span>200</span>
                <span>Rs-340</span>
                <span>25% sevings</span>
              </div>
              <div
                className="row-1 w-100 rounded p-2 d-flex justify-content-between align-items-center mb-2"
                style={{
                  borderColor: "black",
                  borderStyle: "solid",
                  borderWidth: selQuant == 300 ? "3px" : "1px",
                }}
                onClick={() => {
                  setSelQuant(300);
                  setPrice(480);
                }}
              >
                <span>300</span>
                <span>Rs-480</span>
                <span>25% sevings</span>
              </div>
              <div
                className="row-1 w-100 rounded  p-2 d-flex justify-content-between align-items-center mb-2"
                style={{
                  borderColor: "black",
                  borderStyle: "solid",
                  borderWidth: selQuant == 400 ? "3px" : "1px",
                }}
                onClick={() => {
                  setSelQuant(400);
                  setPrice(600);
                }}
              >
                <span>400</span>
                <span>Rs-600</span>
                <span>25% sevings</span>
              </div>
              <div className="row-1 w-100 border border-dark rounded  p-2 d-flex justify-content-between align-items-center mb-2"
                style={{
                  borderColor: "black",
                  borderStyle: "solid",
                  borderWidth: selQuant == 400 ? "3px" : "1px",
                }}
                onClick={() => {
                  setSelQuant(500);
                  setPrice(700);
                }}>
                <span>500</span>
                <span>Rs-700</span>
                <span>25% sevings</span>
              </div>
            </div>
            <div className="row">
              <button className="col-1 w-50 rounded fs-5 p-2 bg-primary">
                Add To Cart
              </button>
              <button className="col-2 w-50 rounded fs-5 p-2 bg-primary"
                onClick={() => {
                  navigate("/order", { state: orders })
                }}>
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
            <Rel_card
              pto={stdVCard}
              title="Standard Visiting Card"
              price="100 Starting at Rs-250"
              route="/std_vcard"
            />
            <Rel_card
              pto={clsVCard}
              title="Classic Visiting Card"
              price="100 Starting at Rs-250"
              route="/clsvcard"
            />
            <Rel_card
              pto={squVCard}
              title="Squere Visiting Card"
              price="100 Starting at Rs-250"
              route="/std_vcard"
            />
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

      <Footer />
    </div>
  );
}

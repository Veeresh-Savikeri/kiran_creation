import React from "react";
import Navbar from "../Components/Navbar";
import Carousel from "../Components/Carousel";
import Rel_card from "../Components/Rel_card";
import stdVCard from "../imgs/stdVCard.png";
import clsVCard from "../imgs/clsVCard.webp";
import squVCard from '../imgs/squVCard.webp'
import '../Css/home.css'


export default function Home() {
  function scrollLeft() {
    const container = document.querySelector(".scroll-container");
    container.scrollBy({ left: -300, behavior: "smooth" });
  }

  function scrollRight() {
    const container = document.querySelector(".scroll-container");
    container.scrollBy({ left: 300, behavior: "smooth" });
  }



  return (
    <div>
      <Navbar />
      <Carousel />
      <div>
        <h1 className="text-start ms-5 mt-5 fw-bold">Related Products</h1>
        <div className="scroll-wrapper position-relative">
          <button className="btn btn-primary scroll-left" onClick={scrollLeft}>
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
          </button>

          <div className="scroll-container d-flex align-items-center">
            <Rel_card pto={stdVCard} title="Standard Visiting Card"/>
            <Rel_card  pto={clsVCard} title="Classic Visiting Card"/>
            <Rel_card pto={squVCard}  title="Squere Visiting Card"/>
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

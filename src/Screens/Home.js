import React from "react";
import Navbar from "../Components/Navbar";
import Carousel from "../Components/Carousel";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div
        style={{ height: "40px", width: "100%", backgroundColor: "black" }}
        className="d-flex justify-content-around align-items-center"
      >
        <span className="text-white fs-4"><i className="fab fa-instagram " aria-hidden="true"> KIRAN CREATIONZ</i></span>
        <span className="text-white fs-4"><i className="fab fa-whatsapp" aria-hidden="true"> 9739263962</i></span> 
      </div>
      <Carousel />
    </div>
  );
}

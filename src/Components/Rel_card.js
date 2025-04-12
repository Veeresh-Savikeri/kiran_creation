import React from "react";
import { useState } from "react";

import "../Css/std_vcard.css";
import "../Css/home.css";

export default function Rel_card(props) {
  const [cart, setCart] = useState("fa fa-shopping-cart fs-4");
  return (
    <div className="marquee ">
      <div className="card m-4 shadow-lg cardBox">
        <span
          className="position-absolute end-0 m-3"
          style={{ color: "white", textShadow: "2px 2px 2px black" }}
          onClick={()=>setCart("fa fa-check-square fs-4")}
        >
          <i className={cart} aria-hidden="true"></i>
        </span>
        <img src={props.pto} className="card-img-top cardImg" alt="..." />
        <div className="card-body">
          <h5 className="fs-5 fw-bold " style={{ textWrap: "auto" }}>
            {props.title}
          </h5>
          <p className="fs-9">100 Starting at Rs-250</p>
        </div>
      </div>
    </div>
  );
}

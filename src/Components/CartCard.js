import React from "react";
import "../Css/cart.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function CartCard(props) {
  const navigate = useNavigate();
  const [del, setDel] = useState("fa fa-trash fs-1 m-2");

  return (
    <div>
      <div
        className="card d-flex justify-content-between align-items-center mt-4 mb-4 p-4 shadow-lg cart"
        style={{ cursor: "pointer" }}
      >
        <img
          src={props.image}
          alt="Product"
          className="cartImg rounded"
          onClick={() => {
            navigate(`${props.route}`);
          }}
        />
        <span
          className="fw-bold m-2 cartName"
          onClick={() => {
            navigate(`${props.route}`);
          }}
        >
          {props.name}
        </span>
        <span
          className="fw-bold m-2 cartPrice"
          onClick={() => {
            navigate(`${props.route}`);
          }}
        >
          {props.price}
        </span>
        <div>
          <i
            className={del}
            aria-hidden="true"
            style={{ cursor: "pointer", zIndex: "2" }}
            onClick={() => {
              setDel("fa fa-times fs-1 text-danger m-2");
              localStorage.removeItem(`cart_${props.name}`);
            }}
          ></i>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
export default function AllCat(props) {
  return (
    <div  style={{width:"150px"}}>
      <Link to={props.link}>
      <div
        className="shadow-lg border border-2 border-dark c_card"
        style={{backgroundImage: `url(${props.pto})`}}
      ></div>
      </Link>
      <h6 className="text-center fw-bold w-75 m-auto pt-2 text-wrap ">{props.name} </h6>
    </div>
  );
}
 
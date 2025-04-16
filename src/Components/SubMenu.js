import React from "react";
import "../Css/menu.css";
import { Link } from "react-router-dom";
export default function SubMenu(props) {
  return (
    <div>
      <div className="menu">
        <ul>
          <li onClick={() => {props.setSubMenu("none"); props.setMenu("block")}}>
            <i className="fa fa-arrow-left fs-1" aria-hidden="true"></i>
          </li>
          <li>
            <Link
              to="/std_vcard"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "18px",
              }}
            >
              Standard Visiting Card
            </Link>
          </li>
          <li>Classic Visiting Card</li>
          <li>Labels, Stickers & Packaging</li>
          <li>Clothing, Caps & Bags</li>
          <li>Mugs, Albums & Gifts</li>
          <li>Bulk Orders</li>
        </ul>
      </div>
    </div>
  );
}

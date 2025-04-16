import React from "react";
import "../Css/menu.css";
import { useState } from "react";
import SubMenu from "./SubMenu";
export default function Menu() {
const [menu, setMenu] = useState("block");
const [subMenu, setSubMenu] = useState("");

  return (
    <div>
       {subMenu === "std" ? (<SubMenu setSubMenu={setSubMenu} setMenu={setMenu}/>) : null}
      <div className="menu" style={{ display: menu }}>
        <ul>
          <li>
            View All
          </li>
         
          <li onClick={() =>{ setMenu("none"); setSubMenu("std")}}>
            Visiting Cards
          </li>
          <li>
            Stationery, Letterheads & Notebooks
          </li>
          <li>
            Labels, Stickers & Packaging
          </li>
          <li>
            Clothing, Caps & Bags
          </li>
          <li>
            Mugs, Albums & Gifts
          </li>
          <li>
            Bulk Orders
          </li>
        </ul>
      </div>
    </div>
  );
}

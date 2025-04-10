import React, { useState } from "react";
import logo from "../imgs/kiran.jpg";
import "../Css/navbar.css";
import Menu from "./Menu";
import Menu_hov_list from "./Menu_hov_list";
import { useNavigate } from "react-router-dom";



export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const [ic, setIc] = useState("fa fa-bars");
  const navigate = useNavigate();
  function handleMenuClick() {
    setMenu(!menu);
    if (menu === false) {
      setIc("fa fa-times");
    } else {
      setIc("fa fa-bars");
    }
  }

  return (
    <div>
      <div>
        {/* Main Navbar */}
        <nav className="navbar bg-body-tertiary pt-8">
          <div className="d-flex align-items-center justify-content-between flex-wrap w-100">
            {/* Logo and Title */}
            <div className="d-flex align-items-center mb-2">
              <img
                src={logo}
                alt="Logo"
                style={{ width: "232px", height: "75px" }}
                className="d-inline-block align-text-top ms-3"
              />
            </div>

            {/* Search Box */}
            <div className="d-flex align-items-center flex-grow-1 justify-content-center mb-2 me-4 ms-4">
              <i
                className="fa fa-search me-2"
                aria-hidden="true"
                style={{ fontSize: "25px" }}
              ></i>
              <input
                type="text"
                className="form-control "
                placeholder="Search..."
                style={{ maxWidth: "500px", border: "2px solid #000" }}
              />
            </div>

            {/* Icons */}
            <div className="d-flex align-items-center">
              <div
                style={{ cursor: "pointer" }}
                onClick={() => handleMenuClick()}
              >
                <i
                  className={`res_ico ${ic} me-4 ms-4`}
                  aria-hidden="true"
                  style={{ fontSize: "30px", marginRight: "20px" }}
                ></i>
              </div>
              <i
                className="fa fa-phone ms-4 me-4"
                aria-hidden="true"
                style={{ fontSize: "30px", marginRight: "20px",cursor:'pointer'}}
                onClick={() => {
                  navigate("/contact");
                }}
              ></i>
              <i
                className="fa fa-lock ms-4 me-4"
                aria-hidden="true"
                style={{ fontSize: "30px", marginRight: "20px" }}
              ></i>
              <i
                className="fa fa-shopping-cart ms-4 me-4"
                aria-hidden="true"
                style={{ fontSize: "30px", marginRight: "20px" }}
              ></i>

              <i
                className="fa fa-heart ms-4 me-4"
                aria-hidden="true"
                style={{ fontSize: "30px", marginRight: "20px" }}
              ></i>
            </div>
          </div>
        </nav>
        {menu === true ? <Menu /> : null}


        {/* Secondary Navbar with List Items */}
        <nav
          className="navbar bg-light shadow-bottom m-0 pb-10 res_list"
          style={{ boxShadow: "4px 4px 6px rgba(0,0,0,0.5)" }}
        >
          <ul className="nav justify-content-around w-100 m-0 p-0 align-items-center">
            <li className="view nav-item m-0 " style={{ padding: "21px 0px" }}>
              <span
                className="nav-link text-dark text-wrap m-0 p-0"                
              >
                View All
                <div className="view">
                  <Menu_hov_list/>
                </div>
              </span>
            </li>
            <li className="nav-item m-0 p-0">
              <span
                className="nav-link text-dark text-wrap m-0 p-0"
               
              >
                Visiting Cards
              </span>
            </li>
            <li className="nav-item m-0 p-0">
              <span
                className="nav-link text-dark text-wrap m-0 p-0"
                style={{ maxWidth: "100px" }}
              >
                Stationery, Letterheads & Notebooks
              </span>
            </li>
            <li className="nav-item m-0 p-0">
              <span
                className="nav-link text-dark text-wrap m-0 p-0"
                style={{ maxWidth: "100px" }}
              >
                Personalised Pens
              </span>
            </li>
            <li className="nav-item m-0 p-0">
              <span
                className="nav-link text-dark text-wrap m-0 p-0"
                style={{ maxWidth: "100px" }}
              >
                Stamps and Ink
              </span>
            </li>
            <li className="nav-item m-0 p-0">
              <span
                className="nav-link text-dark text-wrap m-0 p-0"
                style={{ maxWidth: "100px" }}
              >
                Signs, Posters & Marketing Materials
              </span>
            </li>
            <li className="nav-item m-0 p-0">
              <span
                className="nav-link text-dark text-wrap m-0 p-0"
                style={{ maxWidth: "100px" }}
              >
                Labels, Stickers & Packaging
              </span>
            </li>
            <li className="nav-item m-0 p-0">
              <span
                className="nav-link text-dark text-wrap m-0 p-0"
                style={{ maxWidth: "100px" }}
              >
                Clothing, Caps & Bags
              </span>
            </li>
            <li className="nav-item m-0 p-0">
              <span
                className="nav-link text-dark text-wrap m-0 p-0"
                style={{ maxWidth: "100px" }}
              >
                Mugs, Albums & Gifts
              </span>
            </li>
            <li className="nav-item m-0 p-0">
              <span
                className="nav-link text-dark text-wrap m-0 p-0"
                style={{ maxWidth: "100px" }}
              >
                Bulk Orders
              </span>
            </li>
            <li className="nav-item m-0 p-0">
              <span
                className="nav-link text-dark text-wrap m-0 p-0"
                style={{ maxWidth: "100px" }}
              >
                Custom Drinkware
              </span>
            </li>
            <li className="nav-item m-0 p-0">
              <span
                className="nav-link text-dark text-wrap m-0 p-0"
                style={{ maxWidth: "100px" }}
              >
                Custom Polo T-shirts
              </span>
            </li>
          </ul>
        </nav>
       
      </div>
    </div>
  );
}

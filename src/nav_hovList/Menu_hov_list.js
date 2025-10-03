import React from "react";
import "../Css/navbar.css";
import { Link } from "react-router-dom";


export default function Menu_hov_list() {
  return (
    <>
      <div className="view_all">
        <div
          className="ps-2 pe-4 d-flex justify-content-around align-items-center hov_list "
          style={{
            zIndex: 1,
            position: "absolute",
            top: "70px",
            left: "12px",
            backgroundColor: "#fff",
            padding: "20px 0px",
            borderRadius: "10px",
            borderTop: "2px solid black",
            borderBottom: "2px solid black",
          }}
        >
          <div>
            <ul className="m_ul">
              <li>
                <span className="">Explore all categories</span>
              </li>
              <li>
                <Link
                  to="/visiting_card "
                  className="text-dark text-decoration-none"
                >
                  Visiting Card
                </Link>
              </li>
              <li>
                <Link
                  to="/visiting_card "
                  className="text-dark text-decoration-none"
                >
                  Stationery, Letterheads & Notebooksd
                </Link>
              </li>
              <li>
                <Link
                  to="/visiting_card "
                  className="text-dark text-decoration-none"
                >
                  Signs, Posters & Marketing Materials
                </Link>
              </li>
              <li>
                <Link
                  to="/visiting_card "
                  className="text-dark text-decoration-none"
                >
                  Labels, Stickers & Packaging
                </Link>
              </li>
              <li>
                <Link
                  to="/visiting_card "
                  className="text-dark text-decoration-none"
                >
                  Clothing, Caps & Bags

                </Link>
              </li>
              <li>
                <Link
                  to="/visiting_card "
                  className="text-dark text-decoration-none"
                >Mugs, Albums & Gifts
                </Link>
                
              </li>
              <li>
                  <Link
                    to="/visiting_card "
                    className="text-dark text-decoration-none"
                  >Bulk Orders
                  </Link>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import "../Css/footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div>
      <h2 className="bg-dark text-white text-center p-2 fw-bold">Kiran Creation</h2>
      <footer className="bg-dark text-white text-left py-3 d-flex flex-row justify-content-around align-items-center flex-wrap">
        <div className="p-3 ft-box">
          <h3 className="fw-bold text-center fs-2">Our Products</h3>
          <ul
            className="p-3 ft-ul1"
            style={{
              height: "35vh",
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "column",
             
            }}
          >
            <li><Link className="fs-4 text-decoration-none">Visiting Cards</Link></li>
            <li><Link className="fs-4 text-decoration-none">Letter Heads</Link></li>
            <li><Link className="fs-4 text-decoration-none">Brochures</Link></li>
            <li><Link className="fs-4 text-decoration-none">Stickers</Link></li>
            <li><Link className="fs-4 text-decoration-none">Posters</Link></li>
          </ul>
        </div>
        <div className="p-3 ft-box">
          <h3 className="fw-bold fs-2">Contacts</h3>
          <ul
            className="p-3"
            style={{
                listStyleType: "none",
              height: "35vh",
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "column",
            }}
          >
            <li><Link><i className="fa fa-phone fs-4" aria-hidden="true"> 9739263962</i></Link></li>
            <li><Link><i className="fab fa-instagram fs-4" aria-hidden="true"> KIRAN CREATIONZ</i></Link></li>
            <li><Link><i className="fab fa-facebook fs-4" aria-hidden="true"> FaceBook</i></Link></li>
            <li><Link><i className="fab fa-whatsapp fs-4" aria-hidden="true"> WhatsApp</i></Link></li>
            
          </ul>
        </div>
        <div className="p-3 ft-box" style={{ height: "auto" }}>
          <h3 className="fw-bold">Place @</h3>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d657.3931828338175!2d75.64128093916655!3d14.615926271575292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb97f97c309acdb%3A0xd96ff1c97f6fc136!2sKiran%20creations!5e0!3m2!1sen!2sin!4v1744983032804!5m2!1sen!2sin"
              width="300px"
              height="300px"
              style={{ border: 0, borderRadius: "10px" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </footer>
    </div>
  );
}

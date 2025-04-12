import React from 'react'
import kiran from "../imgs/kiran.jpg";
import '../Css/std_vcard.css';
export default function Rel_card() {
  return (
    <div className='marquee'>
      <div
          className="card m-5  shadow-lg card"
          style={{ width: "18rem", borderRadius: "10px",cursor:"pointer"}}
        >
          <img
            src={kiran}
            className="card-img-top"
            alt="..."
            style={{ borderRadius: "10px", height: "200px" }}
          />
          <div className="card-body">
            <h5 className="card-title fw-bold">Card title</h5>
            <p className="card-text">100 Starting at rs-250</p>
            
          </div>
        </div>
        
    </div>
  )
}

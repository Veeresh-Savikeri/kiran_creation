import React from 'react'


import '../Css/std_vcard.css';
import '../Css/home.css';

export default function Rel_card(props) {
  return (
    <div className='marquee '>
      <div
          className="card m-4 shadow-lg cardBox"
        
        >
          <img
            src={props.pto}
            className="card-img-top cardImg"
            alt="..."
            
          />
          <div className="card-body">
            <h5 className="fs-4 fw-bold">Card title</h5>
            <p className="fs-7">100 Starting at rs-250</p>
            
          </div>
        </div>
        
    </div>
  )
}

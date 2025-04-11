import React from 'react';
import pto from '../imgs/visitingCard.webp';

export default function Carousel() {
    return (
        <div className="position-relative">
            <img src={pto} alt="" className="h-20 img-fluid" style={{ width: '100vw',minHeight:"300px" }} />
           
        </div>
    );
}

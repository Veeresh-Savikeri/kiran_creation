import React from 'react';
import pto from '../imgs/visitingCard.webp';

export default function Carousel() {
    return (
        <div className="position-relative">
            <img src={pto} alt="" className="h-20" style={{ width: '100vw', height: '70vh' }} />
           
        </div>
    );
}

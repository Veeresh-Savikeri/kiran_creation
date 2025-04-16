import React from 'react';
import pto1 from '../imgs/pto1.webp';
import pto2 from '../imgs/pto2.webp';
import '../Css/carousel.css';
import { useNavigate } from 'react-router-dom';
export default function Carousel() {
    const navigate = useNavigate();
    return (
        <div className="d-flex justify-content-around align-items-center carContainer">
            <div className="c1 position-relative">
                <img className="w-100 h-100" src={pto1} alt="" />
                <div className="shop position-absolute translate-middle p-5 text-dark">
                    <h1 className="fw-bold fs-1">Visiting Cards</h1>
                    <p className="fs-6">100 Visiting Cards at Rs 200</p>
                    <button className="btn btn-dark p-2 fs-5 fw-bold" onClick={() => navigate("/std_vcard")}>Shop Now</button>
                </div>
                <div className="mobShop position-absolute translate-middle p-4 text-dark">
                    <h1 className="fw-bold fs-1">Visiting Cards</h1>
                    <p className="fs-6">100 Visiting Cards at Rs 200</p>
                    <button className="btn btn-dark p-2 fs-5 fw-bold" onClick={() => navigate("/std_vcard")}>Shop Now</button>
                </div>
            </div>
            <div className="c1 position-relative">
                <img className="w-100 h-100" src={pto2} alt="" />
                <div className="shop position-absolute translate-middle p-5 text-dark">
                    <h1 className="fw-bold fs-1">Visiting Cards</h1>
                    <p className="fs-6">100 Visiting Cards at Rs 200</p>
                    <button className="btn btn-dark p-2 fs-5 fw-bold" onClick={() => navigate("/std_vcard")}>Shop Now</button>
                </div>
                <div className="mobShop position-absolute translate-middle p-4 text-dark">
                    <h1 className="fw-bold fs-1">Visiting Cards</h1>
                    <p className="fs-6">100 Visiting Cards at Rs 200</p>
                    <button className="btn btn-dark p-2 fs-5 fw-bold" onClick={() => navigate("/std_vcard")}>Shop Now</button>
                </div>
            </div>

            
        </div>
    );
}

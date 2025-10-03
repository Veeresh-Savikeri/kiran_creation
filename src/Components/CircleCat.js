import React from 'react'
import AllCat from "../Components/AllCat";
import AllVC from '../imgs/all_visiting_cards.jpg'
import AlllLetter from '../imgs/all_letter.jpg'
import '../Css/home.css'
import '../Css/circlecat.css'
import AllStickers from '../imgs/stickers.avif'

export default function CircleCat() {


    return (
        <div>
            <div className=" p-2 shadow-lg c_cont" >
                <h1 className=" ms-5 mt-5 fw-bold c_h">Explore all categories</h1>
                <div className="circle-scroll-wrapper position-relative mt-5 ">
                    <div
                        className="circle-scroll-container d-flex justify-content-around ps-4  "
                        style={{ gap: "6vw" }}
                    >
                        <AllCat pto={AllVC} name='Visiting Cards'/>
                        <AllCat pto={AlllLetter} name='Stationery, Letterheads & Notebooks'/>
                        <AllCat pto={AllStickers} name='Labels, Stickers & Packaging'/>
                        <AllCat pto={AllVC} name='Clothing, Caps & Bags'/>
                        <AllCat pto={AllVC} name='Mugs, Albums & Gifts'/>
                        <AllCat pto={AllVC} name='Bulk Orders'/>
                        
                    </div>
                </div>
             
            </div>
        </div>
    )
}

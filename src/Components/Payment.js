import React from 'react'
import QR from '../imgs/QR-code.jpg'
import pPay from '../imgs/p_pay.webp'
import gPay from '../imgs/g_pay.jpg'
import paytm from '../imgs/paytm.png'
import '../Css/order.css'
export default function Payment() {
  return (
    <div>
      <h1 className='fw-bold text-center'> Payment</h1>
      <div className='container'>
        <div className='d-flex flex-row justify-content-around align-items-center flex-wrap rounded'>
          <img src={pPay} alt="PayPal" width="200px" height="50" />
          <img src={gPay} alt="PayPal" width="200" height="90" />
          <img src={paytm} alt="PayPal" width="200" height="50" />
        </div>
        <div className="d-flex flex-row justify-content-center align-items-center shadow-lg p-3 mb-5 mt-3 rounded">
          <div className='m-auto'>
            <img src={QR} alt="QR Code" width="200" height="200" />
          </div>
          <div className='m-auto'>
            <h2 className='text-center fw-bold'>Scan the QR Code to pay</h2>
            <h2 className='text-center fw-bold'>Pay using UPI ID : </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

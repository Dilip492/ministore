import React from 'react'
import "../style/PaymentGateway.css"
import qrcode from "../images/qrcode.png"

export const Paytm = () => {
    return (
        <div>

            <div className="paytm-container">

                <h4>Scan to <span>Pay</span>  </h4>
                <div className="qr-code">

                    <img src={qrcode} alt="img" />


                </div>

                <div className="trans-id">
                    <input type="text" placeholder='Enter transaction Id' />
                     <button className='submit-button'>submit</button>
                </div>


            </div>
        </div>
    )
}

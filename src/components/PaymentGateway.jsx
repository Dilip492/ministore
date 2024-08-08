import React from 'react'
import '../style/PaymentGateway.css'

import paytm from "../images/paytm.png"
import upi from "../images/UPI.png"
import gpay from "../images/gpay.png"
import card from "../images/master.png"

import { useNavigate } from 'react-router-dom'

export const PaymentGateway = () => {


    const navigate = useNavigate()

    return (
        <div>
            <div className="payment-container">

                <h4>Select <span>Payment</span> method </h4>

                <div className="payment-options">

                    <div onClick={()=>{navigate("/paytm")}}  className="paytm">
                        <img src={paytm} alt="" />

                    </div>
                    <div className="g-pay">
                        <img src={gpay} alt="" />

                    </div>
                    <div className="upi">
                        <img src={upi} alt="" />

                    </div>
                    <div className="card">

                        <img src={card} alt="" />

                    </div>
                </div>

            </div>
        </div>
    )
}

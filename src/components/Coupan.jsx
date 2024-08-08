import React, { useState } from 'react'
import { useCart } from '../context/CartContext';

export const Coupan = (props) => {

    const coupanarr = ["first10"];

    const { subtotal } = useCart()

    const [error, seterror] = useState();
    const [coupancode, setcoupancode] = useState();
    const [discount, setdiscount] = useState(0);

    const handlediscount = () => {

        if (coupancode === coupanarr[0]) {

            const dis = subtotal * 10 / 100;
            seterror('')
            setdiscount(dis)

        } else {
            setdiscount(0);
            seterror('Invalid coupon code');
        }


    }


    const handlechange = (e) => {

        setcoupancode(e.target.value)

    }
    return (
        <div>

            <div className="coupon-container">
                <h2>Apply Coupon</h2>
                <input
                    type="text"
                    name='code'
                    onChange={handlechange}
                    placeholder="Enter coupon code"
                    className="coupon-input"
                />
                <button onClick={handlediscount} className="apply-coupon-button">Redeem Coupon</button>
                {error && <p className="coupon-error">{error}</p>}
                <p className="coupon-discount">Discount: $ {discount}</p>
                <p className="coupon-discount">subtotal: $ {subtotal}</p>
                <p className="coupon-discount">after discount: $ {subtotal - discount}</p>

            </div>
        </div>
    )
}

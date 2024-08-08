import React from 'react'

import check from '../images/check.png'

// import img from "../images/product-item1.jpg"

// import { data } from './Data'
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';



export const Cart = (props) => {

    const { cart, removeFromCart, } = useCart();
    console.log("Cart Items:", cart);

    const navigate = useNavigate()

    const subtotal = cart.reduce((total, product) => total + product.price, 0)

    const handleToBuy = () => {

        const token = localStorage.getItem('token')

        if (token) {

            navigate('/paymentgateway')


        } else {

            navigate('/login')

        }


    }
    return (

        <div className="addtocart pc-screen">


            <div class="shopping-cart">

                <h1>Shopping Cart</h1>

                {cart.length > 0 ? (cart.map((product) => {
                    return (

                        <div class="cart-item">
                            <img src={product.image} alt="Believers Dual Camera Garuda Drone" />
                            <div class="item-details">
                                <div className="item-details-name">
                                    <h2>{product.name} </h2>
                                    <p class="price">{product.price} </p>
                                </div>
                                <p>In stock</p>
                                <p>Eligible for FREE Shipping</p>
                                <label><input type="checkbox" /> This will be a gift <a href="/">Learn more</a></label>
                                <div class="actions">
                                    <select>
                                        <option value="1">Qty: 1</option>
                                        <option value="2">Qty: 2</option>
                                        <option value="3">Qty: 3</option>
                                    </select>
                                    <i className="a-icon"></i>
                                    <button onClick={() =>
                                        removeFromCart(product.id)}>Delete</button>
                                    <i className="a-icon"></i>
                                    <button>Save for later</button>

                                    <i className="a-icon"></i>
                                    <button >Share</button>
                                    <button className='cart-dlt-btn' >Delete</button>
                                    <button className='cart-dlt-btn' >save </button>
                                </div>
                            </div>
                        </div>
                    )

                })) : (

                    <div>
                        <div className='empty-div'>
                            <p class="empty-cart-message">Your cart is empty</p>
                        </div>

                        <button className='go-to-shop-button' >Go to shop</button>

                    </div>

                )}

            </div>

            <div className="payment-summary">
                <div className="free-delivery">
                    <img src={check} alt="Check" className="check-icon" />
                    <span>Part of your order qualifies for <b>FREE Delivery</b>. Choose FREE Delivery option at checkout.</span>
                </div>
                <div className="subtotal">
                    <p>Subtotal ({cart.length} items): <span className="price">${subtotal}</span></p>
                    <label><input type="checkbox" /> This order contains a gift</label>
                </div>
                <button className="buy-button" onClick={handleToBuy} >Proceed to Buy</button>
                <div className="coupan">
                    <p onClick={() => navigate('/coupancode')}>Have a Coupan? </p>
                </div>
            </div>
        </div>

    )
}

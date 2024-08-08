import React from 'react';
import '../style/MysteryBox.css';
// import mysteryboxImage from './mysterybox.png'; // Ensure the path is correct

const MysteryBox = () => {
  return (
    <div className="mystery-box-container">
      <nav className="breadcrumb">
        <a href="/">Home</a> / <a href="/mystery-box">Mystery Box</a> / MunchBag's Mystery Box (Medium)
      </nav>
      <div className="product-shop-container">
        <div className="product-shop-image">
          <img src="" alt="MunchBag's Mystery Box (Medium)" />
        </div>
        <div className="product-shop-details">
          <h1>MunchBag's Mystery Box (Medium)</h1>
          <p className="price">Rs. 2,500.00</p>
          <p className="tax-shipping">Tax included. Shipping calculated at checkout.</p>
          <div className="quantity-add-to-cart">
            <input type="number" defaultValue={1} min={1} />
            <button className="add-to-cart">ADD TO CART</button>
          </div>
          <div className="products-payment-methods">
            <img src="path_to_amazon_logo.png" alt="Amazon Pay" />
            <img src="path_to_gpay_logo.png" alt="Google Pay" />
            <img src="path_to_mastercard_logo.png" alt="MasterCard" />
            <img src="path_to_paypal_logo.png" alt="PayPal" />
            <img src="path_to_visa_logo.png" alt="Visa" />
          </div>
          <div className="description">
            <h2>Description</h2>
            <p>
              Order now and get products worth 3000 while paying only Rs. 2500. 
              <br />
              <strong>(All orders for Mystery boxes need to be prepaid!)</strong>
              <br />
              The products will be chosen exclusively for you. Some items may be listed on the website, while other items may be new exciting products MunchBag will be listing soon to give you an exclusive first taste!
            </p>
          </div>
          <div className="why-buy">
            <h2>WHY BUY FROM US?</h2>
            {/* Add your reasons here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MysteryBox;

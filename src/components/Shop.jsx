import React from 'react';
import '../style/Productshop.css';
import { data } from './Data';



const ProductShop = () => {
    return (
        <div className="product-shop">
            {data.products.map(product => (
                <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.name} className="product-image" />
                    <h2 className="product-name">{product.name}</h2>
                    <p className="product-price">{product.price}</p>
                    <p className="product-description">{product.description}</p>
                    <div className="product-rating">
                        {'⭐'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}
                    </div>
                    <button className="add-to-cart-button">Add to Cart</button>
                </div>
            ))}
            {data.Watches.map(product => (
                <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.name} className="product-image" />
                    <h2 className="product-name">{product.name}</h2>
                    <p className="product-price">{product.price}</p>
                    <p className="product-description">{product.description}</p>
                    <div className="product-rating">
                        {'⭐'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}
                    </div>
                    <button className="add-to-cart-button">Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ProductShop;

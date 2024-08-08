// import React  from 'react';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper/modules';

// import { data } from "./Data";


// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

// import './swiperstyle.css'
// // import { CartContext } from '../context/CartContext';
// import { useCart } from '../context/CartContext';
// // import { useContext } from 'react';

// const Products = () => {

//     const { addTocart } = useCart();
//     return (
//         <div>
//             <div className="product-container">

//                 <div className="product-header">

//                     <h1>MOBILE PRODUCTS</h1>

//                     <button>GO TO SHOP</button>

//                 </div>


//                 <div className="display-section">
//                     <Swiper
//                         modules={[Pagination]}
//                         slidesPerView={4}
//                         pagination={{ clickable: true }}
//                         navigation={false}
//                         breakpoints={{
//                             // when window width is >= 0px
//                             0: {
//                                 slidesPerView: 1,
//                                 spaceBetween: 10,
//                             },
//                             // when window width is >= 640px
//                             640: {
//                                 slidesPerView: 2,
//                                 spaceBetween: 10,
//                             },
//                             // when window width is >= 768px
//                             768: {
//                                 slidesPerView: 3,
//                                 spaceBetween: 10,
//                             },
//                             // when window width is >= 1024px
//                             1024: {
//                                 slidesPerView: 4,
//                                 spaceBetween: 10,
//                             },
//                         }}
//                         onSwiper={(swiper) => console.log(swiper)}
//                         onSlideChange={() => console.log('slide change')}
//                     >

//                         <div className="product-item ">
//                             {data.products.map((product) => {
//                                 return (
//                                     <SwiperSlide key={product.id}>
//                                         <div className="item">

//                                             <img src={product.image} alt="item" />

//                                             <button className="cart-btn" onClick={()=> addTocart(product)}  >ADD TO CART</button>

//                                         <div className="product-price">
//                                             <h3>{product.name}</h3>
//                                             <h2>{product.price}</h2>
//                                         </div>

//                                     </div>
//                                     </SwiperSlide>
//                         )
//                             })}

//                 </div>

//             </Swiper>

//         </div>
//             </div >

//         </div >
//     )
// }


// export default Products;




// src/components/Products.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './swiperstyle.css';
import { useCart } from '../context/CartContext';
import { data } from "./Data"; // Assuming you have a data source

const Products = () => {
    const { addToCart } = useCart();

    return (
        <div className="product-container">
            <div className="product-header">
                <h1>MOBILE PRODUCTS</h1>
                <button>GO TO SHOP</button>
            </div>

            <div className="display-section">
                <Swiper
                    modules={[Pagination]}
                    slidesPerView={4}
                    pagination={{ clickable: true }}
                    navigation={false}
                    breakpoints={{
                        0: { slidesPerView: 1, spaceBetween: 10 },
                        640: { slidesPerView: 2, spaceBetween: 10 },
                        768: { slidesPerView: 3, spaceBetween: 10 },
                        1024: { slidesPerView: 4, spaceBetween: 10 },
                    }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {data.products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <div className="item">
                                <img src={product.image} alt={product.name} />
                                <button className="cart-btn" onClick={() => addToCart(product , 'products')}>ADD TO CART</button>
                                <div className="product-price">
                                    <h3>{product.name}</h3>
                                    <h2>${product.price}</h2>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Products;

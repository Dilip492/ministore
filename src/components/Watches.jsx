import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import { data } from './Data';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './swiperstyle.css'
import { useCart } from '../context/CartContext';


const Watches = () => {

    const { addToCart } = useCart();
    return (
        <div>
            <div className="watches-container">
                <div className="watch-header">
                    <h1>SMART WATCHES</h1>
                    <button>GO TO SHOP</button>
                </div>

                <Swiper
                    modules={[Pagination]}
                    slidesPerView={4}
                    pagination={{ clickable: true }}
                    navigation={false}
                    breakpoints={{
                        // when window width is >= 0px
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        // when window width is >= 768px
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        // when window width is >= 1024px
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                    }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <div className="watches-item">


                        {data.Watches.map((watch) => {
                            return (

                                <SwiperSlide key={watch.id}>
                                    <div className="item">
                                        <img src={watch.image} alt="item" />
                                        <button className="cart-btn" onClick={() => addToCart(watch , 'watches')} >ADD TO CART</button>

                                        <div className="product-price">
                                            <h3>{watch.name}</h3>
                                            <h2>{watch.price}</h2>
                                        </div>

                                    </div>
                                </SwiperSlide>
                            )
                        })}


                    </div>
                </Swiper>
            </div>
        </div>
    )
}

export default Watches;

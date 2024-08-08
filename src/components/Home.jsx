import React from "react";



import banner from '../images/banner-image.png'



import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Display = () => {

    return (

        <Swiper

        autoplay={{delay:2500}}

        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        >
            {/* <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide> */}
            <SwiperSlide>
                <div className="main">
                    <div className="container">
                        <div className="right">
                            <h1 className="main-text">Your Products<br /> Are Great</h1>
                            <button className="black-button">Shop Product</button>
                        </div>
                        <div className="left">
                            <img className="main-img" src={banner} alt="img" />
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="main">
                    <div className="container">
                        <div className="right">
                            <h1 className="main-text">Your Products<br /> Are Great</h1>
                            <button className="black-button">Shop Product</button>
                        </div>
                        <div className="left">
                            <img className="main-img" src={banner} alt="img" />
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="main">
                    <div className="container">
                        <div className="right">
                            <h1 className="main-text">Your Products<br /> Are Great</h1>
                            <button className="black-button">Shop Product</button>
                        </div>
                        <div className="left">
                            <img className="main-img" src={banner} alt="img" />
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            {/* <SwiperSlide>

            <div className="main">

                <div className="banner">
                    <img src={banner1} alt="" />
                </div>
            </div>
            </SwiperSlide>

            <SwiperSlide>

            <div className="main">

                <div className="banner">
                    <img src={banner2} alt="" />
                </div>
            </div>
            </SwiperSlide>

            <SwiperSlide>

            <div className="main">

                <div className="banner">
                    <img src={banner3} alt="" />
                </div>
            </div>
            </SwiperSlide> */}


          
        </Swiper>

       



    )
}


export default Display;     
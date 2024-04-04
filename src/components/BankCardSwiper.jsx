import React, { useState, useEffect } from "react";
import BankCard from "../components/BankCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import '/node_modules/swiper/swiper-bundle.min.css';
import SwiperCore from "swiper";
import "./styles.css";

SwiperCore.use([Pagination]);

const BankCardSwiper = () => {
    const [swiper, setSwiper] = useState(null);

    return (
        <div className="wrapper">
            <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={16}
                centeredSlides={true}
                slidesPerView={1.15}
                onSwiper={(swiper) => {
                    setSwiper(swiper);
                }}
                onActiveIndexChange={(swiper) => {
                    console.log("active index is", swiper.activeIndex);
                }}
            >
                <SwiperSlide>
                    <div className="slide"><BankCard /></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide"><BankCard /></div>
                </SwiperSlide>

            </Swiper>

        </div>
    )
}

export default BankCardSwiper
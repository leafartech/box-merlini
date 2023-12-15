'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper"
import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

export default function MySwiper() {
    return (
        <div>
            <Swiper
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                modules={[Pagination]}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    500: {
                        slidesPerView: 1
                    },
                    300: {
                        slidesPerView: 1
                    }
                }}
                className="mySwiper"
            >
                <SwiperSlide className="swiper-slide">
                    <div className="pb-8">
                        <img src="./images/testimonials/1.png" alt="" className="w-full" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="pb-8">
                        <img src="./images/testimonials/2.png" alt="" className="w-full" />
                    </div>

                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="pb-8">
                        <img src="./images/testimonials/3.png" alt="" className="w-full" />
                    </div>

                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="pb-8">
                        <img src="./images/testimonials/4.png" alt="" className="w-full" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
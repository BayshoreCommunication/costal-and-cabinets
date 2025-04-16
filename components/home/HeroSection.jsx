"use client";
import React, { memo, useState, useEffect, useRef } from "react";
import Image from "next/image";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Keyboard,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper/modules";
import { heroData } from "@/config/data";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSection = () => {
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (swiperRef.current && swiperRef.current.swiper) {
        const swiperInstance = swiperRef.current.swiper;
        swiperInstance.params.navigation.prevEl = prevButtonRef.current;
        swiperInstance.params.navigation.nextEl = nextButtonRef.current;
        swiperInstance.navigation.init();
        swiperInstance.navigation.update();
      }
    }, 100); // small delay for DOM to be ready

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="flex items-center">
        <button
          ref={prevButtonRef}
          className="hidden md:block text-white hover:bg-secondary duration-300 p-3 border border-white rounded-full z-40 absolute left-3 lg:left-9"
        >
          <FaArrowLeft size={20} />
        </button>

        <Swiper
          ref={swiperRef}
          effect="fade"
          pagination={{ clickable: true }}
          keyboard={{ enabled: true }}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          speed={1000}
          modules={[Navigation, Pagination, Keyboard, Autoplay, EffectFade]}
          className="mySwiper"
        >
          {[...heroData].reverse().map((testimonial, index) => (
            <SwiperSlide>
              <div
                className="relative w-full h-[500px] md:h-[700px] flex items-center justify-center "
                key={index}
              >
                {/* Background image */}

                <Image
                  key={index}
                  className="absolute inset-0 object-cover bg-bottom w-full h-full zoom-in-fade"
                  width={1920}
                  height={700}
                  src={testimonial.backgroundImage}
                  alt="Bg Image"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/50 to-black/50" />

                {/* Centered text */}
                <div className="container relative z-[2] flex flex-col items-center justify-center w-full">
                  <ScrollMotionEffect effect="fade-left" duration="1000">
                    <div className="flex items-center justify-center max-w-7xl w-full">
                      <h1 className="text-2xl md:text-[60px] font-bold text-white text-center leading-snug md:leading-tight">
                        {testimonial.heading}
                      </h1>
                    </div>
                  </ScrollMotionEffect>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          ref={nextButtonRef}
          className="hidden md:block text-white hover:bg-secondary duration-300 p-3 border border-white rounded-full z-40 absolute right-3 lg:right-9"
        >
          <FaArrowRight size={20} />
        </button>
      </div>
    </>
  );
};

export default memo(HeroSection);

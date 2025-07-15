// components/HeroSlider.tsx
"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Keyboard,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const GlobalHeroSlider = ({ slides }) => {
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const swiperRef = useRef(null);
  const [isSafari, setIsSafari] = useState(false);

  console.log(slides, "slides");

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    setIsSafari(/^((?!chrome|android).)*safari/i.test(userAgent));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current?.swiper && !swiperRef.current.swiper.destroyed) {
        swiperRef.current.swiper.update();
      }
    }, 2000); // occasional update to avoid swiper lock

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full">
      <button
        ref={prevButtonRef}
        className="hidden md:block text-white hover:bg-secondary duration-300 p-3 border border-white rounded-full z-40 absolute left-3 lg:left-9 top-1/2 -translate-y-1/2"
      >
        <FaArrowLeft size={20} />
      </button>

      <Swiper
        ref={swiperRef}
        effect="fade"
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        keyboard
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          waitForTransition: true,
        }}
        speed={800}
        modules={[Navigation, Pagination, Keyboard, Autoplay, EffectFade]}
        navigation={{
          prevEl: prevButtonRef.current,
          nextEl: nextButtonRef.current,
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            if (swiper.params.navigation) {
              swiper.params.navigation.prevEl = prevButtonRef.current;
              swiper.params.navigation.nextEl = nextButtonRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
          });
        }}
        className="mySwiper"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
          <div className="w-full h-[550px] flex items-center justify-center">  {/* Add fixed height here */}
            <Image
              src={slide.backgroundImage}
              alt={slide.alt || "Slide image"}
              width={1920}
              height={550} // keep this, it helps Next optimize the image
              className="object-cover w-full h-full"
              loading={i === 0 ? "eager" : "lazy"}
              priority={i === 0}
              placeholder="blur"
              blurDataURL="/placeholder.jpg"
            />
          </div>
        </SwiperSlide>
        
        ))}
      </Swiper>

      <button
        ref={nextButtonRef}
        className="hidden md:block text-white hover:bg-secondary duration-300 p-3 border border-white rounded-full z-40 absolute right-3 lg:right-9 top-1/2 -translate-y-1/2"
      >
        <FaArrowRight size={20} />
      </button>
    </div>
  );
};

export default GlobalHeroSlider;

"use client";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { testimonialsData } from "@/config/data";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import Image from "next/image";

const TestimonialSlideSection = ({ className }) => {
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiperInstance = swiperRef.current.swiper;
      swiperInstance.params.navigation.prevEl = prevButtonRef.current;
      swiperInstance.params.navigation.nextEl = nextButtonRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, []);

  return (
    <div className={`my-6 md:my-8 ${className}`}>
      <div className="flex flex-col items-start gap-4">
        <Swiper
          ref={swiperRef}
          // cssMode={true}
          // mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          // navigation
          className="mySwiper w-full"
          spaceBetween={20}
          slidesPerView={1}
          autoplay={true}
          loop={true}
          grabCursor={true}
        >
          {[...testimonialsData].reverse().map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className=" text-start  ">
                <div className="flex items-start mb-4 gap-3">
                  <div>
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full mx-auto mb-4"
                    />
                  </div>
                  <div>
                    <div className="text-yellow-500 mb-2 text-xl">
                      {"★".repeat(testimonial.rating)}
                    </div>
                    <p className="font-semibold text-white text-lg md:text-xl">
                      {testimonial.name}
                    </p>
                  </div>
                </div>
                <p className="text-base md:text-lg font-semibold text-white mb-1.5">
                  {testimonial.review}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex items-center gap-4 mt-4">
          <button
            ref={prevButtonRef}
            className="text-white hover:bg-secondary duration-300 p-3 border border-white rounded-full"
          >
            <FaArrowLeft size={20} />
          </button>
          <button
            ref={nextButtonRef}
            className="text-white hover:bg-secondary duration-300 p-3 border border-white rounded-full"
          >
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlideSection;

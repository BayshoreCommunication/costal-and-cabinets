// "use client";
// import React, { memo, useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import ScrollMotionEffect from "../motion/ScrollMotionEffect";
// import { Swiper, SwiperSlide } from "swiper/react";
// import {
//   Autoplay,
//   Keyboard,
//   EffectFade,
//   Navigation,
//   Pagination,
// } from "swiper/modules";
// import { heroData } from "@/config/data";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const HeroSection = () => {
//   const prevButtonRef = useRef(null);
//   const nextButtonRef = useRef(null);
//   const swiperRef = useRef(null);

//   useEffect(() => {
//     if (swiperRef.current && swiperRef.current.swiper) {
//       const swiperInstance = swiperRef.current.swiper;

//       // Attach navigation buttons manually
//       swiperInstance.params.navigation.prevEl = prevButtonRef.current;
//       swiperInstance.params.navigation.nextEl = nextButtonRef.current;
//       swiperInstance.navigation.init();
//       swiperInstance.navigation.update();

//       // Ensure autoplay resumes after interaction
//       swiperInstance.params.autoplay.disableOnInteraction = false;
//       swiperInstance.autoplay.start();
//     }
//   }, []);

//   return (
//     <>
//       <div className="container">
//         <div className="relative flex items-center">
//           <button
//             ref={prevButtonRef}
//             className="hidden md:block text-white hover:bg-secondary duration-300 p-3 border border-white rounded-full z-40 absolute left-3 lg:left-9"
//           >
//             <FaArrowLeft size={20} />
//           </button>
//           {/* className="mySwiper" cssMode={true}
//           initialSlide={silderIndexValue}
//           keyboard={true}
//           modules={[Navigation, Pagination, Mousewheel, Keyboard]}
//           mousewheel={true}
//           onBeforeInit=
//           {(swiper) => {
//             swiperRef.current = swiper;
//           }}
//           onSlideChange={handleSlideChange} */}
//           <Swiper
//             ref={swiperRef}
//             effect="fade"
//             pagination={{ clickable: true }}
//             keyboard={true}
//             loop={true}
//             mousewheel={true}
//             autoplay={{
//               delay: 3000,
//               disableOnInteraction: false,
//             }}
//             grabCursor={true}
//             speed={800}
//             modules={[Navigation, Pagination, Keyboard, Autoplay, EffectFade]}
//             className="mySwiper"
//           >
//             {[...heroData].map((testimonial, index) => (
//               <SwiperSlide>
//                 <div
//                   className=" w-full  flex items-center justify-center "
//                   key={index}
//                 >
//                   {/* Background image */}

//                   <Image
//                     key={index}
//                     className=" inset-0 object-cover bg-bottom w-full h-full "
//                     width={1920}
//                     height={700}
//                     src={testimonial.backgroundImage}
//                     alt="Bg Image"
//                   />

//                   {/* Gradient overlay */}
//                   {/* <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/30 to-black/30" /> */}

//                   {/* Centered text */}
//                   {/* <div className="container relative z-[2] flex flex-col items-center justify-center w-full">
//                   <ScrollMotionEffect effect="fade-left" duration="1000">
//                     <div className="flex items-center justify-center max-w-7xl w-full">
//                       <h1 className="text-2xl md:text-[60px] font-bold text-white text-center leading-snug md:leading-tight">
//                         {testimonial.heading}
//                       </h1>
//                     </div>
//                   </ScrollMotionEffect>
//                 </div> */}
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//           <button
//             ref={nextButtonRef}
//             className="hidden md:block text-white hover:bg-secondary duration-300 p-3 border border-white rounded-full z-40 absolute right-3 lg:right-9"
//           >
//             <FaArrowRight size={20} />
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default memo(HeroSection);

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
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    // Check if the browser is Safari
    const userAgent = window.navigator.userAgent;
    setIsSafari(/^((?!chrome|android).)*safari/i.test(userAgent));

    if (swiperRef.current && swiperRef.current.swiper) {
      const swiperInstance = swiperRef.current.swiper;

      // Attach navigation buttons manually
      swiperInstance.params.navigation.prevEl = prevButtonRef.current;
      swiperInstance.params.navigation.nextEl = nextButtonRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();

      // Configure autoplay with different settings for Safari/iOS
      swiperInstance.params.autoplay = {
        delay: 3000,
        disableOnInteraction: false,
        waitForTransition: true, // Important for Safari
      };

      // For Safari/iOS, we need to manually restart autoplay more aggressively
      if (isSafari) {
        swiperInstance.on("slideChange", () => {
          if (!swiperInstance.autoplay.running) {
            swiperInstance.autoplay.start();
          }
        });

        // Additional event listeners to ensure autoplay keeps running
        swiperInstance.on("touchEnd", () => {
          setTimeout(() => {
            if (!swiperInstance.autoplay.running) {
              swiperInstance.autoplay.start();
            }
          }, 300);
        });
      }

      swiperInstance.autoplay.start();
    }
  }, [isSafari]);

  return (
    <>
      <div className="container">
        <div className="relative flex items-center">
          <button
            ref={prevButtonRef}
            className="hidden md:block text-white hover:bg-secondary duration-300 p-3 border border-white rounded-full z-40 absolute left-3 lg:left-9"
          >
            <FaArrowLeft size={20} />
          </button>

          <Swiper
            ref={swiperRef}
            effect="fade"
            pagination={{
              clickable: true,
              dynamicBullets: true, // Better for mobile
            }}
            keyboard={true}
            loop={true}
            mousewheel={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              waitForTransition: true,
            }}
            grabCursor={true}
            speed={800}
            modules={[Navigation, Pagination, Keyboard, Autoplay, EffectFade]}
            className="mySwiper"
            // Add these for better iOS/Safari compatibility
            resistanceRatio={0}
            touchReleaseOnEdges={true}
            shortSwipes={false}
          >
            {[...heroData].map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="w-full flex items-center justify-center">
                  <Image
                    className="inset-0 object-cover bg-bottom w-full h-full"
                    width={1920}
                    height={700}
                    src={testimonial.backgroundImage}
                    alt="Bg Image"
                    priority={index === 0} // Add priority to first image
                  />
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
      </div>
    </>
  );
};

export default memo(HeroSection);

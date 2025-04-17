import React from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import { IoHomeSharp } from "react-icons/io5";

const PageHeroSection = ({ image, title, link }) => {
  const animationProps = {
    effect: "fade-up",
    duration: "2000",
  };

  return (
    <div className="relative w-full h-[350px] ">
      <Image
        className="absolute inset-0 object-cover bg-bottom w-full h-full"
        src={image}
        alt="Page Hero Image"
        layout="fill"
        priority
      />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/50 to-black/50" />

      <div className="relative flex flex-col items-center justify-center w-full h-full z-40">
        <div className="container pt-10 md:pt-14 lg:pt-20 xl:pt-24 pb-10 ">
          <div className="mt-4 2xl:mt-8 te">
            <ScrollMotionEffect {...animationProps}>
              <h1 className="text-3xl md:text-4xl lg:text-[40px]  font-[700] text-white text-start ] mx-auto">
                {title}
              </h1>
            </ScrollMotionEffect>
            <ScrollMotionEffect {...animationProps}>
              <div className="text-base md:text-lg font-semibold text-white text-start  mt-4 flex items-center gap-x-4">
                <Link
                  href="/"
                  className="flex items-center gap-x-2 hover:text-secondary duration-300"
                >
                  <IoHomeSharp /> <span>Home</span>
                </Link>
                <p>/</p>
                <p className="text-secondary text-base md:text-lg font-semibold">
                  {link}
                </p>
              </div>
              {/* <h2 className=" text-base md:text-lg font-normal text-white text-start  mt-4">
                {description}
              </h2> */}
            </ScrollMotionEffect>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeroSection;

"use client";
import React, { memo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[700px] flex items-center justify-center">
      {/* Background image */}
      <Image
        className="absolute inset-0 object-cover bg-bottom w-full h-full"
        width={1920}
        height={700}
        src={"/assets/homepage/slides1.jpg"}
        alt="Bg Image"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/50 to-black/50" />

      {/* Centered text */}
      <div className="container relative z-[2] flex flex-col items-center justify-center w-full">
        <ScrollMotionEffect effect="fade-up" duration="2000">
          <div className="flex items-center justify-center max-w-7xl w-full">
            <h1 className="text-[40px] md:text-[60px] font-bold text-white text-center leading-snug md:leading-tight">
              Your one stop shop for 5-star kitchen design, cabinets and
              remodeling
            </h1>
          </div>
        </ScrollMotionEffect>
      </div>
    </div>
  );
};

export default memo(HeroSection);

import Image from "next/image";
import Link from "next/link";
import React from "react";
import TestimonialSlideSection from "../shared/TestimonialSlideSection";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const WhatPeopleSay = () => {
  return (
    <div className="bg-white">
      <div className="container py-10 md:py-20">
        <ScrollMotionEffect effect="fade-left" duration="2000">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-md md:text-lg text-[#55545A] mb-4">
              We sell quality products that have passed John Kraft’s stringent
              requirements. The old adage goes, “You get what you pay for”. Be
              careful, when shopping for cabinets. It is one of those products
              that can vary in quality and features, greatly. See our Consumer
              Awareness article,{" "}
              <Link href="" className="text-secondary italic hover:underline">
                here
              </Link>
              .
            </p>
            <h2 className="font-semibold text-2xl md:text-4xl">
              What Everyone Says About Coastal Cabinets
            </h2>
          </div>
        </ScrollMotionEffect>
      </div>

      <div className="bg-[#212025] relative overflow-visible">
        <div className="container py-10 md:py-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-start gap-10 relative">
            {/* Left - Testimonial Slide */}
            <div className="w-full lg:w-2/3 z-10">
              <h2 className="text-2xl md:text-4xl font-semibold text-white mb-6">
                Why everyone loves Coastal Cabinets?
              </h2>
              <TestimonialSlideSection />
            </div>
          </div>
        </div>

        {/* Absolute Right-Aligned Image Grid */}
        <div className="absolute top-1/2 right-64 transform -translate-y-1/2 translate-x-1/4 z-0">
          <Image
            src="/assets/testimonial/testimonials.jpg"
            alt="Testimonial Grid"
            width={400}
            height={800}
            className="w-auto h-auto max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatPeopleSay;

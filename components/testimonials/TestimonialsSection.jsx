"use client";

import React from "react";
import Image from "next/image";
import SectionLayout from "../shared/SectionLayout";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import { testimonialsData } from "@/config/data";

const TestimonialsSection = () => {
  return (
    <section className="bg-white">
      <div className="container py-10 md:py-20">
        <div className="w-full mb-6 lg:mb-10">
          <h2 className="text-stone-950 !font-semibold text-3xl md:text-5xl mb-1 lg:mb-3 text-center">
            What People Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {[...testimonialsData].map((testimonial, index) => (
            <div className="bg-white p-6 md:p-8 lg:p-10 rounded-lg shadow-lg border h-full text-start">
              <div className="flex items-start mb-4 gap-3">
                <div>
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="rounded-full mx-auto mb-4"
                  />
                </div>
                <div>
                  <div className="text-yellow-500 mb-2 text-xl">
                    {"★".repeat(testimonial.rating)}
                  </div>
                  <p className="font-semibold text-gray-900 text-lg md:text-xl">
                    {testimonial.name}
                  </p>
                </div>
              </div>
              <p className="text-base md:text-lg font-semibold text-gray-700 mb-1.5">
                {testimonial.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

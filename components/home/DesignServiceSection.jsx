import React from "react";
import SectionLayout from "../shared/SectionLayout";
import Link from "next/link";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import { GrRadialSelected } from "react-icons/gr";
import Image from "next/image";

const DesignServiceSection = () => {
  return (
    <section className="bg-white">
      <div className="container py-10 md:py-20">
        <ScrollMotionEffect effect="fade-left" duration="2000">
          <div className="max-w-5xl mx-auto text-center ">
            <p className="text-md md:text-lg text-[#55545A] text-center mb-4">
              {`We help our customers simplify the cabinet purchase and remodeling experience with our recommendations and expert designs from 33 years of experience. Whether you are looking for shaker cabinets, modern cabinets, traditional cabinets, transitional cabinets or custom cabinets, we have you covered. Give us a ring to get the design and pricing process started.`}
            </p>
            <p className="text-md md:text-lg text-[#55545A] text-center">
              {`Our service areas are from Tampa to Marco Island and West Plam Beach to North Miami-Dade.`}
            </p>
          </div>
        </ScrollMotionEffect>
        <div className="mt-10 md:mt-12">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start justify-between">
            <ScrollMotionEffect effect="fade-right" duration="2000">
              <div className="w-full h-auto max-w-lg">
                <h2 className="text-4xl lg:text-5xl font-bold mb-3 lg:mb-5 xl:mb-8">
                  Design Service
                </h2>
                <ul className="text-lg md:text-xl text-[#555555] space-y-2 lg:space-y-5">
                  <li className="flex items-center gap-x-2">
                    <GrRadialSelected />
                    Manufactured Cabinets
                  </li>
                  <li className="flex items-center gap-x-2">
                    <GrRadialSelected />
                    Custom Cabinets
                  </li>
                  <li className="flex items-center gap-x-2">
                    <GrRadialSelected />
                    RTA Cabinets
                  </li>
                  <li className="flex items-center gap-x-2">
                    <GrRadialSelected />
                    Modern Cabinets
                  </li>
                  <li className="flex items-center gap-x-2">
                    <GrRadialSelected />
                    Shaker Cabinets
                  </li>
                  <li className="flex items-center gap-x-2">
                    <GrRadialSelected />
                    Frameless Cabinets
                  </li>
                  <li className="flex items-center gap-x-2 ">
                    <GrRadialSelected />
                    Contractor Program
                  </li>
                  <li className="flex items-center gap-x-2 ">
                    <GrRadialSelected />
                    Consumer Awareness
                  </li>
                </ul>
                <div className="group mt-8 inline-block">
                  <Link href="tel:+1 813-697-5752">
                    <button className="relative overflow-hidden bg-primary text-white py-2 lg:py-3 lg:px-8 px-4 rounded-md">
                      <span className="relative z-10 transition-colors duration-300">
                        Call Costal & Cabinets
                      </span>
                      <span className="absolute inset-0 bg-secondary z-0 transform scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
                    </button>
                  </Link>
                </div>
              </div>
            </ScrollMotionEffect>
            <ScrollMotionEffect effect="fade-left" duration="2000">
              <div>
                <Image
                  src="/assets/homepage/design-service.png"
                  alt="Design Service"
                  width={1000}
                  height={1000}
                  className="w-full h-auto max-w-lg"
                ></Image>
              </div>
            </ScrollMotionEffect>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignServiceSection;

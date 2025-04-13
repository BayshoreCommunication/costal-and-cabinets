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
            <div className="w-full h-auto max-w-lg">
              <h2 className="text-4xl lg:text-5xl font-bold mb-3 lg:mb-5 xl:mb-8">
                Design Service
              </h2>
              <ul className="text-lg md:text-xl text-[#555555]  space-y-2 lg:space-y-5">
                <li className="flex items-center gap-x-2">
                  <GrRadialSelected />
                  Kitchens, Vanities, Closets and more
                </li>
                <li className="flex items-center gap-x-2">
                  <GrRadialSelected />
                  On-Site Measuring
                </li>
                <li className="flex items-center gap-x-2">
                  <GrRadialSelected />
                  Showroom or Video Meeting
                </li>
                <li className="flex items-center gap-x-2">
                  <GrRadialSelected />
                  Selection Assistance
                </li>
                <li className="flex items-center gap-x-2">
                  <GrRadialSelected />
                  3D Renderings
                </li>
                <li className="flex items-center gap-x-2">
                  <GrRadialSelected />
                  Elevations
                </li>
                <li className="flex items-center gap-x-2">
                  <GrRadialSelected />
                  Samples and Showroom
                </li>
              </ul>

              <div className="group mt-8 inline-block">
                <Link href={""}>
                  <button className="relative overflow-hidden bg-primary text-white py-2 lg:py-3 lg:px-8 px-4 rounded-md">
                    <span className="relative z-10 transition-colors duration-300">
                      Call Costal & Cabinets
                    </span>
                    <span className="absolute inset-0 bg-secondary z-0 transform scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <Image
                src="/assets/homepage/design-service.png"
                alt="Design Service"
                width={1000}
                height={1000}
                className="w-full h-auto max-w-lg"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignServiceSection;

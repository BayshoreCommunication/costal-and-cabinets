import React from "react";
import SectionLayout from "../shared/SectionLayout";
import Link from "next/link";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import { GrRadialSelected } from "react-icons/gr";
import Image from "next/image";

const MCabinetsServiceSection = () => {
  return (
    <section className="bg-white">
      <div className="container py-10 md:py-20">
        <div className="max-w-6xl mx-auto text-center ">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] text-[#222222] font-[700]  mb-3 lg:mb-4 xl:mb-6">
            Nobody Does What We Do
          </h2>
          <p className="text-md md:text-lg text-[#55545A] text-center mb-4">
            {`Coastal Cabinets and Closets, LLC offers multiple, quality cabinets from manufacturers you can trust.`}
          </p>
          <p className="text-md md:text-lg text-[#55545A] text-center mb-4">
            {`Different cabinets hit different price points, depending on the features, available or chosen options, and quality of hardware they use or that you choose.`}
          </p>
          <p className="text-md md:text-lg text-[#55545A] text-center">
            {`We can help guide you through the different manufacturers and the design and decision making process, so that you purchase cabinets that suit your needs, style and budget.`}
          </p>
        </div>
        <div className="mt-10 md:mt-12">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start justify-between">
            <div>
              <Image
                src="/assets/manufactured-cabinets/mc1.jpg"
                alt="Design Service"
                width={1000}
                height={1000}
                className="w-full h-auto max-w-lg"
              ></Image>
            </div>
            <div className="w-full h-auto max-w-lg lg:w-[512px]">
              <h2 className="text-2xl lg:text-3xl text-[#222222] font-[700] mb-3 lg:mb-5 xl:mb-8">
                Currently, we offer the following cabinet lines:
              </h2>
              <ul className="text-lg md:text-xl text-[#555555] space-y-2 lg:space-y-5">
                <li className="flex items-center gap-x-2">
                  <GrRadialSelected />
                  JSI Cabinetry
                </li>
                <li className="flex items-center gap-x-2">
                  <GrRadialSelected />
                  Designers Choice Cabinetry
                </li>
                <li className="flex items-center gap-x-2">
                  <GrRadialSelected />
                  RTA Cabinets
                </li>
                <li className="flex items-center gap-x-2">
                  <GrRadialSelected />
                  Kitchen Cabinet Distributors
                </li>
              </ul>
              <div className="group mt-8 inline-block">
                <Link href="tel:+1 813-621-8932">
                  <button className="relative overflow-hidden bg-primary text-white py-2 lg:py-3 lg:px-8 px-4 rounded-md">
                    <span className="relative z-10 transition-colors duration-300">
                      Call Coastal Cabinets and Closets LLC
                    </span>
                    <span className="absolute inset-0 bg-secondary z-0 transform scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#eff2f5]">
        <div className="container  py-10 md:py-20">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start justify-between">
            <div className="w-full h-auto max-w-lg lg:w-[512px]">
              <div className="mb-3 lg:mb-5 xl:mb-8">
                <h2 className="text-2xl lg:text-3xl text-[#222222] font-[700] mb-3 lg:mb-5">
                  Some of these can arrive as RTA (ready to assemble / flat
                  pack) cabinets, if you prefer.
                </h2>
                <h2 className="text-2xl lg:text-3xl text-[#222222] font-[700] mb-3 lg:mb-5 xl:mb-8">
                  We offer:
                </h2>
                <p className="text-lg md:text-xl text-[#555555] font-semibold space-y-2 lg:space-y-5"></p>
              </div>

              <ul className="text-lg md:text-xl text-[#555555] space-y-2 lg:space-y-5">
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
                  Traditional Cabinets
                </li>
                <li className="flex items-center gap-x-2">
                  <GrRadialSelected />
                  Transitional Cabinets
                </li>
                <li className="flex items-center gap-x-2">
                  <GrRadialSelected />
                  Painted Cabinets
                </li>
                <li className="flex items-center gap-x-2">
                  <GrRadialSelected />
                  Stained Cabinets
                </li>
              </ul>
              <div className="group mt-8 inline-block">
                <Link href="tel:+1 813-621-8932">
                  <button className="relative overflow-hidden bg-primary text-white py-2 lg:py-3 lg:px-8 px-4 rounded-md">
                    <span className="relative z-10 transition-colors duration-300">
                      Call Coastal Cabinets and Closets LLC
                    </span>
                    <span className="absolute inset-0 bg-secondary z-0 transform scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <Image
                src="/assets/manufactured-cabinets/mc2.jpg"
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

export default MCabinetsServiceSection;

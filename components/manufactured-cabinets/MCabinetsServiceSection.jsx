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
        <ScrollMotionEffect effect="fade-left" duration="2000">
          <div className="max-w-5xl mx-auto text-center ">
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
        </ScrollMotionEffect>
        <div className="mt-10 md:mt-12">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start justify-between">
            <ScrollMotionEffect effect="fade-left" duration="2000">
              <div>
                <Image
                  src="/assets/manufactured-cabinets/mc1.jpg"
                  alt="Design Service"
                  width={1000}
                  height={1000}
                  className="w-full h-auto max-w-lg"
                ></Image>
              </div>
            </ScrollMotionEffect>
            <ScrollMotionEffect effect="fade-right" duration="2000">
              <div className="w-full h-auto max-w-lg lg:w-[512px]">
                <h2 className="text-3xl lg:text-4xl font-bold mb-3 lg:mb-5 xl:mb-8">
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
          </div>
        </div>
      </div>
      <div className="bg-[#eff2f5]">
        <div className="container  py-10 md:py-20">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start justify-between">
            <ScrollMotionEffect effect="fade-right" duration="2000">
              <div className="w-full h-auto max-w-lg lg:w-[512px]">
                <h2 className="text-3xl lg:text-4xl font-bold mb-3 lg:mb-5 xl:mb-8">
                  Some of these can arrive as RTA (ready to assemble / flat
                  pack) cabinets, if you prefer. We offer:
                </h2>
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
                    Transitional Cabinets Stained Cabinets
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
                  src="/assets/manufactured-cabinets/mc2.jpg"
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

export default MCabinetsServiceSection;

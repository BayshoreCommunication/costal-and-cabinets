import React from "react";
import SectionLayout from "../shared/SectionLayout";
import Link from "next/link";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import { GrRadialSelected } from "react-icons/gr";
import Image from "next/image";
import { BsTelephoneForwardFill } from "react-icons/bs";

const CCabinetsServiceSection = () => {
  return (
    <section className="bg-white">
      <div className="container py-10 md:py-20">
        <ScrollMotionEffect effect="fade-left" duration="2000">
          <div className="max-w-5xl mx-auto text-center ">
            <p className="text-md md:text-lg text-[#55545A] text-center mb-4">
              {`Are you wanting something special? Something custom..one of a kind?
`}
            </p>
            <p className="text-md md:text-lg text-[#55545A] text-center mb-4">
              {`Coastal Cabinets and Closets, LLC offers custom cabinets to suite your style and standards. `}
            </p>
            <p className="text-md md:text-lg text-[#55545A] text-center">
              {`We can help guide you through the different options and the design and decision making process, so that you purchase cabinets that suit your needs, style and budget. 
`}
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
                  We offer:
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
                    Stained Cabinets
                  </li>
                  <li className="flex items-center gap-x-2">
                    <GrRadialSelected />
                    Painted Cabinets
                  </li>
                  <li className="flex items-center gap-x-2">
                    <GrRadialSelected />
                    Raised Panels Cabinets
                  </li>
                </ul>
                <div className="group mt-8 inline-block">
                  <Link href="tel:+1 813-621-8932">
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
          <ScrollMotionEffect effect="fade-right" duration="2000">
            <div className="w-full h-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-3 lg:mb-5 xl:mb-8">
                Do you need installation? We can arrange that, too.
              </h2>
              <p className="text-lg md:text-xl text-[#555555] space-y-2 lg:space-y-5">
                Give us a ring to make an appointment to visit our showroom.
              </p>

              <div className="group mt-8 inline-block">
                <Link href="tel:+1 813-621-8932">
                  <button className="relative overflow-hidden bg-secondary  py-2 lg:py-3 lg:px-8 px-4 rounded-md">
                    <div className="relative z-10 flex items-center justify-center gap-x-0 xl:gap-x-2  px-2">
                      <BsTelephoneForwardFill className="text-white size-4  xl:size-5" />
                      <h6 className=" transition-colors duration-300 text-white font-medium text-sm lg:text-base ">
                        +1 813-621-8932
                      </h6>
                    </div>

                    <span className="absolute inset-0 bg-primary z-0 transform scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
                  </button>
                </Link>
              </div>
            </div>
          </ScrollMotionEffect>
        </div>
      </div>
    </section>
  );
};

export default CCabinetsServiceSection;

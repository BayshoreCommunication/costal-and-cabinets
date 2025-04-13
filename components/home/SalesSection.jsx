import { servicesData } from "@/config/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import { GrRadialSelected } from "react-icons/gr";

const SalesSection = () => {
  return (
    <section className="bg-[#eff2f5]">
      <div className="container py-10 md:py-20">
        <div className="">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start justify-between">
            <div>
              <Image
                src="/assets/homepage/sales.png"
                alt="Design Service"
                width={1000}
                height={1000}
                className="w-full h-auto max-w-lg"
              ></Image>
            </div>
            <div className="w-full h-auto max-w-lg">
              <h2 className="text-4xl lg:text-5xl font-bold mb-3 lg:mb-5 xl:mb-8">
                Sales
              </h2>
              <ul className="text-lg md:text-xl text-[#555555] space-y-2 lg:space-y-5">
                <li className="flex items-center gap-x-2">
                  <GrRadialSelected />
                  Multiple cabinet manufacturers available
                </li>
                <li className="flex items-center gap-x-2">
                  <GrRadialSelected />
                  Custom cabinets and millwork available
                </li>
                <li className="flex items-center gap-x-2">
                  <GrRadialSelected />
                  Multiple styles, colors and pricing
                </li>
                <li className="flex items-center gap-x-2">
                  <GrRadialSelected />
                  Accurate preparation of documents
                </li>
                <li className="flex items-center gap-x-2">
                  <GrRadialSelected />
                  Confirmation before ordering
                </li>
                <li className="flex items-center gap-x-2">
                  <GrRadialSelected />
                  Warranty service
                </li>
                <li className="flex items-center gap-x-2">
                  <GrRadialSelected />
                  5-star customer service
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesSection;

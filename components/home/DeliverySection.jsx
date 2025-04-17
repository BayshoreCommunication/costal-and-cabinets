import Image from "next/image";
import React from "react";
import { Edu_VIC_WA_NT_Beginner } from "next/font/google";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import { GrRadialSelected } from "react-icons/gr";
import Link from "next/link";

const edu = Edu_VIC_WA_NT_Beginner({ subsets: ["latin"] });

const DeliverySection = () => {
  return (
    <section className="bg-white">
      <div className="container py-10 md:py-20">
        <div className="">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start justify-between">
            {" "}
            <div className="w-full h-auto max-w-lg">
              <h2 className="text-4xl lg:text-[40px] text-[#222222] font-[700]  mb-3 lg:mb-5 xl:mb-8">
                Delivery
              </h2>
              <ul className="text-lg md:text-xl text-[#555555] space-y-2 lg:space-y-5">
                <li className="flex items-center gap-x-2">
                  <GrRadialSelected className="" />
                  Updates about delivery date
                </li>
                <li className="flex items-center gap-x-2">
                  <GrRadialSelected className="" />
                  Orders checked for accuracy
                </li>
                <li className="flex items-center gap-x-2">
                  <GrRadialSelected className="" />
                  Orders checked for damage
                </li>
                <li className="flex items-center gap-x-2">
                  <GrRadialSelected className="" />
                  Pick-up from our warehouse
                </li>
                <li className="flex items-center gap-x-2">
                  <GrRadialSelected className="" />
                  Delivery to job-site available
                </li>
                <li className="flex items-center gap-x-2">
                  <GrRadialSelected className="" />
                  Installation service available
                </li>
              </ul>

              <div className="group mt-8 inline-block">
                <Link href="tel:+1 813-621-8932">
                  <button className="relative overflow-hidden bg-primary text-white py-2 lg:py-3 lg:px-8 px-4 rounded-md">
                    <span className="relative z-10 transition-colors duration-300">
                      Call Coastal Cabinets
                    </span>
                    <span className="absolute inset-0 bg-secondary z-0 transform scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <Image
                src="/assets/homepage/sales.png"
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

export default DeliverySection;

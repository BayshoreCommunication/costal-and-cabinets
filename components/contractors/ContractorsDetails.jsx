import React from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import { GrRadialSelected } from "react-icons/gr";

const ContractorsDetails = () => {
  return (
    <div className="container py-10 md:py-20">
      <div className="flex  md:flex-row flex-col items-start lg:items-center justify-between gap-2 lg:gap-8">
        <div className="flex-1">
          <Image
            src={"/assets/aboutpage/about-bg.jpg"}
            width={500}
            height={500}
            alt="David Carter"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        <div className="flex-1 space-y-4 ">
          <h2 className="text-2xl lg:text-3xl text-[#222222] font-[700] leading-snug">
            ARE YOU MAKING MONEY THROUGH OFFERING DESIGN SERVICES AND CABINET
            SALES TO YOUR CUSTOMERS???
          </h2>

          <p className=" pt-2 text-left text-base md:text-lg">
            {`With Coastal Cabinets and Closets, LLC, you can start offering kitchen and closet design and sales, with an option for custom fabrication and seemingly endless options and combinations, giving your customer exactly what they want, while helping your company make more money. We know how difficult, competitive and challenging it is to make a worthwhile profit on jobs. Don’t leave money on the table. Let us help you. `}
          </p>

          <p className=" pt-2 text-left text-base md:text-lg ">
            {`We will walk your customer through the entire process. We can take care of as much or as little, as you wish. `}
          </p>
          <p className=" pt-2 text-left text-base md:text-lg ">
            {`Do you need cabinets, fast? We are able to get you cabinets in days, not weeks. `}
          </p>
        </div>
      </div>

      <div className="my-3 lg:my-5">
        <p className="pt-2 text-left text-base md:text-lg">
          {`We also offer custom cabinets, ‘Made in the USA’, right from our Tampa cabinet shop.`}
        </p>
        <p className="pt-2 text-left text-base md:text-lg">
          {`We will educate you and your customer about cabinets, so they can make the best decision for themselves. `}
        </p>
        <p className="pt-2 text-left text-base md:text-lg">
          {`As well, if we are comfortable with your company’s reputation and performance record, we can send remodeling and installation jobs your way!`}
        </p>
        <p className="pt-2 text-left text-base md:text-lg">
          {`Fill out the form, below, to set up a time to meet and discuss all of the details about how we can be business partners, and help each other grow and better serve our customers! `}
        </p>
      </div>
      <div className="mt-10 md:mt-12">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start justify-between">
          {/* <div>
            <Image
              src="/assets/manufactured-cabinets/mc1.jpg"
              alt="Design Service"
              width={1000}
              height={1000}
              className="w-full h-auto max-w-lg"
            ></Image>
          </div> */}
          <div className="w-full h-auto ">
            {/* max-w-lg lg:w-[512px] */}
            <h2 className="text-2xl lg:text-3xl text-[#222222] font-[700] mb-3 lg:mb-5 xl:mb-8">
              Currently, we offer the following cabinet lines:
            </h2>
            <ul className="grid grid-cols-1 lg:grid-cols-2  gap-4 lg:gap-8 text-lg md:text-xl text-[#555555] ">
              <li className="flex items-center gap-x-2">
                <GrRadialSelected />
                Design Services
              </li>
              <li className="flex items-center gap-x-2">
                <GrRadialSelected />
                Showroom with displays and samples
              </li>
              <li className="flex items-center gap-x-2">
                <GrRadialSelected />
                Framed Cabinets
              </li>
              <li className="flex items-center gap-x-2">
                <GrRadialSelected />
                Full-Access (frameless/modern/European cabinets)
              </li>
              <li className="flex items-center gap-x-2">
                <GrRadialSelected />
                Painted Cabinets
              </li>
              <li className="flex items-center gap-x-2">
                <GrRadialSelected />
                Stained Cabinets
              </li>
              <li className="flex items-center gap-x-2">
                <GrRadialSelected />
                Modern Cabinets
              </li>
              <li className="flex items-center gap-x-2">
                <GrRadialSelected />
                Custom Cabinets
              </li>
              <li className="flex items-center gap-x-2">
                <GrRadialSelected />
                Custom Closets
              </li>
              <li className="flex items-center gap-x-2">
                <GrRadialSelected />
                Quartz Countertops
              </li>
              <li className="flex items-center gap-x-2">
                <GrRadialSelected />
                Quartzite Countertops
              </li>
              <li className="flex items-center gap-x-2">
                <GrRadialSelected />
                Granite Countertops
              </li>
              <li className="flex items-center gap-x-2">
                <GrRadialSelected />
                Custom Countertops
              </li>
              <li className="flex items-center gap-x-2">
                <GrRadialSelected />
                Kitchen Sinks
              </li>
              <li className="flex items-center gap-x-2">
                <GrRadialSelected />
                Cabinet Lighting
              </li>
            </ul>

            {/* <div className="group mt-8 inline-block">
              <Link href="tel:+1 813-621-8932">
                <button className="relative overflow-hidden bg-primary text-white py-2 lg:py-3 lg:px-8 px-4 rounded-md">
                  <span className="relative z-10 transition-colors duration-300">
                    Call Coastal Cabinets and Closets LLC
                  </span>
                  <span className="absolute inset-0 bg-secondary z-0 transform scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
                </button>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractorsDetails;

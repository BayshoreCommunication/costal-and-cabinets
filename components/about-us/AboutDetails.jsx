import React from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const AboutDetails = () => {
  return (
    <div className="container py-10 md:py-20">
      <div className="flex md:flex-row flex-col items-start justify-between gap-2 lg:gap-8">
        <div className="flex-1">
          <ScrollMotionEffect effect="fade-right" duration="2000">
            <Image
              src={"/assets/aboutpage/about-bg.jpg"}
              width={500}
              height={500}
              alt="David Carter"
              className="rounded-lg shadow-lg w-full"
            />
          </ScrollMotionEffect>
        </div>
        <div className="flex-1 space-y-4">
          <ScrollMotionEffect effect="fade-left" duration="2000">
            <h2 className="text-2xl md:text-4xl lg:text-[42px] font-semibold">
              Welcome To Coastal Cabinets and Closets
            </h2>
          </ScrollMotionEffect>
          <ScrollMotionEffect effect="fade-left" duration="2000">
            <p className=" py-2 text-left text-base md:text-lg">
              {`Since 1989, John Kraft, president of Coastal Cabinets & Closets, Inc., has been in the residential and commercial construction industry. From the very beginning, he’s been working on kitchens. This experience has taught him common mistakes that most kitchen designers make. He uses that experience to lead his team to be some of the best kitchen designers in the area. Since there are many details when ordering kitchen cabinet parts, it is easy to make an oversight or a typo. That’s why we review each order, repeatedly, for total accuracy, before sending it to a manufacturer or fabricator.`}
            </p>
          </ScrollMotionEffect>

          <ScrollMotionEffect effect="fade-left" duration="2000">
            <p className=" py-2 text-left text-base md:text-lg ">
              {`Coastal Cabinets & Closets offers framed cabinets, full access European cabinets (with no face-frame), traditional cabinets, modern cabinets, contemporary cabinets, and custom cabinets. As well, we offer a soft close hardware and an array of accessories. Are you not sure what to buy? Visit our showroom (by appt. only) and we can educate you and help you decide.`}
            </p>
          </ScrollMotionEffect>
        </div>
      </div>

      <p className="py-2 text-left text-base md:text-lg">
        {`boxes not being full depth. The cabinets didn’t go together, properly, and the drawers did not attached to the drawer-glides, properly, allowing them to fall out of the cabinet, when you opened them. As well, parts were missing and the local company they purchased from, basically, ‘shrugged their shoulders’, completely unwilling to solve any of those problems for their customer.`}
      </p>
      <p className="py-2 text-left text-base md:text-lg">
        {`He wound up having to pay someone $1500 to come in and repair those cabinets, as best they could, in order for the kitchen to just be functional and usable. That amount, along with the purchase price of the cabinets, exceeded the price that we were going to charge him for our cabinets, of much higher quality and with a five year warranty. Literally, that same customer called me and told me he is saving his money, and plans to remove the quartz countertops (and plumbing) and purchase all new, upgraded cabinets, to replace the junk cabinets that he had purchased, mistakenly. In his case, with the quartz and plumbing removal and reinstallation, if they can save the quartz, he’ll wind up paying 2 1/2 times, at least, won’t he? That’s horrible.`}
      </p>
    </div>
  );
};

export default AboutDetails;

import SectionLayout from "./SectionLayout";
import { PiPhoneCallFill } from "react-icons/pi";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import Link from "next/link";
import { BsTelephoneForwardFill } from "react-icons/bs";

const CallToActionTwo = () => {
  return (
    <section className="w-full bg-white">
      <div className="container py-10 md:py-20">
        <div className="flex flex-col  items-center justify-center text-center gap-4">
          <h2
            className={`text-4xl lg:text-[40px] text-[#222222] font-[700]  text-center `}
          >
            Need Cabinets? Call Coastal Cabinets!
          </h2>
          <div className="group mt-2 inline-block">
            <p className="mb-3">
              8265 Causeway Blvd., Suite F, Tampa, FL 33619
            </p>
            <Link
              href="tel:+1 813-621-8932"
              className="text-lg font-semibold text-secondary hover:underline duration-300"
            >
              +1 813-621-8932
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionTwo;

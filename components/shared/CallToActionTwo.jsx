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
          <ScrollMotionEffect effect="fade-right" duration="2000">
            <h2 className={`font-semibold text-2xl md:text-4xl  text-center `}>
              Need Cabinets? Call Coastal Cabinets!
            </h2>
          </ScrollMotionEffect>

          <div className="group mt-2 inline-block">
            <p className="mb-3">
              8265 Causeway Blvd., Suite F, Tampa, FL 33619
            </p>
            <Link
              href={""}
              className="text-lg font-semibold text-secondary hover:underline duration-300"
            >
              +1 813-697-5752
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionTwo;

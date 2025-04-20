import SectionLayout from "./SectionLayout";
import { PiPhoneCallFill } from "react-icons/pi";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import Link from "next/link";
import { BsTelephoneForwardFill } from "react-icons/bs";

const CallToAction = () => {
  return (
    <section className="w-full bg-[#eff2f5]">
      <div className="container py-10 md:py-20">
        <div className="flex flex-col  items-center justify-center text-center gap-4">
          <div>
            <h2
              className={`text-4xl lg:text-[40px] text-[#222222] font-[700] leading-normal  text-center `}
            >
              When You Work With Coastal Cabinets and Closets, Decades of
              Experience Goes To Work For You.
            </h2>
            <p className="font-normal text-lg mt-4 text-center ">
              Unique, Functional Kitchen Designs: There’s a right way and a
              wrong way to design a kitchen. We have experience that backs our
              claims. We have built many cabinets and fine furniture from
              scratch. We have installed cabinets…hundreds. We know cabinets and
              everything to do with them, including the different types of
              finishes. We see our competitors make common mistakes, when
              designing. Protect yourself, by working with a real pro. There are
              a lot of reasons we are 5-star-rated. Most of all, we love and
              take pride in what we do, and having happy customers.
            </p>
          </div>

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
    </section>
  );
};

export default CallToAction;

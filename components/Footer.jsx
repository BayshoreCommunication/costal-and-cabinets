import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF, FaGooglePlusG, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#212025] text-white border-t-2 border-white/10">
        <div className="container py-16">
          <div>
            <div className=" flex justify-center items-center gap-5">
              <Link
                href="https://www.facebook.com/CoastalCabinetsandClosets"
                target="_blank"
                className="w-10 h-10 bg-[#313034] rounded-full flex items-center justify-center hover:bg-secondary duration-300"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="https://www.instagram.com/coastalcabinetsandclosets"
                target="_blank"
                className="w-10 h-10 bg-[#313034] rounded-full flex items-center justify-center hover:bg-secondary duration-300"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://x.com/CabinetCoastal"
                target="_blank"
                className="w-10 h-10 bg-[#313034] rounded-full flex items-center justify-center hover:bg-secondary duration-300"
              >
                <FaXTwitter />
              </Link>
              <Link
                href="https://www.linkedin.com/company/coastal-cabinets-closets/"
                target="_blank"
                className="w-10 h-10 bg-[#313034] rounded-full flex items-center justify-center hover:bg-secondary duration-300"
              >
                <FaLinkedinIn />
              </Link>
            </div>
            <p className="text-center text-sm mt-5">
              Copyright © Coastal Cabinets and Closets 2025. All Rights
              Reserved. || Developed By:{" "}
              <Link
                href="https://acuitymarketing.us/"
                target="_blank"
                className="text-secondary hover:underline duration-300"
              >
                AcuityMarketing.us
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

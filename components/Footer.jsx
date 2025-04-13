import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF, FaGooglePlusG } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#212025] text-white">
        <div className="container py-16">
          <div>
            <div className=" flex justify-center items-center gap-5">
              <Link
                href="#"
                className="w-10 h-10 bg-[#313034] rounded-full flex items-center justify-center hover:bg-secondary duration-300"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-[#313034] rounded-full flex items-center justify-center hover:bg-secondary duration-300"
              >
                <FaInstagram />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-[#313034] rounded-full flex items-center justify-center hover:bg-secondary duration-300"
              >
                <FaGooglePlusG />
              </Link>
            </div>
            <p className="text-center text-sm mt-5">
              Copyright © Coastal & Cabinets 2025. All Rights Reserved. ||
              Developed By: <Link href="">Bayshore Communication</Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

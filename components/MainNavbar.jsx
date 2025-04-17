"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Orbitron } from "next/font/google";
import { BsTelephoneForwardFill } from "react-icons/bs";

import Image from "next/image";

const orbitron = Orbitron({ subsets: ["latin"] });

// Debounce function to limit the rate of calling the handleScroll function
const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(null, args), wait);
  };
};

const MainNavbar = () => {
  useEffect(() => {
    const navbar = document.querySelector(".navbar");

    const handleScroll = () => {
      if (!navbar) return;

      const currentScrollPos = window.scrollY;

      // Always apply the transition
      navbar.style.transition = "top 0.3s ease-in-out";

      if (currentScrollPos === 0) {
        navbar.style.top = "0";
      } else if (currentScrollPos > 200) {
        navbar.style.top = "0";
      } else {
        navbar.style.top = "-100%";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [navbarColor, setNavbarColor] = useState(false);

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const menuItems = useMemo(
    () => [
      { title: "Home", slug: "/" },
      { title: "About Us", slug: "/about" },
      { title: "Manufactured Cabinets", slug: "/manufactured-cabinets" },
      { title: "Custom Cabinets", slug: "/custom-cabinets" },
      { title: "Closets", slug: "/closets" },
      { title: "Contractors", slug: "/contractors" },
      { title: "Blog", slug: "/blog" },
    ],
    []
  );

  const navLogoList = useMemo(
    () => [
      { title: "Home", slug: "/" },
      { title: "About Us", slug: "/about" },
      { title: "Manufactured Cabinets", slug: "/manufactured-cabinets" },
      { title: "Custom Cabinets", slug: "/custom-cabinets" },
      { title: "Closets", slug: "/closets" },
      { title: "Contractors", slug: "/contractors" },
      { title: "CCC Blogs", slug: "ccc-blogs" },
    ],
    []
  );

  const handleScroll = useCallback(
    debounce(() => {
      setNavbarColor(window.scrollY >= 100);
    }, 100),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <section className={"relative z-50 "}>
      <div className="bg-primary w-full navbar ">
        <div className="bg-white hidden md:block shadow-lg">
          <div className="flex items-center container  justify-between">
            <div className=" flex items-center gap-x-10 2xl:gap-x-16">
              <Link href={"/"}>
                <Image
                  src="/assets/site-logo/logo.png"
                  alt="footer logo"
                  width={500}
                  height={500}
                  className="cursor-pointer w-[120px] xl:w-[150px]  h-auto mt-2 mb-2"
                />
              </Link>
            </div>

            <div className="">
              <div className="flex items-center justify-stretch gap-x-2  xl:gap-x-8">
                {menuItems.map((el, index) => (
                  <Link
                    key={el.slug}
                    href={`${el.slug}`}
                    className={`cursor-pointer text-black text-sm xl:text-[16px] font-medium capitalize hover:text-secondary ${pathname === el.slug ? " border border-secondary rounded-full text-secondary py-1 lg:py-2 px-2 lg:px-3" : ""} `}
                  >
                    {el.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="group  inline-block">
              <Link href="tel:+1 813-621-8932">
                <button className="relative overflow-hidden bg-secondary  py-2  md:px-1 lg:px-1 xl:px-2 rounded-lg">
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
        </div>
        <div className="md:hidden ">
          <Navbar
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            className={`!mx-0 !px-0 pb-0 pt-0  md:pb-3 md:pt-4 bg-white`}
          >
            <NavbarContent>
              <NavbarBrand>
                <Link href="/">
                  <Image
                    src="/assets/site-logo/logo.png"
                    alt="footer logo"
                    width={500}
                    height={500}
                    className="w-[100px] h-auto"
                  />
                </Link>
              </NavbarBrand>
              <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="md:hidden text-black"
              />
            </NavbarContent>

            <NavbarMenu className="overflow-hidden" style={{ zIndex: 999 }}>
              {menuItems.map((el, index) => (
                <NavbarMenuItem key={el.slug} className="flex flex-row">
                  <Link
                    className={`w-full text-black text-center !text-xl font-medium py-1 ${pathname === el.slug ? "!text-primary" : ""} ${index === 0 ? "mt-6" : ""}`}
                    href={el.slug}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {el.title}
                  </Link>
                </NavbarMenuItem>
              ))}
            </NavbarMenu>
          </Navbar>
        </div>
      </div>
    </section>
  );
};

export default MainNavbar;

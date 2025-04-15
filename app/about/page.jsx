import AboutDetails from "@/components/about-us/AboutDetails";
import GoogleMapSection from "@/components/about-us/GoogleMapSection";
import ProfessionalLawGroup from "@/components/about-us/ProfessionalLawGroup";
import LatedAndGretest from "@/components/home/LatedAndGretest";
import CallToAction from "@/components/shared/CallToAction";
import CallToActionTwo from "@/components/shared/CallToActionTwo";
import PageHeroSection from "@/components/shared/PageHeroSection";
import WhatPeopleSay from "@/components/shared/WhatPeopleSay";

export const metadata = {
  title: `Windstorm Damage Claims lawyer in florida | Hurricane and Storm Damage Insurance Claims Florida Lawyer | Florida Property Damage Experts
| Melamed Law PLLC | best public adjuster in florida |`,
  description: `Melamed Law PLLC provides expert legal representation for Windstorm Damage Claims in Florida. As trusted Florida Property Damage Experts, we specialize in Hurricane and Storm Damage Insurance Claims. Whether you need a loss adjuster in Aventura, Florida, or the best public adjuster in Florida, our team is here to secure the compensation you deserve.`,
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-USA",
    },
  },
  openGraph: {
    images: "/opengraph-image.jpg",
  },
};

const page = () => {
  return (
    <>
      <PageHeroSection
        image={"/assets/shared/aboutpage.jpg"}
        title={"About Us"}
        link={"About Us"}
      />
      <AboutDetails />
      <WhatPeopleSay />
      <CallToActionTwo />
    </>
  );
};

export default page;

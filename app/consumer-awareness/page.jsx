import AboutDetails from "@/components/about-us/AboutDetails";
import ContractorProgramForm from "@/components/contractor-program/ContractorProgramForm";
import CookiePolicy from "@/components/cookie-policy/CookiePolicy";
import HeroSection from "@/components/home/HeroSection";
import CallToAction from "@/components/shared/CallToAction";
import PageHeroSection from "@/components/shared/PageHeroSection";
import Head from "next/head";
import React from "react";
export const metadata = {
  title: `Property Damage Attorney in Florida | Insurance attorney in Ojus, Florida | property damage lawyer in ojus, florida `,
  description: `Looking for a Property Damage Attorney in Florida? Our Insurance attorney in Ojus, Florida is dedicated to helping you navigate property damage claims. As a trusted property damage lawyer in Ojus, Florida, we provide expert legal representation to ensure you receive fair compensation. Contact us for professional legal assistance.`,
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
        title={"Consumer Awareness"}
        link={"Contractor Awareness"}
      />
      <AboutDetails />
    </>
  );
};

export default page;

import AboutDetails from "@/components/about-us/AboutDetails";
import ContractorProgramForm from "@/components/contractor-program/ContractorProgramForm";
import ContractorsDetails from "@/components/contractors/ContractorsDetails";
import PageHeroSection from "@/components/shared/PageHeroSection";
import WhatPeopleSay from "@/components/shared/WhatPeopleSay";
import React from "react";
export const metadata = {
  title: `Cabinetry Services for Contractors | Bulk Orders & Installations`,
  description: `Coastal Cabinets and Closets partners with contractors for bulk cabinet orders, fast installations, and custom solutions. Trusted by Florida builders and remodelers for over 3 decades.`,
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
    <div className="w-full   pt-16 lg:pt-24 ">
      <PageHeroSection
        image={"/assets/homepage/slides4.jpg"}
        title={"Contractor Program"}
        link={"Contractor Program"}
      />
      <ContractorsDetails />
      <ContractorProgramForm />
      <WhatPeopleSay />
    </div>
  );
};

export default page;

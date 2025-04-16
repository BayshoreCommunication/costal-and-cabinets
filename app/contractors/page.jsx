import AboutDetails from "@/components/about-us/AboutDetails";
import ContractorProgramForm from "@/components/contractor-program/ContractorProgramForm";
import PageHeroSection from "@/components/shared/PageHeroSection";
import React from "react";
export const metadata = {
  title: ``,
  description: ``,
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
        title={"Contractor Program"}
        link={"Contractor Program"}
      />
      <AboutDetails />
      <ContractorProgramForm />
    </>
  );
};

export default page;

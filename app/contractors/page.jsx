import AboutDetails from "@/components/about-us/AboutDetails";
import ContractorProgramForm from "@/components/contractor-program/ContractorProgramForm";
import PageHeroSection from "@/components/shared/PageHeroSection";
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
    <div className="w-full min-h-svh mt-[90px]">
      <PageHeroSection
        image={"/assets/shared/aboutpage.jpg"}
        title={"Contractor Program"}
        link={"Contractor Program"}
      />
      <AboutDetails />
      <ContractorProgramForm />
    </div>
  );
};

export default page;

import MCabinetsHeroSection from "@/components/manufactured-cabinets/MCabinetsHeroSection";
import MCabinetsServiceSection from "@/components/manufactured-cabinets/MCabinetsServiceSection";
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
      <MCabinetsHeroSection />
      <MCabinetsServiceSection />
    </>
  );
};

export default page;

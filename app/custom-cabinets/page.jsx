import CCabinetsHeroSection from "@/components/custom-cabinets/CCabinetsHeroSection";
import CCabinetsServiceSection from "@/components/custom-cabinets/CCabinetsServiceSection";

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
      <CCabinetsHeroSection />
      <CCabinetsServiceSection />
    </>
  );
};

export default page;

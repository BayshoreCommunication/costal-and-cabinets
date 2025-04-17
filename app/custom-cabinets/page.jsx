import CCabinetsHeroSection from "@/components/custom-cabinets/CCabinetsHeroSection";
import CCabinetsServiceSection from "@/components/custom-cabinets/CCabinetsServiceSection";

import React from "react";
export const metadata = {
  title: `Custom Cabinet Design in Florida | Kitchen, Bath & Office`,
  description: `Coastal Cabinets and Closets specializes in custom cabinet design for kitchens, bathrooms, and home offices. Built to fit your space and style with precision and care.`,
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
    <d>
      <CCabinetsHeroSection />
      <CCabinetsServiceSection />
    </d>
  );
};

export default page;

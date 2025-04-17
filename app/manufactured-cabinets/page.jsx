import MCabinetsHeroSection from "@/components/manufactured-cabinets/MCabinetsHeroSection";
import MCabinetsServiceSection from "@/components/manufactured-cabinets/MCabinetsServiceSection";
import React from "react";
export const metadata = {
  title: `Affordable Manufactured Cabinets in Florida | Kitchen & Bathroom`,
  description: ` Explore high-quality manufactured cabinets for kitchens and bathrooms. Coastal Cabinets and Closets offers durable, affordable cabinet solutions designed to elevate your home.
`,
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
      <MCabinetsHeroSection />
      <MCabinetsServiceSection />
    </div>
  );
};

export default page;

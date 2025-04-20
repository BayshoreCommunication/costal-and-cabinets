import Closets from "@/components/closets/Closets";
import PageHeroSection from "@/components/shared/PageHeroSection";
import React from "react";
export const metadata = {
  title: `Custom Closet Systems & Storage Solutions in Florida
`,
  description: `Maximize your space with our custom closet systems and built-in storage solutions. Designed to organize your bedroom, pantry, laundry room, or garage with style.`,
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
    <div className="w-full min-h-svh mt-[62px] lg:mt-[90px]">
      <PageHeroSection
        image={"/assets/closets/closets-breadcrumb-bg.png"}
        title={"Closets "}
        link={"Closets "}
      />
      <Closets />
    </div>
  );
};

export default page;

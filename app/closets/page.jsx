import Closets from "@/components/closets/Closets";
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
        title={"Closets "}
        link={"Closets "}
      />
      <Closets />
    </>
  );
};

export default page;

// import HeroSection from "@/components/home/HeroSection";
import HeroSection from "@/components/home/HeroSection";
import CallToAction from "@/components/shared/CallToAction";
import TermsOfService from "@/components/terms-of-service/TermsOfService";
import Head from "next/head";
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
      <HeroSection />
      <TermsOfService />
      <CallToAction />
    </>
  );
};

export default page;

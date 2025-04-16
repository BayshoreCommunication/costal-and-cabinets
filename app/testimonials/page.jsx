import CallToAction from "@/components/shared/CallToAction";
import PageHeroSection from "@/components/shared/PageHeroSection";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
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
      <PageHeroSection
        image={"/assets/shared/testimonials.jpg"}
        title={"Testimonials"}
        link={"Testimonials"}
      />
      <TestimonialsSection />
      <CallToAction />
    </>
  );
};

export default page;

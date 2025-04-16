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
    <div className="min-h-screen">
      <PageHeroSection
        image={"/assets/shared/aboutpage.jpg"}
        title={"Blogs"}
        link={"Blogs"}
      />
    </div>
  );
};

export default page;

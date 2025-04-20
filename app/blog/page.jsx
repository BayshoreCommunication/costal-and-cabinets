import BlogMainSection from "@/components/blogs/BlogMainSection";
import PageHeroSection from "@/components/shared/PageHeroSection";
import WhatPeopleSay from "@/components/shared/WhatPeopleSay";
import React from "react";
export const metadata = {
  title: `Cabinetry Ideas & Closet Design Tips | Coastal Cabinets Blog
`,
  description: `Discover expert tips on custom cabinetry, closet design trends, and home organization solutions. Learn from the professionals at Coastal Cabinets and Closets.
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
      <PageHeroSection
        image={"/assets/blog/blog-breadcrumb-bg.png"}
        title={"Blogs"}
        link={"Blogs"}
      />
      <BlogMainSection />
      <WhatPeopleSay />
    </div>
  );
};

export default page;

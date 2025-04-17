import BlogMainSection from "@/components/blogs/BlogMainSection";
import PageHeroSection from "@/components/shared/PageHeroSection";
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
    <div className="w-full min-h-svh mt-[95px]">
      <PageHeroSection
        image={"/assets/shared/aboutpage.jpg"}
        title={"Blogs"}
        link={"Blogs"}
      />
      <BlogMainSection />
    </div>
  );
};

export default page;

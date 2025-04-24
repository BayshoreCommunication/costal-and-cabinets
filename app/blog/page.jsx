import React from "react";

import GetAllPostData from "@/lib/GetAllPostData";
import CallToAction from "@/components/shared/CallToAction";
import PageHeroSection from "@/components/shared/PageHeroSection";
import BlogMainSection from "@/components/blog/BlogMainSection";

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

const page = async () => {
  const blogPostData = await GetAllPostData();

  const postDate = (date) => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formattedDate;
  };

  return (
    <div className="pt-16 lg:pt-24 ">
      <PageHeroSection
        image={"/assets/blog/blog-breadcrumb-bg.png"}
        title={"Blogs"}
        link={"Blogs"}
      />
      <BlogMainSection blogPostData={blogPostData} />
      <CallToAction />
    </div>
  );
};

export default page;

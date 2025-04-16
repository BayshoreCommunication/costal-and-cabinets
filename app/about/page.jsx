import AboutDetails from "@/components/about-us/AboutDetails";
import CallToActionTwo from "@/components/shared/CallToActionTwo";
import PageHeroSection from "@/components/shared/PageHeroSection";
import WhatPeopleSay from "@/components/shared/WhatPeopleSay";

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
    images: "/opengraph-image.png",
  },
};

const page = () => {
  return (
    <>
      <PageHeroSection
        image={"/assets/shared/aboutpage.jpg"}
        title={"About Us"}
        link={"About Us"}
      />
      <AboutDetails />
      <WhatPeopleSay />
      <CallToActionTwo />
    </>
  );
};

export default page;

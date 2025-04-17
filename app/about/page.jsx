import AboutDetails from "@/components/about-us/AboutDetails";
import CallToActionTwo from "@/components/shared/CallToActionTwo";
import PageHeroSection from "@/components/shared/PageHeroSection";
import WhatPeopleSay from "@/components/shared/WhatPeopleSay";

export const metadata = {
  title: `Family-Owned Cabinet Company in Florida | 33+ Years Experience`,
  description: `Coastal Cabinets and Closets is a family-owned cabinet company offering custom cabinetry, closet systems, and professional design services across Florida for over 33 years.
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
        title={"About Us"}
        link={"About Us"}
      />
      <AboutDetails />
      <WhatPeopleSay />
      <CallToActionTwo />
    </div>
  );
};

export default page;

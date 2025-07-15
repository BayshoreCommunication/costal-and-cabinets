// import MCabinetsHeroSection from "@/components/manufactured-cabinets/MCabinetsHeroSection";
import HeroSection from "@/components/home/HeroSection";
import MCabinetsServiceSection from "@/components/manufactured-cabinets/MCabinetsServiceSection";
import PageHeroSection from "@/components/shared/PageHeroSection";
import WhatPeopleSay from "@/components/shared/WhatPeopleSay";

export const metadata = {
  title: `Affordable Manufactured Cabinets in Florida | Kitchen & Bathroom`,
  description: ` Explore high-quality manufactured cabinets for kitchens and bathrooms. Coastal Cabinets and Closets offers durable, affordable cabinet solutions designed to elevate your home.
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
    <div className="w-full  pt-16 lg:pt-24  ">
      <div className="mb-10">
       <PageHeroSection
        image={"/assets/homepage/slides3.jpg"}
        title={"Manufactured Cabinets"}
        link={"Manufactured Cabinets"}
      />
       </div>
      {/* <MCabinetsHeroSection /> */}
      <HeroSection />
      <MCabinetsServiceSection />
      <WhatPeopleSay />
    </div>
  );
};

export default page;

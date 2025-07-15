import DesignServiceSection from "@/components/home/DesignServiceSection";
import HeroSection from "@/components/home/HeroSection";
import SalesSection from "@/components/home/SalesSection";
import DeliverySection from "@/components/home/DeliverySection";
import WhatPeopleSay from "@/components/home/WhatPeopleSay";
import CallToAction from "@/components/shared/CallToAction";
import CallToActionTwo from "@/components/shared/CallToActionTwo";
import PageHeroSection from "@/components/shared/PageHeroSection";

export const metadata = {
  title: `Custom Cabinets, Closet Design & Storage Solutions in Florida
`,
  description: `Get expert custom cabinets, closet design, and home storage solutions with Coastal Cabinets and Closets. Serving Florida for over 33 years with unmatched craftsmanship and customer service.
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

export default function Home() {
  return (
    <main className="w-full min-h-svh  pt-16 lg:pt-24 ">
      <div className="mb-10">
        <PageHeroSection
          image={"/assets/blog/blog-breadcrumb-bg.png"}
          title={"Home"}
          link={"Home"}
        />
      </div>
      <HeroSection />
      <DesignServiceSection />
      <SalesSection />
      <DeliverySection />
      <CallToAction />
      <WhatPeopleSay />
      <CallToActionTwo />
    </main>
  );
}

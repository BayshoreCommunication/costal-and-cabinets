import BlogMainSection from "@/components/blogs/BlogMainSection";
import CardMotion from "@/components/motion/CardMotion";
import PageHeroSection from "@/components/shared/PageHeroSection";
import SectionLayout from "@/components/shared/SectionLayout";
import Image from "next/image";
import Link from "next/link";
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
const blogsData = [
  {
    image: "/assets/blog/blog-img.png",
    title: "Modern White Wall Wine Rack (WWR-MW)",
    description:
      "Elevate your kitchen with our sleek modern white wine rack, ready-to-assemble and built to impress.",
    link: "/collections/modern-white-wall-wine-rack",
    slug: "modern-white-wall-wine-rack",
  },
  {
    image: "/assets/blog/blog-img.png",
    title: "Shaker Oak Wall Wine Rack (WWR-SO)",
    description:
      "Crafted from premium oak, this shaker-style rack adds warmth and function to your kitchen setup.",
    link: "/collections/shaker-oak-wall-wine-rack",
    slug: "shaker-oak-wall-wine-rack",
  },
  {
    image: "/assets/blog/blog-img.png",
    title: "Industrial Black Wall Wine Rack (WWR-IB)",
    description:
      "A bold industrial design with matte black finish, perfect for modern loft-style kitchens.",
    link: "/collections/industrial-black-wall-wine-rack",
    slug: "industrial-black-wall-wine-rack",
  },
  {
    image: "/assets/blog/blog-img.png",
    title: "Ladder Style Wine Display Rack (WWR-LD)",
    description:
      "Show off your wine collection with this stylish ladder-style display rack — lightweight and elegant.",
    link: "/collections/ladder-style-wine-display-rack",
    slug: "ladder-style-wine-display-rack",
  },
  {
    image: "/assets/blog/blog-img.png",
    title: "Rustic Wall Wine Rack with Hooks (WWR-RW)",
    description:
      "Handcrafted with rustic charm, this wall-mounted rack includes hooks for glasses and accessories.",
    link: "/collections/rustic-wall-wine-rack",
    slug: "rustic-wall-wine-rack",
  },
  {
    image: "/assets/blog/blog-img.png",
    title: "Floating Metal Wine Rack (WWR-FM)",
    description:
      "Minimalist floating metal design to give your kitchen a clean and open aesthetic.",
    link: "/collections/floating-metal-wine-rack",
    slug: "floating-metal-wine-rack",
  },
];
const page = () => {
  return (
    <div className="">
      <PageHeroSection
        image={"/assets/shared/aboutpage.jpg"}
        title={"Blogs Title"}
        link={"Blog Details"}
      />
      <div className="bg-white">
        <div className="container py-10 md:py-20 ">
          <div className="grid gap-12 mb-10 gird-col-1 sm:grid-cols-3">
            <div className="col-span-2">
              <div className="">
                <Image
                  src="/assets/blog/blog-img.png"
                  alt="{blog.title}"
                  width={1920}
                  height={2000}
                  className="w-full h-auto object-cover rounded-md"
                />
                <h3 className="mt-4 text-xl md:text-2xl lg:text-3xl font-semibold">
                  Modern White Wall Wine Rack (WWR-MW)
                </h3>
                <p className="mt-3 text-sm text-gray-600">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p className="mt-3 text-sm text-gray-600">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <a
                  href="/collections/modern-white-wall-wine-rack"
                  className="inline-block mt-4 text-blue-600 hover:underline font-medium"
                >
                  Call Coastal Cabinets →
                </a>
              </div>
            </div>

            {/*  */}
            <div>
              <h2 className="font-medium text-3xl text-primary border-b-2 border-gray-200 pb-4 mb-4">
                Recent Cases
              </h2>
              <div className="col-span-2 sm:col-span-1 h-[100%] md:h-[810px] overflow-y-scroll overflow-x-hidden  p-3 rounded-lg">
                <div className="flex flex-col gap-6">
                  <Link className=" " href="">
                    <Image
                      src="/assets/blog/blog-img.png"
                      alt="{blog.title}"
                      width={1920}
                      height={2000}
                      className="w-full h-auto object-cover rounded-md"
                    />
                    <div className="flex flex-col gap-px">
                      <h4 className="text-base lg:text-lg font-medium text-black text-left leading-tight hidden md:block">
                        Modern White Wall Wine Rack (WWR-MW)
                      </h4>
                      <p className="text-sm text-gray-600 hidden md:block">
                        Lorem Ipsum is simply dummy text of the printing
                      </p>
                    </div>
                  </Link>
                  <Link className=" " href="">
                    <Image
                      src="/assets/blog/blog-img.png"
                      alt="{blog.title}"
                      width={1920}
                      height={2000}
                      className="w-full h-auto object-cover rounded-md"
                    />
                    <div className="flex flex-col gap-px">
                      <h4 className="text-base lg:text-lg font-medium text-black text-left leading-tight hidden md:block">
                        Modern White Wall Wine Rack (WWR-MW)
                      </h4>
                      <p className="text-sm text-gray-600 hidden md:block">
                        Lorem Ipsum is simply dummy text of the printing
                      </p>
                    </div>
                  </Link>
                  <Link className=" " href="">
                    <Image
                      src="/assets/blog/blog-img.png"
                      alt="{blog.title}"
                      width={1920}
                      height={2000}
                      className="w-full h-auto object-cover rounded-md"
                    />
                    <div className="flex flex-col gap-px">
                      <h4 className="text-base lg:text-lg font-medium text-black text-left leading-tight hidden md:block">
                        Modern White Wall Wine Rack (WWR-MW)
                      </h4>
                      <p className="text-sm text-gray-600 hidden md:block">
                        Lorem Ipsum is simply dummy text of the printing
                      </p>
                    </div>
                  </Link>
                  <Link className=" " href="">
                    <Image
                      src="/assets/blog/blog-img.png"
                      alt="{blog.title}"
                      width={1920}
                      height={2000}
                      className="w-full h-auto object-cover rounded-md"
                    />
                    <div className="flex flex-col gap-px">
                      <h4 className="text-base lg:text-lg font-medium text-black text-left leading-tight hidden md:block">
                        Modern White Wall Wine Rack (WWR-MW)
                      </h4>
                      <p className="text-sm text-gray-600 hidden md:block">
                        Lorem Ipsum is simply dummy text of the printing
                      </p>
                    </div>
                  </Link>
                  <Link className=" " href="">
                    <Image
                      src="/assets/blog/blog-img.png"
                      alt="{blog.title}"
                      width={1920}
                      height={2000}
                      className="w-full h-auto object-cover rounded-md"
                    />
                    <div className="flex flex-col gap-px">
                      <h4 className="text-base lg:text-lg font-medium text-black text-left leading-tight hidden md:block">
                        Modern White Wall Wine Rack (WWR-MW)
                      </h4>
                      <p className="text-sm text-gray-600 hidden md:block">
                        Lorem Ipsum is simply dummy text of the printing
                      </p>
                    </div>
                  </Link>
                  <Link className=" " href="">
                    <Image
                      src="/assets/blog/blog-img.png"
                      alt="{blog.title}"
                      width={1920}
                      height={2000}
                      className="w-full h-auto object-cover rounded-md"
                    />
                    <div className="flex flex-col gap-px">
                      <h4 className="text-base lg:text-lg font-medium text-black text-left leading-tight hidden md:block">
                        Modern White Wall Wine Rack (WWR-MW)
                      </h4>
                      <p className="text-sm text-gray-600 hidden md:block">
                        Lorem Ipsum is simply dummy text of the printing
                      </p>
                    </div>
                  </Link>
                  <Link className=" " href="">
                    <Image
                      src="/assets/blog/blog-img.png"
                      alt="{blog.title}"
                      width={1920}
                      height={2000}
                      className="w-full h-auto object-cover rounded-md"
                    />
                    <div className="flex flex-col gap-px">
                      <h4 className="text-base lg:text-lg font-medium text-black text-left leading-tight hidden md:block">
                        Modern White Wall Wine Rack (WWR-MW)
                      </h4>
                      <p className="text-sm text-gray-600 hidden md:block">
                        Lorem Ipsum is simply dummy text of the printing
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

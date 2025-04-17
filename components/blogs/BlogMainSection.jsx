import React from "react";
import Image from "next/image"; // Assuming you're using Next.js

const BlogMainSection = async () => {
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

  return (
    <section className="bg-white">
      <div className="container py-10 md:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogsData.map((blog, index) => (
          <div key={index} className="border rounded-lg shadow-sm p-4">
            <Image
              src={blog.image}
              alt={blog.title}
              width={400}
              height={300}
              className="w-full h-auto object-cover rounded-md"
            />
            <h3 className="mt-4 text-lg font-semibold">{blog.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{blog.description}</p>
            <a
              href={blog.link}
              className="inline-block mt-4 text-blue-600 hover:underline font-medium"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogMainSection;

import React from "react";

export const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Applying for a Loan: A Step-by-Step Guide",
      image: "/src/assets/mainBanner2.png",
    },
    {
      id: 2,
      title: "Understanding Bank Insurance Policies",
      image: "/src/assets/blog2.png",
    },
    {
      id: 3,
      title: "Types of Life Insurance Plans in India",
      image: "/src/assets/banklogo.png",
    },
  ];

  return (
    <section className="px-6 lg:px-14 max-w-screen-2xl mx-auto my-16" id="blog">
      {/* Header Section */}
      <div className="text-center md:w-3/5 mx-auto">
        <h2 className="text-4xl text-blue-800 font-semibold mb-6">
          Caring is the New Banking
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-10">
          Explore our latest articles to gain insights on financial services, 
          insurance policies, and more. Stay informed and make smart decisions 
          with Ultrafly.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="relative bg-white shadow-lg rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl"
          >
            {/* Blog Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* Blog Content */}
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-blue-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {blog.title}
              </h3>
              <a
                href="/"
                className="text-blue-500 font-medium inline-flex items-center gap-2 hover:text-blue-700 transition-colors duration-300"
              >
                Read More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="10"
                  viewBox="0 0 16 10"
                  fill="none"
                  className="inline-block"
                >
                  <path
                    d="M11.5 8.5L14.5 5.5M14.5 5.5L11.5 2.5M14.5 5.5L1.5 5.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

import React from "react";

export const Newsletter = () => {
  return (
    <section className="px-6 lg:px-16 max-w-screen-2xl mx-auto bg-blue-50 py-16 rounded-md shadow-md">
      <div className="flex flex-col items-center justify-center lg:w-3/5 mx-auto text-center">
        <h2 className="lg:text-4xl text-2xl font-semibold text-blue-800 leading-snug mb-6">
          Simplify Your Loan Process with Trusted Bank Agents
        </h2>
        <p className="text-gray-700 lg:text-lg text-sm mb-8">
          Our expert agents assist in connecting you with the best loan options 
          tailored to your needs. We streamline the entire process, so you 
          can focus on your goals without the hassle.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="btn-primary bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md shadow-md transition-all duration-300">
            Get a Loan Quote
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
              className="inline-block ml-2"
            >
              <path
                d="M10.2503 7.00012L12.7201 4.53039C13.013 4.23749 13.013 3.7626 12.7201 3.4697L10.2503 0.999966M12.5004 4.00004L1.50012 4.00004"
                stroke="white"
                strokeWidth="1.1"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <button className="btn-secondary bg-gray-100 hover:bg-gray-200 text-blue-700 font-medium px-6 py-3 rounded-md shadow-md transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

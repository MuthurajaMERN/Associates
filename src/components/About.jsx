import React from "react";
import { FaUsers, FaProjectDiagram, FaMoneyCheck, FaBuilding, FaHome, FaCar } from "react-icons/fa";

export const About = () => {
  return (
    <section>
      {/* About Section */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="about">
        <div className="w-fit mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="">
            {/* Image or Graphic could go here */}
          </div>

          <div className="space-y-4 text-lg">
            <h3 className="text-2xl font-semibold text-neutral-800 mb-6">Our Services</h3>

            {/* Cards for services */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <ServiceCard
                title="Personal Loan"
                description={[
                  "Personal Loan (Cash Salaried)",
                  "Personal Loan (Bank Credited)"
                ]}
                icon={<FaMoneyCheck />}
              />
              <ServiceCard
                title="Business Loan"
                description={[
                  "Business Loan (Unregistered Business)",
                  "Business Loan (Registered but Cash Business)",
                  "Business Loan (Formal Segment)"
                ]}
                icon={<FaBuilding />}
              />
              <ServiceCard
                title="Home Loan"
                description={[
                  "Plot Purchase Loan",
                  "Plot plus Construction Loan",
                  "Construction Loan",
                  "Home Purchase Loan",
                  "Home Improvement Loan",
                  "Home Extension Loan",
                  "Balance Transfer",
                  "Balance Transfer plus Topup loan",
                  "Commercial Property Loan"
                ]}
                icon={<FaHome />}
              />
              <ServiceCard
                title="LAP"
                description={[
                  "Loan Against Plot",
                  "Loan Against Property",
                  "Balance Transfer",
                  "Balance Transfer plus Top up"
                ]}
                icon={<FaMoneyCheck />}
              />
              <ServiceCard
                title="Vehicle Loan"
                description={[
                  "Two Wheeler Loan",
                  "Used Car Loan",
                  "Loan Against Car",
                  "Used Commercial Vehicle Loan",
                  "Loan Against Commercial Vehicle",
                  "Used Tractor Loan",
                  "Loan Against Tractor"
                ]}
                icon={<FaCar />}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutral-200 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2">
            <header>
              <h2 className="text-4xl text-neutral-800 font-semibold mb-4 md:w-2/3">
                Helping a local{" "}
                <span className="text-brandPrimary">business reinvent itself</span>
              </h2>
              <p className="text-lg text-neutral-600">
                We reached here with our hard work and dedication
              </p>
            </header>
          </div>

          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
            <StatItem
              icon={<FaUsers className="h-12 w-12 text-indigo-600" />}
              stat="2,245,341"
              label="Members"
            />
            <StatItem
              icon={<FaProjectDiagram className="h-12 w-12 text-indigo-600" />}
              stat="1,453"
              label="Projects"
            />
          </div>
        </div>
      </div>

      {/* Image Text Overlay Section */}
      <div>
        <div className="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black/50 before:z-10">
          <img
            src="https://readymadeui.com/cardImg.webp"
            alt="Banner Image"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="min-h-[380px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center p-6">
            <h2 className="text-white sm:text-4xl text-2xl font-bold mb-6">
              Showcase Your Product or Service in Style
            </h2>
            <p className="text-base text-center text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              accumsan, nunc et tempus blandit, metus mi consectetur nibh, a
              pharetra felis turpis vitae ligula.
            </p>
            <button
              type="button"
              className="px-6 py-3 mt-12 rounded-full text-white text-base tracking-wider font-semibold outline-none bg-orange-600 hover:bg-orange-700 border-2 border-orange-600 transition-all duration-300"
            >
              Getting started now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper Component for Statistics Items
const StatItem = ({ icon, stat, label }) => (
  <div className="flex flex-col items-center gap-4 p-4 bg-white shadow-lg rounded-xl w-full max-w-xs">
    <div className="flex items-center justify-center text-4xl text-indigo-500 mb-4">
      {icon}
    </div>
    <div>
      <h4 className="text-3xl text-neutral-800 font-semibold">{stat}</h4>
      <p className="text-neutral-600 text-sm">{label}</p>
    </div>
  </div>
);

// Service Card Component for displaying each service in a card layout
const ServiceCard = ({ title, description, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out transform cursor-pointer">
    <div className="flex items-center gap-4 mb-4">
      <div className="text-3xl text-indigo-600">{icon}</div>
      <h4 className="text-xl font-semibold text-neutral-800">{title}</h4>
    </div>

    <div className="flex flex-wrap gap-4">
      {description.map((item, index) => (
        <div key={index} className="flex items-center">
          <span className="mr-2 text-indigo-600">•</span>
          <span className="text-sm text-neutral-600">{item}</span>
        </div>
      ))}
    </div>
  </div>
);

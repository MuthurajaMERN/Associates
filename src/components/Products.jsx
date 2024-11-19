import React from "react";
import mobileImg from "../assets/mainBanner2.png";
import maecenas1 from "../assets/bank.png";
import maecenas from "../assets/phone-removebg-preview.png";
import { BsBank2 } from "react-icons/bs";
import { FaMobileScreenButton, FaUsers } from "react-icons/fa6";
import { FcMoneyTransfer } from "react-icons/fc";

export const Products = () => {
  const services = [
    {
      icon: <FaMobileScreenButton className="text-indigo-500 text-3xl" />,
      title: "Mobile Banking",
      description:
        "Perform banking transactions on your mobile device—check balances, pay bills, and transfer funds—anytime, anywhere.",
    },
    {
      icon: <BsBank2 className="text-indigo-500 text-3xl" />,
      title: "Banking Agents",
      description:
        "Agents conduct banking transactions on behalf of banks, providing access in rural and hard-to-reach areas.",
    },
    {
      icon: <FcMoneyTransfer className="text-green-500 text-3xl" />,
      title: "Investment Banks",
      description:
        "Facilitating institutional investment deals, such as syndicated loans, with specialized expertise.",
    },
    {
      icon: <FaUsers className="text-blue-500 text-3xl" />,
      title: "Third-Party Agents",
      description:
        "Supporting businesses in launching new services like credit cards or loan programs through partnerships.",
    },
  ];

  const statistics = [
    { title: "Total Free Servers", value: "1.6M" },
    { title: "Servers a Month", value: "19.2K" },
    { title: "Servers a Week", value: "4.9K" },
    { title: "Total Users", value: "166.7K" },
  ];

  return (
    <section className="bg-gray-50 py-16">
      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-indigo-600 text-3xl font-semibold uppercase">Services</h2>
        <p className="mt-4 text-2xl lg:text-4xl font-bold text-gray-800">
          Agent Bank - Functions and Types
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition duration-300"
            >
              <div className="mb-4 flex items-center justify-center">{service.icon}</div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h4>
              <p className="text-gray-500">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Product Overview Section */}
      <div className="mt-16 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6 lg:px-8">
        <img src={mobileImg} alt="Mobile Banking" className="w-full md:w-1/2 rounded-lg shadow-lg" />
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Parties in Agency Banking</h2>
          <div className="space-y-6 text-gray-600">
            <div>
              <h5 className="text-lg font-semibold text-gray-800">Service Providers</h5>
              <p>Manage banking agents, oversee operations, and handle marketing and branding responsibilities.</p>
            </div>
            <div>
              <h5 className="text-lg font-semibold text-gray-800">Banks/Financial Institutions</h5>
              <p>Host consumer and agent accounts, ensuring smooth cash flow and system functionality.</p>
            </div>
          </div>
          <button className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-white py-16 mt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <img
            src={maecenas}
            alt="Testimonial"
            className="w-full md:w-1/3 animate-bounce duration-[3s]"
          />
          <div className="md:w-2/3">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Services Provided by Banks via Agency Banking
            </h2>
            <ul className="space-y-4 text-gray-600">
              {[
                "Account Transfers: Transfer funds using account or phone details.",
                "Loan Applications: Agents assist in loan applications.",
                "Utility Bill Payments: Pay for electricity, water, and gas.",
                "Customer Onboarding: Open accounts with agents.",
                "Loan Repayments: Convenient loan repayment services.",
                "Credit Card Payments: Easily make credit card payments.",
                "Service Registration: Sign up for new banking services.",
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-indigo-600 font-bold">•</span>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Service Statistics</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <h5 className="text-sm text-gray-500 mb-2">{stat.title}</h5>
                <p className="text-3xl font-bold text-indigo-600">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

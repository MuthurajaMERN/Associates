import React from "react";
import { FaUsers, FaBriefcase, FaHandshake } from "react-icons/fa";

export const Services = () => {
  const services = [
    {
      id: 1,
      title: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      icon: <FaUsers className="text-indigo-700 text-4xl mx-auto" />,
    },
    {
      id: 2,
      title: "National Associations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      icon: <FaBriefcase className="text-indigo-700 text-4xl mx-auto" />,
    },
    {
      id: 3,
      title: "Clubs And Groups",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      icon: <FaHandshake className="text-indigo-700 text-4xl mx-auto" />,
    },
  ];

  return (
    <section
      className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto"
      id="service"
    >
      <div className="text-center mb-8">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
          Our Clients
        </h2>
        <p className="text-neutralGrey">
          We have been working with some Fortune 500+ clients.
        </p>
      </div>

      <div className="mt-20 md:w-1/2 mx-auto text-center">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-3">
          Manage your entire community in a single system
        </h2>
        <p className="text-neutralGrey">Who is Ultrafly suitable for?</p>
      </div>

      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {services.map((service) => (
          <div
            className="px-4 py-8 text-center bg-gray-200 md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 border-indigo-700 transition-all duration-300 flex flex-col items-center justify-center h-full"
            key={service.id}
          >
            <div className="mb-4">{service.icon}</div>
            <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">
              {service.title}
            </h4>
            <p className="text-sm text-blue-400">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

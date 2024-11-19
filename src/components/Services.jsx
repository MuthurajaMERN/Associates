import React from "react";
import { FaUsers } from "react-icons/fa";


// import company1 from "../assets/company1.svg";
// import company2 from "../assets/company2.svg";
// import company3 from "../assets/company3.svg";
// import company4 from "../assets/company4.svg";
// import company5 from "../assets/company5.svg";
// import company6 from "../assets/company6.svg";
// import company7 from "../assets/company7.svg";

export const Services = () => {
  const services = [
    {
      id: 1,
      title: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image:{FaUsers}
      ,
    },
    {
      id: 1,
      title: "National Associations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      // image: "./src/assets/icons/association.svg",
    },
    {
      id: 1,
      title: "Clubs And Groups",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      // image: "/src/assets/icons/group-club.svg",
    },
  ];

  return (
    <>
    <section
      className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto"
      id="service"
    >
      <div className="text-center mb-8">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
          Our clients
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

      <div className="mt-14 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {services.map((service) => (
          <div
            className="px-4 py-8 text-center  bg-gray-200 md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 border-indigo-700 transition-all duration-300 flex items-center justify-center h-full"
            key={service.id}
          >
            <div>
              <div className="bg-[#d9dbe9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl border-blue-200">
                <img className="-ml-5" src={service.image} alt="" />
              </div>
              <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">
                {service.title}
              </h4>
              <p className="text-sm text-blue-400">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
<div>
  <div>

  <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">

<div className="rounded overflow-hidden flex flex-col max-w-xl mx-auto">

    <a href="#">
        <img className="w-full h-full" src="https://img.freepik.com/free-photo/hands-agent-client-shaking-hands-after-signed-contract-buy-new-apartment_1150-14836.jpg?t=st=1731750076~exp=1731753676~hmac=fbde030d51ef245eef908fc0b3eaca1d235b8b1fa101d16f199558453fbd8976&w=740"/>
    </a>
    <div className="relative -mt-10 px-10 pt-5 pb-16 bg-blue-300 m-10">
        <a href="#"
            className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">The
            Best Activewear from the Nordstrom Anniversary Sale</a>
        <p className="text-white text-sm">
            Today, I’m covering one of my favorite parts of the Nordstrom Anniversary Sale: the activewear!
        </p>
        <p className="mt-5 text-gray-600 text-xs">
            By
            <a href="#" className="text-xs text-indigo-600 transition duration-500 ease-in-out">
                Mehdi Ahmadi
            </a> | in <a href="#" className="text-xs text-indigo-600 transition duration-500 ease-in-out">
                Cooking
            </a>, <a href="#" className="text-xs text-indigo-600 transition duration-500 ease-in-out">
                Recipe
            </a>
        </p>
    </div>

</div>

</div>
  </div>
</div>
</>
  );
};

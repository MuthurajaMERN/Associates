import React from "react";
import aboutImg from "../assets/bankwork.png";
import { FaUsers } from "react-icons/fa6";


// Reusable SVG Icon Components
// const MembersIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48">
//     {/* SVG path here */}
//   </svg>
// );

// const ProjectsIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48">
//     {/* SVG path here */}
//   </svg>
// );

export const About = () => {
  return (
    <section>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="about">
        <div className="w-fit md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img src={aboutImg} alt="Illustration of agency banking" className="rounded-lg" />
          </div>

          <div className="w-screen md:w-3/5 mx-auto">
            <header>
              <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
                What is the meaning of agency banking?
              </h2>
            </header>
            <article className="md:w-3/4 text-sm text-neutralDGrey mb-8 leading-relaxed">
              <p>
                Victor was a farmer in a village very far from the city, and his son had started his high school
                study at a boarding school in the city. One day his son got sick and needed some extra cash urgently.
                Victor wanted to send him the money immediately, but there was no bank in the village.
              </p>
              <hr className="my-4" />
              <p>
                Agency banking acted as a lifesaver for Victor. So without further delay, let's understand what
                exactly agency banking is! In simple terms, agency banking is a service introduced by banks that
                allows them to offer their services without traditional branches, bringing financial services to
                underserved areas.
              </p>
            </article>
            <button className="btn-primary px-4 py-2 rounded-lg shadow-lg text-white bg-blue-600 hover:bg-blue-700">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-4 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2">
            <header>
              <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3">
                Helping a local <br />
                <span className="text-brandPrimary">business reinvent itself</span>
              </h2>
            </header>
            <p>We reached here with our hard work and dedication</p>
          </div>
        
          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
            <StatItem icon={<FaUsers classname="h-20 w-16 text-indigo-500" />} stat="2,245,341" label="Members" />
            <StatItem icon={<FaUsers classname="h-8 w-6 text-indigo-500"  />} stat="1,453" label="Projects" />
          </div>
        </div>
      </div>

      {/* image text to */}
<div>
      <div className="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black/50 before:z-10">
      <img src="https://readymadeui.com/cardImg.webp" alt="Banner Image" className="absolute inset-0 w-full h-full object-cover" />

      <div className="min-h-[380px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center p-6">
        <h2 className="text-white sm:text-4xl text-2xl font-bold mb-6">Showcase Your Product or Service in Style</h2>
        <p className="text-base text-center text-gray-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur nibh, a pharetra felis turpis vitae ligula. Etiam laoreet velit nec neque ultrices, non consequat mauris tincidunt.</p>
        <button type="button"
          className="px-6 py-3 mt-12 rounded-full text-white text-base tracking-wider font-semibold outline-none  bg-orange-600 hover:bg-orange-700 border-2 border-orange-600 transition-all duration-300">Getting started now</button>
      </div>
    </div>
    </div>
    </section>
  );
};

// Helper Component for statistics items
const StatItem = ({ icon, stat, label }) => (
  <div className="flex items-center gap-4">
    {icon}
    <div>
      <h4 className="text-2xl text-neutralDGrey font-semibold">{stat}</h4>
      <p>{label}</p>
    </div>
  </div>
);

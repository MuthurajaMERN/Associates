import { Carousel } from "flowbite-react";
import React from "react";
import banner1 from "../assets/new-top.jpg";
import banner2 from "../assets/fast.jpg";
import banner3 from "../assets/WYP-Trade.jpg";
import allinsureance from "../assets/allinsureance.jpg";

export const Home = () => {
  return (
    <>
      <section className="bg-neutralSilver" id="home">
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
          <Carousel className="w-full mx-auto">
            {/* Slide 1 */}
            <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-12 min-h-screen">
              <div className="flex-1 h-[80vh] flex items-center justify-center overflow-hidden">
                <img src={banner1} alt="Banner 1" className="w-3/4  object-cover rounded-lg" />
              </div>
              <div className="flex-1 flex flex-col items-center justify-center text-center md:text-left space-y-4">
                <h1 className="text-2xl md:text-3xl font-bold leading-tight">
                  Save for the future with India's No. 1 Bank - Open your Corporate Salary Account Now! <br />
                  <span className="text-brandPrimary">
                    HDFC Bank Corporate Salary Account is designed to salary seamlessly.
                  </span>
                </h1>
                <ul className="text-neutralGrey text-base md:text-lg space-y-1">
                  <li>Offers on Smartbuy, PayZapp, and UPI transactions</li>
                  <li>Zero balance A/c</li>
                  <li>Quick and convenient fund transfer</li>
                  <li>Free Debit Card with unlimited* ATM transactions and exclusive offers</li>
                </ul>
                <button className="px-6 py-3 bg-brandPrimary text-white font-semibold rounded-lg mt-6 hover:bg-brandPrimary-dark transition-colors">
                  Register
                </button>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-12 min-h-screen">
              <div className="flex-1 h-[80vh] flex items-center justify-center overflow-hidden">
                <img src={banner2} alt="Banner 2" className="w-full max-h-fit object-cover rounded-lg" />
              </div>
              <div className="flex-1 flex flex-col items-center justify-center text-center md:text-left space-y-4">
                <h1 className="text-2xl md:text-3xl font-bold leading-tight">
                  HDFC Bank XpressWay is a digital platform
                </h1>
                <p className="text-neutralGrey text-base md:text-lg">
                  Loans: XpressWay offers personal loans, business loans, car loans, home loans, and loans on cards. You can apply for loans up to Rs 40 lakh with no paperwork. Accounts: You can open or close a bank account, request a chequebook, and more. Investments: You can make investments and navigate various loan options.
                </p>
                <button className="px-6 py-3 bg-brandPrimary text-white font-semibold rounded-lg mt-6 hover:bg-brandPrimary-dark transition-colors">
                  Register
                </button>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-12 min-h-screen">
              <div className="flex-1 h-[80vh] flex items-center justify-center overflow-hidden">
                <img src={banner3} alt="Banner 3" className="w-full object-cover rounded-lg" />
              </div>
              <div className="flex-1 flex flex-col items-center justify-center text-center md:text-left space-y-4">
                <h1 className="text-2xl md:text-3xl font-bold leading-tight">
                  Let's grow your business! <br />
                  <span className="text-brandPrimary">
                    Get insights from over 6 years of expertise.
                  </span>
                </h1>
                <p className="text-neutralGrey text-base md:text-lg">
                  Where to grow your business as a photographer: site or social media?
                </p>
                <button className="px-6 py-3 bg-brandPrimary text-white font-semibold rounded-lg mt-6 hover:bg-brandPrimary-dark transition-colors">
                  Register
                </button>
              </div>
            </div>
          </Carousel>


        </div>
      </section>
      <div>
        <section className="relative mt-20">
          <div className="relative max-w-screen-lg mx-auto">
            {/* Background Image */}
            <img
              src={allinsureance}
              alt="Insurance Agent"
              className="h-[500px] w-full object-cover rounded-lg shadow-lg"
            />
            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-6 px-4 mt-72">
              <h2 className="text-blue-600 text-4xl font-bold py-2 px-4 rounded-lg bg-white bg-opacity-60">
                Find Your Insurance Agent!
              </h2>
              <p className="text-gray-800 text-lg py-2 px-4 rounded-lg bg-white bg-opacity-60">
                Say hello to a world of hassle-free insurance policies tailored for you.
              </p>
              <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transition-transform bg-opacity-60">
                Connect Now
              </button>
            </div>
          </div>
        </section>



      </div>
    </>
  );
};

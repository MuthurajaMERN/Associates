import React from "react";
import mobileImg from "../assets/mainBanner2.png";
import maecenas from "../assets/bank.png";
import { BsBank2 } from "react-icons/bs";
import { FaMobileScreenButton } from "react-icons/fa6";
import { FcMoneyTransfer } from "react-icons/fc";
import { FaUsers } from "react-icons/fa6";





export const Products = () => {
  return (
    <section>
      <div>
      <section className="bg-white pb-6">
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="container mx-auto px-6 p-6 bg-white">


            <div className="mb-16 text-center">
                <h4 className="text-base text-indigo-600 font-semibold tracking-wide uppercase text-3xl">Services</h4>
                <p className="mt-2 text-2xl lg:text-4xl font-bold tracking-tight text-gray-900">Agent Bank? Functions and Types of Agent Banks

                </p>
            </div>


            <div className="flex flex-wrap my-12">


                <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
                    <div className="flex items-center mb-6">
                        
                        <FaMobileScreenButton className="h-6 w-6 text-indigo-500" />

                        
                        <div className="ml-4 text-xl">Mobile banking</div>
                    </div>
                    <p className="leading-loose text-gray-500">A user can perform banking transactions on their mobile device, such as checking their balance, paying bills, or transferring funds. Mobile banking is convenient and allows users to access their account 24/7..
                    </p>
                </div>



                <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8">
                    <div className="flex items-center mb-6">
                    
                        <BsBank2 className="h-6 w-6 text-indigo-500" />
                        <div className="ml-4 text-xl">Banking agents</div>
                    </div>
                    <p className="leading-loose text-gray-500">A banking agent performs banking transactions on behalf of a bank, usually outside of a bank branch. This type of banking is common in rural areas and other areas that are difficult for banks to access.
                    </p>
                </div>



                <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8">
                    <div className="flex items-center mb-6">
                    
                        <FcMoneyTransfer className="h-6 w-6 text-green-500" />
                        <div className="ml-4 text-xl">Investment Banks</div>
                    </div>
                    <p className="leading-loose text-gray-500">Investment banks often serve as agent banks on institutional investment deals such as syndicated loans. An agent bank serving as a syndicate manager will contract with an issuer to arrange a syndicated loan.
                    </p>
                </div>



                <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8">
                    <div className="flex items-center mb-6">
                    <FaUsers className="h-6 w-6 text-blue-500" />
                        <div className="ml-4 text-xl">Third-Party Agent Banks</div>
                    </div>
                    <p className="leading-loose text-gray-500">
Oftentimes a business may need the support of an agent bank in order to launch new services. Partnership with a third-party agent bank is common for credit businesses who need a bank’s support in offering credit cards or loan programs.
                    </p>
                </div>



               
            
            </div>
        </div>
    </div>
</section>

      </div>



      {/* Product Overview Section */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="product">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          {/* Product Image */}
          <div className="md:w-3/5 mx-auto">
            <img src={mobileImg} alt="Overview of mobile banking services" className="w-full h-auto" />
          </div>

          {/* Product Description */}
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              Parties involved in Agency Banking
            </h2>
            <div className="md:w-3/4 text-sm text-neutralDGrey space-y-4 mb-8">
              <h5 className="text-lg font-semibold">Agency Banking Service Providers</h5>
              <p>Agency banking service providers manage various banking agents, oversee operations, handle marketing, cash, and branding responsibilities.</p>

              <h5 className="text-lg font-semibold">Banks/Financial Institutions</h5>
              <p>Banks and financial institutions host both consumer and agent accounts, facilitating the actual cash flow within the agency banking ecosystem.</p>
            </div>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="px-4 lg:px-4 max-w-screen-2xl mx-auto bg-neutralSilver py-16" id="testimonial">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Testimonial Image */}
          <div className="md:w-1/3">
            <img src={maecenas} alt="Client testimonial" className="w-full h-auto" />
          </div>

          {/* Testimonial Content */}
          <div className="md:w-2/3 mx-auto">
            <h1 className="text-3xl font-semibold mb-4">Services Provided by Banks via Agency Banking</h1>
            <ul className="md:w-4/5 text-sm text-neutralGrey mb-8 leading-7 list-disc list-inside space-y-2">
              <li><strong>Account Transfers:</strong> Agents assist in transferring funds using basic account or phone information.</li>
              <li><strong>Customer Loan Applications:</strong> Agents help customers apply for loans through agency banking.</li>
              <li><strong>Utility Bill Payments:</strong> Customers can pay for services like electricity, water, and gas.</li>
              <li><strong>Customer Onboarding:</strong> Open a bank account through agents.</li>
              <li><strong>Loan Repayments:</strong> Repay loans conveniently with agents’ assistance.</li>
              <li><strong>Credit Card Payments:</strong> Easily make credit card payments nearby.</li>
              <li><strong>Service Registration:</strong> Register for new services offered by banks.</li>
            </ul>
            {/* <div className="text-brandPrimary text-xl font-semibold mb-2">Mr_Manoj Kumar</div> */}
            <p className="text-base text-neutralGrey mb-8">Ultrafly Association</p>
          </div>
        </div>

        <div className="bg-gray-200 min-h-screen w-full dark:bg-gray-700 flex justify-center items-center">
  
    <div className="md:w-1/3 w-full">
      <img
        src={maecenas}
        alt="Client testimonial"
        className="w-full h-auto object-contain"
      />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:py-24 lg:px-8">

      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
        Our service statistics
      </h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-4 mt-4">
        <div className="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900">
          <div className="px-4 py-5 sm:p-6">
            <dl>
              <dt className="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">
                Total free servers
              </dt>
              <dd className="mt-1 text-3xl leading-9 font-semibold text-indigo-600 dark:text-indigo-400">
                1.6M
              </dd>
            </dl>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900">
          <div className="px-4 py-5 sm:p-6">
            <dl>
              <dt className="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">
                Servers a month
              </dt>
              <dd className="mt-1 text-3xl leading-9 font-semibold text-indigo-600 dark:text-indigo-400">
                19.2K
              </dd>
            </dl>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900">
          <div className="px-4 py-5 sm:p-6">
            <dl>
              <dt className="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">
                Servers a week
              </dt>
              <dd className="mt-1 text-3xl leading-9 font-semibold text-indigo-600 dark:text-indigo-400">
                4.9K
              </dd>
            </dl>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900">
          <div className="px-4 py-5 sm:p-6">
            <dl>
              <dt className="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">
                Total users
              </dt>
              <dd className="mt-1 text-3xl leading-9 font-semibold text-indigo-600 dark:text-indigo-400">
                166.7K
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        

      </div>
    </section>
  );
};

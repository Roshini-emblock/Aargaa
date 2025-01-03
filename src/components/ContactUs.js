import React from "react";

const ContactUs = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-between min-h-screen bg-gray-50 p-10">
      {/* Left Section - Contact Form */}
      <div className="w-full lg:w-1/2 p-6">
        <h3 className="text-sm uppercase text-gray-500 mb-2">Our Projects</h3>
        <h1 className="text-4xl font-bold mb-8">Contact us</h1>
        <form className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-gray-700 font-medium">
              Full name:
            </label>
            <input
              id="fullName"
              type="text"
              className="w-full mt-1 border-b border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-400"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email Address:
            </label>
            <input
              id="email"
              type="email"
              className="w-full mt-1 border-b border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-400"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-medium">
              Phone number:
            </label>
            <input
              id="phone"
              type="text"
              className="w-full mt-1 border-b border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-400" 
            />
          </div>
          <div>
            <label htmlFor="reason" className="block text-gray-700 font-medium">
              Reason to Contact:
            </label>
            <input
              id="reason"
              type="text"
              className="w-full mt-1 border-b border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-400"
            />
          </div>
          <div>
            <label htmlFor="details" className="block text-gray-700 font-medium">
              More details:
            </label>
            <textarea
              id="details"
              rows="4"
              className="w-full mt-1 border-b border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className=" bg-sky-950 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-600 transition duration-300"
          >
            Send Us Message
          </button>
        </form>
      </div>

      {/* Right Section - Image with Details */}
      <div className="w-full lg:w-1/2 p-6 flex justify-center items-center">
        <div className="relative bg-black rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://via.placeholder.com/400x500" // Replace with actual image URL
            alt="Project"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
            <p className="text-sm text-gray-300 uppercase">New York, New York</p>
            <h2 className="text-white text-2xl font-bold">Spotify Satellite Office</h2>
            <p className="text-gray-400 text-sm mt-2">1.2.22</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

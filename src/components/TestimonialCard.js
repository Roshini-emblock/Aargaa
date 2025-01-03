import React from "react";

const TestimonialCard = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100 p-10">
      <div className="relative flex w-full bg-gray-800 overflow-hidden shadow-lg">
      <button
      className="bg-gray-700 text-white text-sm font-medium hover:bg-gray-600 flex items-center justify-center"
      style={{
        writingMode: "vertical-lr", // Makes the text flow vertically
        textOrientation: "mixed", // Makes text sideways
        height: "120px", // Adjust height to fit the design
        width: "40px", // Adjust width to match button size
        padding: "20px 20px",
        marginTop: "10%",
      }}
    >
      PREVIOUS
    </button>
        {/* Left Section - Image */}
        <div className="w-1/3 relative">
          <img
            src="https://via.placeholder.com/400" // Replace with your image URL
            alt="Samantha Vohnhale"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Middle Section - Text */}
        <div className="w-1/3 flex flex-col justify-center p-6 bg-gray-700 text-white">
          <h2 className="text-2xl font-bold mb-2">Samantha Vohnhale</h2>
          <p className="text-sm uppercase tracking-wide text-gray-300">
            San Francisco, California
          </p>
        </div>

        {/* Right Section - Testimonial */}
        <div className="w-1/3 flex flex-col justify-center p-6 bg-gray-700 text-gray-300">
          <p>
            I am fully satisfied with your services. I had completed my home
            within a short period of time. The homes are spacious and well
            planned, with various facilities of high quality.
          </p>
        </div>

        {/* Right Navigation Button */}
      <button
      className="bg-gray-700 text-white text-sm font-medium hover:bg-gray-600 flex items-center justify-center"
      style={{
        writingMode: "vertical-rl", // Makes the text flow vertically
        textOrientation: "mixed", // Makes text sideways
        height: "120px", // Adjust height to fit the design
        width: "40px", // Adjust width to match button size
        padding: "20px 20px", // Remove unnecessary padding
        marginTop: "10%",
      }}
    >
      NEXT
    </button>

      </div>
    </div>
  );
};

export default TestimonialCard;

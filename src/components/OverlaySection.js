import React from "react";

function OverlaySection() {
  return (
  //   <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="pt-8 px-8">
      <div className="text-white max-w-lg p-6">
        <h4 className="text-sm uppercase tracking-widest text-gray-300 mb-5">
          About AARGAA Construction
        </h4>
        <div className="pb-5">
        {/* <h2 className="text-2xl font-bold leading-tight text-left mb-4"> */}
        <h2 className="text-3xl font-bold text-left">
          We're reliable, trustworthy 
        </h2>
        <h2 className="text-3xl font-bold text-left">
        and we uphold the highest standards of integrity
        </h2>
        <h2 className="text-3xl font-bold text-left mb-4">
       in all of our designs.
        </h2>
        </div>
        <p className="text-gray-300">Bala Venkatesh S., Director</p>
      </div>
      </div>
  );
}

export default OverlaySection;

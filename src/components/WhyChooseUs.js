import React from "react";
import {FaCheckCircle, FaClock, FaTools } from "react-icons/fa";

function WhyChooseUs() {
  return (
 <section className="py-20 bg-gray-100">
<div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left mb-12 px-10">
{/* Text Section */}
<div className="mb-6 md:mb-0 md:mr-6">
  <h2 className="text-sm uppercase tracking-wide text-gray-500">
    Why Choose Us?
  </h2>
  <h3 className="text-4xl font-bold">We do it best.</h3>
</div>
{/* Button Section */}
<div>
  <button className="px-6 py-3 bg-black text-white text-lg font-medium hover:bg-gray-800 transition-all rounded-full">
    More About Us
  </button>
</div>
</div>


 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
   {/* Feature 1 */}
   <div className="bg-white p-6 shadow-lg rounded-lg text-center max-w-xs mx-auto">
  <FaCheckCircle size={40} className="mx-auto text-black mb-4" />
  <h4 className="text-xl font-semibold mb-2">Quality Service</h4>
  <p className="text-gray-600 text-sm">
    We understand that every project requires careful attention to
    detail and a commitment to excellence. Our approach combines
    thorough research and adaptive design to create culturally robust,
    environmentally friendly structures.
  </p>
</div>


   {/* Feature 2 */}
   <div className="bg-white p-6 shadow-lg rounded-lg text-center max-w-xs mx-auto">
     <FaClock size={40} className="mx-auto text-black mb-4" />
     <h4 className="text-xl font-semibold mb-2">24/7 Support</h4>
     <p className="text-gray-600 text-sm">
       With AARGAA Construction, you can expect round-the-clock support
       throughout every stage of your project. We work closely with you
       to navigate complex challenges.
     </p>
   </div>

   {/* Feature 3 */}
   <div className="bg-white p-6 shadow-lg rounded-lg text-center max-w-xs mx-auto">
     <FaTools size={40} className="mx-auto text-black mb-4" />
     <h4 className="text-xl font-semibold mb-2">Modern Technologies</h4>
     <p className="text-gray-600 text-sm">
       AARGAA Construction uses the latest technologies to enhance
       precision in every project. We leverage cutting-edge tools to
       manage and oversee construction projects with accuracy.
     </p>
   </div>
 </div>
</section>

  );
}

export default WhyChooseUs;

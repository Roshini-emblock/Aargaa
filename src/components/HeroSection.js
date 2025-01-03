import React from "react";
function HeroSection() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url("https://s3-alpha-sig.figma.com/img/3baf/ce7d/e6825902bb89cec14d58524edaf3e2bd?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o4TgnENMjOKY6W9it7sMxIwn6BykvVkbwqcJcuEzY1OL47YbmD9huTIFxskopv0y17FrpwEwLJj6ayaI6W9umD0jJjg95rnqEQy5GTWuUUhDqoXiajw~kWReddPh7-uIzKyEuU8L5gnKN43~LPZyrW3rcseFJW8DpZfrQ2mn0sTph~wMIfCReHPjA2lqDCcZ0unr48F3x1-bMqmoscVK3adkJA5efAJKU0tCMvLBsiTOzqNjKt6fR5ajnAYJ6qyN9nGU2hoJlx~uH9lbhE1vuSqsCXXX0uzHUCt8zMamIr5rQLqjT9SUSmHfmXA7bbQ6OlkDFVG3lZm0yf7fjEHEnA__")`,
        }}
      >
           <img
            src="https://s3-alpha-sig.figma.com/img/da66/2d05/45051fc4c742b8c009e5a25ae73bd972?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oSzkmj5uO6p4a1oyaw3Azg8hq5zj6GoowZjbkSAj6D0rXVpF8~NnHjKmx8QJrSkdlPPOzHzVrZSnMJ-vIuLrZIcnqWc9zsZGgR7OBAd7GacSlriq1f-xe4wdk3RxAgnFD1c1y9ndbWTNq8HKZMbbCT-D2XROmmSFadpxjW7fF4oj8jrRab7OqMsLQ9QBKXl01dGt9DGlvicfc5dcwzkKkZfGR~01UcrXbK4cGCKCwnIggaGyQKD8pARueOlwMh~fevWvjEousWVrigYUnzLuLlGL-DJdiADEYvz9VjZw97qT2eZM~63KNaGMhFtuwK5UxZaR7ShBeXLDduBuQiWa-w__"
            alt="AARGAA Construction Logo"
            className="h-20 px-5 pt-5"
          />
        {/* Overlay Content */}
        <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-white space-y-6">
          <h1 className="text-6xl font-extrabold">AARGAA</h1>
          <h1 className="text-6xl font-extrabold">CONSTRUCTION</h1>
          <button className="px-6 py-3 bg-transparent text-white text-lg font-medium hover:bg-gray-800 transition-all rounded-full border border-white">
    Schedule a Call
  </button>
        </div>
        <p className="absolute bottom-32 right-64 text-lg font-light max-w-md text-white">
          WE ARE RELIABLE, TRUSTWORTHY, AND WE<br/>
          UPHOLD THE HIGHEST STANDARDS OF<br/>
          INTEGRITY IN ALL OUR DESIGN.
        </p>
      </section>
    </>
  );
}

export default HeroSection;
// import React from "react";

// const HeroSection = () => {
//   return (
//     <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url('https://s3-alpha-sig.figma.com/img/3baf/ce7d/e6825902bb89cec14d58524edaf3e2bd?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o4TgnENMjOKY6W9it7sMxIwn6BykvVkbwqcJcuEzY1OL47YbmD9huTIFxskopv0y17FrpwEwLJj6ayaI6W9umD0jJjg95rnqEQy5GTWuUUhDqoXiajw~kWReddPh7-uIzKyEuU8L5gnKN43~LPZyrW3rcseFJW8DpZfrQ2mn0sTph~wMIfCReHPjA2lqDCcZ0unr48F3x1-bMqmoscVK3adkJA5efAJKU0tCMvLBsiTOzqNjKt6fR5ajnAYJ6qyN9nGU2hoJlx~uH9lbhE1vuSqsCXXX0uzHUCt8zMamIr5rQLqjT9SUSmHfmXA7bbQ6OlkDFVG3lZm0yf7fjEHEnA__')` }}>
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-50"></div>

//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-4 py-16 text-white">
//         {/* Main Title */}
//         <h1 className="text-6xl font-bold mb-4">AARGAA CONSTRUCTION</h1>
//         <p className="text-lg max-w-lg mb-8">
//           WE ARE RELIABLE, TRUSTWORTHY, AND WE UPHOLD THE HIGHEST STANDARDS OF INTEGRITY IN ALL OF OUR DESIGN.
//         </p>
//         <button className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition duration-300">
//           Schedule a Call
//         </button>

//         {/* Featured Section */}
//         <div className="absolute left-10 bottom-40 bg-white p-4 rounded-lg shadow-lg mt-20">
//           <p className="text-sm uppercase font-medium text-gray-500 mb-2">Featured</p>
//           <h3 className="text-lg font-semibold text-black">MetLife Corporate Space</h3>
//           <p className="text-sm text-gray-400">Karur, Tamilnadu</p>
//         </div>

//         {/* Corporate Clients */}
//         <div className="absolute bottom-10 left-0 w-full bg-white py-6 px-4 shadow-lg">
//           <h4 className="text-center text-gray-500 font-medium text-sm uppercase mb-4">Corporate Clients</h4>
//           <div className="flex justify-center items-center space-x-10">
//             <img src="https://via.placeholder.com/100" alt="Client 1" className="h-12 grayscale hover:grayscale-0 transition" />
//             <img src="https://via.placeholder.com/100" alt="Client 2" className="h-12 grayscale hover:grayscale-0 transition" />
//             <img src="https://via.placeholder.com/100" alt="Client 3" className="h-12 grayscale hover:grayscale-0 transition" />
//             <img src="https://via.placeholder.com/100" alt="Client 4" className="h-12 grayscale hover:grayscale-0 transition" />
//             <img src="https://via.placeholder.com/100" alt="Client 5" className="h-12 grayscale hover:grayscale-0 transition" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

import React from "react";
const HeroSection2 = () => {
  return (
    <>
    <div className="relative h-screen bg-cover bg-center mt-20 mx-20" style={{ backgroundImage: `url("https://s3-alpha-sig.figma.com/img/3baf/ce7d/e6825902bb89cec14d58524edaf3e2bd?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o4TgnENMjOKY6W9it7sMxIwn6BykvVkbwqcJcuEzY1OL47YbmD9huTIFxskopv0y17FrpwEwLJj6ayaI6W9umD0jJjg95rnqEQy5GTWuUUhDqoXiajw~kWReddPh7-uIzKyEuU8L5gnKN43~LPZyrW3rcseFJW8DpZfrQ2mn0sTph~wMIfCReHPjA2lqDCcZ0unr48F3x1-bMqmoscVK3adkJA5efAJKU0tCMvLBsiTOzqNjKt6fR5ajnAYJ6qyN9nGU2hoJlx~uH9lbhE1vuSqsCXXX0uzHUCt8zMamIr5rQLqjT9SUSmHfmXA7bbQ6OlkDFVG3lZm0yf7fjEHEnA__")`,}}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
        <h2 className="text-lg uppercase tracking-wide mb-4">Explore Our Work</h2>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">See what we can do together.</h1>
        <button className="px-8 py-3 bg-transparent text-white rounded-full font-medium hover:bg-gray-200 transition border border-white">
          View All Projects
        </button>
      </div>
    </div>
    <div className="flex space-x-36 bg-zinc-400 text-black-400 mx-40 py-8 justify-center">
               <a href="#building-services" className="hover:text-black">BUILDING SERVICES</a>
               <a href="#residential-projects" className="hover:text-black">RESIDENTIAL PROJECTS</a>
               <a href="#commercial-projects" className="hover:text-black">COMMERCIAL PROJECTS</a>
    </div>
    </>
  );
}

export default HeroSection2;

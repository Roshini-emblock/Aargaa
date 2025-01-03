import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">AARGAA CONSTRUCTION</h2>
          <p className="text-gray-400 mb-4">
            We believe in design as a process. We research into creating a built environment that is adaptive and contextual. We see architecture as a language that speaks of the place.
          </p>
          <div className="mb-4">
            <h3 className="text-sm font-medium">Address</h3>
            <p className="text-gray-400">
              • 109/A, Rasi Nagar, North Collector Office, Collector Office Post, Karur - 639007
              <br />
              • HA-3, 9th Cross Street, RM Colony, Dindigul - 1
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-sm font-medium">Email</h3>
            <p className="text-gray-400">aargaaconstruction@gmail.com</p>
          </div>
          <div>
            <h3 className="text-sm font-medium">Phone No</h3>
            <p className="text-gray-400">
              +91 - 9943318199, +91 - 9943578199, +91 - 9487687618
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-sm font-medium mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li className="border-t border-gray-700">
              <a href="#home" className="text-gray-400 hover:text-white transition">
                Home
              </a>
            </li>
            <li className="border-t border-gray-700">
              <a href="#about-us" className="text-gray-400 hover:text-white transition">
                About Us
              </a>
            </li>
            <li className="border-t border-gray-700">
              <a href="#services" className="text-gray-400 hover:text-white transition">
                Services
              </a>
            </li>
            <li className="border-t border-gray-700">
              <a href="#gallery" className="text-gray-400 hover:text-white transition">
                Gallery
              </a>
            </li>
            <li className="border-t border-gray-700">
              <a href="#contact" className="text-gray-400 hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us Links */}
        <div>
          <h3 className="text-sm font-medium mb-4">Follow Us</h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2 border-t border-gray-700">
              <span className="text-gray-400">@argaaconstructions</span>
            </li>
            <li className="flex items-center space-x-2 border-t border-gray-700">
              <span className="text-gray-400">@argaaconstructions</span>
            </li>
            <li className="flex items-center space-x-2 border-t border-gray-700">
              <span className="text-gray-400">@argaaconstructions</span>
            </li>
            <li className="flex items-center space-x-2 border-t border-gray-700">
              <span className="text-gray-400">@argaaconstructions</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="pl-96 pr-0 text-center text-gray-500 text-sm">
        © 2024 AARGAA CONSTRUCTIONS. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;


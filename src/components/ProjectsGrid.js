import React from "react";

const projects = [
  { id: 1, title: "Allstate Employee Lounge", location: "Miami, Florida", image: "allstate.jpg" },
  { id: 2, title: "Spotify Satellite Office", location: "New York, New York", image: "spotify.jpg" },
  { id: 3, title: "Microsoft Office Lounge", location: "Miami, Florida", image: "microsoft.jpg" },
  { id: 4, title: "Exxon Mobile Offices", location: "Los Angeles, California", image: "exxon.jpg" },
  { id: 5, title: "Delta Satellite Office", location: "Atlanta, Georgia", image: "delta.jpg" },
  { id: 6, title: "Disney Employee Loft", location: "Orlando, Florida", image: "disney.jpg" },
  { id: 7, title: "Nike Corporate Space", location: "Portland, Oregon", image: "nike.jpg" },
  { id: 8, title: "MetLife Corporate Space", location: "New York, New York", image: "metlife.jpg" },
  { id: 9, title: "Home Depot Headquarters", location: "Atlanta, Georgia", image: "homedepot.jpg" },
];

const ProjectsGrid = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`
                ${index === 0 ? "mt-36" : "" } ${index === 1 ? "mt-24 mb-4" : ""} ${index === 2 ? "mt-36" : ""}
                  ${index === 3 ? "mt-40" : "" } ${index === 4 ? "mt-52" : ""} ${index === 5 ? "mt-40" : ""}
                    ${index === 6 ? "mt-40" : "" } ${index === 7 ? "mt-24 mb-4" : ""} ${index === 8 ? "mt-40" : ""}
                `}
            >
              <div className="relative group overflow-hidden bg-black shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm uppercase tracking-wide">{project.location}</p>
                  <h3 className="text-lg font-bold">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsGrid;

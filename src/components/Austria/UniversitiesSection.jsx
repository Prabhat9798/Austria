import React from "react";

const UniversitiesSection = () => {
  const universities = [
    {
      id: 1,
      name: "University of Vienna",
      location: "Vienna, Austria",
    },
    {
      id: 2,
      name: "Graz University of Technology",
      location: "Graz, Austria",
    },
    {
      id: 3,
      name: "Vienna University of Technology (TU Wien)",
      location: "Vienna, Austria",
    },
    {
      id: 4,
      name: "University of Innsbruck",
      location: "Innsbruck, Austria",
    },
    {
      id: 5,
      name: "Johannes Kepler University Linz",
      location: "Linz, Austria",
    },
    {
      id: 6,
      name: "MODUL University Vienna",
      location: "Vienna, Austria",
    },
    {
      id: 7,
      name: "FH JOANNEUM",
      location: "Graz, Austria",
    },
    {
      id: 8,
      name: "IMC University of Applied Sciences Krems",
      location: "Krems, Austria",
    },
  ];

  const colors = [
    "bg-blue-100 text-blue-800",
    "bg-green-100 text-green-800",
    "bg-yellow-100 text-yellow-800",
    "bg-pink-100 text-pink-800",
    "bg-purple-100 text-purple-800",
    "bg-red-100 text-red-800",
    "bg-indigo-100 text-indigo-800",
  ];

  return (
    <section className="py-16 px-6 lg:px-12 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-4xl font-bold  mb-8">
            Top Universities in <span className="bg-gradient-to-r from-[#E56D09] via-[#D83E13] to-[#D83E13] bg-clip-text text-transparent">Austria</span>
          </h2>
        </div>

        {/* Universities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {universities.map((university, index) => {
            const initials = university.name.charAt(0);
            const colorClass = colors[index % colors.length];

            return (
              <div
                key={university.id}
                className="bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    {/* University Initial */}
                    <div className="flex-shrink-0">
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl ${colorClass}`}
                      >
                        {initials}
                      </div>
                    </div>

                    {/* University Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className=" text-lg mb-2 group-hover:text-orange-700 transition-colors">
                        {university.name}
                      </h3>
                      <p className="text-gray-600 text-sm">{university.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UniversitiesSection;

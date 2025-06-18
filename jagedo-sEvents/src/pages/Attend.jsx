import React from "react";
import { FaHardHat, FaLaptopCode, FaUniversity, FaHandshake } from "react-icons/fa";

const whoShouldAttend = [
  {
    icon: <FaHardHat className="text-blue-600" />,
    title: "Construction Professionals",
    description: "Engineers, architects, contractors, and site managers looking to embrace new technologies.",
    highlights: ["Smart building materials", "Safety innovations", "Project efficiency"],
  },
  {
    icon: <FaLaptopCode className="text-green-600" />,
    title: "Tech Innovators",
    description: "Developers, startups, and product teams working on smart construction tools and systems.",
    highlights: ["AI for construction", "IoT integrations", "Automation solutions"],
  },
  {
    icon: <FaUniversity className="text-purple-600" />,
    title: "Academic & Researchers",
    description: "Institutions and researchers exploring the future of construction through R&D.",
    highlights: ["Sustainable design", "Robotics in construction", "Advanced materials"],
  },
  {
    icon: <FaHandshake className="text-yellow-600" />,
    title: "Investors & Policy Makers",
    description: "Government bodies, investors, and regulators shaping the infrastructure of tomorrow.",
    highlights: ["Funding opportunities", "Policy insights", "Infrastructure strategy"],
  },
];

const Attend = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Who Should Attend?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            JBIS brings together diverse professionals from across the construction and technology ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {whoShouldAttend.map((attendee, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl flex-shrink-0">{attendee.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {attendee.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{attendee.description}</p>
                  <div className="space-y-2">
                    {attendee.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Attend;

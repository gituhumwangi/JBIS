import React from "react";
import { Calendar, MapPin, Clock } from "lucide-react"; // Install lucide-react if needed

const programSchedule = [
  {
    time: "08:00 AM",
    type: "registration",
    title: "Registration & Welcome Coffee",
    description: "Check-in and morning refreshments as attendees arrive.",
  },
  {
    time: "09:00 AM",
    type: "keynote",
    title: "Opening Keynote: The Future of Construction",
    description: "A visionary talk on digital transformation in the industry.",
  },
  {
    time: "10:30 AM",
    type: "panel",
    title: "Panel: Sustainable Building Innovations",
    description: "Experts discuss eco-friendly materials and practices.",
  },
  {
    time: "12:00 PM",
    type: "break",
    title: "Networking Lunch",
    description: "A chance to connect with fellow innovators and leaders.",
  },
  {
    time: "01:30 PM",
    type: "workshop",
    title: "Hands-On Workshop: BIM & Smart Tools",
    description: "Interactive session on Building Information Modeling.",
  },
  {
    time: "03:00 PM",
    type: "talk",
    title: "Fireside Chat: Building Startups in Construction Tech",
    description: "Startup founders share their journeys and insights.",
  },
  {
    time: "04:30 PM",
    type: "closing",
    title: "Closing Remarks & Future Steps",
    description: "Wrapping up the summit with action plans and thanks.",
  },
];

const getScheduleTypeColor = (type) => {
  switch (type.toLowerCase()) {
    case "keynote":
      return "bg-yellow-100 text-yellow-800";
    case "panel":
      return "bg-blue-100 text-blue-800";
    case "workshop":
      return "bg-green-100 text-green-800";
    case "talk":
      return "bg-purple-100 text-purple-800";
    case "registration":
    case "break":
      return "bg-gray-100 text-gray-800";
    case "closing":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const SummitProgram = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Summit Program</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A full day of learning, networking, and innovation in the construction industry.
          </p>
          <div className="flex items-center justify-center mt-4 space-x-6 text-sm text-gray-600">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              July 27, 2025
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              WestPark Towers, Nairobi
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              9:00 AM – 5:00 PM
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden text-center">
          {programSchedule.map((session, index) => (
            <div
              key={index}
              className={`p-6 ${index !== programSchedule.length - 1 ? "border-b border-gray-200" : ""}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-left">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {session.time}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${getScheduleTypeColor(session.type)}`}>
                      {session.type.charAt(0).toUpperCase() + session.type.slice(1)}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{session.title}</h3>
                  <p className="text-gray-600 text-sm">{session.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SummitProgram;

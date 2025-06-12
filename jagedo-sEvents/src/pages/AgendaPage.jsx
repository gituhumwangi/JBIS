import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

const AgendaPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
      {/* Header */}
      <NavBar />

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-10 space-y-12">

        {/* About the Event */}
        <section id="about" className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">About the Event</h2>
          <p className="text-gray-700">
            The JaGedo Annual Conference brings together professionals, innovators, and creatives in the construction and tech industries to explore the future of collaborative building. This year's theme is "Innovation and Integration", with hands-on workshops, keynote talks, and live showcases.
          </p>
        </section>

        {/* Why Attend */}
        <section id="why" className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Why Attend</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Connect with industry leaders and like-minded professionals.</li>
            <li>Gain insights into the latest technologies in construction and tech.</li>
            <li>Participate in hands-on sessions to build practical skills.</li>
            <li>Get inspired by real-world success stories and projects.</li>
          </ul>
        </section>

        {/* Schedule */}
        <section id="schedule" className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Schedule</h2>
          <ul className="text-gray-700 space-y-3">
            <li><strong>9:00 AM:</strong> Opening Ceremony</li>
            <li><strong>10:00 AM:</strong> Keynote: The Future of Urban Design</li>
            <li><strong>11:30 AM:</strong> Panel: Tech Meets Construction</li>
            <li><strong>1:00 PM:</strong> Networking Lunch</li>
            <li><strong>2:00 PM:</strong> Breakout Sessions & Workshops</li>
            <li><strong>4:30 PM:</strong> Community Showcase</li>
            <li><strong>6:00 PM:</strong> Closing Remarks</li>
          </ul>
        </section>

        {/* Speakers */}
        <section id="speakers" className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Speakers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm text-center">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Speaker 1"
                className="w-20 h-20 rounded-full mx-auto mb-2"
              />
              <h3 className="font-semibold">David Karanja</h3>
              <p className="text-sm text-gray-500">Architect & Urban Planner</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm text-center">
              <img
                src="https://randomuser.me/api/portraits/women/45.jpg"
                alt="Speaker 2"
                className="w-20 h-20 rounded-full mx-auto mb-2"
              />
              <h3 className="font-semibold">Janet Kimani</h3>
              <p className="text-sm text-gray-500">CTO, BuildTech Africa</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm text-center">
              <img
                src="https://randomuser.me/api/portraits/men/65.jpg"
                alt="Speaker 3"
                className="w-20 h-20 rounded-full mx-auto mb-2"
              />
              <h3 className="font-semibold">Samuel Oduor</h3>
              <p className="text-sm text-gray-500">Construction Innovator</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AgendaPage;

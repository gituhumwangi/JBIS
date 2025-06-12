import React from 'react';
import Event1 from '../assets/Event1.jpg';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

const EventsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      {/* NavBar */}
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <NavBar />
      </div>

      {/* Main Content */}
      <main className="px-4 sm:px-6 py-8 max-w-4xl mx-auto w-full">
        {/* Heading Section */}
        <section className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
            Upcoming Events
          </h2>
          <p className="text-gray-600">
            Explore upcoming events in the JaGedo community. Register to participate, exhibit, or partner with us.
          </p>
        </section>

        {/* Event Card */}
        <section className="flex flex-col md:flex-row bg-white shadow-sm rounded-xl overflow-hidden mb-8">
          {/* Image */}
          <div
            className="h-56 md:h-auto md:w-1/2 bg-cover bg-center"
            style={{ backgroundImage: `url(${Event1})` }}
          ></div>

          {/* Details */}
          <div className="p-5 sm:p-6 flex flex-col justify-between md:w-1/2">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                JaGedo Construction & Infrastructure Summit 2024
              </h3>
              <p className="text-gray-600 mb-2">
                Building the future together - Connect with industry leaders, contractors, and innovators in construction technology.
              </p>
              <p className="text-gray-500 text-sm">September 20, 2024 | Nairobi Convention Center</p>
            </div>

            {/* CTA Button */}
            <div className="mt-4">
              <Link
                to="/register"
                className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-700 transition"
              >
                Register Now
              </Link>
            </div>
          </div>
        </section>

        {/* About the Event Section */}
        <section className="mb-8 bg-gray-50 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="mr-2">🏗️</span>
            About the Event
          </h3>
          <p className="text-gray-600 mb-4">
            The JaGedo Construction & Infrastructure Summit is Kenya's premier gathering for construction professionals, 
            engineers, architects, and technology innovators. This year's theme "Building Tomorrow's Infrastructure Today" 
            focuses on sustainable construction practices, digital transformation, and innovative building technologies.
          </p>
          <p className="text-gray-600">
            Join over 500 industry professionals for two days of networking, learning, and collaboration. From foundation 
            to finishing, we'll cover every aspect of modern construction while showcasing the latest tools, techniques, 
            and technologies shaping our industry's future.
          </p>
        </section>

        {/* Why Attend Section */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="mr-2">⚡</span>
            Why Attend
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">🔨 Hands-On Workshops</h4>
              <p className="text-gray-600 text-sm">
                Learn cutting-edge construction techniques from industry experts and get hands-on experience with the latest tools and equipment.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">🤝 Network & Build Connections</h4>
              <p className="text-gray-600 text-sm">
                Connect with contractors, suppliers, architects, and potential clients. Build relationships that last beyond the event.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">📈 Business Growth Opportunities</h4>
              <p className="text-gray-600 text-sm">
                Discover new markets, partnership opportunities, and strategies to scale your construction business effectively.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">🚀 Innovation Showcase</h4>
              <p className="text-gray-600 text-sm">
                Explore the latest construction technologies, sustainable materials, and digital tools transforming the industry.
              </p>
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="mr-2">📅</span>
            Event Schedule
          </h3>
          <div className="space-y-4">
            {/* Day 1 */}
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-3 text-lg">Day 1 - September 20, 2024</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 font-medium text-sm bg-blue-50 px-2 py-1 rounded">8:00 AM</span>
                  <div>
                    <p className="font-medium text-gray-800">Registration & Breakfast</p>
                    <p className="text-gray-600 text-sm">Welcome coffee and networking</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 font-medium text-sm bg-blue-50 px-2 py-1 rounded">9:00 AM</span>
                  <div>
                    <p className="font-medium text-gray-800">Keynote: Future of Construction in East Africa</p>
                    <p className="text-gray-600 text-sm">Opening address on industry trends and opportunities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 font-medium text-sm bg-blue-50 px-2 py-1 rounded">10:30 AM</span>
                  <div>
                    <p className="font-medium text-gray-800">Panel: Sustainable Building Materials</p>
                    <p className="text-gray-600 text-sm">Exploring eco-friendly construction solutions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 font-medium text-sm bg-blue-50 px-2 py-1 rounded">2:00 PM</span>
                  <div>
                    <p className="font-medium text-gray-800">Workshop: Digital Construction Tools</p>
                    <p className="text-gray-600 text-sm">Hands-on session with BIM and project management software</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-3 text-lg">Day 2 - September 21, 2024</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 font-medium text-sm bg-blue-50 px-2 py-1 rounded">9:00 AM</span>
                  <div>
                    <p className="font-medium text-gray-800">Construction Safety Best Practices</p>
                    <p className="text-gray-600 text-sm">Safety protocols and risk management strategies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 font-medium text-sm bg-blue-50 px-2 py-1 rounded">11:00 AM</span>
                  <div>
                    <p className="font-medium text-gray-800">Equipment Exhibition</p>
                    <p className="text-gray-600 text-sm">Latest machinery and construction equipment showcase</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 font-medium text-sm bg-blue-50 px-2 py-1 rounded">2:00 PM</span>
                  <div>
                    <p className="font-medium text-gray-800">Networking Lunch & Closing</p>
                    <p className="text-gray-600 text-sm">Final networking session and event wrap-up</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Speakers Section */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="mr-2">🎤</span>
            Featured Speakers
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
              <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl">👷</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-1">James Mwangi</h4>
              <p className="text-gray-600 text-sm mb-2">Senior Civil Engineer</p>
              <p className="text-gray-500 text-xs">20+ years experience in infrastructure development across East Africa</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
              <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl">👩‍💼</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-1">Sarah Njeri</h4>
              <p className="text-gray-600 text-sm mb-2">Sustainable Construction Expert</p>
              <p className="text-gray-500 text-xs">Leading advocate for eco-friendly building practices in Kenya</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
              <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl">👨‍💻</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-1">David Kimani</h4>
              <p className="text-gray-600 text-sm mb-2">Construction Tech Innovator</p>
              <p className="text-gray-500 text-xs">Founder of leading construction management software platform</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
              <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl">🏗️</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-1">Maria Ochieng</h4>
              <p className="text-gray-600 text-sm mb-2">Project Management Director</p>
              <p className="text-gray-500 text-xs">Specialist in large-scale commercial and residential developments</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
              <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl">⚙️</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-1">Peter Wanjiku</h4>
              <p className="text-gray-600 text-sm mb-2">Equipment & Safety Specialist</p>
              <p className="text-gray-500 text-xs">Expert in construction safety protocols and heavy machinery operation</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
              <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-1">Grace Mutua</h4>
              <p className="text-gray-600 text-sm mb-2">Construction Finance Advisor</p>
              <p className="text-gray-500 text-xs">Helping contractors secure funding and manage project finances</p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="text-center bg-blue-50 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Ready to Build Your Future?</h3>
          <p className="text-gray-600 mb-4">
            Don't miss this opportunity to connect, learn, and grow with Kenya's construction community.
          </p>
          <Link
            to="/register"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition mr-4"
          >
            Register Now
          </Link>
          <Link
            to="/contact"
            className="inline-block px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-full hover:bg-blue-50 transition"
          >
            Contact Us
          </Link>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default EventsPage;
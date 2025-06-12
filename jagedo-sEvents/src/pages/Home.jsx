import React from 'react';
import NavBar from '../components/NavBar';
import Button from '../components/Button';
import JaGedoHeroSection from "../assets/JaGedoHeroSection.jpg";
import Card1 from '../assets/Event1.jpg';
import Card2 from '../assets/Event2.jpg';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Navigation */}
      <NavBar />

      {/* Hero Section */}
      <div className="px-4 md:px-20 lg:px-40 py-8">
        <div
          className="min-h-[480px] rounded-xl bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-center p-6 gap-4"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(${JaGedoHeroSection})`,
          }}
        >
          <h1 className="text-white text-3xl md:text-4xl font-bold font-manrope">Join JaGedo</h1>
          <p className="text-white text-base max-w-xl">Join us for exciting events and projects that bring our community together.</p>
          <Button className="bg-blue-700 hover:bg-blue-600 text-white font-bold px-6 py-2 mt-2">
            <Link to="/registration">Register Now</Link>
          </Button>
        </div>
      </div>

      {/* Events Section */}
      <div className="px-4 md:px-20 lg:px-40 py-10">
        <h2 className="text-gray-900 text-3xl md:text-4xl font-bold text-center md:text-left mb-6">Upcoming Events</h2>
        <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
          {[Card1, Card2, Card1].map((img, i) => (
            <Link to="events" key={i} className="flex flex-col gap-4 rounded-lg min-w-[15rem] flex-shrink-0 hover:shadow-lg transition bg-white p-2">
              <div
                className="w-full aspect-video bg-cover bg-center rounded-xl"
                style={{ backgroundImage: `url(${img})` }}
              />
              <div>
                <p className="text-gray-900 font-medium text-base">Community Workshop on Sustainable Solutions</p>
                <p className="text-gray-500 text-sm">Learn about sustainable practices and contribute to community projects.</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* About Us Section */}
      <section className="py-16 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center order-2 lg:order-1">
            <img
              className="rounded-xl w-full h-auto object-cover"
              src="https://pagedone.io/asset/uploads/1717741205.png"
              alt="about"
            />
            <img
              className="rounded-xl w-full h-auto object-cover"
              src="https://pagedone.io/asset/uploads/1717741215.png"
              alt="about"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2">
            <h2 className="text-gray-900 text-3xl md:text-4xl font-bold mb-4">Empowering Each Other to Succeed</h2>
            <p className="text-gray-500 mb-6">
              Every project we've undertaken has been a collaborative effort. Together, we've not only constructed buildings but also built enduring connections that define our success story.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-900">33+</h3>
                <p className="text-sm text-gray-500">Years of Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">125+</h3>
                <p className="text-sm text-gray-500">Successful Projects</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">52+</h3>
                <p className="text-sm text-gray-500">Happy Clients</p>
              </div>
            </div>
            <button className="w-full sm:w-auto px-6 py-2 bg-blue-700 hover:bg-blue-600 text-white rounded-lg transition duration-300">
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;

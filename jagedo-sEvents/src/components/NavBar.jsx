import React, { useState } from 'react';
import Japageologo from "../assets/Japageologo.webp";
import Button from './Button';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // for hamburger and close icons

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white drop-shadow-sm pt-1">
      <div className="flex justify-between items-center px-6 py-4 md:px-12">
        {/* Left: Logo */}
        <a href="/">
          <img src={Japageologo} alt="Logo" className="w-22 h-12 rounded-lg object-contain" />
        </a>

        {/* Hamburger menu button (Mobile only) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Center nav links (Desktop only) */}
        <ul className="hidden md:flex space-x-8 text-gray-700">
          <li><a href="/events" className="hover:text-blue-500">Events</a></li>
          <li><a href="/projects" className="hover:text-blue-500">Projects</a></li>
          <li><Link to="/sponsors" className="hover:text-blue-500">Sponsors</Link></li>
          <li><a href="/faqs" className="hover:text-blue-500">FAQs</a></li>
        </ul>

        {/* Right-side button (Desktop only) */}
        <div className="hidden md:block">
          <Button className="bg-blue-700 hover:bg-blue-600 text-white font-bold">
            <Link to="/registration">Register</Link>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col space-y-4 text-gray-700">
            <li><a href="/events" className="hover:text-blue-500">Events</a></li>
            <li><a href="/projects" className="hover:text-blue-500">Projects</a></li>
            <li><Link to="/sponsors" className="hover:text-blue-500">Sponsors</Link></li>
            <li><a href="/faqs" className="hover:text-blue-500">FAQs</a></li>
            <li>
              <Button className="bg-blue-700 hover:bg-blue-600 text-white font-bold w-full">
                <Link to="/registration">Register</Link>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

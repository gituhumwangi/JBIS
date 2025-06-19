import React, { useState } from 'react';
import Japageologo from "../assets/Japageologo.webp";
import Button from './Button';
import { Link } from 'react-router-dom';
import { Menu, Phone } from 'lucide-react'; // for hamburger and close icons

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white drop-shadow-sm pt-1">
      <div className="flex justify-between items-center px-6 py-4 md:px-12 ">
        {/* Left: Logo */}
        <a href="/">
          <img src={Japageologo} alt="Logo" className="w-40 md:w-60 lg:w-80 rounded-lg object-contain h-auto" />
        </a>

        {/* Hamburger menu button (Mobile only) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Center nav links (Desktop only) */}
        <ul className="hidden md:flex space-x-8 text-gray-700">
          <li><Link to="/registration" className='hover:text-blue-500'>Register</Link></li>
          <li><Link to="/sponsors" className="hover:text-blue-500">Sponsors</Link></li>
          <li><a href="/pastevents" className="hover:text-blue-500">Past Events</a></li>
          {/* <li><a href="/projects" className="hover:text-blue-500">Projects</a></li> */}
          <li><a href="/faqs" className="hover:text-blue-500">FAQs</a></li>
        </ul>

        {/* Right-side button (Desktop only) */}
        <div className="md:space-x-4 sm:flex hidden pr-4">
          {/* <Button className="text-white font-bold w-30 md:w-35 lg:w-37" onclick="window.location.href='tel:+254769913840'">
            <Phone className="inline mr-2" size={16} />
            Contact Us
          </Button> */}
          <p className='text-white font-bold w-30 md:w-35 lg:w-37 px-1'>
                        <Button className="w-30 md:w-40 lg:w-48 px-1"><a href="tel:+4733378901"><Phone className="inline mx-1" size={16} />+47 333 78 901</a></Button>
          </p>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col space-y-4 text-gray-700">
            <li><a href="/registration" className="hover:text-blue-500 text-lg">PastEvents</a></li>
            <li><Link to="/sponsors" className="hover:text-blue-500 text-lg">Sponsors</Link></li>
            <li><a href="/pastevents" className="hover:text-blue-500 text-lg">PastEvents</a></li>
            {/* <li><a href="/projects" className="hover:text-blue-500">Projects</a></li> */}
            
            <li><a href="/faqs" className="hover:text-blue-500 text-lg">FAQs</a></li>
            <li>
              <Button className="bg-blue-700 hover:bg-blue-600 text-white font-bold w-full" onclick="window.location.href='tel:+254769913840'">
                Register
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

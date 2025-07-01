import React, { useState } from 'react';
import Japageologo from "../assets/Japageologo.webp";
import Button from './Button';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white drop-shadow-sm pt-1 relative z-50">
      <div className="flex justify-between items-center px-4 py-3 md:px-8 lg:px-12">
        {/* Left: Logo */}
        <Link to="/" className="flex-shrink-0">
          <img 
            src={Japageologo} 
            alt="Japageo Logo" 
            className="w-32 sm:w-40 md:w-48 lg:w-60 xl:w-72 rounded-lg object-contain h-auto" 
          />
        </Link>

        {/* Hamburger menu button (Mobile only) */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Center nav links (Desktop only) */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8 text-gray-700 font-medium">
          <li>
            <Button>
            <Link to="/registration">
              <span className='text-white hover:text-black'>Register</span>
            </Link>
            </Button>
          </li>
          <li>
            <Button>
            <Link to="/sponsors">
              <span className='text-white hover:text-black'>Sponsor</span>
            </Link>
            </Button>
          </li>
          <li>
            <Button>
            <Link to="/pastevents" >
              <span className='text-white hover:text-black'>Past Events</span>
            </Link>
            </Button>
          </li>
          <li>
            <Button>
            <Link to="/faqs">
              <span className='text-white hover:text-black'>FAQs</span>
            </Link>
            </Button>
          </li>
        </ul>

        {/* Right-side contact button (Desktop only) */}
        <div className="hidden md:flex items-center">
          <Button className="text-white font-bold px-4 py-2 rounded-lg transition-colors md:w-45">
            <a href="tel:+254113273333" className="flex items-center">
              <Phone className="mr-2" size={16} />
              <span className="hidden lg:inline">+254113273333</span>
              <span className="lg:hidden">Call</span>
            </a>
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t z-40">
          <div className="px-4 py-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link 
                  to="/registration" 
                  className="block py-2 text-gray-700 hover:text-blue-500 text-lg font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Register
                </Link>
              </li>
              <li>
                <Link 
                  to="/sponsors" 
                  className="block py-2 text-gray-700 hover:text-blue-500 text-lg font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Sponsor
                </Link>
              </li>
              <li>
                <Link 
                  to="/pastevents" 
                  className="block py-2 text-gray-700 hover:text-blue-500 text-lg font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Past Events
                </Link>
              </li>
              <li>
                <Link 
                  to="/faqs" 
                  className="block py-2 text-gray-700 hover:text-blue-500 text-lg font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  FAQs
                </Link>
              </li>
              <li className="pt-2">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold w-full py-3 rounded-lg transition-colors">
                  <a href="tel:+254113273333" className="flex items-center justify-center">
                    <Phone className="mr-2" size={16} />
                    Contact Us
                  </a>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
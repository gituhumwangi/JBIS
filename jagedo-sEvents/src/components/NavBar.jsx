import React, { useState } from 'react';
import Japageologo from "../assets/Japageologo.webp";
import Button from './Button';
import { Link } from 'react-router-dom';
import { Menu, Phone } from 'lucide-react'; // for hamburger and close icons
import { X } from 'lucide-react'; // for close icon
// import Button from './Button';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-white drop-shadow-sm pt-1 relative z-50">
      <div className="flex justify-between items-center px-4 py-3 md:px-8 lg:px-12">
        {/* Left: Logo */}
        <Link to="/">
          <img src={Japageologo} alt="Logo" className="w-32 sm:w-40 md:w-48 lg:w-60 rounded-lg object-contain h-auto" />
        </Link>

        {/* Hamburger menu button (Mobile only) */}
        <div className="md:hidden ">
          <Button onClick={toggleMenu} className="hover:bg-gray-100 transition-colors font-bold p-2 md:hidden rounded-md" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Center nav links (Desktop only) */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8 text-gray-700 font-medium">
          <li><Link to="/registration" className='hover:text-blue-500 transition-colors'>Register</Link></li>
          <li><Link to="/sponsors" className="hover:text-blue-500 transition-colors">Sponsors</Link></li>
          <li><a href="/pastevents" className="hover:text-blue-500 transition-colors">Past Events</a></li>
          {/* <li><a href="/projects" className="hover:text-blue-500">Projects</a></li> */}
          <li><a href="/faqs" className="hover:text-blue-500 transition-colors">FAQs</a></li>
        </ul>

        {/* Right-side button (Desktop only) */}
        <div className="md:flex items-center hidden pr-4">
          {/* <Button className="text-white font-bold w-30 md:w-35 lg:w-37" onclick="window.location.href='tel:+254769913840'">
            <Phone className="inline mr-2" size={16} />
            Contact Us
          </Button> */}

          <Button className="w-30 md:w-40 lg:w-48 px-1 text-white font-bold"><a href="tel:+4733378901" className='flex items-center'><Phone className="mr-2" size={16} />
                  <span className='hidden lg:inline'>+47 333 78 901</span></a> <span className='lg:hidden'>Call</span></Button>
      
        </div>
      </div>

      {/* Mobile Menu */}
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
                  Sponsors
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
                  <a href="tel:+4733378901" className="flex items-center justify-center">
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

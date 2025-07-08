import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './Button';

const NavBar2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <nav className="bg-[rgb(0,0,122)] shadow-md">
        <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              {/* <a href="/" className="text-xl font-bold text-gray-800">JaGedo Events</a> */}
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-4">
              <Link to="/registration">
                <Button className="text-white">Register</Button>
              </Link>
              <Link to="/agenda">
                <Button className="text-white">Agenda</Button>
              </Link>
              <Link to="/faqs">
                <Button className="text-white">FAQs</Button>
              </Link>
              <Link to="/sponsers">
                <Button className="text-white">Sponsors</Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white p-2 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-[rgb(0,0,122)] border-t border-blue-800">
                <Link 
                  to="/registration" 
                  onClick={closeMenu}
                  className="block px-3 py-2 text-white hover:bg-blue-800 rounded-md transition-colors"
                >
                  Register
                </Link>
                <Link 
                  to="/agenda" 
                  onClick={closeMenu}
                  className="block px-3 py-2 text-white hover:bg-blue-800 rounded-md transition-colors"
                >
                  Agenda
                </Link>
                <Link 
                  to="/faqs" 
                  onClick={closeMenu}
                  className="block px-3 py-2 text-white hover:bg-blue-800 rounded-md transition-colors"
                >
                  FAQs
                </Link>
                <Link 
                  to="/sponsers" 
                  onClick={closeMenu}
                  className="block px-3 py-2 text-white hover:bg-blue-800 rounded-md transition-colors"
                >
                  Sponsors
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}

export default NavBar2
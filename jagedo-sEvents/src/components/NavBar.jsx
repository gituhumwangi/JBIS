"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, Phone } from "lucide-react"
import Button from "./Button"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // Function to check if current route matches the nav item
  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <nav className="bg-white shadow-sm border-t border-gray-200 relative z-40">
      <div className="flex justify-between items-center px-4 py-3 md:px-8 lg:px-12 space-x-4">
        {/* Hamburger menu button (Mobile only) */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Center nav links (Desktop only) */}
        <ul className="hidden md:flex space-x-4 lg:space-x-6 text-gray-700 font-medium flex-1 justify-center">
          <li>
            <Link to="/registration">
              <button
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md ${
                  isActive("/registration")
                    ? "bg-yellow-400 text-black shadow-lg"
                    : "bg-white text-gray-700 hover:bg-yellow-50 hover:text-yellow-700"
                }`}
              >
                Register
              </button>
            </Link>
          </li>
          <li>
            <Link to="/sponsors">
              <button
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md ${
                  isActive("/sponsors")
                    ? "bg-yellow-400 text-black shadow-lg"
                    : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                Sponsor
              </button>
            </Link>
          </li>
          <li>
            <Link to="/pastevents">
              <button
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md ${
                  isActive("/pastevents")
                    ? "bg-yellow-400 text-black shadow-lg"
                    : "bg-white text-gray-700 hover:bg-green-50 hover:text-green-700"
                }`}
              >
                Past Events
              </button>
            </Link>
          </li>
          <li>
            <Link to="/faqs">
              <button
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md ${
                  isActive("/faqs")
                    ? "bg-yellow-400 text-black shadow-lg"
                    : "bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-700"
                }`}
              >
                FAQs
              </button>
            </Link>
          </li>
        </ul>

        {/* Right-side contact button (Desktop only) */}
        {/* <div className="hidden md:flex items-center">
          <Button className="text-white font-bold px-4 py-2 rounded-lg transition-colors md:w-45">
            <a href="tel:+254113273333" className="flex items-center">
              <Phone className="mr-2" size={16} />
              <span className="hidden lg:inline">+254113273333</span>
              <span className="lg:hidden">Call</span>
            </a>
          </Button>
        </div> */}
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t z-40">
          <div className="px-4 py-4">
            <ul className="flex flex-col space-y-3">
              <li>
                <Link
                  to="/registration"
                  className={`block py-3 px-4 text-lg font-semibold rounded-lg transition-all duration-300 ${
                    isActive("/registration")
                      ? "bg-yellow-400 text-black shadow-md"
                      : "text-gray-700 hover:bg-yellow-50 hover:text-yellow-700"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  📝 Register
                </Link>
              </li>
              <li>
                <Link
                  to="/sponsors"
                  className={`block py-3 px-4 text-lg font-semibold rounded-lg transition-all duration-300 ${
                    isActive("/sponsors")
                      ? "bg-yellow-400 text-black shadow-md"
                      : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  🤝 Sponsor
                </Link>
              </li>
              <li>
                <Link
                  to="/pastevents"
                  className={`block py-3 px-4 text-lg font-semibold rounded-lg transition-all duration-300 ${
                    isActive("/pastevents")
                      ? "bg-yellow-400 text-black shadow-md"
                      : "text-gray-700 hover:bg-green-50 hover:text-green-700"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  📅 Past Events
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/faqs"
                  className={`block py-3 px-4 text-lg font-semibold rounded-lg transition-all duration-300 ${
                    isActive("/faqs")
                      ? "bg-yellow-400 text-black shadow-md"
                      : "text-gray-700 hover:bg-purple-50 hover:text-purple-700"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  ❓ FAQs
                </Link>
              </li>
              <li className="pt-2">
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold w-full py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                  <a href="tel:+254113273333" className="flex items-center justify-center">
                    <Phone className="mr-2" size={16} />📞 Contact Us
                  </a>
                </button>
              </li> */}
            </ul>
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavBar

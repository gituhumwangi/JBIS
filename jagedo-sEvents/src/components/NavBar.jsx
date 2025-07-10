"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"

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
      <div className="flex justify-between items-center px-4 py-4 md:px-8 lg:px-12 space-x-4">
        {/* Hamburger menu button (Mobile only) */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Center nav links (Desktop only) */}
        <ul className="hidden md:flex space-x-8 lg:space-x-12 text-gray-700 font-medium flex-1 justify-center">
          <li>
            <Link
              to="/"
              className={`relative pb-2 transition-all duration-300 ease-in-out hover:text-gray-900 ${
                isActive("/")
                  ? "text-gray-900 border-b-2 border-blue-600"
                  : "text-gray-600 hover:border-b-2 hover:border-gray-300"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/registration"
              className={`relative pb-2 transition-all duration-300 ease-in-out hover:text-gray-900 ${
                isActive("/registration")
                  ? "text-gray-900 border-b-2 border-blue-600"
                  : "text-gray-600 hover:border-b-2 hover:border-gray-300"
              }`}
            >
              Register
            </Link>
          </li>
          <li>
            <Link
              to="/sponsors"
              className={`relative pb-2 transition-all duration-300 ease-in-out hover:text-gray-900 ${
                isActive("/sponsors")
                  ? "text-gray-900 border-b-2 border-blue-600"
                  : "text-gray-600 hover:border-b-2 hover:border-gray-300"
              }`}
            >
              Sponsor
            </Link>
          </li>
          <li>
            <Link
              to="/pastevents"
              className={`relative pb-2 transition-all duration-300 ease-in-out hover:text-gray-900 ${
                isActive("/pastevents")
                  ? "text-gray-900 border-b-2 border-blue-600"
                  : "text-gray-600 hover:border-b-2 hover:border-gray-300"
              }`}
            >
              Past Events
            </Link>
          </li>
          <li>
            <Link
              to="/faqs"
              className={`relative pb-2 transition-all duration-300 ease-in-out hover:text-gray-900 ${
                isActive("/faqs")
                  ? "text-gray-900 border-b-2 border-blue-600"
                  : "text-gray-600 hover:border-b-2 hover:border-gray-300"
              }`}
            >
              FAQs
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t z-40">
          <div className="px-4 py-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link
                  to="/"
                  className={`block py-2 px-4 text-lg font-medium transition-all duration-300 ${
                    isActive("/")
                      ? "text-blue-600 border-l-4 border-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  🏠 Home
                </Link>
              </li>
              <li>
                <Link
                  to="/registration"
                  className={`block py-2 px-4 text-lg font-medium transition-all duration-300 ${
                    isActive("/registration")
                      ? "text-blue-600 border-l-4 border-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  📝 Register
                </Link>
              </li>
              <li>
                <Link
                  to="/sponsors"
                  className={`block py-2 px-4 text-lg font-medium transition-all duration-300 ${
                    isActive("/sponsors")
                      ? "text-blue-600 border-l-4 border-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  🤝 Sponsor
                </Link>
              </li>
              <li>
                <Link
                  to="/pastevents"
                  className={`block py-2 px-4 text-lg font-medium transition-all duration-300 ${
                    isActive("/pastevents")
                      ? "text-blue-600 border-l-4 border-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  📅 Past Events
                </Link>
              </li>
              <li>
                <Link
                  to="/faqs"
                  className={`block py-2 px-4 text-lg font-medium transition-all duration-300 ${
                    isActive("/faqs")
                      ? "text-blue-600 border-l-4 border-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  ❓ FAQs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavBar

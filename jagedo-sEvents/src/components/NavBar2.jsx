import { useEffect, useState, useRef } from "react"
import { Menu, X } from "lucide-react"
import { useNavigate, Link, useLocation } from "react-router-dom"
import JaGedologo from "../assets/Japageologo.webp"

const NAV_ITEMS = [
  // { name: "Home", route: "https://ja-gedov3-designs-seven.vercel.app/", scrollTo: true },
  { name: "Login", route: "https://ja-gedov3-designs-seven.vercel.app/#/login", scrollTo: false },
  { name: "Sign Up", route: "https://jagedov3-designs.vercel.app/#/signup", scrollTo: false },
  { name: "About Us", route: "https://ja-gedov3-designs-seven.vercel.app/#/landing-page-s", scrollTo: true },
  { name: "Events", route: "/events", scrollTo: false },
]

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const buttonRef = useRef(null)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showMobileMenu &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setShowMobileMenu(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [showMobileMenu])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  const handleClick = (item) => {
    // Check if it's an external URL
    if (item.route.startsWith("http")) {
      // Open in new tab
      window.open(item.route, "_blank", "noopener,noreferrer")
    } else {
      // Internal navigation
      navigate(item.route)
    }
    setShowMobileMenu(false)
  }

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm relative z-50">
      <div className="container mx-auto flex justify-between items-center py-3 px-6 md:px-12 lg:px-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link 
            to="https://ja-gedov3-designs-seven.vercel.app/"
            target="_blank"
            rel ="noopener noreferrer">
            <img
              src={JaGedologo || "/placeholder.svg"}
              alt="JaGedo Logo"
              className="h-18 w-auto rounded-full"
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          <ul className="flex gap-4 text-gray-800 font-medium items-center">
            {NAV_ITEMS.map((item) => (
              <li key={item.name} className="relative group">
                <button
                  onClick={() => handleClick(item)}
                  className={`min-h-[40px] py-2 px-4 rounded-full shadow-md hover:scale-105 transition duration-300 ease-in-out flex items-center justify-center sm:w-32 md:w-32 text-sm whitespace-nowrap ${
                    isActive(item.route)
                      ? "bg-[#FFD700] text-black"
                      : "bg-[rgb(0,0,122)] text-white hover:bg-[#FFD700] hover:text-black"
                  }`}
                >
                  <span className="flex items-center">
                    {item.name}
                    {/* Add external link indicator */}
                    {item.route.startsWith("http") && (
                      <svg
                        className="w-3 h-3 ml-1 opacity-70 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {/* <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        /> */}
                      </svg>
                    )}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setShowMobileMenu((prev) => !prev)}
          ref={buttonRef}
          className="md:hidden p-2 bg-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Open menu"
          aria-expanded={showMobileMenu}
        >
          {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 md:hidden flex justify-end transition-opacity duration-300 ${
          showMobileMenu ? "bg-black/30" : "pointer-events-none opacity-0"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div
          ref={menuRef}
          className={`bg-white w-[85%] h-full shadow-lg transform transition-transform duration-300 ease-in-out ${
            showMobileMenu ? "translate-x-0" : "translate-x-full"
          } p-6 flex flex-col gap-4`}
        >
          <div className="flex justify-end">
            <button
              onClick={() => setShowMobileMenu(false)}
              aria-label="Close menu"
              className="p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Nav */}
          <nav aria-label="Mobile navigation" className="mt-6">
            <ul className="flex flex-col gap-4 text-gray-800 font-medium">
              {NAV_ITEMS.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleClick(item)}
                    className={`w-full flex items-center justify-center text-center py-3 px-6 rounded-full shadow-md hover:scale-105 transition duration-300 ease-in-out ${
                      isActive(item.route)
                        ? "bg-[#FFD700] text-black"
                        : "bg-[rgb(0,0,122)] text-white hover:bg-[#FFD700] hover:text-black"
                    }`}
                  >
                    {item.name}
                    {/* Add external link indicator for mobile */}
                    {item.route.startsWith("http") && (
                      <svg className="w-4 h-4 ml-2 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar2

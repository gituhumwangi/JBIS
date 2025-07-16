import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { useNavigate, Link, useLocation } from "react-router-dom";
import JaGedologo from "../assets/Japageologo.webp"


const NAV_ITEMS = [
  { name: "Login", route: "https://ja-gedov3-designs-seven.vercel.app/#/login" },
  { name: "Sign Up", route: "https://jagedov3-designs.vercel.app/" },
  { name: "About Us", route: "https://jagedov3-designs.vercel.app/#/landing-page-s" },
  { name: "Events", route: "/pastevents" },
]

const MainNav = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  //Remove this if not in use
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = (item) => {
    if (item.route.startsWith("http")) {
      window.open(item.route, "_blank", "noopener,noreferrer")
    } else {
      navigate(item.route)
    }
    setMobileOpen(false)
  }

  return (
    <nav className="bg-white shadow-sm w-full fixed top-0 z-50">
      <div className="px-4 sm:px-6 lg:px-6 py-3">
        <div className="flex h-16 justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={JaGedologo}
              alt="JaGedo Logo"
              className="w-40 md:w-64 lg:w-80 h-auto"
            />
          </Link>

          <div className="hidden md:flex space-x-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.name}
                onClick={() => handleClick(item)}
                className={`min-h-[40px] py-2 px-4 rounded-full shadow-md hover:scale-105 transition duration-300 flex items-center justify-center sm:w-32 text-sm whitespace-nowrap ${
                  location.pathname === item.route
                    ? "bg-[#FFD700] text-black"
                    : "bg-[rgb(0,0,122)] text-white hover:bg-[#FFD700] hover:text-black"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white shadow-sm">
          <div className="flex flex-col space-y-2 px-4 py-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.name}
                onClick={() => handleClick(item)}
                className={`w-full px-4 py-3 rounded-full text-base font-medium shadow-md transition duration-300 ${
                  location.pathname === item.route
                    ? "bg-yellow-400 text-black"
                    : "bg-blue-900 text-white hover:bg-yellow-400 hover:text-black"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default MainNav;

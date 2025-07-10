"use client"

import { useState } from "react"
import NavBar from "../components/NavBar"
import Button from "../components/Button"
import Card1 from "../assets/Event1.jpeg"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import { Clock, MapPin, Calendar } from "lucide-react"
import JaGedoLogo from "../assets/Japageologo.webp"
import NavBar2 from "../components/NavBar2"
import HeroSlideshow from "../components/hero-slideshow"

// Slideshow data - you can replace these with your actual images
const heroSlides = [
  {
    image: Card1,
    title: "JBIS: JaGedo Builders Innovation Summit",
    subtitle: "Future-Proofing Construction Through Innovation",
    description: "Join industry leaders and innovators reshaping construction's future.",
  },
  {
    image: "/placeholder.svg?height=800&width=1200",
    title: "Building Tomorrow's Infrastructure",
    subtitle: "Where Innovation Meets Construction Excellence",
    description: "Discover cutting-edge technologies transforming the construction industry.",
  },
  {
    image: "/placeholder.svg?height=800&width=1200",
    title: "Connect. Learn. Innovate.",
    subtitle: "East Africa's Premier Construction Summit",
    description: "Network with 500+ professionals and explore groundbreaking solutions.",
  },
  {
    image: "/placeholder.svg?height=800&width=1200",
    title: "Shaping Kenya's Construction Future",
    subtitle: "Two Days of Transformative Learning",
    description: "Experience workshops, exhibitions, and networking opportunities.",
  },
]

const sponsorshipBenefits = [
  {
    icon: "🎯",
    title: "Targeted Audience",
    description: "Reach 500+ construction professionals, decision-makers, and industry leaders",
  },
  {
    icon: "🤝",
    title: "Quality Networking",
    description: "Connect with potential clients, partners, and suppliers in structured environments",
  },
  {
    icon: "📈",
    title: "Brand Visibility",
    description: "Showcase your brand across multiple touchpoints before, during, and after the event",
  },
  {
    icon: "🏆",
    title: "Industry Leadership",
    description: "Position your company as a thought leader and industry innovator",
  },
  {
    icon: "📊",
    title: "Lead Generation",
    description: "Generate high-quality leads through exhibition booths and speaking opportunities",
  },
  {
    icon: "🌍",
    title: "Market Expansion",
    description: "Access new markets and expand your presence in East Africa's construction sector",
  },
]

const partners = ["JaGedo"]

const whoShouldAttend = [
  {
    icon: "🏗️",
    title: "Builders",
    description:
      "Construction, fundis, professionals and Hardware Owners looking to stay ahead of industry trends and connect with peers.",
    highlights: ["Latest construction techniques", "Industry best practices", "Networking opportunities"],
  },
  {
    icon: "💻",
    title: "Technology Enthusiasts",
    description:
      "Tech innovators, software developers, and digital solution providers interested in construction technology and digital transformation.",
    highlights: ["Construction tech innovations", "Digital solutions showcase", "Tech networking sessions"],
  },
  {
    icon: "👥",
    title: "Clients",
    description:
      "Property developers, homeowners, and businesses seeking construction services and innovative building solutions.",
    highlights: ["Service provider discovery", "Cost-effective solutions", "Quality assurance insights"],
  },
  {
    icon: "💰",
    title: "Investors & Stakeholders",
    description:
      "Angel investors, VCs, and financial institutions looking for investment opportunities in the construction and contech sectors.",
    highlights: ["Investment opportunities", "Market insights", "ROI analysis sessions"],
  },
]

const programSchedule = [
  {
    time: "8:00 AM - 9:00 AM",
    title: "Registration & Welcome Coffee",
    description: "Network with fellow attendees while enjoying breakfast",
    type: "networking",
  },
  {
    time: "9:00 AM - 9:30 AM",
    title: "Opening Ceremony",
    description: "Welcome address and summit overview",
    type: "ceremony",
  },
  {
    time: "9:30 AM - 10:30 AM",
    title: "Keynote: Future of Construction in Kenya",
    description: "Industry trends and opportunities ahead",
    type: "keynote",
  },
  {
    time: "10:30 AM - 11:00 AM",
    title: "Coffee Break & Networking",
    description: "Connect with speakers and attendees",
    type: "break",
  },
  {
    time: "11:00 AM - 12:00 PM",
    title: "Panel: Digital Transformation in Construction",
    description: "How technology is reshaping the industry",
    type: "panel",
  },
  {
    time: "12:00 PM - 1:00 PM",
    title: "Exhibition & Demo Sessions",
    description: "Explore latest tools and innovations",
    type: "exhibition",
  },
  {
    time: "1:00 PM - 2:00 PM",
    title: "Networking Lunch",
    description: "Connect over delicious local cuisine",
    type: "networking",
  },
  {
    time: "2:00 PM - 3:00 PM",
    title: "Workshop: Sustainable Building Practices",
    description: "Hands-on session on green construction",
    type: "workshop",
  },
  {
    time: "3:00 PM - 4:00 PM",
    title: "Investor Pitch Session",
    description: "Startups present to potential investors",
    type: "pitch",
  },
  {
    time: "4:00 PM - 4:30 PM",
    title: "Awards & Recognition",
    description: "Celebrating industry excellence",
    type: "ceremony",
  },
  {
    time: "4:30 PM - 5:00 PM",
    title: "Closing Remarks & Next Steps",
    description: "Summit wrap-up and future initiatives",
    type: "ceremony",
  },
]

const Home = () => {
  const [isSponsorshipExpanded, setIsSponsorshipExpanded] = useState(false)
  const [activeDay, setActiveDay] = useState("day1")

  const getScheduleTypeColor = (type) => {
    const colors = {
      networking: "bg-green-100 text-green-800",
      ceremony: "bg-purple-100 text-purple-800",
      keynote: "bg-blue-100 text-blue-800",
      break: "bg-gray-100 text-gray-800",
      panel: "bg-orange-100 text-orange-800",
      exhibition: "bg-yellow-100 text-yellow-800",
      workshop: "bg-red-100 text-red-800",
      pitch: "bg-indigo-100 text-indigo-800",
    }
    return colors[type] || "bg-gray-100 text-gray-800"
  }

  return (
    <div>
      {/* Fixed Navigation Container - Prevents Overlap */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <NavBar2 />
        <NavBar />
      </div>

      {/* Spacer to prevent content from hiding behind fixed navbars */}
      <div className="h-32 md:h-24"></div>

      {/* Hero Section with Slideshow */}
      <div className="w-full h-screen text-white relative">
        <HeroSlideshow slides={heroSlides} autoPlay={true} autoPlayInterval={6000} />
      </div>

      {/* Call to Action Section */}
      <section className="py-8 sm:py-10 md:py-12 px-4 md:px-8 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
              Ready to Join the Innovation?
            </h3>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
              Don't miss this opportunity to be part of Kenya's premier construction innovation summit.
            </p>
          </div>

          {/* Enhanced CTA Buttons - Mobile Optimized */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center w-full max-w-md sm:max-w-lg mx-auto">
            <Link to="/registration" className="w-full sm:w-auto flex justify-center">
              <button className="group relative w-full sm:w-48 md:w-56 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out border-2 border-yellow-300 hover:border-yellow-400 touch-manipulation">
                <span className="relative z-10 flex items-center justify-center text-sm sm:text-base">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span className="whitespace-nowrap">Register Now</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </Link>

            <Link to="/sponsors" className="w-full sm:w-auto flex justify-center">
              <button className="group relative w-full sm:w-48 md:w-56 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out border-2 border-blue-500 hover:border-blue-600 touch-manipulation">
                <span className="relative z-10 flex items-center justify-center text-sm sm:text-base">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                  <span className="whitespace-nowrap">Become Sponsor</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Event Date and Location Section */}
      <section className="px-4 md:px-20 lg:px-40 py-6 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">Mark Your Calendar</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* Date Section */}
              <div className="flex flex-col items-center text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-3">
                  <Calendar className="text-white" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Event Date</h4>
                <p className="text-xl font-bold text-blue-600 mb-1">October 17 - 18, 2025</p>
                <p className="text-gray-600 text-sm">Two Days of Innovation</p>
              </div>

              {/* Location Section */}
              <div className="flex flex-col items-center text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-3">
                  <MapPin className="text-white" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Location</h4>
                <p className="text-xl font-bold text-green-600 mb-1">Nairobi, Kenya</p>
                <p className="text-gray-600 text-sm">Venue TBD</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="px-6 md:px-20 lg:px-36 py-10 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* About JBIS Text Section */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What is <span className="text-indigo-600">JBIS?</span>
            </h2>
            <p className="text-gray-600 text-base leading-relaxed max-w-xl">
              The <span className="font-semibold text-gray-800">JaGedo Builders Innovation Summit; (JBIS)</span> is our
              innovatively flagship event that unites builders, fundis, professionals, tech innovators, and industry
              leaders. It's more than a summit it's a platform where innovation meets execution.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mt-4 max-w-xl">
              Attendees collaborate, learn, and showcase groundbreaking ideas that redefine infrastructure and smart
              construction;empowering builders to shape the future of the built world.
            </p>
          </div>

          {/* Trusted Partners Section */}
          <div className="flex flex-col items-center w-full">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted Partners</h2>
              <p className="text-lg text-gray-600 max-w-md mx-auto">
                We collaborate with industry leaders to deliver exceptional experiences
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mt-4"></div>
            </div>

            {/* Partner logos grid container */}
            <div className="w-full max-w-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                {/* Partner 1 - JaGedo */}
                <div className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl transition-all duration-300 hover:scale-105 border border-gray-100 hover:border-purple-300 hover:shadow-lg w-full max-w-xs">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gray-50 border-2 flex items-center justify-center overflow-hidden hover:border-purple-300 transition-colors duration-300 mb-3">
                    <img
                      src={JaGedoLogo || "/placeholder.svg"}
                      alt="JaGedo Logo"
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                  <h4 className="text-sm font-semibold text-gray-800 text-center">JaGedo</h4>
                </div>

                {/* Partner 2 - Placeholder */}
                <div className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl transition-all duration-300 hover:scale-105 border border-gray-100 hover:border-purple-300 hover:shadow-lg w-full max-w-xs">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gray-50 border-2 flex items-center justify-center overflow-hidden hover:border-purple-300 transition-colors duration-300 mb-3">
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 text-gray-400 text-xs font-medium">
                      Partner Logo
                    </div>
                  </div>
                  <h4 className="text-sm font-semibold text-gray-800 text-center">Partner 2</h4>
                </div>

                {/* Partner 3 - Placeholder */}
                <div className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl transition-all duration-300 hover:scale-105 border border-gray-100 hover:border-purple-300 hover:shadow-lg w-full max-w-xs">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gray-50 border-2 flex items-center justify-center overflow-hidden hover:border-purple-300 transition-colors duration-300 mb-3">
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-100 to-blue-100 text-gray-400 text-xs font-medium">
                      Partner Logo
                    </div>
                  </div>
                  <h4 className="text-sm font-semibold text-gray-800 text-center">Partner 3</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Who Should Attend?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              JBIS brings together diverse professionals from across the construction and technology ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {whoShouldAttend.map((attendee, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl flex-shrink-0">{attendee.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{attendee.title}</h3>
                    <p className="text-gray-600 mb-4">{attendee.description}</p>
                    <div className="space-y-2">
                      {attendee.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Schedule Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Summit Program</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A full day of learning, networking, and innovation in the construction industry.
            </p>
            <div className="flex items-center justify-center mt-4 space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                October 17 - 18, 2025
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                Nairobi, Kenya
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                8:00 AM - 5:00 PM
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden text-center">
            <div className="flex items-center justify-center gap-3 p-4">
              <Button
                onClick={() => setActiveDay("day1")}
                aria-pressed={activeDay === "day1"}
                className={`px-4 py-2 rounded transition 
                  ${activeDay === "day1" ? "bg-[rbg(0,0,122)] text-white" : "bg-yellow-400 text-white hover:bg-yellow-400 hover:text-black"} 
                      focus:outline-2 focus:outline-offset-2 focus:outline-[#FFD700] active:bg-[#FFD700]`}
              >
                17 Oct
              </Button>

              <Button
                onClick={() => setActiveDay("day2")}
                aria-pressed={activeDay === "day2"}
                className={`px-4 py-2 rounded transition 
                        ${activeDay === "day2" ? "bg-yellow-400 text-black" : "bg-[rgb(0,0,122)] text-white hover:bg-yellow-400 hover:text-black"} 
                        focus:outline-2 focus:outline-offset-2 focus:outline-[#FFD700] active:bg-[#FFD700]`}
              >
                18 Oct
              </Button>
            </div>
            {programSchedule.map((session, index) => (
              <div
                key={index}
                className={`p-6 ${index !== programSchedule.length - 1 ? "border-b border-gray-200" : ""}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {session.time}
                      </span>
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-medium ${getScheduleTypeColor(session.type)}`}
                      >
                        {session.type.charAt(0).toUpperCase() + session.type.slice(1)}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{session.title}</h3>
                    <p className="text-gray-600 text-sm">{session.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home

"use client"

import { useState } from "react"
import NavBar from "../components/NavBar"
import Card1 from "../assets/Event1.jpeg"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import { Clock, MapPin, Calendar } from "lucide-react"
import JaGedoLogo from "../assets/Japageologo.webp"
import NavBar2 from "../components/NavBar2"
import HeroSlideshow from "../components/hero-slideshow"
import Moringa from "../assets/Moringa.png"
import Button from "../components/Button"
import SEOHead from "../components/seo-head"
import Construction1 from "../assets/Construction-Theme.jpg"
import Construction2 from "../assets/Construction2.jpg"
import Construction3 from "../assets/Construction3.jpg"
import Construction4 from "../assets/Construction4.jpg"
import { ButtonGroupButtonContext } from "@mui/material"

// Updated slideshow data with construction technology themes
const heroSlides = [
  {
    image: Construction1,
    title: "JBIS: JaGedo Builders Innovation Summit",
    subtitle: "Shaping the Future of African Construction Through Technology & Innovation",
    description:
      "Join 500+ industry leaders and innovators reshaping construction's future through cutting-edge technology.",
  },
  {
    image: Construction2,
    title: "Smart Construction Technology",
    subtitle: "Drones, BIM & Digital Innovation",
    description:
      "Discover how drones, Building Information Modeling, and AI are revolutionizing construction workflows.",
  },
  {
    image: Construction3,
    title: "Digital Construction Management",
    subtitle: "Safety Meets Technology",
    description:
      "Experience the future of construction with smart helmets, IoT sensors, and real-time project management.",
  },
  {
    image: Construction4,
    title: "Building Tomorrow's Infrastructure",
    subtitle: "Where Innovation Meets Construction Excellence",
    description: "Explore advanced construction techniques, sustainable materials, and smart building technologies.",
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

// Updated program schedule based on the detailed agenda provided
const programScheduleDay1 = [
  {
    time: "08:00–09:00",
    title: "Registration & Welcome Coffee",
    description: "Delegate check-in, networking, exhibition hall opens",
    type: "networking",
  },
  {
    time: "09:00–09:30",
    title: "Opening Ceremony",
    description: "National Anthem, keynote welcome from JaGedo Executive & Government Official",
    type: "ceremony",
  },
  {
    time: "09:30–10:15",
    title: "Keynote: The Future of Construction in Africa",
    description: "Visionary talk by a government or industry leader",
    type: "keynote",
  },
  {
    time: "10:15–11:00",
    title: "Panel: Public-Private Partnerships in Infrastructure",
    description: "How collaboration fuels housing, roads, and smart cities",
    type: "panel",
  },
  {
    time: "11:00–11:30",
    title: "Tea Break & Networking in Expo Hall",
    description: "Connect with exhibitors and fellow attendees",
    type: "break",
  },
  {
    time: "11:30–12:30",
    title: "Tech Showcase 1: Smart Building Materials",
    description: "Short demos by top material innovators and manufacturers",
    type: "exhibition",
  },
  {
    time: "12:30–13:30",
    title: "Networking Lunch",
    description: "Buffet + sponsored product showcase tables",
    type: "networking",
  },
  {
    time: "13:30–14:15",
    title: "Fireside Chat: Investor Outlook on African PropTech",
    description: "What VCs and angel investors are looking for in construction innovation",
    type: "pitch",
  },
  {
    time: "14:15–15:00",
    title: "Workshop: Digital Tools for Contractors",
    description: "Intro to project management apps, drones, AR tools, and more",
    type: "workshop",
  },
  {
    time: "15:00–16:00",
    title: "Roundtable: Policy, Regulation & Compliance in Kenya",
    description: "Insights from NCA, NEMA, and county-level regulators",
    type: "panel",
  },
  {
    time: "16:00–17:00",
    title: "Exhibition Walk & Product Demos",
    description: "Booth visits + live demos by exhibitors",
    type: "exhibition",
  },
  {
    time: "17:00–18:00",
    title: "Evening Cocktail & Builders Mixer",
    description: "Chill networking with drinks, music, and partner showcases",
    type: "networking",
  },
]

const programScheduleDay2 = [
  {
    time: "08:30–09:30",
    title: "Coffee & Morning Networking",
    description: "Early connections + giveaways from sponsors",
    type: "networking",
  },
  {
    time: "09:30–10:15",
    title: "Keynote: Disruptive Technologies in Construction",
    description: "How AI, robotics, BIM, and 3D printing are redefining projects",
    type: "keynote",
  },
  {
    time: "10:15–11:00",
    title: "Panel: The Rise of PropTech in Africa",
    description: "Leaders discuss rental apps, construction marketplaces, and smart systems",
    type: "panel",
  },
  {
    time: "11:00–11:30",
    title: "Tea Break in Exhibition Zone",
    description: "Connect with speakers and attendees",
    type: "break",
  },
  {
    time: "11:30–12:15",
    title: "Startup Pitch Session – BuildTech Startup Arena",
    description: "5–7 startups pitch to investors + audience for feedback and funding",
    type: "pitch",
  },
  {
    time: "12:15–13:00",
    title: "Talk: The Skills Gap – Building Talent for the Future",
    description: "Training, TVETs, and capacity building for youth in construction",
    type: "keynote",
  },
  {
    time: "13:00–14:00",
    title: "Networking Lunch",
    description: "Regional dishes + investor-founder lunches",
    type: "networking",
  },
  {
    time: "14:00–15:00",
    title: "Masterclass: Green Building Certifications & Design",
    description: "LEED, EDGE, and sustainable design in the African context",
    type: "workshop",
  },
  {
    time: "15:00–15:45",
    title: "Panel: Women in Construction & Tech",
    description: "Gender inclusion in building, tech, and leadership roles",
    type: "panel",
  },
  {
    time: "15:45–16:30",
    title: "Product Launches & Innovation Announcements",
    description: "New tools, materials, platforms — real-time demos",
    type: "exhibition",
  },
  {
    time: "16:30–17:30",
    title: "Builders Connect: Speed Networking Session",
    description: "Facilitated connections by role: builder ↔ supplier ↔ investor",
    type: "networking",
  },
]

// Speakers section data
const featuredSpeakers = [
  {
    name: "Dr. Sarah Mwangi",
    title: "Director of Infrastructure Development",
    company: "Ministry of Transport & Infrastructure",
    image: "/placeholder.svg?height=300&width=300",
    topic: "The Future of Construction in Africa",
  },
  {
    name: "James Kiprotich",
    title: "CEO & Founder",
    company: "BuildTech Kenya",
    image: "/placeholder.svg?height=300&width=300",
    topic: "Disruptive Technologies in Construction",
  },
  {
    name: "Grace Wanjiku",
    title: "Senior Partner",
    company: "Africa Infrastructure Fund",
    image: "/placeholder.svg?height=300&width=300",
    topic: "Investor Outlook on African PropTech",
  },
  {
    name: "Eng. David Mutua",
    title: "Chief Technology Officer",
    company: "Smart Construction Solutions",
    image: "/placeholder.svg?height=300&width=300",
    topic: "Digital Tools for Contractors",
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

  const currentSchedule = activeDay === "day1" ? programScheduleDay1 : programScheduleDay2

  return (
    <div>
      {/* SEO Head Component */}
      <SEOHead />

      {/* Fixed Navigation Container - Prevents Overlap */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <NavBar2 />
        <NavBar />
      </div>

      {/* Spacer to prevent content from hiding behind fixed navbars */}
      <div className="h-32 md:h-24"></div>

      {/* Hero Section with Slideshow */}
      <section className="w-full h-screen text-white relative">
        <HeroSlideshow slides={heroSlides} autoPlay={true} autoPlayInterval={6000} />
      </section>

      {/* Call to Action Section */}
      <section className="py-8 sm:py-10 md:py-12 px-4 md:px-8 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-6 sm:mb-8">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
              Ready to Join the Innovation?
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
              Don't miss this opportunity to be part of Kenya's premier construction innovation summit.
            </p>
          </header>

          {/* Enhanced CTA Buttons - Using Button Component */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center w-full max-w-md sm:max-w-lg mx-auto">
            <Link to="/registration" className="w-full sm:w-auto flex justify-center">
              <Button className="w-full sm:w-48 md:w-56 text-white">
                <span className="flex items-center justify-center text-sm sm:text-base">
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
              </Button>
            </Link>

            <Link to="/sponsors" className="w-full sm:w-auto flex justify-center">
              <Button className="w-full sm:w-48 md:w-56 text-white">
                <span className="flex items-center justify-center text-sm sm:text-base">
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
                  <span className="whitespace-nowrap">Become a Sponsor</span>
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Event Date and Location Section */}
      <section className="px-4 md:px-20 lg:px-40 py-6 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto">
          <article className="bg-white rounded-2xl shadow-lg p-4 md:p-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">Mark Your Calendar</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* Date Section */}
              <div className="flex flex-col items-center text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-3">
                  <Calendar className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Event Date</h3>
                <p className="text-xl font-bold text-blue-600 mb-1">October 17 - 18, 2025</p>
                <p className="text-gray-600 text-sm">Two Days of Innovation</p>
              </div>

              {/* Location Section */}
              <div className="flex flex-col items-center text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-3">
                  <MapPin className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
                <p className="text-xl font-bold text-green-600 mb-1">Nairobi, Kenya</p>
                <p className="text-gray-600 text-sm">Venue TBD</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Featured Speakers Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Speakers</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Learn from industry leaders, innovators, and experts shaping the future of African construction.
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredSpeakers.map((speaker, index) => (
              <article
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden">
                  <img
                    src={speaker.image || "/placeholder.svg"}
                    alt={`${speaker.name} - ${speaker.title}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{speaker.name}</h3>
                <p className="text-sm text-blue-600 font-medium mb-1">{speaker.title}</p>
                <p className="text-sm text-gray-600 mb-3">{speaker.company}</p>
                <p className="text-xs text-gray-500 italic">"{speaker.topic}"</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="px-6 md:px-20 lg:px-36 py-10 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* About JBIS Text Section */}
          <article className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What is <span className="text-indigo-600">JBIS?</span>
            </h2>
            <p className="text-gray-600 text-base leading-relaxed max-w-xl">
              The <span className="font-semibold text-gray-800">JaGedo Builders Innovation Summit (JBIS)</span> is East
              Africa's premier construction technology event that unites builders, fundis, professionals, tech
              innovators, and industry leaders. It's more than a summit—it's a platform where innovation meets
              execution.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mt-4 max-w-xl">
              Attendees collaborate, learn, and showcase groundbreaking ideas that redefine infrastructure and smart
              construction, empowering builders to shape the future of the built world through technology and
              innovation.
            </p>
          </article>

          {/* Trusted Partners Section */}
          <aside className="flex flex-col items-center w-full">
            <header className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted Partners</h2>
              <p className="text-lg text-gray-600 max-w-md mx-auto">
                We collaborate with industry leaders to deliver exceptional experiences
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mt-4"></div>
            </header>

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

                {/* Partner 2 - Moringa */}
                <div className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl transition-all duration-300 hover:scale-105 border border-gray-100 hover:border-purple-300 hover:shadow-lg w-full max-w-xs">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gray-50 border-2 flex items-center justify-center overflow-hidden hover:border-purple-300 transition-colors duration-300 mb-3">
                    <img
                      src={Moringa || "/placeholder.svg"}
                      alt="Moringa Logo"
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                  <h4 className="text-sm font-semibold text-gray-800 text-center">Moringa</h4>
                </div>

                {/* Partner 3 - Placeholder */}
                <div className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl transition-all duration-300 hover:scale-105 border border-gray-100 hover:border-purple-300 hover:shadow-lg w-full max-w-xs">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gray-50 border-2 flex items-center justify-center overflow-hidden hover:border-purple-300 transition-colors duration-300 mb-3">
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-100 to-blue-100 text-gray-400 text-xs font-medium">
                      Partner Logo
                    </div>
                  </div>
                  <h4 className="text-sm font-semibold text-gray-800 text-center">Fisibo</h4>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-6 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Who Should Attend?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              JBIS brings together diverse professionals from across the construction and technology ecosystem.
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {whoShouldAttend.map((attendee, index) => (
              <article
                key={index}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl flex-shrink-0">{attendee.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{attendee.title}</h3>
                    <p className="text-gray-600 mb-4">{attendee.description}</p>
                    <ul className="space-y-2">
                      {attendee.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Program Schedule Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Summit Program</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Two full days of learning, networking, and innovation in the construction industry.
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
                8:00 AM - 6:00 PM
              </div>
            </div>
          </header>

          <article className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <nav className="flex items-center justify-center gap-3 p-4 border-b border-gray-200">
              <button
                onClick={() => setActiveDay("day1")}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ease-in-out ${
                  activeDay === "day1"
                    ? "bg-blue-600 text-white shadow-lg transform scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:shadow-md border border-gray-200"
                }`}
              >
                Day 1 - Oct 17
              </button>

              <button
                onClick={() => setActiveDay("day2")}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ease-in-out ${
                  activeDay === "day2"
                    ? "bg-blue-600 text-white shadow-lg transform scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:shadow-md border border-gray-200"
                }`}
              >
                Day 2 - Oct 18
              </button>
            </nav>

            <div className="divide-y divide-gray-200">
              {currentSchedule.map((session, index) => (
                <article key={index} className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between">
                    <div className="flex-1 text-center">
                      <div className="flex items-center justify-center space-x-3 mb-2">
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
                </article>
              ))}
            </div>
          </article>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home

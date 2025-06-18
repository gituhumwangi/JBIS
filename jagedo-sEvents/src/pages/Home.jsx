import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Button from '../components/Button';
import JaGedoHeroSection from "../assets/JaGedoHeroSection.jpg";
import Card1 from '../assets/Event1.jpg';
import Card2 from '../assets/Event2.jpg';
import Card3 from '../assets/Event3.jpg';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Clock, MapPin, Calendar } from 'lucide-react';

const sponsorshipBenefits = [
    {
      icon: "🎯",
      title: "Targeted Audience",
      description: "Reach 500+ construction professionals, decision-makers, and industry leaders"
    },
    {
      icon: "🤝",
      title: "Quality Networking",
      description: "Connect with potential clients, partners, and suppliers in structured environments"
    },
    {
      icon: "📈",
      title: "Brand Visibility",
      description: "Showcase your brand across multiple touchpoints before, during, and after the event"
    },
    {
      icon: "🏆",
      title: "Industry Leadership",
      description: "Position your company as a thought leader and industry innovator"
    },
    {
      icon: "📊",
      title: "Lead Generation",
      description: "Generate high-quality leads through exhibition booths and speaking opportunities"
    },
    {
      icon: "🌍",
      title: "Market Expansion",
      description: "Access new markets and expand your presence in East Africa's construction sector"
    }
];

const whoShouldAttend = [
  {
    icon: "🏗️",
    title: "Builders & Contractors",
    description: "Construction professionals, contractors, architects, and project managers looking to stay ahead of industry trends and connect with peers.",
    highlights: ["Latest construction techniques", "Industry best practices", "Networking opportunities"]
  },
  {
    icon: "💻",
    title: "Technology Enthusiasts",
    description: "Tech innovators, software developers, and digital solution providers interested in construction technology and digital transformation.",
    highlights: ["Construction tech innovations", "Digital solutions showcase", "Tech networking sessions"]
  },
  {
    icon: "👥",
    title: "Customers & Clients",
    description: "Property developers, homeowners, and businesses seeking construction services and innovative building solutions.",
    highlights: ["Service provider discovery", "Cost-effective solutions", "Quality assurance insights"]
  },
  {
    icon: "💰",
    title: "Investors & Stakeholders",
    description: "Angel investors, VCs, and financial institutions looking for investment opportunities in the construction and proptech sectors.",
    highlights: ["Investment opportunities", "Market insights", "ROI analysis sessions"]
  }
];

const programSchedule = [
  {
    time: "8:00 AM - 9:00 AM",
    title: "Registration & Welcome Coffee",
    description: "Network with fellow attendees while enjoying breakfast",
    type: "networking"
  },
  {
    time: "9:00 AM - 9:30 AM",
    title: "Opening Ceremony",
    description: "Welcome address and summit overview",
    type: "ceremony"
  },
  {
    time: "9:30 AM - 10:30 AM",
    title: "Keynote: Future of Construction in Kenya",
    description: "Industry trends and opportunities ahead",
    type: "keynote"
  },
  {
    time: "10:30 AM - 11:00 AM",
    title: "Coffee Break & Networking",
    description: "Connect with speakers and attendees",
    type: "break"
  },
  {
    time: "11:00 AM - 12:00 PM",
    title: "Panel: Digital Transformation in Construction",
    description: "How technology is reshaping the industry",
    type: "panel"
  },
  {
    time: "12:00 PM - 1:00 PM",
    title: "Exhibition & Demo Sessions",
    description: "Explore latest tools and innovations",
    type: "exhibition"
  },
  {
    time: "1:00 PM - 2:00 PM",
    title: "Networking Lunch",
    description: "Connect over delicious local cuisine",
    type: "networking"
  },
  {
    time: "2:00 PM - 3:00 PM",
    title: "Workshop: Sustainable Building Practices",
    description: "Hands-on session on green construction",
    type: "workshop"
  },
  {
    time: "3:00 PM - 4:00 PM",
    title: "Investor Pitch Session",
    description: "Startups present to potential investors",
    type: "pitch"
  },
  {
    time: "4:00 PM - 4:30 PM",
    title: "Awards & Recognition",
    description: "Celebrating industry excellence",
    type: "ceremony"
  },
  {
    time: "4:30 PM - 5:00 PM",
    title: "Closing Remarks & Next Steps",
    description: "Summit wrap-up and future initiatives",
    type: "ceremony"
  }
];

const Home = () => {
  const [isSponsorshipExpanded, setIsSponsorshipExpanded] = useState(false);

  const getScheduleTypeColor = (type) => {
    const colors = {
      networking: "bg-green-100 text-green-800",
      ceremony: "bg-purple-100 text-purple-800",
      keynote: "bg-blue-100 text-blue-800",
      break: "bg-gray-100 text-gray-800",
      panel: "bg-orange-100 text-orange-800",
      exhibition: "bg-yellow-100 text-yellow-800",
      workshop: "bg-red-100 text-red-800",
      pitch: "bg-indigo-100 text-indigo-800"
    };
    return colors[type] || "bg-gray-100 text-gray-800";
  };

  return (
    <div>
      {/* Navigation */}
      <NavBar />

      {/* Hero Section */}
      <div className="px-4 md:px-20 lg:px-40 py-8 bg-[rgb(0,0,122)] text-white">
  <div
    className="min-h-[480px] rounded-xl bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-center p-6 gap-4"
    // style={{
    //   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(${JaGedoHeroSection})`,
    // }}
  >
    <h1 className="text-white leading-tight text-4xl md:text-6xl font-extrabold font-manrope m-1">
      JBIS: JaGedo Builder Innovation Summary
    </h1>
    <h2 className="text-white text-2xl md:text-4xl font-bold font-manrope m-1">
      Theme: Future-Proofing Construction Through Innovation
    </h2>
   <p className="text-gray-100 text-base mb-6 sm:text-xl max-w-xl ">
  <span className="inline-block text-blue-400 mr-2 align-middle">
    <MapPin />
  </span>
  <strong>Venue:</strong> WestPark Towers 12th floor, Westlands <br />

  <span className="inline-block text-green-400 mr-2 align-middle">
    <Calendar />
  </span>
  <strong>Date:</strong> July 27, 2025 <br />

  <span className="inline-block text-yellow-400 mr-2 align-middle">
    <Clock />
  </span>
  <strong>Time:</strong> 9:00 AM – 5:00 PM <br />

  Join us as we bring together industry leaders, innovators, and visionaries to redefine the future of construction.
</p>

    <Button className="w-100 md:w-40 text-white font-bold px-6 py-2 mt-2 shadow-lg focus:ring-3 bg-blue-500">
      <Link to="/registration">Register Now</Link>
    </Button>
  </div>
</div>


      {/* About Us Section */}
<section className="px-4 md:px-20 lg:px-40 py-8">
  <h1 className="text-gray-900 leading-tight text-base md:text-4xl font-extrabold font-manrope mb-6 pb-4 text-center">
    What is JaGedo Builder Innovation Summit
  </h1>

  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
    {/* Image Section */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center order-2 lg:order-1">
      <img
        className="rounded-xl w-full h-auto object-cover"
        src="https://pagedone.io/asset/uploads/1717741205.png"
        alt="event"
      />
      <img
        className="rounded-xl w-full h-auto object-cover"
        src="https://pagedone.io/asset/uploads/1717741215.png"
        alt="event"
      />
    </div>

    {/* Text Section */}
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2">
      <h2 className="text-gray-900 text-3xl md:text-4xl font-bold mb-4">
        What is JBIS?
      </h2>
      <p className="text-gray-500 mb-6">
        The <strong>JaGedo Builder Innovation Summit (JBIS)</strong> is an annual flagship event that brings together construction professionals, technology innovators, and industry leaders to collaborate, learn, and showcase groundbreaking ideas. It’s a space where innovation meets execution — empowering builders to lead the future of infrastructure and smart construction.
      </p>

      

      {/* <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-6">
        <div>
          <h3 className="text-3xl font-bold text-gray-900">July 27, 2025</h3>
          <p className="text-sm text-gray-500">Event Date</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-gray-900">KICC, Nairobi</h3>
          <p className="text-sm text-gray-500">Venue</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-gray-900">"Future-Proofing Construction"</h3>
          <p className="text-sm text-gray-500">Event Theme</p>
        </div>
      </div> */}
    </div>
  </div>
</section>

<section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto py-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Sponsor the JaGedo Summit?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              Connect with Kenya's construction industry leaders and position your brand at the forefront of innovation.
            </p>

             <button
              onClick={() => setIsSponsorshipExpanded(!isSponsorshipExpanded)}
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              <span>{isSponsorshipExpanded ? 'Show Less' : 'View Benefits'}</span>
              {isSponsorshipExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          <div className={`transition-all duration-300 overflow-hidden ${isSponsorshipExpanded ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {sponsorshipBenefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

         <div className="text-center mt-8">
            <Link 
              to="/sponsors" 
            >
              <Button className="px-1 w-30 md:w-50 h-auto">Become a Sponser</Button>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>



      {/* Who Should Attend Section */}
      {/* <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Who Should Attend?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              JBIS brings together diverse professionals from across the construction and technology ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {whoShouldAttend.map((attendee, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
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
      </section> */}

      {/* Program Schedule Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Summit Program
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A full day of learning, networking, and innovation in the construction industry.
            </p>
            <div className="flex items-center justify-center mt-4 space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                March 15, 2025
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                Nairobi, Kenya
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                8:00 AM - 5:00 PM
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden text-center">
            {programSchedule.map((session, index) => (
              <div key={index} className={`p-6 ${index !== programSchedule.length - 1 ? 'border-b border-gray-200' : ''}`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {session.time}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${getScheduleTypeColor(session.type)}`}>
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

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Who Should Attend?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              JBIS brings together diverse professionals from across the construction and technology ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {whoShouldAttend.map((attendee, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
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


      {/* Sponsorship Section */}
      {/* <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Sponsor the JaGedo Summit?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              Connect with Kenya's construction industry leaders and position your brand at the forefront of innovation.
            </p> */}
            
            {/* Collapse Toggle Button */}
            {/* <button
              onClick={() => setIsSponsorshipExpanded(!isSponsorshipExpanded)}
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              <span>{isSponsorshipExpanded ? 'Show Less' : 'View Benefits'}</span>
              {isSponsorshipExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div> */}

          {/* Collapsible Benefits Grid */}
          {/* <div className={`transition-all duration-300 overflow-hidden ${isSponsorshipExpanded ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {sponsorshipBenefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div> */}

          {/* Become a Sponsor Button */}
          {/* <div className="text-center mt-8">
            <Link 
              to="/sponsors" 
            >
              <Button className="px-1 w-30 md:w-50 h-auto">Become a Sponser</Button>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
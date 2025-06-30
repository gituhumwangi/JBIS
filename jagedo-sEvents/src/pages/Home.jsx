import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Button from '../components/Button';
import JaGedoHeroSection from "../assets/JaGedoHeroSection2.jpg";
import Card1 from '../assets/Event1.jpeg';
// import Card2 from '../assets/Event2.jpg';
// import Card3 from '../assets/Event3.jpg';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Clock, MapPin, Calendar } from 'lucide-react';
import AboutImage1 from '../assets/AboutImage1.jpg';
import AboutImage2 from '../assets/AboutImage2.jpg';
import JaGedoLogo from '../assets/Japageologo.webp';
import { image } from 'framer-motion/client';
import { ImInsertTemplate } from 'react-icons/im';

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

 const partners = [
  "JaGedo"
   ];

const whoShouldAttend = [
  {
    icon: "🏗️",
    title: "Builders",
    description: "Construction, fundis, professionals and Hardware Owners looking to stay ahead of industry trends and connect with peers.",
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
    title: "Clients",
    description: "Property developers, homeowners, and businesses seeking construction services and innovative building solutions.",
    highlights: ["Service provider discovery", "Cost-effective solutions", "Quality assurance insights"]
  },
  {
    icon: "💰",
    title: "Investors & Stakeholders",
    description: "Angel investors, VCs, and financial institutions looking for investment opportunities in the construction and contech sectors.",
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
  const [activeDay, setActiveDay] = useState("day1");

  // const renderSchedule = (schedule) => {
  //   schedule.map(items, index => ())
  // }

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
      <div className="px-4 md:px-20 lg:px-40 py-8 text-white">
  <div
    className="min-h-[500px] disabled:opacity-50 rounded-3xl bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-center p-8 md:p-16 gap-6 shadow-xl"
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0.9, 0.9, 0.9), rgba(0, 0, 0, 0.6)), url(${Card1})`,
    }}
  >
    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-manrope leading-tight">
      JBIS: JaGedo Builders Innovation Summit
    </h1>

    <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold font-manrope">
      Future-Proofing Construction Through Innovation
    </h2>

   <div className="text-gray-100 text-base sm:text-lg md:text-xl max-w-2xl space-y-2">
      <div className="flex items-center justify-center gap-2">
        <MapPin className="text-blue-400" size={20} />
        <span>TBD</span>
      </div>
      
      <div className="flex items-center justify-center gap-2">
        <Calendar className="text-green-400" size={20} />
        <span>October 17 - 18, 2025</span>
      </div>
      
      <div className="flex items-center justify-center gap-2">
        <Clock className="text-yellow-400" size={20} />
        <span>9:00 AM – 5:00 PM</span>
      </div>
    </div>

    <p className="text-gray-100 text-sm sm:text-base max-w-xl">
      Join industry leaders and innovators reshaping construction's future.
    </p>

    <div className="flex gap-4">
    <Button className="w-full sm:w-auto  md:w-40 lg:w-45 text-white font-bold px-5 py-3 shadow-lg transition">
      <Link to="/registration">Register Now</Link>
    </Button>

    <Button className="w-full sm:w-auto  md:w-40 lg:w-45 text-white font-bold px-5 py-3 shadow-lg transition ">
      <Link to="/sponsors">Sponsor</Link>
    </Button>
    </div>
  </div>
</div>



   {/* About Us Section */}
<section className="px-6 md:px-20 lg:px-36 py-10 bg-white">
  <h1 className="text-center text-2xl md:text-4xl font-extrabold text-gray-900 font-manrope mb-12">
    What is JaGedo Builders Innovation Summit?
  </h1>

  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
    {/* Image Section */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 order-2 lg:order-1">
      {[AboutImage1, AboutImage2].map((img, index) => (
        <div
          key={index}
          className="relative group overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-transform duration-500 hover:scale-105"
        >
          <img
            src={img}
            // alt={`Event ${index + 1}`}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center rounded-3xl">
            {/* <p className="text-white text-lg font-semibold">Event {index + 1}</p> */}
          </div>
        </div>
      ))}
    </div>

    {/* Text Section */}
    <div className="order-1 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        What is <span className="text-indigo-600">JBIS?</span>
      </h2>
      <p className="text-gray-600 text-base leading-relaxed max-w-xl">
        The <span className="font-semibold text-gray-800">JaGedo Builders Innovation Summit; (JBIS)</span> is our innovatively flagship event that unites builders, fundis, professionals, tech innovators, and industry leaders. It's more than a summit it's a platform where innovation meets execution.
      </p>
      <p className="text-gray-600 text-base leading-relaxed mt-4 max-w-xl">
        Attendees collaborate, learn, and showcase groundbreaking ideas that redefine infrastructure and smart construction;empowering builders to shape the future of the built world.
      </p>
    </div>
  </div>
</section>

      

      

{/* Partners */}
<section className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Trusted Partners
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        We collaborate with industry leaders to deliver exceptional experiences
      </p>
      <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mt-4"></div>
    </div>

    {/* Centered and larger logo container */}
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center justify-center p-8 bg-white rounded-3xl  transition-all duration-300 hover:scale-105 border border-gray-100 max-w-md">
        <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full bg-gray-50 border-4 border-gray-200 flex items-center justify-center overflow-hidden hover:border-purple-300 transition-colors duration-300 mb-6">
          <img
            src={JaGedoLogo}
            alt="JaGedo Logo"
            className="w-full h-full object-contain p-6"
          />
        </div>
        {/* <h3 className="text-2xl font-bold text-gray-800 text-center">
          JaGedo
        </h3> */}
        {/* <p className="text-gray-600 text-center mt-2">
          Our Founding Partner
        </p> */}
      </div>
    </div>
  </div>
</section>

<section className="py-2 px-4 sm:px-4 lg:px-5 bg-white my-2">
        <div className="max-w-6xl mx-auto py-10">
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
              <Button className="px-1 md:w-48 h-auto text-white sm:w-auto"><Link to="/sponsors"><span className='px-2 py-2'>Become a Sponsor</span></Link></Button>
          </div>
        </div>
      </section> 



     

      <section className="py-6 px-4 sm:px-6 lg:px-8 bg-white">
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
            <div className='flex items-center justify-center gap-3 p-4'>
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

      

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
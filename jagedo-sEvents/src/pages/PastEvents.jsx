import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Users, Trophy, Star, ArrowRight, Check, Quote } from 'lucide-react';
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Event1 from "../assets/Event1.jpeg"
import Event2 from "../assets/Event001.jpg"
import Event3 from "../assets/Event3.jpeg"

export default function PastEvents() {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [counters, setCounters] = useState({ events: 0, participants: 0, satisfaction: 0, prizes: 0 });

  // Counter animation effect
  useEffect(() => {
    const targets = { events: 4, participants: 500, satisfaction: 98, prizes: 1000 };
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    const intervals = Object.keys(targets).map(key => {
      const target = targets[key];
      const increment = target / steps;
      let current = 0;

      return setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(intervals.find(i => i === interval));
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, stepTime);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  const events = [
    {
      id: 1,
      title: "Construct The Future",
      date: "May 19-23, 2025",
      location: "WestLands West Park Towers",
      description: "Where Codes Meets Concrete.",
      // participants: 500,
      // projects: 75,
      // prizePool: "100K",
      type: "Hackathon",
      image: Event2
    },
    {
      id: 2,
      title: "Platform Review Workshop",
      date: "17 August 2024",
      location: "WestLands West Park Towers ",
      description: "It brings together key stakeholders—including  service providers , product managers, and other  users—to assess what’s working, identify pain points, and prioritize improvements",
      // participants: 2500,
      // sessions: 12,
      // completion: "95%",
      type: "Workshop",
      image: Event1
    },
    // {
    //   id: 3,
    //   title: "Investor Connect Summit",
    //   date: "June 8-9, 2024",
    //   location: "Innovation District",
    //   description: "Premium networking event connecting startups with VCs and angel investors.",
    //   participants: 200,
    //   investors: 50,
    //   deals: "5M+",
    //   type: "Summit",
    //   image: Event3
    // },
    // {
    //   id: 4,
    //   title: "Blockchain Developer Conference",
    //   date: "September 22-23, 2024",
    //   location: "Convention Center",
    //   description: "Two-day conference with industry leaders and technical workshops for blockchain developers.",
    //   participants: 800,
    //   speakers: 25,
    //   satisfaction: "97%",
    //   type: "Conference",
    //   image: Event3
    // }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Lead Developer, TechStart Inc.",
      content: "The hackathon was incredibly well-organized. From registration to final presentations, everything ran smoothly. The mentorship and resources provided were top-notch.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Data Scientist, AI Innovations",
      content: "I've attended many workshops, but the AI Builders series stands out for its practical approach and expert instructors. I learned more in one session than months of self-study.",
      rating: 5
    },
    {
      name: "Jennifer Park",
      role: "Partner, Venture Capital Group",
      content: "The Investor Connect Summit exceeded expectations. The quality of startups and the caliber of investors created an environment where real deals could happen.",
      rating: 5
    }
  ];

  const partners = [
    "TechCorp", "InnovateLab", "CloudVentures", "StartupHub", "DevTools Pro", "FutureVC", "BlockchainPro", "AIFoundry"
  ];

  const achievements = [
    { icon: Check, text: "ISO 9001 Certified Event Management" },
    { icon: Trophy, text: "Best Tech Event Organizer 2024" },
    { icon: Star, text: "Featured in TechCrunch & Forbes" },
    { icon: Users, text: "98% Average Satisfaction Rate" }
  ];

  const mediaLogos = [
    "TechCrunch", "Forbes", "Wired", "VentureBeat", "The Verge", "Ars Technica"
  ];

  const services = [
    {
      title: "Hackathons & Competitions",
      description: "Multi-day intensive coding competitions with industry mentorship and substantial prize pools.",
      features: ["48-72 hour events", "Expert mentors", "Prize pools up to $100K", "Industry partnerships"],
      icon: "💻"
    },
    {
      title: "Professional Workshops",
      description: "Hands-on learning experiences covering cutting-edge technologies and industry best practices.",
      features: ["Expert instructors", "Practical projects", "Small group sizes", "Certificate programs"],
      icon: "🎓"
    },
    {
      title: "Networking Events",
      description: "Premium gatherings connecting investors, entrepreneurs, and industry leaders.",
      features: ["Curated attendee lists", "1-on-1 meetings", "Demo showcases", "Deal facilitation"],
      icon: "🤝"
    },
    {
      title: "Corporate Training",
      description: "Custom-designed training programs for enterprise teams and organizations.",
      features: ["Tailored curriculum", "On-site delivery", "Team building", "Skills assessment"],
      icon: "🏢"
    }
  ];

  const timeline = [
    { year: "2020", event: "Founded with first hackathon", participants: "50" },
    { year: "2021", event: "Expanded to 12 cities", participants: "1,200" },
    { year: "2022", event: "Launched workshop series", participants: "3,500" },
    { year: "2023", event: "International expansion", participants: "8,000" },
    { year: "2024", event: "50+ events milestone", participants: "15,000+" }
  ];

  const teamMembers = [
    { name: "Alex Johnson", role: "CEO & Founder", experience: "10+ years in event management", image: "bg-gradient-to-br from-blue-400 to-purple-600" },
    { name: "Sarah Kim", role: "Head of Operations", experience: "Former Google event coordinator", image: "bg-gradient-to-br from-pink-400 to-red-600" },
    { name: "Michael Chen", role: "Technical Director", experience: "Ex-Microsoft senior engineer", image: "bg-gradient-to-br from-green-400 to-teal-600" },
    { name: "Lisa Rodriguez", role: "Community Manager", experience: "Built 50+ tech communities", image: "bg-gradient-to-br from-yellow-400 to-orange-600" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
        {/* NavBar */}
        <div>
            <NavBar/>
        </div>
      {/* Hero Section */}
      {/* <section className="relative bg-[rgb(0,0,122)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10"></div>
        
        <div className="absolute top-20 left-10 w-32 h-32 bg-[rgb(0,0,122)] rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              Proven Event Excellence
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Leading the industry with world-class hackathons, workshops, and networking events that drive innovation and build communities
            </p>
          </div> */}

          {/* Stats Grid */}
          {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                {counters.events}+
              </div>
              <div className="text-gray-300 font-medium">Events Hosted</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                {(counters.participants).toFixed(0)}
              </div>
              <div className="text-gray-300 font-medium">Participants</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                {counters.satisfaction}%
              </div>
              <div className="text-gray-300 font-medium">Satisfaction Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                ${(counters.prizes).toFixed(1)}
              </div>
              <div className="text-gray-300 font-medium">Prize Pool</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Achievements */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <achievement.icon className="h-6 w-6 text-purple-600 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{achievement.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Events Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Signature Events
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <div 
                key={event.id}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:-translate-y-2"
              >
                <div className={'h-48 bg-cover bg-center relative overflow-hidden'} style={{ backgroundImage: `url(${event.image})`}}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {event.type}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4">
                    {/* <div className="text-center p-4 bg-gray-50 rounded-xl">
                      <div className="text-2xl font-bold text-purple-600 mb-1">
                        {event.participants?.toLocaleString() || event.sessions || event.speakers}
                      </div>
                      <div className="text-xs text-gray-500 font-medium">
                        {event.participants ? 'Participants' : event.sessions ? 'Sessions' : 'Speakers'}
                      </div>
                    </div> */}
                    {/* <div className="text-center p-4 bg-gray-50 rounded-xl">
                      <div className="text-2xl font-bold text-purple-600 mb-1">
                        {event.projects || event.investors || event.completion || event.satisfaction}
                      </div>
                      <div className="text-xs text-gray-500 font-medium">
                        {event.projects ? 'Projects' : event.investors ? 'Investors' : event.completion ? 'Completion' : 'Satisfaction'}
                      </div>
                    </div> */}
                    {/* <div className="text-center p-4 bg-gray-50 rounded-xl">
                      <div className="text-2xl font-bold text-purple-600 mb-1">
                        {event.prizePool ? `$${event.prizePool}` : event.deals ? `$${event.deals}` : '97%'}
                      </div>
                      <div className="text-xs text-gray-500 font-medium">
                        {event.prizePool ? 'Prize Pool' : event.deals ? 'Deals' : 'Rating'}
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Participants Say
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative">
                <Quote className="h-8 w-8 text-purple-200 mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Services */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive event solutions tailored to your needs
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Timeline */}
      {/* <section className="py-20 bg-gradient-to-br from-gray-900 via-[rgb(0,0,122)] to-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Growth Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From humble beginnings to industry leadership
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"></div>
            
            {timeline.map((item, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/15 transition-colors">
                    <div className="text-2xl font-bold text-purple-300 mb-2">{item.year}</div>
                    <div className="text-lg font-semibold mb-2">{item.event}</div>
                    <div className="text-gray-300">{item.participants} participants</div>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-purple-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Team */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Industry experts with proven track records in event management and technology
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2">
                <div className={`h-48 ${member.image} relative`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                  <div className="text-purple-600 font-medium mb-2">{member.role}</div>
                  <div className="text-sm text-gray-600">{member.experience}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Media Coverage */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Featured In
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {mediaLogos.map((media, index) => (
              <div 
                key={index}
                className="bg-gray-50 hover:bg-gray-100 rounded-lg p-4 text-center transition-colors flex items-center justify-center h-16"
              >
                <div className="text-gray-600 font-semibold text-sm">{media}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Partners
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

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="bg-white hover:bg-purple-50 border-2 border-gray-200 hover:border-purple-200 rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
              >
                <div className="text-gray-700 font-bold text-sm">{partner}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {[
              {
                question: "What makes your events different from others?",
                answer: "We combine industry expertise with cutting-edge technology and strong community focus. Our events feature top-tier mentors, substantial prize pools, and create lasting connections between participants, investors, and industry leaders."
              },
              {
                question: "How do you ensure event quality and participant satisfaction?",
                answer: "We maintain rigorous quality standards through ISO 9001 certification, detailed post-event surveys, continuous feedback loops, and a dedicated support team. Our 98% satisfaction rate reflects our commitment to excellence."
              },
              {
                question: "Can you organize custom events for our organization?",
                answer: "Absolutely! We specialize in creating tailored events that meet your specific goals, whether it's team building, product launches, investor meetups, or educational workshops. Our team works closely with you from planning to execution."
              },
              {
                question: "What kind of support do participants receive?",
                answer: "Participants get comprehensive support including pre-event preparation materials, dedicated mentors during events, technical assistance, networking facilitation, and post-event follow-up resources and connections."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Form */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to create an exceptional event? Get in touch with our team to discuss your vision and requirements.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    First Name *
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Last Name *
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="your.email@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Company
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Event Type
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors">
                  <option>Select event type</option>
                  <option>Hackathon</option>
                  <option>Workshop Series</option>
                  <option>Networking Event</option>
                  <option>Corporate Training</option>
                  <option>Custom Event</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Expected Participants
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors">
                  <option>Select participant count</option>
                  <option>50-100</option>
                  <option>100-300</option>
                  <option>300-500</option>
                  <option>500-1000</option>
                  <option>1000+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Project Details *
                </label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  placeholder="Tell us about your event vision, goals, timeline, and any specific requirements..."
                ></textarea>
              </div>

              <div className="flex items-center space-x-3">
                <input 
                  type="checkbox" 
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />
                <label className="text-sm text-gray-600">
                  I agree to receive communications about this project and future events
                </label>
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                Send Project Inquiry
              </button>
            </form>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      {/* <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                TechBuild Events
              </h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Leading the industry with world-class hackathons, workshops, and networking events that drive innovation and build communities.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-500 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">Li</span>
                </div>
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">Tw</span>
                </div>
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">Yt</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="hover:text-white transition-colors cursor-pointer">Hackathons</li>
                <li className="hover:text-white transition-colors cursor-pointer">Workshops</li>
                <li className="hover:text-white transition-colors cursor-pointer">Networking Events</li>
                <li className="hover:text-white transition-colors cursor-pointer">Corporate Training</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-300">
                <li>events@techbuild.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Innovation Drive</li>
                <li>Tech City, TC 12345</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 TechBuild Events. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer> */}
      <Footer />
    </div>
  );
}
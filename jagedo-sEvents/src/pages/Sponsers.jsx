import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Button from '../components/Button'
import NavBar2 from "../components/NavBar2"
import Jagedologo from "../assets/Japageologo.webp";
import { ChevronDown, ChevronUp, Clock, MapPin, Calendar } from 'lucide-react';


const SponsorsPage = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

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

  const sponsorshipTiers = [
    
    {
      title: "Platinum Sponsor",
      price: "KES 250,000",
      color: "from-gray-400 to-gray-600",
      textColor: "text-gray-900",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200",
      features: [
        "Top-tier brand exposure: Prime logo placement on all event materials, banners, stage backdrops, and digital campaigns.",
        "Speaking opportunity: Keynote or panel speaking slot for a company executive.",
        "Exhibition space: Premium booth location with double-size space.",
        "Lead generation: Full access to attendee list with contact info (opt-in)",
        "Media visibility: Featured in all press releases, interviews, and media coverage.",
        "Social media spotlight: Dedicated posts before, during, and after the event.",
        "VIP passes: 10 passes, including access to exclusive networking lounges",
        "Launch privileges: Priority slot for any product/service launch at the summit.",
        "Branded content: Option to insert flyers, brochures, or gifts into summit bags.",
      ]
    },
    {
      title: "Gold Sponsor",
      price: "KES 125,000",
      color: "from-yellow-500 to-yellow-800",
      textColor: "text-yellow-900",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-300",
      features: [
        "High-Impact Visibility:",
        "Logo placement: On event backdrops, digital banners, and select print materials.",
        "Panel participation: Invitation for one company rep to join a discussion panel.",
        "Exhibition booth: Standard booth in high-traffic area.",
        "Lead generation: Access to post-event attendee summary (opt-in).",
        "Media inclusion: Mention in press releases and post-event wrap-ups.",
        "Social media shoutouts: Featured in sponsor carousel and thank-you posts.",
        "VIP passes: 35 passes with access to select networking sessions.",
        "Product display: Option to showcase materials or demos at booth."
      ]
    },
    {
      title: "Silver Sponsor",
      price: "KES 75,000",
      color: "from-blue-500 to-blue-700",
      textColor: "text-blue-900",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      features: [
        "Brand Presence with Value:",
        "Logo display: On select banners and digital platforms.",
        "Exhibition space: Standard booth.",
        "Lead support: Opportunity to collect leads via booth engagement.",
        "Mention in programs: Listed in digital program and website.",
        "Social media: Group mention with fellow silver sponsors.",
        "Event access: 20 VIP passes and general networking access"
      ]
    },
    {
      title: "Bronze Sponsor",
      price: "KES 25,000",
      color: "from-yellow-300 to-yellow-600",
      textColor: "text-yellow-900",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      features: [
        "Entry-Level Exposure:",
        "Name listing: On website and event program",
        "Exhibition space: Shared exhibition table or basic booth",
        "Networking: 10 event pass with general access.",
        "Social media: Group mention pre- and post-event.",
      ]
    },
  ];

  const currentSponsors = [
    {
      name: "BuildTech Kenya",
      logo: "🏗️",
      tier: "Title Sponsor",
      description: "Leading construction technology solutions provider"
    },
    {
      name: "SafeConstruct Ltd",
      logo: "🦺",
      tier: "Platinum Sponsor",
      description: "Safety equipment and training specialists"
    },
    {
      name: "GreenBuild Materials",
      logo: "🌱",
      tier: "Gold Sponsor",
      description: "Sustainable building materials supplier"
    },
    {
      name: "DigitalSite Pro",
      logo: "📱",
      tier: "Gold Sponsor",
      description: "Construction project management software"
    },
    {
      name: "Heavy Machinery Co.",
      logo: "🚛",
      tier: "Silver Sponsor",
      description: "Construction equipment rental and sales"
    },
    {
      name: "Architect Alliance",
      logo: "📐",
      tier: "Silver Sponsor",
      description: "Professional architectural services"
    }
  ];

  const partners = [
  "JaGedo"
   ];

  const [isSponsorshipExpanded, setIsSponsorshipExpanded] = useState(false);
   

  

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* NavBar */}
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <NavBar2 />
        <NavBar />
      </div>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        {/* <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Partner With Us
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join leading companies in sponsoring Kenya's premier construction industry event. 
              Reach over 500 professionals and showcase your brand to key decision-makers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="#packages"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-50 transition transform hover:scale-105"
              >
                View Packages
              </Link>
              <a
                href="mailto:sponsors@jagedo.com"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-blue-600 transition"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section> */}

        {/* <section className="py-10 bg-gradient-to-br from-purple-50 via-white to-blue-50">
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
        
       <div className="flex justify-center items-center">
             <div className="flex flex-col items-center justify-center p-8 bg-white transition-all duration-300 hover:scale-105  max-w-md">
               <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full bg-gray-50 border-4 flex items-center justify-center overflow-hidden hover:border-purple-300 transition-colors duration-300 mb-6">
                 <img
                   src={Jagedologo}
                   alt="JaGedo Logo"
                   className="w-full h-full object-contain p-6"
                 />
               </div> */}
               {/* <h3 className="text-2xl font-bold text-gray-800 text-center">
                 JaGedo
               </h3> */}
               {/* <p className="text-gray-600 text-center mt-2">
                 Our Founding Partner
               </p> */}
             {/* </div>
           </div>
        
        </div>
              </section> */}

        <section className="py-2 px-4 sm:px-4 lg:px-5 sm:py-2 lg:py-2 bg-white my-2">
                <div className="max-w-6xl mx-auto py-1">
                  <div className="text-center mb-2">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      Why Sponsor the JaGedo Summit?
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-2">
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
                    <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
                      {sponsorshipBenefits.map((benefit, index) => (
                        <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition">
                          <div className="text-4xl mb-4">{benefit.icon}</div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                          <p className="text-gray-600">{benefit.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
        
                 {/* <div className="text-center mt-8">
                      <Button className="px-1 md:w-48 h-auto text-white sm:w-auto"><Link to="/sponsors"><span className='px-2 py-2'>Become a Sponsor</span></Link></Button>
                  </div> */}
                </div>
              </section> 
        


        {/* Sponsorship Packages */}
<section id="packages" className="py-1 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Sponsorship Packages
      </h2>
      <p className="text-lg text-gray-600">
        Choose the package that best fits your marketing objectives and budget.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
      {sponsorshipTiers.map((tier, index) => (
        <div
          key={index}
          className={`relative bg-white rounded-2xl shadow-lg border-2 ${tier.borderColor} overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col`}
        >
          {/* Header */}
          <div className={`bg-gradient-to-r ${tier.color} px-6 py-8 text-center text-white`}>
            <h3 className="text-2xl font-bold mb-2">{tier.title}</h3>
            <div className="text-3xl font-extrabold">{tier.price}</div>
          </div>

          {/* Features */}
          <div className="p-6 flex-grow">
            <ul className="space-y-3">
              {tier.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <div className="p-6 pt-0 mt-auto">
            <Link
            to="/sponsersregistration"
              // onClick={() => setSelectedPackage(tier)}
              className={`items-center flex justify-center`}
            >
              <Button className="md:w-20 lg:w-38 items-center  h-auto text-white sm:w-56"> Select Package </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Current Sponsors */}
{/* <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Our 2024 Sponsors
      </h2>
      <p className="text-lg text-gray-600">
        Thank you to our amazing sponsors who make this event possible.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {currentSponsors.map((sponsor, index) => (
        <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center hover:shadow-md transition">
          <div className="text-6xl mb-4">{sponsor.logo}</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{sponsor.name}</h3>
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-3">
            {sponsor.tier}
          </span>
          <p className="text-gray-600 text-sm">{sponsor.description}</p>
        </div>
      ))}
    </div>
  </div>
</section> */}


        {/* Custom Sponsorship */}
        {/* <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Need a Custom Package?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We understand that every company has unique marketing objectives. Let's work together to create 
              a sponsorship package that perfectly aligns with your goals and budget.
            </p>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Custom opportunities include:
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Branded workshop sessions
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Custom exhibition designs
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      VIP client hosting areas
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Product demonstration zones
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Exclusive networking events
                    </li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="mb-6">
                    <span className="text-6xl">🤝</span>
                  </div>
                  <a
                    href="mailto:sponsors@jagedo.com?subject=Custom Sponsorship Inquiry"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-full hover:from-blue-700 hover:to-blue-800 transition transform hover:scale-105"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    Let's Talk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Contact Section */}
        {/* <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Partner With Us?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join industry leaders in supporting Kenya's construction future. Contact our sponsorship team today.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl mb-3">📧</div>
                <h3 className="font-semibold mb-2">Email</h3>
                <a href="mailto:sponsors@jagedo.com" className="text-blue-200 hover:text-white transition">
                  sponsors@jagedo.com
                </a>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">📱</div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <a href="tel:+254700000000" className="text-blue-200 hover:text-white transition">
                  +254 700 000 000
                </a>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">💬</div>
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <a href="https://wa.me/254700000000" className="text-blue-200 hover:text-white transition">
                  Chat with us
                </a>
              </div>
            </div>

            <p className="text-blue-100 text-sm">
              Response time: Within 24 hours | Available: Monday - Friday, 8 AM - 6 PM EAT
            </p>
          </div>
        </section>}
      </main> */}
      </main>

      {/* Footer */}
      <Footer />

      {/* Package Selection Modal */}
      {selectedPackage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {selectedPackage.title}
              </h3>
              <p className="text-3xl font-bold text-blue-600">{selectedPackage.price}</p>
            </div>
            
            <p className="text-gray-600 mb-6 text-center">
              Thank you for your interest! Our sponsorship team will contact you within 24 hours to discuss 
              the {selectedPackage.title} package and answer any questions.
            </p>
            
            <div className="flex gap-4">
              <button
                onClick={() => setSelectedPackage(null)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition"
              >
                Close
              </button>
              <a
                href={`mailto:sponsors@jagedo.com?subject=${selectedPackage.title} Sponsorship Inquiry`}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition text-center"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SponsorsPage;
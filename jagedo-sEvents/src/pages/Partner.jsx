import  { useState } from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Partner = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const sponsorshipTiers = [
    {
      title: "Title Sponsor",
      price: "KES 500,000",
      color: "from-yellow-400 to-yellow-600",
      textColor: "text-yellow-900",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      features: [
        "Event naming rights (JaGedo Summit powered by [Your Company])",
        "Logo on all marketing materials and communications",
        "Opening keynote speaking opportunity (20 minutes)",
        "Premium exhibition booth (6x6 meters)",
        "10 complimentary registrations",
        "VIP networking dinner hosting rights",
        "Post-event attendee contact list",
        "Year-round partnership recognition",
        "Custom branded registration area",
        "Exclusive mobile app splash screen"
      ]
    },
    {
      title: "Platinum Sponsor",
      price: "KES 300,000",
      color: "from-gray-400 to-gray-600",
      textColor: "text-gray-900",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200",
      features: [
        "Logo prominently displayed on all materials",
        "Panel discussion speaking opportunity",
        "Large exhibition booth (4x4 meters)",
        "6 complimentary registrations",
        "Workshop or breakout session hosting",
        "Welcome reception co-hosting rights",
        "Mobile app banner advertisement",
        "Stage backdrop logo placement",
        "Branded signage throughout venue",
        "Networking lunch table hosting"
      ]
    },
    {
      title: "Gold Sponsor",
      price: "KES 150,000",
      color: "from-yellow-500 to-yellow-700",
      textColor: "text-yellow-900",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-300",
      features: [
        "Logo on website and select materials",
        "Exhibition booth (3x3 meters)",
        "4 complimentary registrations",
        "Coffee break sponsorship opportunity",
        "Mobile app listing with company profile",
        "Speaking opportunity in panel discussion",
        "Welcome bag insert inclusion",
        "Social media recognition",
        "Networking session table reservation"
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
        "Logo on website sponsor page",
        "Standard exhibition booth (2x2 meters)",
        "2 complimentary registrations",
        "Welcome bag insert",
        "Mobile app company listing",
        "Social media mentions",
        "Certificate of sponsorship recognition"
      ]
    }
  ];

  
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

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="sticky top-0 z-50 bg-white shadow-md">
      
      </div>

      <main className="flex-1">
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Partner With Us
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Join Leading companies in sponsoring Kenya's premier construction industry.
                Reach over 1500+ professionals and showcase your brand to key decision-makers 

              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sponsorshipBenefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="packages" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Partnership Packages
              </h2>
              <p className="text-lg text-gray-600">
                Choose the package that best fits your marketing objectives and budget.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
              {sponsorshipTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`relative bg-white rounded-2xl shadow-lg border-2 ${tier.borderColor} overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                >
                  <div className={`bg-gradient-to-r ${tier.color} px-6 py-8 text-center text-white`}>
                    <h3 className="text-2xl font-bold mb-2">{tier.title}</h3>
                    <div className="text-3xl font-extrabold">{tier.price}</div>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6 pt-0">
                    <button
                      onClick={() => setSelectedPackage(tier)}
                      className={`w-full bg-gradient-to-r ${tier.color} text-white font-bold py-3 px-6 rounded-full hover:opacity-90 transition`}
                    >
                      Select Package
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
            
            </div>

            
          </div>
        </section>

        
        
      </main>

      <Footer />

      {selectedPackage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedPackage.title}</h3>
              <p className="text-3xl font-bold text-blue-600">{selectedPackage.price}</p>
            </div>
           
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

export default Partner;

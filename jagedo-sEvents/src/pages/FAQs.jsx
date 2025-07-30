import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import NavBar2 from '../components/NavBar2';

const FAQPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    {
      category: 'Event Information',
      questions: [
        {
          question: "What is the JaGedo Builders Innovation Summit?",
          answer: "The JaGedo Builders Innovation Summit is Kenya's premier construction industry event, bringing together over 500 professionals including contractors, engineers, architects, suppliers, and technology innovators. The summit focuses on sustainable construction practices, digital transformation, and innovative building technologies."
        },
        {
          question: "When and where is the event taking place?",
          answer: "The summit will be held on October 17-18, 2025, at the Nairobi Convention Center. The venue is easily accessible by public transport and offers ample parking facilities."
        },
        {
          question: "What is included in my registration?",
          answer: "Your registration includes access to all keynote sessions, panel discussions, workshops, networking breaks, lunch on both days, welcome breakfast, exhibition area access, event materials, and a certificate of attendance. Premium packages also include exclusive networking dinners."
        },
        // {
        //   question: "Can I attend virtually?",
        //   answer: "Yes! We offer hybrid attendance options. Virtual attendees will have access to live streams of keynote sessions, downloadable resources, and virtual networking opportunities. However, hands-on workshops are only available for in-person attendees."
        // }
      ]
    },
    {
      category: 'Registration & Pricing',
      questions: [
        {
          question: "How much does it cost to attend?",
          answer: "Registration is free"
        },
        
      ]
    },
    {
      category: 'Speakers & Content',
      questions: [
        {
          question: "Who are the keynote speakers?",
          answer: "Our speakers include industry leaders like James Mwangi (Senior Civil Engineer with 20+ years experience), Sarah Njeri (Sustainable Construction Expert), David Kimani (Construction Tech Innovator), and many more. View the complete speaker lineup on our Events page."
        },
        {
          question: "Will session recordings be available?",
          answer: "Yes, all registered attendees will receive access to session recordings within 48 hours after the event. Recordings will be available for 6 months through our online portal. Workshop recordings are only available to attendees who participated in the sessions."
        },
        {
          question: "Can I request specific topics to be covered?",
          answer: "We welcome topic suggestions! While we can't guarantee inclusion in this year's program, we consider all feedback for future events. Submit your suggestions to content@jagedo.com or during the registration process."
        }
      ]
    },
    // {
    //   category: 'Logistics & Accommodation',
    //   questions: [
    //     {
    //       question: "Do you provide accommodation assistance?",
    //       answer: "Yes! We have partnerships with nearby hotels offering special rates for summit attendees. Accommodation packages range from KES 3,500-8,000 per night. Contact our logistics team for booking assistance and shuttle service information."
    //     },
    //     {
    //       question: "Is food provided during the event?",
    //       answer: "Yes, registration includes breakfast on day one, lunch on both days, and networking refreshments during breaks. We cater to various dietary requirements including vegetarian, vegan, halal, and gluten-free options. Please indicate dietary requirements during registration."
    //     },
    //     {
    //       question: "What should I bring to the event?",
    //       answer: "Bring your photo ID, business cards for networking, notebook and pen (though materials are provided), comfortable shoes for site visits, and your smartphone for our event app. Laptops are recommended for workshop sessions."
    //     },
    //     {
    //       question: "Is parking available at the venue?",
    //       answer: "Yes, the Nairobi Convention Center offers ample parking space. Parking is free for event attendees - just show your registration confirmation at the gate. We also provide shuttle services from major hotels and transport hubs."
    //     }
    //   ]
    // },
    {
      category: 'Networking & Exhibitions',
      questions: [
        {
          question: "How can I maximize networking opportunities?",
          answer: "Download our event app to connect with other attendees, join our LinkedIn group, attend networking breaks and lunches, visit the exhibition area, and participate in our structured networking sessions. Speed networking sessions are scheduled during lunch breaks."
        },
        {
          question: "Can I exhibit my products/services?",
          answer: "Yes! Exhibition spaces are available for vendors and service providers. Packages start at KES 15,000 and include booth space, basic furniture, power supply, and promotional opportunities. Premium packages include speaking slots and additional marketing benefits."
        },
        {
          question: "Are there sponsorship opportunities?",
          answer: "Absolutely! We offer various sponsorship packages from title sponsorship to session sponsorships. Benefits include brand visibility, speaking opportunities, exhibition space, and access to attendee information. Contact sponsors@jagedo.com for the sponsorship brochure."
        }
      ]
    },
    // {
    //   category: 'COVID-19 & Safety',
    //   questions: [
    //     {
    //       question: "What safety measures are in place?",
    //       answer: "We follow all government health guidelines including temperature checks, hand sanitizing stations throughout the venue, enhanced cleaning protocols, and adequate ventilation systems. Masks are recommended in crowded areas."
    //     },
    //     {
    //       question: "What if someone tests positive before the event?",
    //       answer: "If you test positive for COVID-19 within 5 days of the event, we'll transfer your registration to our next event at no additional cost, or provide full access to virtual sessions and recordings."
    //     }
    //   ]
    // }
  ];

  const filteredFAQs = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(
      faq => 
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* NavBar */}
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <NavBar2 />
        <NavBar />
      </div>

      {/* Main Content */}
      <main className="flex-1 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about the JaGedo Construction & Infrastructure Summit. 
              Can't find what you're looking for? Contact our support team.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search FAQs..."
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-8">
            {filteredFAQs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 px-6 py-4 border-b border-blue-200">
                  <h2 className="text-xl font-semibold text-blue-900 flex items-center">
                    <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      {categoryIndex + 1}
                    </span>
                    {category.category}
                  </h2>
                </div>
                
                <div className="divide-y divide-gray-200">
                  {category.questions.map((faq, faqIndex) => {
                    const globalIndex = `${categoryIndex}-${faqIndex}`;
                    const isOpen = openFAQ === globalIndex;
                    
                    return (
                      <div key={faqIndex} className="px-6 py-4">
                        <button
                          onClick={() => toggleFAQ(globalIndex)}
                          className="flex justify-between items-start w-full text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-lg p-2 -m-2"
                        >
                          <span className="text-lg font-medium text-gray-900 pr-4">
                            {faq.question}
                          </span>
                          <span className="flex-shrink-0 ml-2">
                            <svg
                              className={`h-5 w-5 text-gray-500 transform transition-transform duration-200 ${
                                isOpen ? 'rotate-180' : ''
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                          </span>
                        </button>
                        
                        {isOpen && (
                          <div className="mt-4 pr-8">
                            <p className="text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredFAQs.length === 0 && searchTerm && (
            <div className="text-center py-12">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 20.4a7.962 7.962 0 01-5.657-2.109c-1.814-1.814-2.814-4.222-2.814-6.781 0-2.559 1-4.967 2.814-6.781A7.962 7.962 0 0112 3.6c2.559 0 4.967 1 6.781 2.814C20.6 8.228 21.6 10.636 21.6 13.195"></path>
              </svg>
              <h3 className="mt-4 text-lg font-medium text-gray-900">No results found</h3>
              <p className="mt-2 text-gray-500">
                We couldn't find any FAQs matching "{searchTerm}". Try a different search term or contact our support team.
              </p>
            </div>
          )}

          {/* Contact Section */}
          {/* <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our support team is here to help! Get in touch and we'll respond within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:info@jagedo.com"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-medium rounded-full hover:bg-gray-50 transition"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                Email Support
              </a>
              <a
                href="tel:+254700000000"
                className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-blue-600 transition"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                Call Us
              </a>
            </div>
          </div> */}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FAQPage;
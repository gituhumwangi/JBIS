import { useState } from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';


const Input = ({ placeholder, type = 'text' }) => (
  <input
    type={type}
    placeholder={placeholder}
    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
  />
);

const SectionTitle = ({ children }) => (
  <h4 className="text-lg font-semibold mb-3 text-gray-800">{children}</h4>
);

const Partner = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const sponsorshipTiers = [
    {
      title: "Title Sponsor",
      price: "KES 500,000",
      color: "from-yellow-400 to-yellow-600",
      borderColor: "border-yellow-200",
      features: [
        "Event naming rights (JaGedo Summit powered by [Your Company])",
        "Logo on all marketing materials",
        "Opening keynote speaking opportunity",
        "Premium exhibition booth",
        "10 complimentary registrations",
        "VIP networking dinner hosting rights"
      ]
    },
    {
      title: "Gold Sponsor",
      price: "KES 300,000",
      color: "from-yellow-300 to-yellow-500",
      borderColor: "border-yellow-100",
      features: [
        "Logo on marketing materials",
        "Speaking slot in one breakout session",
        "Standard exhibition booth",
        "5 complimentary registrations",
        "VIP networking dinner invites"
      ]
    },
    {
      title: "Silver Sponsor",
      price: "KES 150,000",
      color: "from-gray-300 to-gray-500",
      borderColor: "border-gray-200",
      features: [
        "Logo on event banner & website",
        "Exhibition space",
        "2 complimentary registrations"
      ]
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
  

      <main className="flex-1">
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Partner With Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sponsor Kenya's premier construction industry summit and gain exposure to 1500+ professionals.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sponsorshipTiers.map((tier, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-md border-2 ${tier.borderColor} hover:shadow-lg transition-all duration-300 p-6 flex flex-col`}
              >
                <div className={`bg-gradient-to-r ${tier.color} text-white text-center py-4 rounded-t-lg mb-4`}>
                  <h3 className="text-xl font-bold">{tier.title}</h3>
                  <p className="text-lg font-semibold">{tier.price}</p>
                </div>
                <ul className="flex-1 space-y-2 text-left text-sm text-gray-700 mb-4">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-500 mr-2">&#10003;</span> {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setSelectedPackage(tier)}
                  className="mt-auto bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Select Package
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />

      {selectedPackage && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex justify-center items-start py-10 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-md">
          <div className="bg-white rounded-2xl p-6 w-full max-w-5xl max-h-full overflow-y-auto shadow-lg">
            <div className="mb-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{selectedPackage.title}</h3>
              <p className="text-lg text-blue-600 font-semibold">{selectedPackage.price}</p>
            </div>

            <form className="space-y-6">
              <div>
                <SectionTitle>1. Personal Information</SectionTitle>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input placeholder="Full Name" />
                  <Input placeholder="Date of Birth" type="date" />
                  <Input placeholder="Gender" />
                  <Input placeholder="Nationality" />
                  <Input placeholder="Residential Address" />
                  <Input placeholder="Phone" />
                  <Input placeholder="Email" type="email" />
                  <Input placeholder="ID Proof" />
                </div>
              </div>

              <div>
                <SectionTitle>2. Professional & Business Details</SectionTitle>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input placeholder="Designation/Role" />
                  <Input placeholder="Ownership Percentage" />
                  <Input placeholder="Business Experience" />
                  <Input placeholder="TIN / SSN" />
                </div>
              </div>

              <div>
                <SectionTitle>3. Financial & Legal Information</SectionTitle>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input placeholder="Capital Contribution" />
                  <Input placeholder="Profit-Sharing Ratio" />
                  <Input placeholder="Bank Account Details" />
                  <Input placeholder="Tax ID (PAN)" />
                </div>
              </div>

              <div>
                <SectionTitle>4. Legal & Compliance Documents</SectionTitle>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input placeholder="Partnership Agreement" />
                  <Input placeholder="KYC Documents" />
                  <Input placeholder="Proof of Address" />
                  <Input placeholder="Affidavit / Declaration" />
                </div>
              </div>

              <div>
                <SectionTitle>5. Company-Specific Details</SectionTitle>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input placeholder="Company Name & Reg. Number" />
                  <Input placeholder="Type of Partnership" />
                  <Input placeholder="Business Activity" />
                  <Input placeholder="Industry Sector" />
                </div>
              </div>

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setSelectedPackage(null)}
                  className="px-6 py-2 border border-gray-400 text-gray-700 rounded-lg hover:bg-gray-100 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Partner;

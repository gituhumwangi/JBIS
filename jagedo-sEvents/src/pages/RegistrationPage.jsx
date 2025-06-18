import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Button from '../components/Button';
import Footer from '../components/Footer';
// import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    password: '',
    confirmPassword: '',
    role: 'attendee',
    experience: '',
    interests: [],
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox' && name === 'interests') {
      const updatedInterests = checked
        ? [...formData.interests, value]
        : formData.interests.filter(interest => interest !== value);
      setFormData({ ...formData, interests: updatedInterests });
    } else if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.FirstName.trim()) newErrors.FirstName = 'FirstName is required';
    if(!formData.LastName.trim()) newErrors.LastName = 'LastName is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.agreeTerms) newErrors.agreeTerms = 'You must agree to the terms and conditions';

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      alert('Registration successful! Welcome to JaGedo Construction Summit.');
      setIsSubmitting(false);
    }, 2000);
  };

  const interestOptions = [
    'Sustainable Construction',
    'Digital Tools & BIM',
    'Project Management',
    'Safety & Compliance',
    'Equipment & Machinery',
    'Business Development',
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      {/* NavBar */}
      <div className="bg-white shadow-md sticky top-0 z-50">
        <NavBar />
      </div>

      {/* Main Content */}
      <main className="flex-1 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Join the JaGedo Construction Summit
            </h1>
            <p className="text-gray-600 text-sm sm:text-base max-w-md mx-auto">
              Register now to secure your spot at Kenya's premier construction industry event
            </p>
            <div className="flex items-center justify-center mt-4 space-x-4 text-sm text-gray-500">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                500+ Attendees
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                50+ Speakers
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                2 Days
              </span>
            </div>
          </div>

          {/* Registration Form */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                  Personal Information
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="sm:col-span-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="FirstName"
                      id="FirstName"
                      required
                      onChange={handleChange}
                      value={formData.FirstName}
                      className={`w-full border rounded-lg shadow-sm px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                        errors.FirstName ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="Enter your First Name"
                    />
                    {errors.FirstName && <p className="text-red-500 text-xs mt-1">{errors.FirstName}</p>}
                  </div>

                  <div className="sm:col-span-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="LastName"
                      id="LastName"
                      required
                      onChange={handleChange}
                      value={formData.LastName}
                      className={`w-full border rounded-lg shadow-sm px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                        errors.LastName ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="Enter your Last Name"
                    />
                    {errors.LastName && <p className="text-red-500 text-xs mt-1">{errors.LastName}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      onChange={handleChange}
                      value={formData.email}
                      className={`w-full border rounded-lg shadow-sm px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                        errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      onChange={handleChange}
                      value={formData.phone}
                      className={`w-full border rounded-lg shadow-sm px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                        errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="+254 700 000 000"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              {/* <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                  Professional Information
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      onChange={handleChange}
                      value={formData.company}
                      className="w-full border border-gray-300 rounded-lg shadow-sm px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                      Job Title/Position
                    </label>
                    <input
                      type="text"
                      name="position"
                      id="position"
                      onChange={handleChange}
                      value={formData.position}
                      className="w-full border border-gray-300 rounded-lg shadow-sm px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      placeholder="e.g. Civil Engineer, Project Manager"
                    />
                  </div>

                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                      Registration Type *
                    </label>
                    <select
                      name="role"
                      id="role"
                      onChange={handleChange}
                      value={formData.role}
                      className="w-full border border-gray-300 rounded-lg shadow-sm px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    >
                      <option value="attendee">Attendee - KES 5,000</option>
                      <option value="vendor">Vendor/Exhibitor - KES 15,000</option>
                      <option value="sponsor">Sponsor - Contact Us</option>
                      <option value="student">Student - KES 2,000</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                      Years of Experience
                    </label>
                    <select
                      name="experience"
                      id="experience"
                      onChange={handleChange}
                      value={formData.experience}
                      className="w-full border border-gray-300 rounded-lg shadow-sm px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    >
                      <option value="">Select experience level</option>
                      <option value="0-2">0-2 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="6-10">6-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Areas of Interest (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {interestOptions.map((interest) => (
                      <label key={interest} className="flex items-center">
                        <input
                          type="checkbox"
                          name="interests"
                          value={interest}
                          onChange={handleChange}
                          checked={formData.interests.includes(interest)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div> */}

              {/* Account Security */}
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                  Account Security
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                      Password *
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      required
                      onChange={handleChange}
                      value={formData.password}
                      className={`w-full border rounded-lg shadow-sm px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                        errors.password ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="Minimum 6 characters"
                    />
                    {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                  </div>

                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                      Confirm Password *
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      required
                      onChange={handleChange}
                      value={formData.confirmPassword}
                      className={`w-full border rounded-lg shadow-sm px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                        errors.confirmPassword ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="Repeat your password"
                    />
                    {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
                  </div>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="pt-2">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    onChange={handleChange}
                    checked={formData.agreeTerms}
                    className={`rounded border-gray-300 text-blue-600 focus:ring-blue-500 mt-1 ${
                      errors.agreeTerms ? 'border-red-300' : ''
                    }`}
                  />
                  <span className="ml-3 text-sm text-gray-700">
                    I agree to the{' '}
                    <a href="/terms" className="text-blue-600 hover:underline">
                      Terms and Conditions
                    </a>{' '}
                    and{' '}
                    <a href="/privacy" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </a>. I consent to receiving event updates and promotional materials.
                  </span>
                </label>
                {errors.agreeTerms && <p className="text-red-500 text-xs mt-1 ml-6">{errors.agreeTerms}</p>}
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-blue-800 focus:ring-4 focus:ring-blue-300 transition-all duration-200 transform hover:scale-[1.02] ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing Registration...
                    </span>
                  ) : (
                    'Complete Registration'
                  )}
                </button>
                
                <p className="text-center text-xs text-gray-500 mt-4">
                  Already have an account?{' '}
                  <a href="/login" className="text-blue-600 hover:underline">
                    Sign in here
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default RegistrationPage;
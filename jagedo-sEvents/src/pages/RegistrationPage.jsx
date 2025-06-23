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
      {/* <main className="flex-1 py-8 px-4 sm:px-6 lg:px-8"> */}
        {/* <div className="max-w-2xl mx-auto"> */}
          {/* Header */}
          {/* <div className="text-center mb-8">
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
                10 Speakers
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                2 Days
              </span>
            </div>
          </div> */}

          {/* Registration Form */}
          <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
          <div className="w-full max-w-6xl h-[80vh] sm:h-[85vh] md:h-[90vh] shadow-lg rounded-xl border border-gray-200 bg-white overflow-hidden">
            <iframe 
            title='JAGEDO BUILDERS INNOVATION SUMMIT'
            aria-label='JAGEDO BUILDERS INNOVATION SUMMIT' 
            frameBorder="0" 
            style= {{
            height: '100%',
            width: '99%',
            border: 'none',
            }}
            src='https://forms.zohopublic.com/jagedoinnovationslimited1/form/JAGEDOBUILDERSINNOVATIONSUMMIT2/formperma/J0rP39_ktHdJ4Zt3nvNKhqFuhlk6nNGurLr4_GHL4MI'></iframe>
          </div>
          </div>
        {/* </div> */}
      {/* </main> */}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default RegistrationPage;
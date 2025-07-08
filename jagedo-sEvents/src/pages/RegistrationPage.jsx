import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Button from '../components/Button';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const RegistrationPage = () => {
  return (
    <div className="h-screen bg-gradient-to-br from-blue-50 to-gray-100 overflow-hidden">
      {/* NavBar - Fixed at top */}
      <div className="bg-white shadow-md sticky top-0 z-50">
        <NavBar2 />
        <NavBar />
      </div>
      
      {/* Main Content Area - Calculate height to show full form */}
      <div className="flex-1" style={{ height: 'calc(100vh - 140px)' }}>
        {/* Registration Form Container - Takes all available space */}
        <div className="h-full bg-white border border-gray-200">
          {/* Iframe Container with proper height */}
          <div className="relative h-full">
            <iframe 
              title="JAGEDO BUILDERS INNOVATION SUMMIT"
              aria-label="JAGEDO BUILDERS INNOVATION SUMMIT"
              frameBorder="0"
              className="w-full h-full border-0"
              src="https://forms.zohopublic.com/jagedoinnovationslimited1/form/JAGEDOBUILDERSINNOVATIONSUMMIT2/formperma/J0rP39_ktHdJ4Zt3nvNKhqFuhlk6nNGurLr4_GHL4MI"
            />
            
            {/* Loading overlay */}
            <div className="absolute inset-0 bg-gray-50 flex items-center justify-center pointer-events-none opacity-0 transition-opacity duration-300" id="loading-overlay">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Loading registration form...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default RegistrationPage;
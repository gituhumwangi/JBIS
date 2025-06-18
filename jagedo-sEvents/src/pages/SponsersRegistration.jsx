import React from 'react'
import Button from '../components/Button'

const SponsersRegistration = () => {
  return (
    <>
        <section className="py-20 bg-gray-50">
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
              <div className='px-70 py-10'>
              <Button 
                type="submit"
                className="w-30 md:w-40 lg:w-48"
              >
                Send Project Inquiry
              </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default SponsersRegistration
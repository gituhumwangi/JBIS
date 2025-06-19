import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Images
import Event1 from './assets/event1.jpg';
import Event2 from './assets/event2.jpg';
import Event3 from './assets/event3.jpg';

const EventsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      {/* NavBar */}
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <NavBar />
      </div>

      {/* Main Content */}
      <main className="px-4 sm:px-6 py-8 max-w-6xl mx-auto w-full">
        {/* Heading Section */}
        <section className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
            Past events 
          </h2>
          
        </section>

        {/* Event Card with Carousel */}
        <section className="flex flex-col md:flex-row bg-white shadow-md rounded-xl overflow-hidden mb-10">
          {/* Carousel */}
          <div className="md:w-1/2 w-full">
            <Carousel
              showThumbs={false}
              infiniteLoop
              autoPlay
              interval={4000}
              showStatus={false}
              showArrows={true}
              swipeable
              emulateTouch
              className="w-full h-full"
            >
              <div>
                <img src={Event1} alt="Event 1" className="h-64 object-cover w-full" />
              </div>
              <div>
                <img src={Event2} alt="Event 2" className="h-64 object-cover w-full" />
              </div>
              <div>
                <img src={Event3} alt="Event 3" className="h-64 object-cover w-full" />
              </div>
            </Carousel>
          </div>

          {/* Details */}
          <div className="p-5 sm:p-6 flex flex-col justify-between md:w-1/2">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                JaGedo Construction & Infrastructure Summit 2024
              </h3>
              <p className="text-gray-600 mb-2">
                Building the future together - Connect with industry leaders, contractors, and innovators in construction technology.
              </p>
              <p className="text-gray-500 text-sm">September 20, 2024 | Nairobi Convention Center</p>
            </div>

            {/* CTA Button */}
            <div className="mt-4">
              <Link
                to="/register"
                className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-700 transition"
              >
                Register Now
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default EventsPage;

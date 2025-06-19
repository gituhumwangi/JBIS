
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/image1.jpg')" }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-white/10 to-black/60" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-between h-full text-white">

        {/* Centered Text Content */}
        <div className="flex-1 flex items-center justify-center px-4 text-center animate-fade-in">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 md:p-10 max-w-3xl mx-auto shadow-xl transition duration-500">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#000072]">
              JaGedo Builder Innovation Summit
            </h1>
            <h2 className="text-xl md:text-2xl text-[#000072] font-bold">JBIS</h2>
            <div className="text-left text-[#000072] mt-4 space-y-1 text-sm md:text-base">
              <p><strong>Theme:</strong> Future-Proofing Construction Through Innovation</p>
              <p><strong>Venue:</strong> WestPark Towers, 12th Floor, Westlands</p>
              <p><strong>Date:</strong> July 27, 2025</p>
              <p><strong>Time:</strong> 9:00 AM – 5:00 PM</p>
              <p>Join us as we bring together industry leaders, innovators, and visionaries to redefine the future of construction.</p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center pb-10 px-4 animate-fade-in-up">
          <Link to="/Register">
            <button className="bg-[#000072] hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded-full w-full md:w-auto transition duration-300 transform hover:scale-105">
              Register for the Summit
            </button>
          </Link>
          <Link to="/partner">
            <button className="bg-[#000072] hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded-full w-full md:w-auto transition duration-300 transform hover:scale-105">
              Partner with Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

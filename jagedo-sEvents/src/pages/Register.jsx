import { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast, Slide } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    category: "",
    expectations: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    toast.success("Thank you for registering to attend the JaGedo Builders Innovation Summit", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      className: "summit-toast",
      transition: Slide,
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      organization: "",
      category: "",
      expectations: "",
    });

    setTimeout(() => {
      navigate("/"); // Redirect to home page after toast closes
    }, 3000);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen bg-gradient-to-br from-[#f0f4ff] to-[#dbe6ff] p-4 pt-24 gap-10" id="Register">
      <ToastContainer />

      {/* Left: Form */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white shadow-2xl rounded-lg p-6 sm:p-8 w-full max-w-lg"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-[#000072]">
          Pre-Register for Jagedo Summit
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <motion.input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#000072] shadow-sm"
            required
            whileFocus={{ scale: 1.02 }}
          />

          <motion.input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#000072] shadow-sm"
            required
            whileFocus={{ scale: 1.02 }}
          />

          <motion.input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#000072] shadow-sm"
            required
            whileFocus={{ scale: 1.02 }}
          />

          <motion.input
            type="text"
            name="organization"
            placeholder="Organization / Company (Optional)"
            value={formData.organization}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#000072] shadow-sm"
            whileFocus={{ scale: 1.02 }}
          />

          <motion.select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#000072] shadow-sm bg-white"
            required
            whileFocus={{ scale: 1.02 }}
          >
            <option value="" disabled>
              Select Your Category
            </option>
            <option value="Construction Professionals">Construction Professionals</option>
            <option value="Corporate Representatives">Corporate Representatives</option>
            <option value="Other Stakeholders">Other Stakeholders</option>
          </motion.select>

          <motion.textarea
            name="expectations"
            placeholder="Your expectations for the summit"
            value={formData.expectations}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#000072] shadow-sm"
            whileFocus={{ scale: 1.02 }}
          />

          <motion.button
            type="submit"
            className="w-full bg-[#000072] text-white py-3 rounded-lg hover:bg-[#000072cc] transition font-semibold text-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>
        </form>
      </motion.div>

      {/* Right: Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-sm sm:max-w-md lg:max-w-lg"
      >
        <img
          src="/image3.png"
          alt="Summit Illustration"
          className="w-full h-auto rounded-lg shadow-lg object-cover"
        />
      </motion.div>
    </div>
  );
};

export default Register;

import { useState } from "react";
import { Button } from "./ui/button";
import { ArrowRight, X } from "lucide-react";
import HexagonalBackground from "./HexagonalBackground";

export default function Hero() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address";
      valid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      console.log("Form submitted:", formData);
      setIsPopupOpen(false);
      setFormData({ name: "", email: "", message: "" });
      setIsThankYouOpen(true);

      // Auto close after 3 seconds
      setTimeout(() => setIsThankYouOpen(false), 3000);
    }
  };

  return (
    <section className="min-h-screen bg-slate-900 relative overflow-hidden">
      <HexagonalBackground />

      <div className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-8">
              WE MAKE YOUR BUSINESS{" "}
              <span className="text-cyan-400">CYBER CRIME RESILIENT!</span>
            </h1>
            <p className="text-2xl lg:text-3xl text-gray-300 mb-12">
              We Are Your IT Security Guards.
            </p>

            <Button
              onClick={() => setIsPopupOpen(true)}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
            >
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-slate-500/90 to-slate-500/70 pointer-events-none"></div>

      {/* Contact Form Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-slate-800 rounded-2xl shadow-xl w-full max-w-md p-6 relative">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
              onClick={() => setIsPopupOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-2xl font-bold text-white mb-3">Contact Us</h2>
            <p className="text-gray-300 mb-4 text-sm">
              Fill out the form below to register or reach us directly via our
              contact info.
            </p>

            <form className="space-y-3 mb-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-300 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full px-3 py-2 rounded-lg bg-slate-700 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  className="w-full px-3 py-2 rounded-lg bg-slate-700 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-300 mb-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  className="w-full px-3 py-2 rounded-lg bg-slate-700 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  rows={4}
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                )}
              </div>
              <Button
                type="submit"
                className="bg-green-500 hover:bg-green-600 w-full py-3 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
              >
                Submit
              </Button>
            </form>

            <div className="text-gray-300 text-sm">
              <h3 className="font-semibold text-white mb-1">
                Our Contact Info:
              </h3>
              <p>Email: info@zsecuredtech.com</p>
              <p>Phone: +251 926360609</p>
              <p>
                Address: Oromia Tower, Bole Medanalem #210, Addis Ababa,
                Ethiopia
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Thank You Popup */}
      {isThankYouOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div
            className="relative w-full max-w-sm p-6 rounded-2xl shadow-2xl 
                    bg-gradient-to-r from-cyan-500 to-purple-500 
                    animate-scaleFadeIn border-2 border-cyan-400"
          >
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-white hover:text-gray-200"
              onClick={() => setIsThankYouOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Icon / Accent */}
            <div className="flex justify-center mb-3">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center shadow-lg animate-pulse">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Text */}
            <h2 className="text-2xl font-bold text-white mb-2 text-center drop-shadow-lg">
              Thank You!
            </h2>
            <p className="text-white/90 text-center">
              We have received your message. We'll get back to you very soon.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

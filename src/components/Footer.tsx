import { Wifi, Mail, Phone, MapPin, Twitter, Linkedin, Github, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    Services: [
      'Threat Detection',
      'Data Protection',
      'Security Auditing',
      'Incident Response',
      'Infrastructure Security',
      'Security Training'
    ],
    Solutions: [
      'Enterprise Security',
      'Small Business',
      'Healthcare',
      'Education',
      'Financial Services',
      'Government'
    ],
    Resources: [
      'Security Blog',
      'White Papers',
      'Case Studies',
      'Webinars',
      'Security Tools',
      'Knowledge Base'
    ],
    Company: [
      'About Us',
      'Our Team',
      'Careers',
      'Partners',
      'News & Press',
      'Contact'
    ]
  };

  return (
      <footer className="bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Main Footer Content */}
              <div className="py-16">
                  <div className="grid lg:grid-cols-5 gap-8">
                      {/* Company Info */}
                      <div className="lg:col-span-2">
                          <div className="flex items-center space-x-3 mb-4">
                              <div className="w-16 h-16 rounded-lg flex items-center justify-center">
                                  <img
                                      src="/zsecuredtech.png"
                                      alt="ZSecuredTech Logo"
                                  />
                              </div>
                              <span className="text-xl font-bold">
                                  ZSecuredTech Trading PLC
                              </span>
                          </div>

                          {/* Social Media Icons */}
                          <div className="flex space-x-3 mb-6">
                              <a
                                  href="https://www.facebook.com/yourpage"
                                  target="_blank"
                                  rel="noopener noreferrer"
                              >
                                  <Facebook className="w-5 h-5 text-green-400 hover:text-green-300 cursor-pointer transition-colors" />
                              </a>
                              <a
                                  href="https://twitter.com/yourhandle"
                                  target="_blank"
                                  rel="noopener noreferrer"
                              >
                                  <Twitter className="w-5 h-5 text-green-400 hover:text-green-300 cursor-pointer transition-colors" />
                              </a>
                              <a
                                  href="https://www.linkedin.com/in/yourprofile"
                                  target="_blank"
                                  rel="noopener noreferrer"
                              >
                                  <Linkedin className="w-5 h-5 text-green-400 hover:text-green-300 cursor-pointer transition-colors" />
                              </a>
                              <a
                                  href="https://www.instagram.com/yourhandle"
                                  target="_blank"
                                  rel="noopener noreferrer"
                              >
                                  <Instagram className="w-5 h-5 text-green-400 hover:text-green-300 cursor-pointer transition-colors" />
                              </a>
                          </div>

                          <p className="text-gray-400 mb-6 max-w-md">
                              Leading cybersecurity solutions provider
                              protecting businesses from digital threats with
                              advanced technology and expert support.
                          </p>
                          <div className="space-y-3">
                              <div className="flex items-center space-x-3">
                                  <Mail className="w-4 h-4 text-green-400" />
                                  <span className="text-gray-400">
                                      info@zsecuredtech.com
                                  </span>
                              </div>
                              <div className="flex items-center space-x-3">
                                  <Phone className="w-4 h-4 text-green-400" />
                                  <span className="text-gray-400">
                                      +251926360609
                                  </span>
                              </div>
                              <div className="flex items-center space-x-3">
                                  <MapPin className="w-4 h-4 text-green-400" />
                                  <span className="text-gray-400">
                                      Bole Medanialem, Oromia Tower 2nd floor
                                      #210, Addis Ababa, Ethiopia
                                  </span>
                              </div>
                          </div>
                      </div>

                      {/* Footer Links */}
                      {Object.entries(footerLinks).map(([category, links]) => (
                          <div key={category}>
                              <h3 className="font-semibold mb-4 text-green-400">
                                  {category}
                              </h3>
                              <ul className="space-y-2">
                                  {links.map((link) => (
                                      <li key={link}>
                                          <a
                                              href="#"
                                              className="text-gray-400 hover:text-white transition-colors duration-200"
                                          >
                                              {link}
                                          </a>
                                      </li>
                                  ))}
                              </ul>
                          </div>
                      ))}
                  </div>
              </div>

              {/* Newsletter Signup */}
              <div className="border-t border-slate-700 py-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                          <h3 className="font-semibold mb-2 text-green-400">
                              Stay Secure with Our Newsletter
                          </h3>
                          <p className="text-gray-400">
                              Get the latest cybersecurity insights, threat
                              alerts, and security tips delivered to your inbox.
                          </p>
                      </div>
                      <div className="flex space-x-4">
                          <input
                              type="email"
                              placeholder="Enter your email"
                              className="flex-1 px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
                          />
                          <button className="px-6 py-2 bg-green-500 hover:bg-green-600 rounded-lg font-medium transition-colors">
                              Subscribe
                          </button>
                      </div>
                  </div>
              </div>

              {/* Bottom Footer */}
              <div className="border-t border-slate-700 py-8">
                  <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                      <div className="flex items-center space-x-6">
                          <p className="text-gray-400">
                              © 2025 ZSecuredTech Trading PLC. All rights
                              reserved.
                          </p>
                          <div className="flex space-x-4 text-sm">
                              <a
                                  href="#"
                                  className="text-gray-400 hover:text-white transition-colors"
                              >
                                  Privacy Policy
                              </a>
                              <a
                                  href="#"
                                  className="text-gray-400 hover:text-white transition-colors"
                              >
                                  Terms of Service
                              </a>
                              <a
                                  href="#"
                                  className="text-gray-400 hover:text-white transition-colors"
                              >
                                  Cookie Policy
                              </a>
                          </div>
                      </div>
                  </div>
              </div>

              {/* Security Notice */}
              <div className="border-t border-slate-700 py-4">
                  <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
                      <Wifi className="w-3 h-3" />
                      <span>
                          This website is secured with SSL encryption and
                          follows industry-standard security practices.
                      </span>
                  </div>
              </div>
          </div>
      </footer>
  );
}
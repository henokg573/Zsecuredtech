import {
  Wifi,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";
import { useNavigation } from "./NavigationContext";

export default function Footer() {
  const { navigate } = useNavigation();

  // Map footer links to actual navigation paths
  const footerLinks: Record<string, { label: string; path: string }[]> = {
    Services: [
      { label: "Threat Detection", path: "threat-detection" },
      { label: "Data Protection", path: "data-encryption" },
      { label: "Security Auditing", path: "security-auditing" },
      { label: "Incident Response", path: "incident-response" },
      { label: "Infrastructure Security", path: "infrastructure-security" },
      { label: "Security Training", path: "security-training" },
    ],
    Solutions: [
      { label: "Enterprise Security", path: "solutions#enterprise" },
      { label: "Small Business", path: "solutions#smb" },
      { label: "Healthcare", path: "solutions#healthcare" },
      { label: "Education", path: "solutions#education" },
      { label: "Financial Services", path: "solutions#finance" },
      { label: "Government", path: "solutions#government" },
    ],
    Resources: [
      { label: "Security Blog", path: "news" },
      { label: "White Papers", path: "white-papers" },
      { label: "Case Studies", path: "resources#case-studies" },
      { label: "Webinars", path: "resources#webinars" },
      { label: "Security Tools", path: "resources#tools" },
      { label: "Knowledge Base", path: "resources#knowledge" },
    ],
    Company: [
      { label: "About Us", path: "about" },
      { label: "Our Team", path: "about#team" },
      { label: "Careers", path: "about#careers" },
      { label: "Partners", path: "about#partners" },
      { label: "News & Press", path: "news" },
      { label: "Contact", path: "contact" },
    ],
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
                  <img src="/zsecuredtech.png" alt="ZSecuredTech Logo" />
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
                  <Facebook className="w-5 h-5 text-green-400 hover:text-green-300 transition-colors" />
                </a>
                <a
                  href="https://twitter.com/yourhandle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="w-5 h-5 text-green-400 hover:text-green-300 transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5 text-green-400 hover:text-green-300 transition-colors" />
                </a>
                <a
                  href="https://www.instagram.com/yourhandle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-5 h-5 text-green-400 hover:text-green-300 transition-colors" />
                </a>
              </div>

              <p className="text-gray-400 mb-6 max-w-md">
                Leading cybersecurity solutions provider protecting businesses
                from digital threats with advanced technology and expert
                support.
              </p>

              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-green-400" />
                  <span>info@zsecuredtech.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-green-400" />
                  <span>+251926360609</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-green-400" />
                  <span>
                    Bole Medanialem, Oromia Tower 2nd floor #210, Addis Ababa,
                    Ethiopia
                  </span>
                </div>
              </div>
            </div>

            {/* Footer Links with Navigation */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-semibold mb-4 text-green-400">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {links.map(({ label, path }) => (
                    <li key={label}>
                      <button
                        onClick={() => navigate(path, false)}
                        className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                      >
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-700 py-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 ZSecuredTech Trading PLC. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <button
              onClick={() => navigate("privacy-policy", false)}
              className="text-gray-400 hover:text-white"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => navigate("terms-of-service", false)}
              className="text-gray-400 hover:text-white"
            >
              Terms of Service
            </button>
            <button
              onClick={() => navigate("cookie-policy", false)}
              className="text-gray-400 hover:text-white"
            >
              Cookie Policy
            </button>
          </div>
        </div>

        {/* Security Notice */}
        <div className="border-t border-slate-700 py-4 text-center">
          <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
            <Wifi className="w-3 h-3" />
            <span>
              This website is secured with SSL encryption and follows
              industry-standard security practices.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

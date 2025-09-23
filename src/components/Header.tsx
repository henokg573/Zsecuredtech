import { useState, useRef } from 'react';
import { Button } from './ui/button';
import { Menu, X, Wifi, Facebook, Twitter, Linkedin, Instagram, ChevronDown } from 'lucide-react';
import { useNavigation } from './NavigationContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { currentSection, setCurrentSection } = useNavigation();
  const dropdownTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleNavigation = (section: string) => {
    setCurrentSection(section);
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleMouseEnter = (itemLabel: string) => {
    if (dropdownTimerRef.current) {
      clearTimeout(dropdownTimerRef.current);
    }
    setActiveDropdown(itemLabel);
  };

  const handleMouseLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300); // 300ms delay before closing
  };

  const handleDropdownMouseEnter = () => {
    if (dropdownTimerRef.current) {
      clearTimeout(dropdownTimerRef.current);
    }
  };

  const handleDropdownMouseLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  const navItems = [
      {
          label: "Services",
          section: "services",
          dropdown: [
              {
                  name: "Threat Detection & Response",
                  section: "threat-detection",
              },
              {
                  name: "Data Encryption & Protection",
                  section: "data-encryption",
              },
              { name: "Security Auditing", section: "security-auditing" },
              {
                  name: "Infrastructure Security",
                  section: "infrastructure-security",
              },
              { name: "Incident Response", section: "incident-response" },
              { name: "Security Training", section: "security-training" },
          ],
      },
      {
          label: "Consultancy",
          section: "consultancy",
          dropdown: [
              { name: "ISO 9001:2015- (QMS)", section: "iso-9001" },
              { name: "ISO 20000 - (ITSM)", section: "iso-20000" },
              { name: "ISO 22301 - (BCMS)", section: "iso-22301" },
              { name: "ISO 31000 - Risk Management", section: "iso-31000" },
          ],
      },
      {
          label: "Training & Certificate",
          section: "training",
          dropdown: [
              {
                  name: "Cybersecurity Training",
                  section: "cybersecurity-training",
                  submenu: [
                      {
                          name: "CyberSecurity Fundamentals",
                          section: "cybersecurity-fundamentals",
                      },
                      { name: "Cyber Essentials", section: "cyber-essentials" },
                      { name: "CISSP", section: "cissp-training" },
                      { name: "CISM", section: "cism-training" },
                      {
                          name: "Virtual Chief Information Security Officer",
                          section: "vciso-training",
                      },
                  ],
              },
              {
                  name: "ISO Standard Training",
                  section: "iso-standard-training",
                  submenu: [
                      {
                          name: "ISO 27001 - Fundamentals",
                          section: "iso-27001-fundamentals",
                      },
                      {
                          name: "ISO 9001:2015 - Implementer",
                          section: "iso-9001-implementer",
                      },
                      {
                          name: "ISO 27001:2022 Lead Implementer",
                          section: "iso-27001-lead-implementer",
                      },
                      {
                          name: "ISO 27001:2022 Lead Auditor",
                          section: "iso-27001-lead-auditor",
                      },
                      {
                          name: "Virtual Chief Information Security Officer",
                          section: "vciso-training",
                      },
                  ],
              },
              {
                  name: "Network Training",
                  section: "network-training",
                  submenu: [
                      {
                          name: "Cisco Certified Network Associate (CCNA)",
                          section: "cisco-ccna",
                      },
                      {
                          name: "Cisco Certified Internetwork Expert (CCIE)",
                          section: "cisco-ccie",
                      },
                      {
                          name: "Checkpoint Certified Security Administrator (CCSA)",
                          section: "checkpoint-ccsa",
                      },
                      { name: "CompTIA Network+", section: "comptia-network" },
                      {
                          name: "CompTIA Security+",
                          section: "comptia-security",
                      },
                      {
                          name: "Virtual Chief Information Security Officer",
                          section: "vciso-training",
                      },
                  ],
              },
              {
                  name: "Database Training",
                  section: "database-training",
                  submenu: [
                      {
                          name: "Oracle Database Certification",
                          section: "oracle-db-certification",
                      },
                      {
                          name: "Microsoft SQL Server Certification",
                          section: "microsoft-sql-certification",
                      },
                      {
                          name: "Microsoft Certified: Azure Database Administrator Associate",
                          section: "azure-db-admin",
                      },
                      {
                          name: "Virtual Chief Information Security Officer",
                          section: "vciso-training",
                      },
                  ],
              },
          ],
      },
      {
          label: "Resource",
          section: "resource",
          dropdown: [
              { name: "Download", section: "downloads" },
              { name: "WhitePapers", section: "whitepapers" },
          ],
      },
      {
          label: "News",
          section: "news",
          dropdown: [
              { name: "Latest News", section: "latest-news" },
              { name: "Press Releases", section: "press-releases" },
              { name: "Industry Updates", section: "industry-updates" },
              { name: "Security Alerts", section: "security-alerts" },
          ],
      },
      { label: "Contact", section: "contact" },
      { label: "About", section: "about" },
  ];

  return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-20">
                  {/* Logo Section */}
                  <div
                      className="flex flex-col items-start cursor-pointer"
                      onClick={() => handleNavigation("home")}
                  >
                      <div className="flex items-center space-x-3 mb-2">
                          <div className="w-16 h-16  rounded-lg flex items-center justify-center">
                              <img
                                  src="/zsecuredtech.png"
                                  alt="Logo"
                                  className="w-full h-full object-contain"
                              />
                          </div>
                          <span className="text-xl font-bold text-white">
                              ZSecuredTech
                          </span>
                      </div>
                      {/* Social Media Icons */}
                      {/* <div className="flex space-x-2 ml-1">
              <Facebook className="w-4 h-4 text-green-400 hover:text-green-300 cursor-pointer" />
              <Twitter className="w-4 h-4 text-green-400 hover:text-green-300 cursor-pointer" />
              <Linkedin className="w-4 h-4 text-green-400 hover:text-green-300 cursor-pointer" />
              <Instagram className="w-4 h-4 text-green-400 hover:text-green-300 cursor-pointer" />
            </div> */}
                  </div>

                  {/* Desktop Navigation */}
                  <nav className="hidden lg:flex items-center space-x-8">
                      {navItems.map((item) => (
                          <div
                              key={item.label}
                              className="relative group"
                              onMouseEnter={() =>
                                  item.dropdown && handleMouseEnter(item.label)
                              }
                              onMouseLeave={handleMouseLeave}
                          >
                              <button
                                  onClick={() => handleNavigation(item.section)}
                                  className="text-white hover:text-green-400 transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-green-400 after:transition-all after:duration-300 hover:after:w-full flex items-center"
                              >
                                  {item.label}
                                  {item.dropdown && (
                                      <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" />
                                  )}
                              </button>

                              {/* Dropdown Menu */}
                              {item.dropdown &&
                                  activeDropdown === item.label && (
                                      <div
                                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                                          onMouseEnter={
                                              handleDropdownMouseEnter
                                          }
                                          onMouseLeave={
                                              handleDropdownMouseLeave
                                          }
                                      >
                                          {item.dropdown.map(
                                              (subItem, index) => (
                                                  <div
                                                      key={index}
                                                      className="relative group/submenu"
                                                  >
                                                      <button
                                                          onClick={() =>
                                                              handleNavigation(
                                                                  subItem.section
                                                              )
                                                          }
                                                          className="w-full text-left block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-green-600 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                                                      >
                                                          {subItem.name}
                                                          {subItem.submenu && (
                                                              <ChevronDown className="w-4 h-4 inline-block ml-1 rotate-[-90deg]" />
                                                          )}
                                                      </button>

                                                      {/* Submenu for Training */}
                                                      {subItem.submenu && (
                                                          <div className="absolute left-full top-0 ml-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-200 delay-75 z-50">
                                                              {subItem.submenu.map(
                                                                  (
                                                                      subsubItem,
                                                                      subIndex
                                                                  ) => (
                                                                      <button
                                                                          key={
                                                                              subIndex
                                                                          }
                                                                          onClick={() =>
                                                                              handleNavigation(
                                                                                  subsubItem.section
                                                                              )
                                                                          }
                                                                          className="w-full text-left block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-green-600 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                                                                      >
                                                                          {
                                                                              subsubItem.name
                                                                          }
                                                                      </button>
                                                                  )
                                                              )}
                                                          </div>
                                                      )}
                                                  </div>
                                              )
                                          )}
                                      </div>
                                  )}
                          </div>
                      ))}
                  </nav>

                  {/* Mobile Menu Button */}
                  <button
                      className="lg:hidden p-2 text-white"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                      {isMenuOpen ? (
                          <X className="w-6 h-6" />
                      ) : (
                          <Menu className="w-6 h-6" />
                      )}
                  </button>
              </div>

              {/* Mobile Menu */}
              {isMenuOpen && (
                  <div className="lg:hidden py-4 border-t border-gray-700">
                      <nav className="flex flex-col space-y-4">
                          {navItems.map((item) => (
                              <div key={item.label}>
                                  <button
                                      onClick={() =>
                                          handleNavigation(item.section)
                                      }
                                      className="w-full text-left text-white hover:text-green-400 transition-colors duration-200 py-2 block"
                                  >
                                      {item.label}
                                  </button>
                                  {item.dropdown && (
                                      <div className="ml-4 mt-2 space-y-2">
                                          {item.dropdown.map(
                                              (subItem, index) => (
                                                  <div key={index}>
                                                      <button
                                                          onClick={() =>
                                                              handleNavigation(
                                                                  subItem.section
                                                              )
                                                          }
                                                          className="w-full text-left text-gray-300 hover:text-green-400 transition-colors duration-200 py-1 block text-sm"
                                                      >
                                                          {subItem.name}
                                                      </button>
                                                      {subItem.submenu && (
                                                          <div className="ml-4 mt-1 space-y-1">
                                                              {subItem.submenu.map(
                                                                  (
                                                                      subsubItem,
                                                                      subIndex
                                                                  ) => (
                                                                      <button
                                                                          key={
                                                                              subIndex
                                                                          }
                                                                          onClick={() =>
                                                                              handleNavigation(
                                                                                  subsubItem.section
                                                                              )
                                                                          }
                                                                          className="w-full text-left text-gray-400 hover:text-green-400 transition-colors duration-200 py-1 block text-xs"
                                                                      >
                                                                          {
                                                                              subsubItem.name
                                                                          }
                                                                      </button>
                                                                  )
                                                              )}
                                                          </div>
                                                      )}
                                                  </div>
                                              )
                                          )}
                                      </div>
                                  )}
                              </div>
                          ))}
                      </nav>
                  </div>
              )}
          </div>
      </header>
  );
}
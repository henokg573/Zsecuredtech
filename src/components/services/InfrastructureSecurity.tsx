import { useState } from "react";
import {
  Server,
  Shield,
  Lock,
  Monitor,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

export default function InfrastructureSecurity() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can add API submission here
    setSubmitted(true);
  };

  const securityLayers = [
    {
      icon: Server,
      title: "Network Security",
      description:
        "Comprehensive network protection including firewalls, IDS/IPS, and network segmentation.",
      services: [
        "Next-Gen Firewalls",
        "Network Segmentation",
        "VPN Solutions",
        "Network Monitoring",
      ],
    },
    {
      icon: Lock,
      title: "Endpoint Security",
      description:
        "Advanced endpoint protection for all devices accessing your network.",
      services: [
        "Endpoint Detection & Response",
        "Anti-malware Solutions",
        "Device Management",
        "Mobile Security",
      ],
    },
    {
      icon: Monitor,
      title: "Security Monitoring",
      description:
        "24/7 security monitoring and threat detection for proactive incident response.",
      services: [
        "SIEM Implementation",
        "SOC Services",
        "Log Management",
        "Threat Intelligence",
      ],
    },
    {
      icon: Shield,
      title: "Cloud Security",
      description:
        "Secure cloud infrastructure deployment and management across all major platforms.",
      services: [
        "Cloud Security Posture",
        "Container Security",
        "Identity Management",
        "Data Protection",
      ],
    },
  ];

  const implementationProcess = [
    {
      phase: "Assessment",
      description: "Comprehensive infrastructure security assessment",
      duration: "2-3 weeks",
    },
    {
      phase: "Design",
      description: "Security architecture design and planning",
      duration: "3-4 weeks",
    },
    {
      phase: "Implementation",
      description: "Deploy security controls and solutions",
      duration: "6-12 weeks",
    },
    {
      phase: "Testing",
      description: "Security testing and validation",
      duration: "2-3 weeks",
    },
    {
      phase: "Monitoring",
      description: "Ongoing monitoring and maintenance",
      duration: "Continuous",
    },
  ];

  const securityFrameworks = [
    "NIST Cybersecurity Framework",
    "ISO 27001/27002",
    "CIS Critical Security Controls",
    "COBIT 2019",
    "PCI DSS",
    "SOC 2 Type II",
  ];

  return (
    <section className="py-20 bg-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Infrastructure Security
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Comprehensive infrastructure security solutions to protect your IT
            environment from evolving cyber threats through multi-layered
            defense strategies.
          </p>
        </div>

        {/* Security Layers */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {securityLayers.map((layer, index) => {
            const IconComponent = layer.icon;
            return (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-600 hover:bg-slate-800/80 transition-all duration-300"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-green-400" />
                  </div>
                  <CardTitle className="text-xl text-white">
                    {layer.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {layer.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {layer.services.map((service, i) => (
                      <div
                        key={i}
                        className="flex items-center text-sm text-gray-400"
                      >
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                        {service}
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Implementation Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Implementation Process
          </h2>
          <div className="grid md:grid-cols-5 gap-6">
            {implementationProcess.map((phase, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-600 text-center"
              >
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-white mb-2">
                    {phase.phase}
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">
                    {phase.description}
                  </p>
                  <div className="text-xs text-green-400 bg-green-900/20 px-2 py-1 rounded">
                    {phase.duration}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Security Frameworks */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Security Frameworks & Standards
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {securityFrameworks.map((framework, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-600 rounded-lg p-4 text-center"
              >
                <div className="font-semibold text-white">{framework}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl px-8 py-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Secure Your Infrastructure Today
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Let our security experts assess your infrastructure and design a
              comprehensive security strategy tailored to your organization's
              needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                onClick={() => {
                  setIsModalOpen(true);
                  setSubmitted(false);
                }}
              >
                Schedule Security Assessment
              </Button>
              <Button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                Download Security Guide
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full relative overflow-hidden">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
                  Schedule a Security Assessment
                </h2>
                <p className="text-gray-500 text-center mb-6">
                  Fill in your details and we will contact you shortly.
                </p>

                {["name", "company", "email"].map((field) => (
                  <div key={field} className="relative">
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      value={formData[field as keyof typeof formData]}
                      onChange={handleChange}
                      required
                      placeholder=" "
                      className="peer w-full border-b-2 border-gray-300 focus:border-green-500 outline-none py-3 text-gray-800 placeholder-transparent"
                    />
                    <label className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-gray-500 peer-focus:text-sm">
                      {field === "name"
                        ? "Your Name"
                        : field === "company"
                        ? "Company Name"
                        : "Email Address"}
                    </label>
                  </div>
                ))}

                <Button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-500 transition-colors"
                >
                  Submit
                </Button>
              </form>
            ) : (
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-blue-600">Thank you!</h3>
                <p className="mt-2 text-gray-600">
                  We will reach out to you shortly.
                </p>
              </div>
            )}

            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 text-2xl font-bold hover:text-gray-700"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

import { useState } from "react";
import {
  Shield,
  Eye,
  Zap,
  AlertTriangle,
  Clock,
  TrendingUp,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export default function ThreatDetection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      icon: Eye,
      title: "24/7 Monitoring",
      description:
        "Continuous surveillance of your network and systems with real-time threat detection.",
      capabilities: [
        "Network Traffic Analysis",
        "Endpoint Monitoring",
        "Log Aggregation",
        "Behavioral Analytics",
      ],
    },
    {
      icon: Zap,
      title: "AI-Powered Detection",
      description:
        "Advanced machine learning algorithms to identify known and unknown threats.",
      capabilities: [
        "Anomaly Detection",
        "Pattern Recognition",
        "Predictive Analytics",
        "False Positive Reduction",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Rapid Response",
      description:
        "Immediate threat containment and neutralization to minimize impact.",
      capabilities: [
        "Automated Response",
        "Threat Isolation",
        "Evidence Preservation",
        "Communication Protocols",
      ],
    },
    {
      icon: TrendingUp,
      title: "Threat Intelligence",
      description:
        "Global threat intelligence feeds to stay ahead of emerging attack vectors.",
      capabilities: [
        "IOC Integration",
        "Threat Hunting",
        "Risk Scoring",
        "Attribution Analysis",
      ],
    },
  ];

  const threatTypes = [
    {
      name: "Malware & Ransomware",
      detected: "99.8%",
      description: "Advanced malware detection including zero-day threats",
    },
    {
      name: "Phishing Attacks",
      detected: "99.5%",
      description: "Email-based social engineering attack prevention",
    },
    {
      name: "Insider Threats",
      detected: "95.2%",
      description: "Behavioral analysis to detect internal security risks",
    },
    {
      name: "APT Groups",
      detected: "92.7%",
      description: "Advanced persistent threat detection and tracking",
    },
    {
      name: "Data Exfiltration",
      detected: "98.1%",
      description: "Unauthorized data transfer detection and prevention",
    },
    {
      name: "Network Intrusions",
      detected: "97.9%",
      description: "Lateral movement and privilege escalation detection",
    },
  ];

  const responseProcess = [
    {
      step: 1,
      title: "Detection",
      description: "Automated systems identify potential threats in real-time",
      time: "< 1 minute",
    },
    {
      step: 2,
      title: "Analysis",
      description: "AI-powered analysis determines threat severity and type",
      time: "< 5 minutes",
    },
    {
      step: 3,
      title: "Containment",
      description: "Immediate isolation and containment of identified threats",
      time: "< 10 minutes",
    },
    {
      step: 4,
      title: "Response",
      description: "Expert team intervention and remediation actions",
      time: "< 30 minutes",
    },
  ];

  // Modal state and form
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData); // Replace this with Google Sheets integration
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsModalOpen(false);
      setFormData({ name: "", company: "", email: "" });
    }, 3000);
  };

  return (
    <section id="threat-detection" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Threat Detection & Response
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Advanced AI-powered threat detection with rapid response
            capabilities to neutralize security incidents before they impact
            your business operations.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-600 hover:bg-slate-800/80 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-green-400" />
                  </div>
                  <CardTitle className="text-lg text-white">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-sm">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1">
                    {feature.capabilities.map((capability, capIndex) => (
                      <li
                        key={capIndex}
                        className="flex items-center text-xs text-gray-400"
                      >
                        <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2"></div>
                        {capability}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Threat Detection Statistics */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Threat Detection Effectiveness
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {threatTypes.map((threat, index) => (
              <div
                key={index}
                className="bg-slate-800/50 rounded-lg p-6 border border-slate-600"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-white">{threat.name}</h3>
                  <span className="text-2xl font-bold text-green-400">
                    {threat.detected}
                  </span>
                </div>
                <p className="text-gray-300 text-sm">{threat.description}</p>
                <div className="mt-3 bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-green-500 to-cyan-500 h-2 rounded-full"
                    style={{ width: threat.detected }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Response Process */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Rapid Response Process
            </h2>
            <p className="text-gray-300 mb-8">
              Our automated threat response system ensures rapid identification,
              analysis, and containment of security threats with minimal human
              intervention required.
            </p>

            <div className="space-y-6">
              {responseProcess.map((process, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                    {process.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-green-400">
                        {process.title}
                      </h3>
                      <span className="text-sm text-gray-400">
                        {process.time}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm">
                      {process.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aHJlYXQlMjBkZXRlY3Rpb24lMjBjeWJlcnNlY3VyaXR5fGVufDF8fHx8MTc1ODE3OTIxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Threat Detection Cybersecurity"
              className="w-full h-auto rounded-2xl shadow-xl border border-slate-700"
            />

            {/* Overlay Stats */}
            <div className="absolute top-6 left-6 bg-slate-800/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-slate-700">
              <div className="text-xl font-bold text-white">&lt; 1 min</div>
              <div className="text-sm text-gray-300">
                Average Detection Time
              </div>
            </div>

            <div className="absolute bottom-6 right-6 bg-slate-800/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-slate-700">
              <div className="text-xl font-bold text-white">99.7%</div>
              <div className="text-sm text-gray-300">Threat Detection Rate</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-cyan-600 rounded-2xl px-8 py-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready to Strengthen Your Defenses?
            </h3>
            <p className="text-green-100 mb-8 max-w-2xl mx-auto">
              Get a free threat assessment and see how our advanced detection
              capabilities can protect your organization from sophisticated
              cyber attacks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                onClick={() =>
                  window.open("https://your-free-assessment-link.com", "_blank")
                }
              >
                Free Threat Assessment
              </Button>
              <Button
                className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
                onClick={() => setIsModalOpen(true)}
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Modal */}
        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full relative shadow-xl">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
                    Schedule a Demo
                  </h2>

                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder=" "
                      className="peer w-full border-b-2 border-gray-300 focus:border-green-500 outline-none py-2 text-gray-800"
                    />
                    <label className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-gray-500 peer-focus:text-sm">
                      Your Name
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      placeholder=" "
                      className="peer w-full border-b-2 border-gray-300 focus:border-green-500 outline-none py-2 text-gray-800"
                    />
                    <label className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-gray-500 peer-focus:text-sm">
                      Company Name
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder=" "
                      className="peer w-full border-b-2 border-gray-300 focus:border-green-500 outline-none py-2 text-gray-800"
                    />
                    <label className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-gray-500 peer-focus:text-sm">
                      Email
                    </label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-500 transition-colors"
                  >
                    Submit
                  </Button>
                </form>
              ) : (
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-green-600">
                    Thank you!
                  </h3>
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
      </div>
    </section>
  );
}

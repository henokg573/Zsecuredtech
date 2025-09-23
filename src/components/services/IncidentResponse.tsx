import { useState } from "react";
import {
  AlertTriangle,
  Clock,
  Users,
  Shield,
  Phone,
  FileText,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

export default function IncidentResponse() {
  const [modalType, setModalType] = useState<"call" | "report" | "plan" | null>(
    null
  );
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
    // Add API submission logic here
    setSubmitted(true);
  };

  const responsePhases = [
    {
      phase: "Preparation",
      icon: Shield,
      description:
        "Proactive planning and team preparation for potential security incidents",
      activities: [
        "Incident response plan development",
        "Team training and exercises",
        "Tool setup and configuration",
        "Communication protocols",
      ],
    },
    {
      phase: "Detection & Analysis",
      icon: AlertTriangle,
      description:
        "Rapid identification and initial assessment of security incidents",
      activities: [
        "Automated threat detection",
        "Alert triage and validation",
        "Impact assessment",
        "Evidence collection",
      ],
    },
    {
      phase: "Containment",
      icon: Clock,
      description:
        "Swift containment to prevent further damage and system compromise",
      activities: [
        "Immediate containment actions",
        "System isolation",
        "Threat neutralization",
        "Short-term fixes",
      ],
    },
    {
      phase: "Recovery",
      icon: Users,
      description:
        "System restoration and return to normal business operations",
      activities: [
        "System restoration",
        "Vulnerability patching",
        "Security hardening",
        "Monitoring enhancement",
      ],
    },
  ];

  const serviceFeatures = [
    {
      title: "24/7 Emergency Response",
      description:
        "Round-the-clock incident response team available for immediate threat containment",
    },
    {
      title: "Rapid Response Time",
      description:
        "Average response time of less than 15 minutes for critical security incidents",
    },
    {
      title: "Forensic Investigation",
      description:
        "Complete digital forensics to understand attack vectors and prevent recurrence",
    },
    {
      title: "Legal Compliance",
      description:
        "Ensure all incident response activities meet regulatory and legal requirements",
    },
    {
      title: "Communication Management",
      description:
        "Professional communication with stakeholders, customers, and regulatory bodies",
    },
    {
      title: "Lessons Learned",
      description:
        "Post-incident analysis and recommendations to strengthen security posture",
    },
  ];

  const incidentTypes = [
    "Malware & Ransomware Attacks",
    "Data Breaches & Exfiltration",
    "Phishing & Social Engineering",
    "Insider Threats",
    "Advanced Persistent Threats (APT)",
    "DDoS Attacks",
    "System Compromises",
    "Business Email Compromise",
  ];

  return (
    <section className="py-20 bg-slate-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Incident Response
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Expert incident response services to minimize damage, contain
            threats, and restore operations quickly when security incidents
            occur.
          </p>
        </div>

        {/* Emergency Contact */}
        <div className="mb-16">
          <Card className="bg-red-900/20 border-red-700 text-center">
            <CardContent className="pt-8">
              <Phone className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-4">
                24/7 Emergency Hotline
              </h2>
              <p className="text-red-100 mb-6">
                If you're experiencing a security incident right now, call our
                emergency response team immediately.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3"
                  onClick={() => {
                    setModalType("call");
                    setSubmitted(false);
                  }}
                >
                  <Phone className="w-5 h-5 mr-2" /> Call Emergency Line
                </Button>
                <Button
                  className="border border-red-600 text-red-400 hover:bg-red-600 hover:text-white px-8 py-3"
                  onClick={() => {
                    setModalType("report");
                    setSubmitted(false);
                  }}
                >
                  Report Incident Online
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Response Phases */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Incident Response Process
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {responsePhases.map((phase, index) => {
              const IconComponent = phase.icon;
              return (
                <Card key={index} className="bg-slate-700/50 border-slate-600">
                  <CardHeader>
                    <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-red-400" />
                    </div>
                    <CardTitle className="text-xl text-white">
                      Phase {index + 1}: {phase.phase}
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      {phase.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-red-400 mb-3">
                      Key Activities:
                    </h4>
                    <ul className="space-y-2">
                      {phase.activities.map((activity, activityIndex) => (
                        <li
                          key={activityIndex}
                          className="flex items-center text-sm text-gray-400"
                        >
                          <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2"></div>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Service Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose Our Incident Response Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceFeatures.map((feature, index) => (
              <Card
                key={index}
                className="bg-slate-700/50 border-slate-600 text-center"
              >
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Incident Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Types of Incidents We Handle
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {incidentTypes.map((type, index) => (
              <div
                key={index}
                className="bg-slate-700/50 border border-slate-600 rounded-lg p-4 text-center"
              >
                <div className="text-white text-sm">{type}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="mb-16 grid md:grid-cols-4 gap-6 text-center">
          <Card className="bg-slate-700/50 border-slate-600">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-red-400 mb-2">
                &lt;15min
              </div>
              <div className="text-sm text-gray-300">Average Response Time</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-700/50 border-slate-600">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-red-400 mb-2">98%</div>
              <div className="text-sm text-gray-300">
                Successful Containment Rate
              </div>
            </CardContent>
          </Card>
          <Card className="bg-slate-700/50 border-slate-600">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-red-400 mb-2">24/7</div>
              <div className="text-sm text-gray-300">
                Emergency Availability
              </div>
            </CardContent>
          </Card>
          <Card className="bg-slate-700/50 border-slate-600">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-red-400 mb-2">1000+</div>
              <div className="text-sm text-gray-300">Incidents Resolved</div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl px-8 py-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Don't Wait for an Incident
            </h3>
            <p className="text-red-100 mb-8 max-w-2xl mx-auto">
              Prepare your organization with our incident response planning
              services. Build your capability to respond effectively when
              incidents occur.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                onClick={() => {
                  setModalType("plan");
                  setSubmitted(false);
                }}
              >
                Develop Response Plan
              </Button>
              <Button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                <FileText className="w-5 h-5 mr-2" /> Download Response Guide
              </Button>
            </div>
          </div>
        </div>
      </div>

      {modalType && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
            {modalType === "call" ? (
              <div className="text-center space-y-4">
                <h3 className="text-xl font-bold text-red-600 mb-2">
                  Call Emergency Line
                </h3>
                <p className="text-gray-600">
                  You can reach our emergency response team directly:
                </p>
                <p className="text-red-500 font-semibold text-lg">
                  Phone: <a href="tel:+1234567890">+251-926360609</a>
                </p>
                <p className="text-red-500 font-semibold text-lg">
                  Email:{" "}
                  <a href="mailto:info@zsecuredtech.com">
                    info@zsecuredtech.com
                  </a>
                </p>
                <Button
                  className="mt-4 w-full bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-500 transition-colors"
                  onClick={() => setModalType(null)}
                >
                  Close
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-red-600 mb-2">
                  {modalType === "report"
                    ? "Report Incident Online"
                    : "Develop Response Plan"}
                </h3>
                <p className="text-gray-600 mb-4">
                  Fill out your details and we will contact you shortly.
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
                      className="peer w-full border-b-2 border-gray-300 focus:border-red-500 outline-none py-3 text-gray-800 placeholder-transparent"
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
                  className="w-full bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-500 transition-colors"
                >
                  Submit
                </Button>
              </form>
            )}

            <button
              onClick={() => setModalType(null)}
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

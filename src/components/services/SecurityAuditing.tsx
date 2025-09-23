import { useState } from "react";
import {
  Search,
  FileCheck,
  AlertTriangle,
  Users,
  Shield,
  Target,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

export default function SecurityAuditing() {
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
    // Add API submission here if needed
    setSubmitted(true);
  };

  const auditServices = [
    {
      icon: Search,
      title: "Vulnerability Assessment",
      description:
        "Comprehensive scanning and identification of security weaknesses across your infrastructure.",
      deliverables: [
        "Detailed vulnerability report",
        "Risk prioritization matrix",
        "Remediation roadmap",
        "Executive summary",
      ],
    },
    {
      icon: Target,
      title: "Penetration Testing",
      description:
        "Authorized simulated attacks to identify exploitable vulnerabilities in your systems.",
      deliverables: [
        "Penetration test report",
        "Proof of concept demonstrations",
        "Attack path analysis",
        "Security recommendations",
      ],
    },
    {
      icon: FileCheck,
      title: "Compliance Auditing",
      description:
        "Thorough assessment of your compliance posture against industry standards and regulations.",
      deliverables: [
        "Compliance gap analysis",
        "Control effectiveness review",
        "Audit trail documentation",
        "Certification support",
      ],
    },
    {
      icon: Shield,
      title: "Security Architecture Review",
      description:
        "Evaluation of your security architecture design and implementation effectiveness.",
      deliverables: [
        "Architecture assessment",
        "Design recommendations",
        "Security control mapping",
        "Implementation guidance",
      ],
    },
  ];

  const complianceStandards = [
    "ISO 27001",
    "SOC 2",
    "PCI DSS",
    "HIPAA",
    "GDPR",
    "NIST Framework",
  ];

  return (
    <section className="py-20 bg-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Security Auditing
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Comprehensive security assessments to identify vulnerabilities,
            ensure compliance, and strengthen your organization's security
            posture through expert auditing services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {auditServices.map((service, index) => {
            const IconComponent = service.icon;
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
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-green-400 mb-3">
                    Key Deliverables:
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {service.deliverables.map((deliverable, i) => (
                      <li
                        key={i}
                        className="flex items-center text-sm text-gray-400"
                      >
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Compliance Standards We Audit Against
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {complianceStandards.map((standard, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-600 rounded-lg p-4 text-center"
              >
                <div className="font-semibold text-white">{standard}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl px-8 py-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready for a Security Audit?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Schedule a consultation to discuss your security auditing needs
              and get a customized assessment plan for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                onClick={() => {
                  setIsModalOpen(true);
                  setSubmitted(false);
                }}
              >
                Schedule Consultation
              </Button>
              <Button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                Download Audit Checklist
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
                  Schedule a Consultation
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

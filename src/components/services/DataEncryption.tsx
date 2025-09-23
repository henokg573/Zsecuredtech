import { useState } from "react";
import { Lock, Shield, Key, Database, Cloud, FileCheck } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

export default function DataEncryption() {
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

  const encryptionServices = [
    {
      icon: Database,
      title: "Database Encryption",
      description:
        "Transparent data encryption for databases both at rest and in transit.",
      features: [
        "Column-level encryption",
        "Key management",
        "Compliance reporting",
        "Performance optimization",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Data Protection",
      description:
        "Comprehensive encryption solutions for cloud-stored data across all platforms.",
      features: [
        "Multi-cloud encryption",
        "Key escrow services",
        "Identity-based encryption",
        "API security",
      ],
    },
    {
      icon: FileCheck,
      title: "File & Document Security",
      description:
        "Advanced encryption for sensitive documents and file systems.",
      features: [
        "Document-level protection",
        "Digital rights management",
        "Secure sharing",
        "Version control",
      ],
    },
    {
      icon: Key,
      title: "Key Management Services",
      description:
        "Enterprise-grade key lifecycle management and secure storage solutions.",
      features: [
        "HSM integration",
        "Key rotation",
        "Secure key storage",
        "Compliance auditing",
      ],
    },
  ];

  return (
    <section className="py-20 bg-slate-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Data Encryption & Protection
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Advanced encryption solutions to protect your most sensitive data
            across all platforms, ensuring confidentiality, integrity, and
            compliance with industry standards.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {encryptionServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/80 transition-all duration-300"
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
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-400"
                      >
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {/* Keep Learn More button as is */}
                  <Button className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-cyan-600 rounded-2xl px-8 py-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Secure Your Data Today
            </h3>
            <p className="text-green-100 mb-8 max-w-2xl mx-auto">
              Get a comprehensive data protection assessment and see how our
              encryption solutions can secure your organization's most valuable
              assets.
            </p>
            <Button
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              onClick={() => {
                setIsModalOpen(true);
                setSubmitted(false);
              }}
            >
              Request Assessment
            </Button>
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
                  Request Data Protection Assessment
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
                  className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-500 transition-colors"
                >
                  Submit
                </Button>
              </form>
            ) : (
              <div className="p-8 text-center">
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
    </section>
  );
}

import { useState } from "react";
import {
  GraduationCap,
  Users,
  Target,
  Award,
  BookOpen,
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

export default function SecurityTraining() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);
  const [modalTitle, setModalTitle] = useState<string>("");
  const [modalIcon, setModalIcon] = useState<any>(null);
  const [modalImage, setModalImage] = useState<string>("");

  const openModal = ({
    title,
    content,
    icon,
    image,
  }: {
    title: string;
    content: React.ReactNode;
    icon?: any;
    image?: string;
  }) => {
    setModalTitle(title);
    setModalContent(content);
    setModalIcon(icon || null);
    setModalImage(image || "");
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent(null);
    setModalTitle("");
    setModalIcon(null);
    setModalImage("");
  };

  const trainingPrograms = [
    {
      icon: Users,
      title: "Security Awareness Training",
      description:
        "Comprehensive security awareness programs for all employees",
      target: "All Employees",
      duration: "2-4 hours",
      features: [
        "Phishing simulation",
        "Interactive modules",
        "Progress tracking",
        "Compliance reporting",
      ],
      image: "/image/security-awareness.png",
    },
    {
      icon: Target,
      title: "Technical Security Training",
      description:
        "Advanced technical training for IT and security professionals",
      target: "IT Professionals",
      duration: "1-5 days",
      features: [
        "Hands-on labs",
        "Real-world scenarios",
        "Expert instructors",
        "Certification prep",
      ],
      image: "/image/technical-training.png",
    },
    {
      icon: GraduationCap,
      title: "Executive Security Briefings",
      description:
        "Security leadership training for executives and decision makers",
      target: "C-Level Executives",
      duration: "4-8 hours",
      features: [
        "Risk management",
        "Strategic planning",
        "Budget allocation",
        "Board reporting",
      ],
      image: "/image/executive-briefing.png",
    },
    {
      icon: Award,
      title: "Certification Programs",
      description:
        "Industry-recognized certification training and exam preparation",
      target: "Security Professionals",
      duration: "3-5 days",
      features: [
        "CISSP, CISM, CEH prep",
        "Practice exams",
        "Study materials",
        "Instructor support",
      ],
      image: "/image/certification-program.png",
    },
  ];

  const trainingTopics = [
    {
      category: "General Awareness",
      topics: [
        "Password Security",
        "Email Security",
        "Social Engineering",
        "Mobile Device Security",
        "Physical Security",
        "Data Protection",
      ],
    },
    {
      category: "Technical Skills",
      topics: [
        "Network Security",
        "Penetration Testing",
        "Incident Response",
        "Digital Forensics",
        "Vulnerability Assessment",
        "Security Architecture",
      ],
    },
    {
      category: "Compliance & Governance",
      topics: [
        "GDPR Compliance",
        "ISO 27001",
        "SOX Requirements",
        "Risk Management",
        "Policy Development",
        "Audit Preparation",
      ],
    },
    {
      category: "Specialized Training",
      topics: [
        "Cloud Security",
        "DevSecOps",
        "IoT Security",
        "AI/ML Security",
        "Blockchain Security",
        "OT/ICS Security",
      ],
    },
  ];

  const deliveryMethods = [
    {
      method: "Instructor-Led Training",
      description: "Traditional classroom or virtual instructor-led sessions",
      benefits: [
        "Real-time interaction",
        "Expert guidance",
        "Customized content",
        "Group discussions",
      ],
    },
    {
      method: "E-Learning Modules",
      description: "Self-paced online learning modules and courses",
      benefits: [
        "Flexible scheduling",
        "Progress tracking",
        "Multimedia content",
        "Cost-effective",
      ],
    },
    {
      method: "Simulation Exercises",
      description: "Hands-on simulations and tabletop exercises",
      benefits: [
        "Practical experience",
        "Team building",
        "Scenario-based learning",
        "Skills validation",
      ],
    },
    {
      method: "Blended Learning",
      description: "Combination of online and instructor-led training",
      benefits: [
        "Best of both worlds",
        "Flexible approach",
        "Reinforced learning",
        "Measurable outcomes",
      ],
    },
  ];

  return (
    <section className="py-20 bg-slate-900 min-h-screen relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Security Training Services
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Comprehensive cybersecurity training programs to build security
            awareness, develop technical skills, and create a security-conscious
            culture in your organization.
          </p>
        </div>

        {/* Training Programs */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {trainingPrograms.map((program, index) => {
            const IconComponent = program.icon;
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
                    {program.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between mb-4 text-sm">
                    <span className="text-gray-400">
                      Target:{" "}
                      <span className="text-green-400">{program.target}</span>
                    </span>
                    <span className="text-gray-400">
                      Duration:{" "}
                      <span className="text-green-400">{program.duration}</span>
                    </span>
                  </div>
                  <div className="space-y-2 mb-6">
                    {program.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-400"
                      >
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button
                    className="w-full bg-green-500 hover:bg-green-600 text-white"
                    onClick={() =>
                      openModal({
                        title: program.title,
                        content: (
                          <ul className="list-disc list-inside text-black space-y-1">
                            {program.features.map((f, i) => (
                              <li key={i}>{f}</li>
                            ))}
                          </ul>
                        ),
                        icon: IconComponent,
                        image: program.image,
                      })
                    }
                  >
                    Get Program Details
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Training Topics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Training Topics & Specializations
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {trainingTopics.map((category, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-600">
                <CardHeader>
                  <CardTitle className="text-lg text-green-400">
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {category.topics.map((topic, topicIndex) => (
                      <div
                        key={topicIndex}
                        className="text-sm text-gray-300 bg-slate-700/50 px-2 py-1 rounded"
                      >
                        {topic}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Delivery Methods */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Training Delivery Methods
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {deliveryMethods.map((method, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-600">
                <CardHeader>
                  <CardTitle className="text-lg text-white">
                    {method.method}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {method.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {method.benefits.map((benefit, benefitIndex) => (
                      <div
                        key={benefitIndex}
                        className="flex items-center text-sm text-gray-400"
                      >
                        <TrendingUp className="w-3 h-3 text-green-400 mr-2" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl px-8 py-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Build Your Security Team's Skills
            </h3>
            <p className="text-green-100 mb-8 max-w-2xl mx-auto">
              Invest in your team's security knowledge and skills with our
              comprehensive training programs. Contact us to design a custom
              training plan for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                onClick={() =>
                  openModal({
                    title: "Training Catalog",
                    content: (
                      <p className="text-black">
                        Here you can include your full training catalog or
                        downloadable links.
                      </p>
                    ),
                  })
                }
              >
                <BookOpen className="w-5 h-5 mr-2" />
                View Training Catalog
              </Button>
              <Button
                className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
                onClick={() =>
                  openModal({
                    title: "Request Custom Training",
                    content: (
                      <form className="space-y-3">
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="w-full px-3 py-2 rounded border border-gray-400"
                        />
                        <input
                          type="email"
                          placeholder="Your Email"
                          className="w-full px-3 py-2 rounded border border-gray-400"
                        />
                        <textarea
                          placeholder="Message"
                          className="w-full px-3 py-2 rounded border border-gray-400"
                        />
                        <Button
                          type="submit"
                          className="bg-green-500 hover:bg-green-600 text-white w-full"
                        >
                          Submit Request
                        </Button>
                      </form>
                    ),
                  })
                }
              >
                Request Custom Training
              </Button>
            </div>
          </div>
        </div>

        {/* Modal */}
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
            <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full p-6 relative border border-gray-200">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-700 hover:text-green-500 text-2xl font-semibold transition-colors"
              >
                &times;
              </button>
              <div className="space-y-4 max-h-[80vh] overflow-y-auto">
                {/* Icon & Title */}
                {modalIcon && (
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <modalIcon className="w-6 h-6 text-green-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-black">
                      {modalTitle}
                    </h2>
                  </div>
                )}

                {/* Optional Image */}
                {modalImage && (
                  <img
                    src={modalImage}
                    alt={modalTitle}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                )}

                {/* Modal Content */}
                <div className="text-black">{modalContent}</div>

                {/* Footer / Close Button */}
                <div className="text-right">
                  <Button
                    onClick={closeModal}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

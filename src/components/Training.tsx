import {
  GraduationCap,
  Shield,
  Book,
  Network,
  Database,
  Award,
  Clock,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useNavigation } from "./NavigationContext";

// Training pages imports
import CybersecurityTraining from "./training/CybersecurityTraining";
import CybersecurityFundamentals from "./training/CybersecurityFundamentals";
import CyberEssentials from "./training/CyberEssentials";
import CISSPTraining from "./training/CISSPTraining";
import CISMTraining from "./training/CISMTraining";
import VCISOTraining from "./training/VCISOTraining";
import ISOStandardTraining from "./training/ISOStandardTraining";
import NetworkTraining from "./training/NetworkTraining";
import DatabaseTraining from "./training/DatabaseTraining";
// Network Training Subsections
import CiscoCCNA from "./training/CiscoCCNA";
import CiscoCCIE from "./training/CiscoCCIE";
import CheckpointCCSA from "./training/CheckpointCCSA";
import CompTIANetwork from "./training/CompTIANetwork";
import CompTIASecurity from "./training/CompTIASecurity";
// Database Training Subsections
import OracleDatabase from "./training/OracleDatabase";
import MicrosoftSQL from "./training/MicrosoftSQL";
import AzureDatabase from "./training/AzureDatabase";
// ISO Standard Training Subsections
import ISO27001Fundamentals from "./training/ISO27001Fundamentals";

export default function Training() {
  const { navigate } = useNavigation();

  const trainingPrograms = [
    {
      icon: Shield,
      title: "Cybersecurity Training",
      path: "cybersecurity-training",
      description:
        "Comprehensive cybersecurity awareness and technical training programs for all skill levels.",
      duration: "2-5 days",
      modules: [
        "Threat Landscape",
        "Security Best Practices",
        "Incident Response",
        "Compliance Requirements",
      ],
    },
    {
      icon: Book,
      title: "Cybersecurity Fundamentals",
      path: "cybersecurity-fundamentals",
      description: "Foundational security training for beginners.",
      duration: "2-3 days",
      modules: ["Basics", "Threat Models", "Practical Exercises"],
    },
    {
      icon: Book,
      title: "Cyber Essentials",
      path: "cyber-essentials",
      description:
        "Compliance-focused training to meet Cyber Essentials standards.",
      duration: "2 days",
      modules: ["Core Controls", "Practical Guidance", "Compliance Support"],
    },
    {
      icon: Book,
      title: "CISSP Training",
      path: "cissp-training",
      description: "Comprehensive CISSP certification preparation.",
      duration: "5-7 days",
      modules: ["8 Domains", "Exam Prep", "Practice Tests"],
    },
    {
      icon: Book,
      title: "CISM Training",
      path: "cism-training",
      description:
        "Training for Certified Information Security Manager (CISM).",
      duration: "4-6 days",
      modules: ["Governance", "Risk Mgmt", "Response Planning"],
    },
    {
      icon: Book,
      title: "vCISO Training",
      path: "vciso-training",
      description:
        "Develop skills to operate as a Virtual Chief Information Security Officer.",
      duration: "3-5 days",
      modules: ["Leadership", "Policy", "Compliance"],
    },
    {
      icon: Award,
      title: "ISO Standard Training",
      path: "iso-standard-training",
      description:
        "Professional training on various ISO standards implementation and auditing.",
      duration: "3-7 days",
      modules: [
        "ISO Requirements",
        "Implementation Guide",
        "Internal Auditing",
        "Management Review",
      ],
    },
    {
      icon: Network,
      title: "Network Training",
      path: "network-training",
      description:
        "Advanced network security training covering infrastructure protection and monitoring.",
      duration: "4-6 days",
      modules: [
        "Network Security",
        "Firewall Management",
        "Intrusion Detection",
        "Network Monitoring",
      ],
    },
    {
      icon: Network,
      title: "Cisco CCNA",
      path: "cisco-ccna",
      description:
        "Entry-level Cisco certification for networking professionals.",
      duration: "5 days",
      modules: ["Routing & Switching", "Network Basics", "Cisco Labs"],
    },
    {
      icon: Network,
      title: "Cisco CCIE",
      path: "cisco-ccie",
      description: "Expert-level Cisco certification for network engineers.",
      duration: "10 days",
      modules: ["Advanced Routing", "Design Labs", "Exam Prep"],
    },
    {
      icon: Network,
      title: "Checkpoint CCSA",
      path: "checkpoint-ccsa",
      description: "Checkpoint firewall and security administration training.",
      duration: "4 days",
      modules: ["Firewall Config", "VPN", "Threat Prevention"],
    },
    {
      icon: Network,
      title: "CompTIA Network+",
      path: "comptia-network",
      description: "Vendor-neutral networking certification training.",
      duration: "3 days",
      modules: ["Network Fundamentals", "Protocols", "Troubleshooting"],
    },
    {
      icon: Network,
      title: "CompTIA Security+",
      path: "comptia-security",
      description: "Foundational cybersecurity certification training.",
      duration: "3 days",
      modules: ["Security Concepts", "Access Control", "Risk Management"],
    },
    {
      icon: Database,
      title: "Database Training",
      path: "database-training",
      description:
        "Database security training focusing on data protection and access controls.",
      duration: "3-5 days",
      modules: [
        "Database Security",
        "Access Controls",
        "Data Encryption",
        "Backup & Recovery",
      ],
    },
    {
      icon: Database,
      title: "Oracle Database Certification",
      path: "oracle-db-certification",
      description:
        "Training for Oracle Database administration and development.",
      duration: "5 days",
      modules: ["SQL", "DBA Skills", "Performance Tuning"],
    },
    {
      icon: Database,
      title: "Microsoft SQL Certification",
      path: "microsoft-sql-certification",
      description: "SQL Server certification prep and practical training.",
      duration: "4 days",
      modules: ["T-SQL", "DB Mgmt", "Reporting Services"],
    },
    {
      icon: Database,
      title: "Azure Database Admin",
      path: "azure-db-admin",
      description: "Training for managing Azure-based databases.",
      duration: "4 days",
      modules: ["Cloud DB", "Scaling", "Monitoring"],
    },
    {
      icon: Award,
      title: "ISO 27001 Fundamentals",
      path: "iso-27001-fundamentals",
      description: "Introductory ISO 27001 training.",
      duration: "2 days",
      modules: [
        "ISO 27001 Overview",
        "Control Implementation",
        "Risk Management",
      ],
    },
  ];

  return (
    <section
      id="training"
      className="py-20 relative overflow-hidden bg-slate-800"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-slate-500/90 to-slate-500/70 pointer-events-none"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Training & Certifications
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional training programs designed to enhance your team's
            cybersecurity knowledge and prepare them for industry-recognized
            certifications.
          </p>
        </div>

        {/* Training Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {trainingPrograms.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <Card
                key={index}
                onClick={() => navigate(program.path, false)} // <-- fixed
                className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/80 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 cursor-pointer"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock className="w-4 h-4 mr-1" />
                      {program.duration}
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2 text-white">
                    {program.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-green-400 mb-3">
                    Training Modules:
                  </h4>
                  <ul className="space-y-2">
                    {program.modules.map((module, i) => (
                      <li
                        key={i}
                        className="flex items-center text-sm text-gray-400"
                      >
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                        {module}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

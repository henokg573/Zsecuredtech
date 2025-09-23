import {
  Shield,
  Lock,
  Eye,
  Server,
  Zap,
  Users,
  Briefcase,
  Book,
  Database,
  Network,
  FileCheck,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useNavigation } from "./NavigationContext";
import ThreatDetection from "./services/ThreatDetection";
import DataEncryption from "./services/DataEncryption";
import SecurityAuditing from "./services/SecurityAuditing";
import InfrastructureSecurity from "./services/InfrastructureSecurity";
import IncidentResponse from "./services/IncidentResponse";
import SecurityTraining from "./services/SecurityTraining";
import Consultancy from "./Consultancy";
import ISO9001 from "./consultancy/ISO9001";
import ISO20000 from "./consultancy/ISO20000";
import ISO22301 from "./consultancy/ISO22301";
import ISO31000 from "./consultancy/ISO31000";
import Training from "./Training";
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
export default function Services() {
  const { navigate } = useNavigation();

  const services = [
    // --- Security Services ---
    {
      icon: Shield,
      title: "Threat Detection & Response",
      description:
        "AI-powered threat detection with rapid response capabilities to neutralize incidents before they impact your business.",
      features: [
        "24/7 Monitoring",
        "AI-Powered Detection",
        "Incident Response",
      ],
      path: "threat-detection",
    },
    {
      icon: Lock,
      title: "Data Encryption & Protection",
      description:
        "End-to-end encryption solutions to safeguard your sensitive data in transit and at rest.",
      features: ["AES-256 Encryption", "Key Management", "Compliance Ready"],
      path: "data-encryption",
    },
    {
      icon: Eye,
      title: "Security Auditing",
      description:
        "Comprehensive assessments and penetration testing to identify vulnerabilities and strengthen defenses.",
      features: [
        "Vulnerability Scanning",
        "Penetration Testing",
        "Compliance Audits",
      ],
      path: "security-auditing",
    },
    {
      icon: Server,
      title: "Infrastructure Security",
      description:
        "Secure IT infrastructure with advanced firewall management, segmentation, and access controls.",
      features: ["Firewall Management", "Network Security", "Access Control"],
      path: "infrastructure-security",
    },
    {
      icon: Zap,
      title: "Incident Response",
      description:
        "Expert forensic analysis and recovery procedures to minimize business disruption.",
      features: [
        "Emergency Response",
        "Forensic Analysis",
        "Recovery Planning",
      ],
      path: "incident-response",
    },
    {
      icon: Users,
      title: "Security Training",
      description:
        "Cybersecurity awareness training for your team to build a human firewall against attacks.",
      features: [
        "Phishing Simulation",
        "Security Awareness",
        "Custom Training",
      ],
      path: "security-training",
    },

    // --- Consultancy ---
    {
      icon: Briefcase,
      title: "Consultancy Services",
      description:
        "Professional cybersecurity consultancy tailored to your organization’s unique challenges.",
      features: ["Risk Assessment", "Strategy Development", "Ongoing Advisory"],
      path: "consultancy",
    },
    {
      icon: FileCheck,
      title: "ISO 9001",
      description: "Quality management system implementation and compliance.",
      features: ["Documentation", "Audit Prep", "Certification Support"],
      path: "iso-9001",
    },
    {
      icon: FileCheck,
      title: "ISO 20000",
      description: "IT service management certification and consultancy.",
      features: [
        "ITIL Alignment",
        "Process Optimization",
        "Compliance Training",
      ],
      path: "iso-20000",
    },
    {
      icon: FileCheck,
      title: "ISO 22301",
      description: "Business continuity management and resilience consultancy.",
      features: ["BCP Design", "Crisis Simulation", "Resilience Planning"],
      path: "iso-22301",
    },
    {
      icon: FileCheck,
      title: "ISO 31000",
      description: "Enterprise risk management based on ISO best practices.",
      features: ["Risk Framework", "Controls Design", "Risk Reporting"],
      path: "iso-31000",
    },

    // --- Training ---
    {
      icon: Book,
      title: "Cybersecurity Training",
      description: "Courses designed to boost security skills for your team.",
      features: ["Hands-on Labs", "Expert Instructors", "Certification Prep"],
      path: "cybersecurity-training",
    },
    {
      icon: Book,
      title: "Cybersecurity Fundamentals",
      description: "Foundational security training for beginners.",
      features: ["Basics", "Threat Models", "Practical Exercises"],
      path: "cybersecurity-fundamentals",
    },
    {
      icon: Book,
      title: "Cyber Essentials",
      description:
        "Compliance-focused training to meet Cyber Essentials standards.",
      features: ["Core Controls", "Practical Guidance", "Compliance Support"],
      path: "cyber-essentials",
    },
    {
      icon: Book,
      title: "CISSP Training",
      description: "Comprehensive CISSP certification preparation.",
      features: ["8 Domains", "Exam Prep", "Practice Tests"],
      path: "cissp-training",
    },
    {
      icon: Book,
      title: "CISM Training",
      description:
        "Training for Certified Information Security Manager (CISM).",
      features: ["Governance", "Risk Mgmt", "Response Planning"],
      path: "cism-training",
    },
    {
      icon: Book,
      title: "vCISO Training",
      description:
        "Develop skills to operate as a Virtual Chief Information Security Officer.",
      features: ["Leadership", "Policy", "Compliance"],
      path: "vciso-training",
    },
    {
      icon: Book,
      title: "ISO Standard Training",
      description: "Learn ISO compliance, auditing, and implementation.",
      features: ["ISO 27001", "ISO 9001", "Audit Prep"],
      path: "iso-standard-training",
    },

    // --- Network Training ---
    {
      icon: Network,
      title: "Cisco CCNA",
      description:
        "Entry-level Cisco certification for networking professionals.",
      features: ["Routing & Switching", "Network Basics", "Cisco Labs"],
      path: "cisco-ccna",
    },
    {
      icon: Network,
      title: "Cisco CCIE",
      description: "Expert-level Cisco certification for network engineers.",
      features: ["Advanced Routing", "Design Labs", "Exam Prep"],
      path: "cisco-ccie",
    },
    {
      icon: Network,
      title: "Checkpoint CCSA",
      description: "Checkpoint firewall and security administration training.",
      features: ["Firewall Config", "VPN", "Threat Prevention"],
      path: "checkpoint-ccsa",
    },
    {
      icon: Network,
      title: "CompTIA Network+",
      description: "Vendor-neutral networking certification training.",
      features: ["Network Fundamentals", "Protocols", "Troubleshooting"],
      path: "comptia-network",
    },
    {
      icon: Network,
      title: "CompTIA Security+",
      description: "Foundational cybersecurity certification training.",
      features: ["Security Concepts", "Access Control", "Risk Management"],
      path: "comptia-security",
    },

    // --- Database Training ---
    {
      icon: Database,
      title: "Oracle Database Certification",
      description:
        "Training for Oracle Database administration and development.",
      features: ["SQL", "DBA Skills", "Performance Tuning"],
      path: "oracle-db-certification",
    },
    {
      icon: Database,
      title: "Microsoft SQL Certification",
      description: "SQL Server certification prep and practical training.",
      features: ["T-SQL", "DB Mgmt", "Reporting Services"],
      path: "microsoft-sql-certification",
    },
    {
      icon: Database,
      title: "Azure Database Admin",
      description: "Training for managing Azure-based databases.",
      features: ["Cloud DB", "Scaling", "Monitoring"],
      path: "azure-db-admin",
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our full range of security, consultancy, training, and
            certification services designed to protect and empower your
            business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                onClick={() => navigate(service.path)}
                className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/80 
                           transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 
                           cursor-pointer"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-green-400" />
                  </div>
                  <CardTitle className="text-xl mb-2 text-white">
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
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                        {feature}
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

import {
  NavigationProvider,
  useNavigation,
} from "./components/NavigationContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ThreatDetection from "./components/services/ThreatDetection";
import DataEncryption from "./components/services/DataEncryption";
import SecurityAuditing from "./components/services/SecurityAuditing";
import InfrastructureSecurity from "./components/services/InfrastructureSecurity";
import IncidentResponse from "./components/services/IncidentResponse";
import SecurityTraining from "./components/services/SecurityTraining";
import Consultancy from "./components/Consultancy";
import ISO9001 from "./components/consultancy/ISO9001";
import ISO20000 from "./components/consultancy/ISO20000";
import ISO22301 from "./components/consultancy/ISO22301";
import ISO31000 from "./components/consultancy/ISO31000";
import Training from "./components/Training";
import CybersecurityTraining from "./components/training/CybersecurityTraining";
import CybersecurityFundamentals from "./components/training/CybersecurityFundamentals";
import CyberEssentials from "./components/training/CyberEssentials";
import CISSPTraining from "./components/training/CISSPTraining";
import CISMTraining from "./components/training/CISMTraining";
import VCISOTraining from "./components/training/VCISOTraining";
import ISOStandardTraining from "./components/training/ISOStandardTraining";
import NetworkTraining from "./components/training/NetworkTraining";
import DatabaseTraining from "./components/training/DatabaseTraining";
import CiscoCCNA from "./components/training/CiscoCCNA";
import CiscoCCIE from "./components/training/CiscoCCIE";
import CheckpointCCSA from "./components/training/CheckpointCCSA";
import CompTIANetwork from "./components/training/CompTIANetwork";
import CompTIASecurity from "./components/training/CompTIASecurity";
import OracleDatabase from "./components/training/OracleDatabase";
import MicrosoftSQL from "./components/training/MicrosoftSQL";
import AzureDatabase from "./components/training/AzureDatabase";
import ISO27001Fundamentals from "./components/training/ISO27001Fundamentals";
import Resource from "./components/Resource";
import Downloads from "./components/resources/Downloads";
import WhitePapers from "./components/resources/WhitePapers";
import News from "./components/News";
import LatestNews from "./components/news/LatestNews";
import PressReleases from "./components/news/PressReleases";
import SecurityAlerts from "./components/news/SecurityAlerts";
import IndustryUpdates from "./components/news/IndustryUpdates";
import Solutions from "./components/Solutions";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import AdminDashboard from "./components/AdminDashboard";
import AdminLogin from "./components/AdminLogin";

import { useEffect } from "react";

function AppContent() {
  const { currentSection, navigate } = useNavigation();

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      navigate(hash);
    }
  }, [navigate]);

  const renderSection = () => {
    switch (currentSection) {
      case "home":
        return (
          <>
            <Hero />
            <Services />
            <Solutions />
            <About />
          </>
        );

      // Services
      case "services":
        return <Services />;
      case "threat-detection":
        return <ThreatDetection />;
      case "data-encryption":
        return <DataEncryption />;
      case "security-auditing":
        return <SecurityAuditing />;
      case "infrastructure-security":
        return <InfrastructureSecurity />;
      case "incident-response":
        return <IncidentResponse />;
      case "security-training":
        return <SecurityTraining />;

      // Consultancy
      case "consultancy":
        return <Consultancy />;
      case "iso-9001":
        return <ISO9001 />;
      case "iso-20000":
        return <ISO20000 />;
      case "iso-22301":
        return <ISO22301 />;
      case "iso-31000":
        return <ISO31000 />;

      // Training
      case "training":
        return <Training />;
      case "cybersecurity-training":
        return <CybersecurityTraining />;
      case "cybersecurity-fundamentals":
        return <CybersecurityFundamentals />;
      case "cyber-essentials":
        return <CyberEssentials />;
      case "cissp-training":
        return <CISSPTraining />;
      case "cism-training":
        return <CISMTraining />;
      case "vciso-training":
        return <VCISOTraining />;
      case "iso-standard-training":
        return <ISOStandardTraining />;
      case "network-training":
        return <NetworkTraining />;
      case "database-training":
        return <DatabaseTraining />;
      case "cisco-ccna":
        return <CiscoCCNA />;
      case "cisco-ccie":
        return <CiscoCCIE />;
      case "checkpoint-ccsa":
        return <CheckpointCCSA />;
      case "comptia-network":
        return <CompTIANetwork />;
      case "comptia-security":
        return <CompTIASecurity />;
      case "oracle-db-certification":
        return <OracleDatabase />;
      case "microsoft-sql-certification":
        return <MicrosoftSQL />;
      case "azure-db-admin":
        return <AzureDatabase />;
      case "iso-27001-fundamentals":
        return <ISO27001Fundamentals />;

      // Resources
      case "resource":
        return <Resource />;
      case "downloads":
        return <Downloads />;
      case "whitepapers":
        return <WhitePapers />;

      // News
      case "news":
        return <News />;
      case "latest-news":
        return <LatestNews />;
      case "press-releases":
        return <PressReleases />;
      case "industry-updates":
        return <IndustryUpdates />;
      case "security-alerts":
        return <SecurityAlerts />;

      // Main sections
      case "about":
        return <About />;
      case "contact":
        return <Contact />;

      // ✅ Hidden Admin
      case "admin-login":
        return <AdminLogin />;
      case "admin-dashboard":
        if (sessionStorage.getItem("isAdmin") === "true") {
          return <AdminDashboard />;
        } else {
          navigate("admin-login");
          return null;
        }

      default:
        return (
          <>
            <Hero />
            <Services />
            <Solutions />
            <About />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-transparent">
      <Header />
      <main>{renderSection()}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}

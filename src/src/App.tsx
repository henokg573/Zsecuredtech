import { NavigationProvider, useNavigation } from './components/NavigationContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ThreatDetection from './components/services/ThreatDetection';
import DataEncryption from './components/services/DataEncryption';
import SecurityAuditing from './components/services/SecurityAuditing';
import Consultancy from './components/Consultancy';
import ISO9001 from './components/consultancy/ISO9001';
import Training from './components/Training';
import CybersecurityTraining from './components/training/CybersecurityTraining';
import CybersecurityFundamentals from './components/training/CybersecurityFundamentals';
import CyberEssentials from './components/training/CyberEssentials';
import CISSPTraining from './components/training/CISSPTraining';
import CISMTraining from './components/training/CISMTraining';
import VCISOTraining from './components/training/VCISOTraining';
import ISOStandardTraining from './components/training/ISOStandardTraining';
import NetworkTraining from './components/training/NetworkTraining';
import DatabaseTraining from './components/training/DatabaseTraining';
import Resource from './components/Resource';
import Downloads from './components/resources/Downloads';
import News from './components/News';
import LatestNews from './components/news/LatestNews';
import Solutions from './components/Solutions';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function AppContent() {
  const { currentSection } = useNavigation();

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return (
          <>
            <Hero />
            <Services />
            <Solutions />
            <About />
          </>
        );
      
      // Services
      case 'services':
        return <Services />;
      case 'threat-detection':
        return <ThreatDetection />;
      case 'data-encryption':
        return <DataEncryption />;
      case 'security-auditing':
        return <SecurityAuditing />;
      
      // Consultancy
      case 'consultancy':
        return <Consultancy />;
      case 'iso-9001':
        return <ISO9001 />;
      
      // Training
      case 'training':
        return <Training />;
      case 'cybersecurity-training':
        return <CybersecurityTraining />;
      case 'cybersecurity-fundamentals':
        return <CybersecurityFundamentals />;
      case 'cyber-essentials':
        return <CyberEssentials />;
      case 'cissp-training':
        return <CISSPTraining />;
      case 'cism-training':
        return <CISMTraining />;
      case 'vciso-training':
        return <VCISOTraining />;
      case 'iso-standard-training':
        return <ISOStandardTraining />;
      case 'network-training':
        return <NetworkTraining />;
      case 'database-training':
        return <DatabaseTraining />;
      
      // Resources
      case 'resource':
        return <Resource />;
      case 'downloads':
        return <Downloads />;
      
      // News
      case 'news':
        return <News />;
      case 'latest-news':
        return <LatestNews />;
      
      // Other sections
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      
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
    <div className="min-h-screen">
      <Header />
      <main>
        {renderSection()}
      </main>
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
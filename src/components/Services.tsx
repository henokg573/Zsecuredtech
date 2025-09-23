import { Shield, Lock, Eye, Server, Zap, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export default function Services() {
  const services = [
    {
      icon: Shield,
      title: 'Threat Detection & Response',
      description: 'Advanced AI-powered threat detection with rapid response capabilities to neutralize security incidents before they impact your business.',
      features: ['24/7 Monitoring', 'AI-Powered Detection', 'Incident Response']
    },
    {
      icon: Lock,
      title: 'Data Encryption & Protection',
      description: 'End-to-end encryption solutions to safeguard your sensitive data both in transit and at rest with military-grade security.',
      features: ['AES-256 Encryption', 'Key Management', 'Compliance Ready']
    },
    {
      icon: Eye,
      title: 'Security Auditing',
      description: 'Comprehensive security assessments and penetration testing to identify vulnerabilities and strengthen your security posture.',
      features: ['Vulnerability Scanning', 'Penetration Testing', 'Compliance Audits']
    },
    {
      icon: Server,
      title: 'Infrastructure Security',
      description: 'Secure your entire IT infrastructure with advanced firewall management, network segmentation, and access controls.',
      features: ['Firewall Management', 'Network Security', 'Access Control']
    },
    {
      icon: Zap,
      title: 'Incident Response',
      description: 'Rapid incident response services with expert forensic analysis and recovery procedures to minimize business disruption.',
      features: ['Emergency Response', 'Forensic Analysis', 'Recovery Planning']
    },
    {
      icon: Users,
      title: 'Security Training',
      description: 'Comprehensive cybersecurity awareness training for your team to build a human firewall against social engineering attacks.',
      features: ['Phishing Simulation', 'Security Awareness', 'Custom Training']
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Our Security Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive cybersecurity solutions designed to protect your business 
            from the most sophisticated threats in today's digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/80 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-green-400" />
                  </div>
                  <CardTitle className="text-xl mb-2 text-white">{service.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
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

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-600 to-cyan-600 rounded-2xl px-8 py-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready to Secure Your Business?
            </h3>
            <p className="text-green-100 mb-8 max-w-2xl mx-auto">
              Get a free security assessment and discover how our solutions can protect your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Free Security Assessment
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
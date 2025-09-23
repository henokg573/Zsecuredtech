import { Server, Shield, Lock, Monitor, AlertTriangle, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

export default function InfrastructureSecurity() {
  const securityLayers = [
    {
      icon: Server,
      title: 'Network Security',
      description: 'Comprehensive network protection including firewalls, IDS/IPS, and network segmentation.',
      services: ['Next-Gen Firewalls', 'Network Segmentation', 'VPN Solutions', 'Network Monitoring']
    },
    {
      icon: Lock,
      title: 'Endpoint Security',
      description: 'Advanced endpoint protection for all devices accessing your network.',
      services: ['Endpoint Detection & Response', 'Anti-malware Solutions', 'Device Management', 'Mobile Security']
    },
    {
      icon: Monitor,
      title: 'Security Monitoring',
      description: '24/7 security monitoring and threat detection for proactive incident response.',
      services: ['SIEM Implementation', 'SOC Services', 'Log Management', 'Threat Intelligence']
    },
    {
      icon: Shield,
      title: 'Cloud Security',
      description: 'Secure cloud infrastructure deployment and management across all major platforms.',
      services: ['Cloud Security Posture', 'Container Security', 'Identity Management', 'Data Protection']
    }
  ];

  const securityFrameworks = [
    'NIST Cybersecurity Framework',
    'ISO 27001/27002',
    'CIS Critical Security Controls',
    'COBIT 2019',
    'PCI DSS',
    'SOC 2 Type II'
  ];

  const implementationProcess = [
    {
      phase: 'Assessment',
      description: 'Comprehensive infrastructure security assessment',
      duration: '2-3 weeks'
    },
    {
      phase: 'Design',
      description: 'Security architecture design and planning',
      duration: '3-4 weeks'
    },
    {
      phase: 'Implementation',
      description: 'Deploy security controls and solutions',
      duration: '6-12 weeks'
    },
    {
      phase: 'Testing',
      description: 'Security testing and validation',
      duration: '2-3 weeks'
    },
    {
      phase: 'Monitoring',
      description: 'Ongoing monitoring and maintenance',
      duration: 'Continuous'
    }
  ];

  return (
    <section className="py-20 bg-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Infrastructure Security
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Comprehensive infrastructure security solutions to protect your IT environment 
            from evolving cyber threats through multi-layered defense strategies.
          </p>
        </div>

        {/* Security Layers */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {securityLayers.map((layer, index) => {
            const IconComponent = layer.icon;
            return (
              <Card key={index} className="bg-slate-800/50 border-slate-600 hover:bg-slate-800/80 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-green-400" />
                  </div>
                  <CardTitle className="text-xl text-white">{layer.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {layer.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {layer.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                        {service}
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Implementation Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Implementation Process
          </h2>
          <div className="grid md:grid-cols-5 gap-6">
            {implementationProcess.map((phase, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-600 text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-white mb-2">{phase.phase}</h3>
                  <p className="text-gray-300 text-sm mb-3">{phase.description}</p>
                  <div className="text-xs text-green-400 bg-green-900/20 px-2 py-1 rounded">
                    {phase.duration}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Security Frameworks */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Security Frameworks & Standards
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {securityFrameworks.map((framework, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-600 rounded-lg p-4 text-center">
                <div className="font-semibold text-white">{framework}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl px-8 py-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Secure Your Infrastructure Today
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Let our security experts assess your infrastructure and design a comprehensive 
              security strategy tailored to your organization's needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Schedule Security Assessment
              </Button>
              <Button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                Download Security Guide
              </Button>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
            <div className="text-gray-300">Uptime Achieved</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-400 mb-2">&lt;15min</div>
            <div className="text-gray-300">Incident Response Time</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
            <div className="text-gray-300">Security Monitoring</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
            <div className="text-gray-300">Infrastructures Secured</div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Lock, Shield, Key, Database, Cloud, FileCheck } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

export default function DataEncryption() {
  const encryptionServices = [
    {
      icon: Database,
      title: 'Database Encryption',
      description: 'Transparent data encryption for databases both at rest and in transit.',
      features: ['Column-level encryption', 'Key management', 'Compliance reporting', 'Performance optimization']
    },
    {
      icon: Cloud,
      title: 'Cloud Data Protection',
      description: 'Comprehensive encryption solutions for cloud-stored data across all platforms.',
      features: ['Multi-cloud encryption', 'Key escrow services', 'Identity-based encryption', 'API security']
    },
    {
      icon: FileCheck,
      title: 'File & Document Security',
      description: 'Advanced encryption for sensitive documents and file systems.',
      features: ['Document-level protection', 'Digital rights management', 'Secure sharing', 'Version control']
    },
    {
      icon: Key,
      title: 'Key Management Services',
      description: 'Enterprise-grade key lifecycle management and secure storage solutions.',
      features: ['HSM integration', 'Key rotation', 'Secure key storage', 'Compliance auditing']
    }
  ];

  return (
    <section className="py-20 bg-slate-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Data Encryption & Protection
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Advanced encryption solutions to protect your most sensitive data across all platforms, 
            ensuring confidentiality, integrity, and compliance with industry standards.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {encryptionServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/80 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-green-400" />
                  </div>
                  <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
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
              Get a comprehensive data protection assessment and see how our encryption 
              solutions can secure your organization's most valuable assets.
            </p>
            <Button className="bg-white text-green-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Request Assessment
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
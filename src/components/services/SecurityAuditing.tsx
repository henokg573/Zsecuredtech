import { Search, FileCheck, AlertTriangle, Users, Shield, Target } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

export default function SecurityAuditing() {
  const auditServices = [
    {
      icon: Search,
      title: 'Vulnerability Assessment',
      description: 'Comprehensive scanning and identification of security weaknesses across your infrastructure.',
      deliverables: ['Detailed vulnerability report', 'Risk prioritization matrix', 'Remediation roadmap', 'Executive summary']
    },
    {
      icon: Target,
      title: 'Penetration Testing',
      description: 'Authorized simulated attacks to identify exploitable vulnerabilities in your systems.',
      deliverables: ['Penetration test report', 'Proof of concept demonstrations', 'Attack path analysis', 'Security recommendations']
    },
    {
      icon: FileCheck,
      title: 'Compliance Auditing',
      description: 'Thorough assessment of your compliance posture against industry standards and regulations.',
      deliverables: ['Compliance gap analysis', 'Control effectiveness review', 'Audit trail documentation', 'Certification support']
    },
    {
      icon: Shield,
      title: 'Security Architecture Review',
      description: 'Evaluation of your security architecture design and implementation effectiveness.',
      deliverables: ['Architecture assessment', 'Design recommendations', 'Security control mapping', 'Implementation guidance']
    }
  ];

  const complianceStandards = [
    'ISO 27001', 'SOC 2', 'PCI DSS', 'HIPAA', 'GDPR', 'NIST Framework'
  ];

  return (
    <section className="py-20 bg-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Security Auditing
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Comprehensive security assessments to identify vulnerabilities, ensure compliance, 
            and strengthen your organization's security posture through expert auditing services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {auditServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="bg-slate-800/50 border-slate-600 hover:bg-slate-800/80 transition-all duration-300">
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
                  <h4 className="font-semibold text-green-400 mb-3">Key Deliverables:</h4>
                  <ul className="space-y-2 mb-6">
                    {service.deliverables.map((deliverable, deliverableIndex) => (
                      <li key={deliverableIndex} className="flex items-center text-sm text-gray-400">
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
              <div key={index} className="bg-slate-800/50 border border-slate-600 rounded-lg p-4 text-center">
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
              Schedule a consultation to discuss your security auditing needs and get a 
              customized assessment plan for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Schedule Consultation
              </Button>
              <Button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                Download Audit Checklist
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
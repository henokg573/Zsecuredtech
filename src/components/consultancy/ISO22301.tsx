import { Shield, AlertTriangle, Clock, CheckCircle, Award, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

export default function ISO22301() {
  const benefits = [
    {
      icon: Shield,
      title: 'Business Resilience',
      description: 'Ensure business continuity during disruptive incidents and emergencies'
    },
    {
      icon: Clock,
      title: 'Faster Recovery',
      description: 'Minimize downtime and recover operations quickly after disruptions'
    },
    {
      icon: TrendingUp,
      title: 'Competitive Advantage',
      description: 'Demonstrate reliability and resilience to customers and stakeholders'
    },
    {
      icon: Award,
      title: 'Compliance Assurance',
      description: 'Meet regulatory requirements and industry standards for business continuity'
    }
  ];

  const keyElements = [
    'Business Impact Analysis (BIA)',
    'Risk Assessment & Management',
    'Business Continuity Strategy',
    'Incident Response Procedures',
    'Crisis Management Plans',
    'Communication Strategies',
    'Recovery & Restoration Plans',
    'Testing & Exercise Programs',
    'Continuous Improvement Process',
    'Management Review & Monitoring'
  ];

  return (
    <section className="py-20 bg-slate-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            ISO 22301 - Business Continuity Management
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Build organizational resilience with ISO 22301 Business Continuity Management System. 
            Protect your operations, reputation, and stakeholders from disruptive incidents.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Why ISO 22301?
            </h2>
            <p className="text-gray-300 mb-8">
              ISO 22301 provides a framework for Business Continuity Management Systems (BCMS), 
              helping organizations prepare for, respond to, and recover from disruptive incidents 
              while maintaining critical business functions.
            </p>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-orange-400 mb-2">{benefit.title}</h3>
                      <p className="text-gray-300 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <Card className="bg-slate-700/50 border-slate-600">
            <CardHeader>
              <CardTitle className="text-xl text-white">Key BCMS Elements</CardTitle>
              <CardDescription className="text-gray-300">
                Essential components of ISO 22301 implementation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                {keyElements.map((element, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-orange-400 mr-2 flex-shrink-0" />
                    {element}
                  </div>
                ))}
              </div>
              <Button className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white">
                Start BCMS Implementation
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl px-8 py-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Build Business Resilience Today
            </h3>
            <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
              Don't wait for a crisis to test your organization's resilience. Implement ISO 22301 
              and be prepared for any disruption.
            </p>
            <Button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Get BCMS Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
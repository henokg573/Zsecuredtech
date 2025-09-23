import { Server, CheckCircle, Users, TrendingUp, Target, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

export default function ISO20000() {
  const benefits = [
    {
      icon: Target,
      title: 'Improved Service Quality',
      description: 'Consistent, high-quality IT services that meet business requirements'
    },
    {
      icon: TrendingUp,
      title: 'Enhanced Efficiency',
      description: 'Streamlined IT processes and reduced operational costs'
    },
    {
      icon: Users,
      title: 'Better Customer Satisfaction',
      description: 'Improved service delivery and customer experience'
    },
    {
      icon: Award,
      title: 'Global Recognition',
      description: 'International standard recognition for IT service management'
    }
  ];

  const serviceComponents = [
    {
      process: 'Service Portfolio Management',
      description: 'Strategic approach to managing the complete set of services'
    },
    {
      process: 'Service Level Management',
      description: 'Ensuring agreed service levels are met and maintained'
    },
    {
      process: 'Capacity Management',
      description: 'Ensuring adequate capacity to meet current and future demands'
    },
    {
      process: 'Availability Management',
      description: 'Ensuring services meet agreed availability requirements'
    },
    {
      process: 'IT Service Continuity Management',
      description: 'Managing risks that could impact IT service continuity'
    },
    {
      process: 'Information Security Management',
      description: 'Managing information security within all service activities'
    },
    {
      process: 'Incident Management',
      description: 'Restoring normal service operation as quickly as possible'
    },
    {
      process: 'Problem Management',
      description: 'Managing the lifecycle of all problems'
    },
    {
      process: 'Change Management',
      description: 'Controlling the lifecycle of all changes'
    },
    {
      process: 'Release & Deployment Management',
      description: 'Planning, scheduling and controlling the deployment of releases'
    }
  ];

  const implementationPhases = [
    'Current State Assessment',
    'Gap Analysis & Planning',
    'ITSM Framework Design',
    'Process Implementation',
    'Tool Configuration',
    'Training & Change Management',
    'Documentation & Procedures',
    'Internal Audit & Review',
    'Certification Audit',
    'Continuous Improvement'
  ];

  return (
    <section className="py-20 bg-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            ISO 20000 - IT Service Management
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Implement world-class IT Service Management (ITSM) practices with ISO 20000 certification. 
            Improve service quality, reduce costs, and enhance customer satisfaction.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Why ISO 20000?
            </h2>
            <p className="text-gray-300 mb-8">
              ISO 20000 is the international standard for IT Service Management, providing a 
              framework for delivering managed IT services to internal and external customers. 
              It helps organizations demonstrate their capability to deliver quality IT services.
            </p>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-400 mb-2">{benefit.title}</h3>
                      <p className="text-gray-300 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <Card className="bg-slate-800/50 border-slate-600">
            <CardHeader>
              <CardTitle className="text-xl text-white">Implementation Phases</CardTitle>
              <CardDescription className="text-gray-300">
                Our structured approach to ISO 20000 implementation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3">
                {implementationPhases.map((phase, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold mr-3 mt-0.5">
                      {index + 1}
                    </div>
                    <span className="text-gray-300 text-sm">{phase}</span>
                  </li>
                ))}
              </ol>
              <Button className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white">
                Start Implementation
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Service Management Processes */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            ISO 20000 Service Management Processes
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceComponents.map((component, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-600 hover:bg-slate-800/80 transition-all duration-300">
                <CardHeader>
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mb-3">
                    <Server className="w-4 h-4 text-white" />
                  </div>
                  <CardTitle className="text-sm text-white">{component.process}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-xs">{component.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16 text-center">
          <Card className="bg-slate-800/50 border-slate-600">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-blue-400 mb-2">18-24</div>
              <div className="text-sm text-gray-300">Months typical implementation</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 border-slate-600">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-blue-400 mb-2">30%</div>
              <div className="text-sm text-gray-300">Average cost reduction</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 border-slate-600">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-blue-400 mb-2">50%</div>
              <div className="text-sm text-gray-300">Incident reduction</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 border-slate-600">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-blue-400 mb-2">3 Years</div>
              <div className="text-sm text-gray-300">Certification validity</div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl px-8 py-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready to Achieve ISO 20000 Certification?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Transform your IT service management with ISO 20000. Contact our ITSM experts 
              to discuss your requirements and create a customized implementation roadmap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Get Free Consultation
              </Button>
              <Button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                Download ISO 20000 Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
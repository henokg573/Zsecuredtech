import { Award, CheckCircle, Users, FileText, Target, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

export default function ISO9001() {
  const benefits = [
    {
      icon: Target,
      title: 'Improved Customer Satisfaction',
      description: 'Enhanced focus on customer requirements and consistent service delivery'
    },
    {
      icon: TrendingUp,
      title: 'Operational Efficiency',
      description: 'Streamlined processes and reduced waste through systematic approaches'
    },
    {
      icon: Users,
      title: 'Employee Engagement',
      description: 'Clear roles, responsibilities, and continuous improvement culture'
    },
    {
      icon: Award,
      title: 'Competitive Advantage',
      description: 'International recognition and increased market credibility'
    }
  ];

  const implementationSteps = [
    'Gap Analysis & Current State Assessment',
    'Quality Management System Design',
    'Process Documentation & Procedures',
    'Employee Training & Awareness',
    'Internal Audit Implementation',
    'Management Review Processes',
    'Certification Body Selection',
    'External Audit Support'
  ];

  return (
    <section className="py-20 bg-slate-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            ISO 9001:2015 Quality Management Systems
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Implement and maintain a robust Quality Management System that improves organizational 
            efficiency, customer satisfaction, and drives continuous improvement across all processes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Why ISO 9001:2015?
            </h2>
            <p className="text-gray-300 mb-8">
              ISO 9001:2015 is the world's most recognized Quality Management System standard, 
              helping organizations demonstrate their ability to consistently provide products 
              and services that meet customer requirements and regulatory standards.
            </p>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-400 mb-2">{benefit.title}</h3>
                      <p className="text-gray-300 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <Card className="bg-slate-700/50 border-slate-600">
            <CardHeader>
              <CardTitle className="text-xl text-white">Implementation Process</CardTitle>
              <CardDescription className="text-gray-300">
                Our structured approach to ISO 9001:2015 implementation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3">
                {implementationSteps.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold mr-3 mt-0.5">
                      {index + 1}
                    </div>
                    <span className="text-gray-300 text-sm">{step}</span>
                  </li>
                ))}
              </ol>
              <Button className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white">
                Start Implementation
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-slate-700/50 border-slate-600 text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-green-400 mb-2">12-18</div>
              <div className="text-sm text-gray-300">Months typical implementation</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-700/50 border-slate-600 text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-green-400 mb-2">1M+</div>
              <div className="text-sm text-gray-300">Organizations certified worldwide</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-700/50 border-slate-600 text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-green-400 mb-2">3 Years</div>
              <div className="text-sm text-gray-300">Certification validity period</div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl px-8 py-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready to Achieve ISO 9001:2015 Certification?
            </h3>
            <p className="text-green-100 mb-8 max-w-2xl mx-auto">
              Contact our ISO 9001 experts to discuss your quality management system needs 
              and create a customized implementation roadmap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-green-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Get Free Consultation
              </Button>
              <Button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                Download ISO 9001 Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
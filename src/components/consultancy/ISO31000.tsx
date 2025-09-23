import { Target, TrendingUp, Shield, AlertTriangle, CheckCircle, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

export default function ISO31000() {
  const benefits = [
    {
      icon: Target,
      title: 'Strategic Decision Making',
      description: 'Make informed decisions based on comprehensive risk analysis'
    },
    {
      icon: TrendingUp,
      title: 'Improved Performance',
      description: 'Enhance organizational performance through effective risk management'
    },
    {
      icon: Shield,
      title: 'Stakeholder Confidence',
      description: 'Build trust with stakeholders through transparent risk management'
    },
    {
      icon: Award,
      title: 'Competitive Advantage',
      description: 'Gain competitive advantage through proactive risk management'
    }
  ];

  const riskPrinciples = [
    'Risk management creates and protects value',
    'Risk management is an integral part of all organizational processes',
    'Risk management is part of decision making',
    'Risk management explicitly addresses uncertainty',
    'Risk management is systematic, structured and timely',
    'Risk management is based on the best available information',
    'Risk management is tailored to the organization',
    'Risk management takes human and cultural factors into account',
    'Risk management is transparent and inclusive',
    'Risk management is dynamic, iterative and responsive to change',
    'Risk management facilitates continual improvement'
  ];

  const riskProcess = [
    {
      step: 'Communication & Consultation',
      description: 'Stakeholder engagement throughout the risk management process'
    },
    {
      step: 'Scope, Context & Criteria',
      description: 'Define the scope and establish risk criteria for the organization'
    },
    {
      step: 'Risk Assessment',
      description: 'Identify, analyze, and evaluate risks systematically'
    },
    {
      step: 'Risk Treatment',
      description: 'Select and implement appropriate risk treatment options'
    },
    {
      step: 'Monitoring & Review',
      description: 'Continuously monitor and review the risk management process'
    },
    {
      step: 'Recording & Reporting',
      description: 'Document and report risk management activities and outcomes'
    }
  ];

  return (
    <section className="py-20 bg-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            ISO 31000 - Risk Management
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Implement world-class risk management principles and guidelines with ISO 31000. 
            Create value and protect your organization through systematic risk management.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Why ISO 31000?
            </h2>
            <p className="text-gray-300 mb-8">
              ISO 31000 provides universally recognized principles, framework, and process 
              for managing risk. It helps organizations increase the likelihood of achieving 
              objectives, improve identification of opportunities and threats, and enhance 
              stakeholder confidence.
            </p>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-purple-400 mb-2">{benefit.title}</h3>
                      <p className="text-gray-300 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <Card className="bg-slate-800/50 border-slate-600">
            <CardHeader>
              <CardTitle className="text-xl text-white">Risk Management Process</CardTitle>
              <CardDescription className="text-gray-300">
                Key components of the ISO 31000 risk management process
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {riskProcess.map((process, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold mr-3 mt-0.5">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">{process.step}</h4>
                      <p className="text-gray-300 text-xs mt-1">{process.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-6 bg-purple-500 hover:bg-purple-600 text-white">
                Start Risk Management Implementation
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Risk Management Principles */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            ISO 31000 Risk Management Principles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {riskPrinciples.map((principle, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-600 text-center">
                <CardContent className="pt-6">
                  <CheckCircle className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <p className="text-white text-sm">{principle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16 text-center">
          <Card className="bg-slate-800/50 border-slate-600">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">15-20%</div>
              <div className="text-sm text-gray-300">Average cost reduction</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 border-slate-600">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">85%</div>
              <div className="text-sm text-gray-300">Objective achievement rate</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 border-slate-600">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">12-18</div>
              <div className="text-sm text-gray-300">Months implementation</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 border-slate-600">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">100+</div>
              <div className="text-sm text-gray-300">Countries adopted</div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl px-8 py-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready to Implement ISO 31000?
            </h3>
            <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
              Transform your organization's approach to risk management with ISO 31000. 
              Contact our risk management experts to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Get Risk Assessment
              </Button>
              <Button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                Download ISO 31000 Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
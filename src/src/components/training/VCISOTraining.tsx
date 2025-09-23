import { Users, Target, TrendingUp, Shield, Award, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

export default function VCISOTraining() {
  const coreCompetencies = [
    {
      icon: Target,
      title: 'Strategic Security Leadership',
      description: 'Develop and communicate security strategy aligned with business objectives',
      skills: ['Security strategy development', 'Business risk assessment', 'Strategic planning', 'Vision creation']
    },
    {
      icon: Users,
      title: 'Executive Communication',
      description: 'Master the art of communicating security to C-level executives and board members',
      skills: ['Board presentations', 'Risk communication', 'Business language translation', 'Stakeholder management']
    },
    {
      icon: TrendingUp,
      title: 'Budget & Resource Management',
      description: 'Effectively manage security budgets and allocate resources for maximum impact',
      skills: ['Budget planning', 'ROI measurement', 'Resource allocation', 'Vendor management']
    },
    {
      icon: Shield,
      title: 'Compliance & Risk Governance',
      description: 'Navigate complex regulatory landscapes and establish robust governance frameworks',
      skills: ['Regulatory compliance', 'Policy development', 'Risk governance', 'Audit management']
    }
  ];

  const targetAudience = [
    'Senior security professionals transitioning to executive roles',
    'Experienced security managers seeking C-level positions',
    'Current CISOs looking to enhance strategic skills',
    'IT executives expanding into security leadership',
    'Consultants providing virtual CISO services'
  ];

  const courseModules = [
    'Executive Leadership Fundamentals',
    'Security Strategy & Business Alignment',
    'Board & C-Suite Communication',
    'Risk Management & Governance',
    'Budget Planning & Resource Management',
    'Crisis Management & Incident Response',
    'Vendor Management & Third-party Risk',
    'Regulatory Compliance & Legal Issues'
  ];

  return (
    <section className="py-20 bg-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Virtual Chief Information Security Officer
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Executive-level security leadership training for strategic security management and 
            decision making. Develop the skills needed to be an effective CISO or security executive.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {coreCompetencies.map((competency, index) => {
            const IconComponent = competency.icon;
            return (
              <Card key={index} className="bg-slate-800/50 border-slate-600 hover:bg-slate-800/80 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-green-400" />
                  </div>
                  <CardTitle className="text-xl text-white">{competency.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {competency.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-green-400 mb-3">Key Skills:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {competency.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <Card className="bg-slate-800/50 border-slate-600">
            <CardHeader>
              <CardTitle className="text-lg text-white">Who Should Attend</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {targetAudience.map((audience, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 mt-2"></div>
                    {audience}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-600">
            <CardHeader>
              <CardTitle className="text-lg text-white">Course Modules</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {courseModules.map((module, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-300">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold mr-3">
                      {index + 1}
                    </div>
                    {module}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-600">
            <CardHeader>
              <CardTitle className="text-lg text-white">Training Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Duration:</span>
                <span className="text-white">3 Days</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Level:</span>
                <span className="text-white">Executive</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Format:</span>
                <span className="text-white">Interactive Workshop</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Class Size:</span>
                <span className="text-white">Max 15</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Certificate:</span>
                <span className="text-white">Executive Certificate</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl px-8 py-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Transform Your Security Leadership
            </h3>
            <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
              Join the ranks of successful security executives who drive business value through 
              strategic security leadership and effective communication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                <Award className="w-5 h-5 mr-2" />
                Enroll Now
              </Button>
              <Button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                Request Information
              </Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-slate-800/50 border-slate-600 text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-green-400 mb-2">$180K+</div>
              <div className="text-sm text-gray-300">Average CISO salary</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 border-slate-600 text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-green-400 mb-2">85%</div>
              <div className="text-sm text-gray-300">Career advancement rate</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 border-slate-600 text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-sm text-gray-300">Ongoing mentorship access</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
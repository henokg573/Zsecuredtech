import { Shield, Users, Award, BookOpen, Target, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

export default function CISMTraining() {
  const domains = [
    {
      domain: 'Domain 1',
      title: 'Information Security Governance',
      weight: '17%',
      topics: ['Governance Framework', 'Information Security Strategy', 'Organizational Structure', 'Risk Appetite']
    },
    {
      domain: 'Domain 2',
      title: 'Information Risk Management',
      weight: '20%',
      topics: ['Risk Assessment', 'Risk Treatment', 'Risk Monitoring', 'Risk Communication']
    },
    {
      domain: 'Domain 3',
      title: 'Information Security Program Development',
      weight: '33%',
      topics: ['Program Strategy', 'Resource Management', 'Information Security Architecture', 'Program Management']
    },
    {
      domain: 'Domain 4',
      title: 'Information Security Incident Management',
      weight: '30%',
      topics: ['Incident Response Planning', 'Incident Response Team', 'Evidence Collection', 'Communication']
    }
  ];

  const prerequisites = [
    'Bachelor\'s degree or equivalent experience',
    '5 years of information security management experience',
    'Experience in 3 of the 4 CISM domains',
    'Knowledge of security frameworks (ISO 27001, NIST, etc.)'
  ];

  return (
    <section className="py-20 bg-slate-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            CISM Training
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Certified Information Security Manager - Develop the advanced management skills 
            needed to design and manage enterprise information security programs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <Card className="bg-slate-700/50 border-slate-600 mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-white mb-4">CISM Certification Overview</CardTitle>
                <CardDescription className="text-gray-300">
                  CISM is designed for experienced information security professionals who design, 
                  build and manage enterprise information security programs. It focuses on management 
                  and strategy rather than technical implementation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold text-green-400 mb-4">Four Knowledge Domains</h3>
                <div className="space-y-4">
                  {domains.map((domain, index) => (
                    <div key={index} className="border border-slate-600 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold text-white">{domain.domain}: {domain.title}</h4>
                        <span className="text-sm bg-blue-600 text-blue-100 px-2 py-1 rounded">
                          {domain.weight}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {domain.topics.map((topic, topicIndex) => (
                          <div key={topicIndex} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                            {topic}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-700/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-xl text-white">Why Choose CISM?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-400 mb-2">Career Advancement</h4>
                    <p className="text-gray-300 text-sm mb-4">
                      CISM holders command higher salaries and are preferred for senior management roles.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-400 mb-2">Global Recognition</h4>
                    <p className="text-gray-300 text-sm mb-4">
                      Recognized worldwide as the standard for information security management.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-400 mb-2">Strategic Focus</h4>
                    <p className="text-gray-300 text-sm mb-4">
                      Emphasizes management and strategy over technical implementation.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-400 mb-2">Peer Network</h4>
                    <p className="text-gray-300 text-sm mb-4">
                      Join a global community of information security management professionals.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-slate-700/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-lg text-white">Training Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Duration:</span>
                  <span className="text-white">4 Days</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Level:</span>
                  <span className="text-white">Advanced</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Experience:</span>
                  <span className="text-white">5+ Years</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Exam Questions:</span>
                  <span className="text-white">150</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Exam Duration:</span>
                  <span className="text-white">4 Hours</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-900/20 border-blue-700">
              <CardHeader>
                <CardTitle className="text-lg text-blue-400">Prerequisites</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-blue-100">
                  {prerequisites.map((prerequisite, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2 mt-0.5" />
                      {prerequisite}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-green-900/20 border-green-700">
              <CardHeader>
                <CardTitle className="text-lg text-green-400">Average Salary Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-2">15-25%</div>
                  <div className="text-sm text-green-100">Salary increase after CISM certification</div>
                </div>
              </CardContent>
            </Card>

            <Button className="w-full bg-green-500 hover:bg-green-600 text-white py-3">
              <Award className="w-5 h-5 mr-2" />
              Enroll Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
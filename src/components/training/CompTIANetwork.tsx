import { Shield, Lock, Network, Award, Users, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

export default function CheckpointCCSA() {
  const courseModules = [
    {
      module: 'Module 1',
      title: 'Introduction to Check Point Security',
      duration: '4 hours',
      topics: ['Security Gateway Architecture', 'SmartConsole Overview', 'Policy Installation', 'Basic Troubleshooting']
    },
    {
      module: 'Module 2', 
      title: 'Deploying Gateways and Management',
      duration: '6 hours',
      topics: ['First Time Wizard', 'Network Configuration', 'Management High Availability', 'Backup and Restore']
    },
    {
      module: 'Module 3',
      title: 'Security Policies and NAT',
      duration: '8 hours',
      topics: ['Access Control Policy', 'NAT Rules', 'Application Control', 'URL Filtering']
    },
    {
      module: 'Module 4',
      title: 'Monitoring and Logging',
      duration: '4 hours',
      topics: ['SmartView Tracker', 'Log Analysis', 'SmartEvent', 'Reporting']
    },
    {
      module: 'Module 5',
      title: 'Advanced Features',
      duration: '6 hours',
      topics: ['VPN Configuration', 'Identity Awareness', 'Mobile Access', 'Threat Prevention']
    }
  ];

  const examObjectives = [
    'Deploy Check Point Security Management and Security Gateway',
    'Configure basic Access Control and NAT policies',
    'Monitor traffic and analyze logs using SmartConsole',
    'Implement Identity Awareness and Application Control',
    'Configure basic VPN communities and encryption',
    'Troubleshoot common security gateway issues'
  ];

  const prerequisites = [
    'Basic networking knowledge (TCP/IP, routing, switching)',
    'Understanding of security concepts',
    'Basic Windows/Linux administration skills',
    'Familiarity with firewalls and VPN concepts'
  ];

  return (
    <section className="py-20 bg-slate-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Check Point CCSA Training
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Check Point Certified Security Administrator - Master the administration of 
            Check Point Security Gateways and Management Software in both distributed and 
            standalone deployments.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <Card className="bg-slate-700/50 border-slate-600 mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-white mb-4">Course Modules</CardTitle>
                <CardDescription className="text-gray-300">
                  Comprehensive hands-on training covering all aspects of Check Point security 
                  administration from basic configuration to advanced threat prevention.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {courseModules.map((module, index) => (
                    <div key={index} className="border border-slate-600 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold text-white">{module.module}: {module.title}</h4>
                        <span className="text-sm bg-red-600 text-red-100 px-2 py-1 rounded">
                          {module.duration}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                        {module.topics.map((topic, topicIndex) => (
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
                <CardTitle className="text-xl text-white">Exam Objectives</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {examObjectives.map((objective, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold mr-3 mt-0.5">
                        {index + 1}
                      </div>
                      <span className="text-gray-300 text-sm">{objective}</span>
                    </div>
                  ))}
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
                  <span className="text-white">3 Days</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Level:</span>
                  <span className="text-white">Administrator</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Exam Code:</span>
                  <span className="text-white">156-215.81</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Exam Duration:</span>
                  <span className="text-white">90 Minutes</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Questions:</span>
                  <span className="text-white">90</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Passing Score:</span>
                  <span className="text-white">70%</span>
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

            <Card className="bg-red-900/20 border-red-700">
              <CardHeader>
                <CardTitle className="text-lg text-red-400">Industry Recognition</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-red-100">
                  <div>• Industry-standard security certification</div>
                  <div>• Recognized by enterprise organizations</div>
                  <div>• Gateway to advanced Check Point certifications</div>
                  <div>• Average salary: $70K - $95K</div>
                </div>
              </CardContent>
            </Card>

            <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-3">
              <Award className="w-5 h-5 mr-2" />
              Enroll in CCSA
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <Card className="bg-slate-700/50 border-slate-600 text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-red-400 mb-2">500K+</div>
              <div className="text-sm text-gray-300">Check Point certified professionals</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-700/50 border-slate-600 text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-red-400 mb-2">90%</div>
              <div className="text-sm text-gray-300">Pass rate with our training</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-700/50 border-slate-600 text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-red-400 mb-2">24/7</div>
              <div className="text-sm text-gray-300">Lab access included</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-700/50 border-slate-600 text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-red-400 mb-2">2 Years</div>
              <div className="text-sm text-gray-300">Certification validity</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
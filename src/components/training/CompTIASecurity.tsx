import { Shield, Lock, Key, Award, Users, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

export default function CompTIASecurity() {
  const examDomains = [
    {
      domain: 'Domain 1',
      title: 'General Security Concepts',
      weight: '12%',
      topics: ['CIA Triad', 'Non-repudiation', 'Authentication', 'Authorization', 'Security Controls']
    },
    {
      domain: 'Domain 2',
      title: 'Threats, Vulnerabilities, and Mitigations',
      weight: '22%', 
      topics: ['Threat Actors', 'Attack Vectors', 'Vulnerabilities', 'Indicators of Compromise', 'Mitigation Techniques']
    },
    {
      domain: 'Domain 3',
      title: 'Security Architecture',
      weight: '18%',
      topics: ['Security Design', 'Enterprise Infrastructure', 'Virtualization', 'Cloud Computing', 'Embedded Systems']
    },
    {
      domain: 'Domain 4',
      title: 'Security Operations',
      weight: '28%',
      topics: ['Security Monitoring', 'Incident Response', 'Digital Forensics', 'Automation', 'Communication']
    },
    {
      domain: 'Domain 5',
      title: 'Security Program Management and Oversight',
      weight: '20%',
      topics: ['Governance', 'Risk Management', 'Compliance', 'Audits', 'Business Continuity']
    }
  ];

  const careerPaths = [
    'Security Analyst',
    'Security Engineer', 
    'SOC Analyst',
    'Penetration Tester',
    'Security Consultant',
    'Compliance Officer',
    'Risk Analyst',
    'Incident Response Specialist'
  ];

  const prerequisites = [
    'CompTIA Network+ or equivalent networking knowledge',
    '2+ years of IT administration experience',
    'Basic understanding of Windows and Linux',
    'Knowledge of TCP/IP and networking protocols'
  ];

  return (
    <section className="py-20 bg-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            CompTIA Security+ Training
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            CompTIA Security+ - The global standard for cybersecurity professionals. 
            Validate core cybersecurity skills and launch your security career.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <Card className="bg-slate-800/50 border-slate-600 mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-white mb-4">Security+ Exam Domains</CardTitle>
                <CardDescription className="text-gray-300">
                  CompTIA Security+ covers the core skills required for any cybersecurity role 
                  and provides the foundation for intermediate-level cybersecurity jobs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {examDomains.map((domain, index) => (
                    <div key={index} className="border border-slate-600 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold text-white">{domain.domain}: {domain.title}</h4>
                        <span className="text-sm bg-red-600 text-red-100 px-2 py-1 rounded">
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

            <Card className="bg-slate-800/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-xl text-white">Career Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {careerPaths.map((career, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                      <span className="text-gray-300 text-sm">{career}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-lg text-white">Training Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Duration:</span>
                  <span className="text-white">5 Days</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Level:</span>
                  <span className="text-white">Intermediate</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Exam Code:</span>
                  <span className="text-white">SY0-701</span>
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
                  <span className="text-white">750/900</span>
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
                <CardTitle className="text-lg text-red-400">Gold Standard</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-red-100">
                  <div>• DoD 8570 IAT Level II approved</div>
                  <div>• ISO 17024 accredited certification</div>
                  <div>• Required by US government</div>
                  <div>• Industry baseline certification</div>
                  <div>• Average salary: $65K - $85K</div>
                </div>
              </CardContent>
            </Card>

            <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-3">
              <Award className="w-5 h-5 mr-2" />
              Enroll in Security+
            </Button>
          </div>
        </div>

        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-red-600 to-purple-600 rounded-2xl px-8 py-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Launch Your Cybersecurity Career
            </h3>
            <p className="text-red-100 mb-8 max-w-2xl mx-auto">
              Security+ is the most widely accepted baseline cybersecurity certification. 
              It's approved by the US Department of Defense and required for many government positions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-red-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                <Shield className="w-5 h-5 mr-2" />
                Start Security Journey
              </Button>
              <Button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                Download Exam Guide
              </Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <Card className="bg-slate-800/50 border-slate-600 text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-red-400 mb-2">1.3M+</div>
              <div className="text-sm text-gray-300">Security+ certified professionals</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 border-slate-600 text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-red-400 mb-2">88%</div>
              <div className="text-sm text-gray-300">Job placement rate</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 border-slate-600 text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-red-400 mb-2">3 Years</div>
              <div className="text-sm text-gray-300">Certification validity</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 border-slate-600 text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-red-400 mb-2">DoD</div>
              <div className="text-sm text-gray-300">8570 approved</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
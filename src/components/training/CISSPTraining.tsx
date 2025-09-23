import { Shield, Award, Book, Users, Clock, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

export default function CISSPTraining() {
  const domains = [
    {
      domain: 'Domain 1',
      title: 'Security and Risk Management',
      weight: '15%',
      topics: ['Governance & Compliance', 'Risk Management', 'Legal & Regulatory', 'Business Continuity']
    },
    {
      domain: 'Domain 2', 
      title: 'Asset Security',
      weight: '10%',
      topics: ['Data Classification', 'Data Handling', 'Data Retention', 'Privacy Protection']
    },
    {
      domain: 'Domain 3',
      title: 'Security Architecture and Engineering',
      weight: '13%',
      topics: ['Security Models', 'Security Capabilities', 'Security Architecture', 'Vulnerability Assessment']
    },
    {
      domain: 'Domain 4',
      title: 'Communication and Network Security',
      weight: '13%',
      topics: ['Network Protocols', 'Network Security', 'Network Attacks', 'Communication Security']
    },
    {
      domain: 'Domain 5',
      title: 'Identity and Access Management',
      weight: '13%',
      topics: ['Identity Management', 'Access Controls', 'Authentication', 'Authorization']
    },
    {
      domain: 'Domain 6',
      title: 'Security Assessment and Testing',
      weight: '12%',
      topics: ['Security Testing', 'Vulnerability Assessment', 'Penetration Testing', 'Security Audits']
    },
    {
      domain: 'Domain 7',
      title: 'Security Operations',
      weight: '13%',
      topics: ['Incident Response', 'Logging & Monitoring', 'Resource Protection', 'Investigation']
    },
    {
      domain: 'Domain 8',
      title: 'Software Development Security',
      weight: '11%',
      topics: ['Secure SDLC', 'Application Security', 'Database Security', 'Software Testing']
    }
  ];

  return (
    <section className="py-20 bg-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            CISSP Training
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Certified Information Systems Security Professional - The gold standard in 
            information security certifications for experienced professionals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <Card className="bg-slate-800/50 border-slate-600 mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-white mb-4">CISSP Certification Overview</CardTitle>
                <CardDescription className="text-gray-300">
                  The CISSP is globally recognized as the premier certification for information security 
                  professionals. It validates expertise in designing, implementing and managing a best-in-class 
                  cybersecurity program.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold text-green-400 mb-4">Eight Security Domains</h3>
                <div className="space-y-4">
                  {domains.map((domain, index) => (
                    <div key={index} className="border border-slate-600 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold text-white">{domain.domain}: {domain.title}</h4>
                        <span className="text-sm bg-green-600 text-green-100 px-2 py-1 rounded">
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
                  <span className="text-white">Advanced</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Experience:</span>
                  <span className="text-white">5+ Years</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Exam Questions:</span>
                  <span className="text-white">100-150</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Exam Duration:</span>
                  <span className="text-white">3 Hours</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-900/20 border-green-700">
              <CardHeader>
                <CardTitle className="text-lg text-green-400">Prerequisites</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-green-100">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5" />
                    5 years of work experience in information security
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5" />
                    Experience in at least 2 of the 8 domains
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5" />
                    Bachelor's degree (or equivalent)
                  </li>
                </ul>
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
import { Shield, CheckCircle, Users, Clock, Award, FileCheck } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

export default function CyberEssentials() {
  const courseContent = [
    {
      title: 'Boundary Firewalls and Internet Gateways',
      topics: ['Firewall Configuration', 'Network Segmentation', 'Gateway Security', 'Traffic Monitoring']
    },
    {
      title: 'Secure Configuration',
      topics: ['Default Passwords', 'Software Configuration', 'Network Configuration', 'Security Settings']
    },
    {
      title: 'Access Control and Administrative Privilege Management', 
      topics: ['User Access Rights', 'Administrative Accounts', 'Privilege Escalation', 'Account Management']
    },
    {
      title: 'Patch Management',
      topics: ['Software Updates', 'Security Patches', 'Vulnerability Management', 'Update Procedures']
    },
    {
      title: 'Malware Protection',
      topics: ['Antivirus Solutions', 'Malware Detection', 'Incident Response', 'Prevention Strategies']
    }
  ];

  return (
    <section className="py-20 bg-slate-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Cyber Essentials
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Essential cybersecurity practices for protecting your organization from common cyber threats. 
            Learn the five key controls that form the foundation of cyber security.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <Card className="bg-slate-700/50 border-slate-600 mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-white mb-4">About Cyber Essentials</CardTitle>
                <CardDescription className="text-gray-300">
                  Cyber Essentials is a UK government-backed scheme that helps organizations protect 
                  themselves against common cyber attacks. This training covers the five key security 
                  controls that organizations need to implement.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {courseContent.map((section, index) => (
                    <div key={index} className="border border-slate-600 rounded-lg p-4">
                      <h3 className="font-semibold text-green-400 mb-3">{section.title}</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {section.topics.map((topic, topicIndex) => (
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
            <Card className="bg-slate-700/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-lg text-white">Course Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Duration:</span>
                  <span className="text-white">2 Days</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Level:</span>
                  <span className="text-white">Intermediate</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Certification:</span>
                  <span className="text-white">Available</span>
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
import { Network, Router, Shield, Award, Users, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

export default function CiscoCCNA() {
  const examTopics = [
    {
      topic: 'Network Fundamentals',
      weight: '20%',
      subtopics: ['Network Components', 'Network Topology', 'Interface Types', 'TCP/IP Model']
    },
    {
      topic: 'Network Access',
      weight: '20%',
      subtopics: ['VLANs', 'Trunking', 'EtherChannel', 'Wireless LANs']
    },
    {
      topic: 'IP Connectivity',
      weight: '25%',
      subtopics: ['IP Routing', 'OSPF', 'First Hop Redundancy']
    },
    {
      topic: 'IP Services',
      weight: '10%',
      subtopics: ['NAT', 'NTP', 'DHCP', 'DNS']
    },
    {
      topic: 'Security Fundamentals',
      weight: '15%',
      subtopics: ['Security Concepts', 'Access Control', 'Layer 2 Security']
    },
    {
      topic: 'Automation and Programmability',
      weight: '10%',
      subtopics: ['APIs', 'Configuration Management', 'JSON']
    }
  ];

  const prerequisites = [
    'Basic computer literacy',
    'Basic PC operating system navigation skills',
    'Basic Internet usage skills',
    'Basic IP address knowledge'
  ];

  return (
    <section className="py-20 bg-slate-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Cisco CCNA Training
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Cisco Certified Network Associate - Master networking fundamentals and gain 
            the skills needed to configure, manage, and troubleshoot Cisco networks.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <Card className="bg-slate-700/50 border-slate-600 mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-white mb-4">CCNA Certification Overview</CardTitle>
                <CardDescription className="text-gray-300">
                  CCNA certification validates your ability to install, configure, operate, and 
                  troubleshoot medium-size routed and switched networks, including implementation 
                  and verification of connections to remote sites in a WAN.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold text-green-400 mb-4">Exam Topics</h3>
                <div className="space-y-4">
                  {examTopics.map((topic, index) => (
                    <div key={index} className="border border-slate-600 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold text-white">{topic.topic}</h4>
                        <span className="text-sm bg-blue-600 text-blue-100 px-2 py-1 rounded">
                          {topic.weight}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {topic.subtopics.map((subtopic, subtopicIndex) => (
                          <div key={subtopicIndex} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                            {subtopic}
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
                <CardTitle className="text-lg text-white">Training Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Duration:</span>
                  <span className="text-white">5 Days</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Level:</span>
                  <span className="text-white">Associate</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Exam Code:</span>
                  <span className="text-white">200-301</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Exam Duration:</span>
                  <span className="text-white">120 Minutes</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Lab Included:</span>
                  <span className="text-white">Yes</span>
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
                <CardTitle className="text-lg text-green-400">Career Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-green-100">
                  <div>• Network Administrator roles</div>
                  <div>• Network Engineer positions</div>
                  <div>• Technical Support Engineer</div>
                  <div>• Average salary: $65K - $85K</div>
                </div>
              </CardContent>
            </Card>

            <Button className="w-full bg-green-500 hover:bg-green-600 text-white py-3">
              <Award className="w-5 h-5 mr-2" />
              Enroll Now
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-slate-700/50 border-slate-600 text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-green-400 mb-2">1M+</div>
              <div className="text-sm text-gray-300">CCNA certified professionals worldwide</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-700/50 border-slate-600 text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-green-400 mb-2">3 Years</div>
              <div className="text-sm text-gray-300">Certification validity</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-700/50 border-slate-600 text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-sm text-gray-300">Job placement rate</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
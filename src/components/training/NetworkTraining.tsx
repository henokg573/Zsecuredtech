import { Network, Shield, Router, Lock, Eye, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function NetworkTraining() {
  const courses = [
    {
      title: 'Network Security Fundamentals',
      description: 'Comprehensive foundation in network security concepts, protocols, and best practices.',
      duration: '4 days',
      level: 'Beginner',
      prerequisites: 'Basic networking knowledge',
      topics: ['Network Architecture', 'TCP/IP Security', 'VPN Technologies', 'Network Protocols', 'Security Policies']
    },
    {
      title: 'Firewall Management & Configuration',
      description: 'Advanced training on firewall technologies, configuration, and management practices.',
      duration: '3 days',
      level: 'Intermediate',
      prerequisites: 'Network security basics',
      topics: ['Firewall Types', 'Rule Configuration', 'Policy Management', 'Traffic Analysis', 'Troubleshooting']
    },
    {
      title: 'Intrusion Detection & Prevention Systems',
      description: 'Comprehensive training on IDS/IPS technologies and network monitoring solutions.',
      duration: '4 days',
      level: 'Intermediate',
      prerequisites: 'Network security fundamentals',
      topics: ['IDS/IPS Technologies', 'Signature Management', 'Anomaly Detection', 'Alert Analysis', 'System Tuning']
    },
    {
      title: 'Network Penetration Testing',
      description: 'Hands-on training in network penetration testing methodologies and tools.',
      duration: '5 days',
      level: 'Advanced',
      prerequisites: 'Strong networking background',
      topics: ['Reconnaissance', 'Vulnerability Scanning', 'Exploitation Techniques', 'Post-Exploitation', 'Reporting']
    },
    {
      title: 'Wireless Network Security',
      description: 'Specialized training on securing wireless networks and mobile device connectivity.',
      duration: '3 days',
      level: 'Intermediate',
      prerequisites: 'Network security basics',
      topics: ['WiFi Security Protocols', 'WPA/WPA2/WPA3', 'Wireless Attacks', 'Mobile Device Management', 'BYOD Policies']
    },
    {
      title: 'Network Forensics & Incident Response',
      description: 'Advanced training in network forensics techniques and incident response procedures.',
      duration: '4 days',
      level: 'Advanced',
      prerequisites: 'Network security experience',
      topics: ['Traffic Analysis', 'Log Correlation', 'Evidence Collection', 'Chain of Custody', 'Incident Handling']
    }
  ];

  const certifications = [
    { name: 'CCSP', description: 'Certified Cloud Security Professional' },
    { name: 'CISSP', description: 'Certified Information Systems Security Professional' },
    { name: 'GCIH', description: 'GIAC Certified Incident Handler' },
    { name: 'GPEN', description: 'GIAC Penetration Tester' },
    { name: 'CISSP', description: 'Certified Information Systems Security Professional' },
    { name: 'CompTIA Security+', description: 'CompTIA Security+ Certification' }
  ];

  const labEquipment = [
    'Cisco ASA Firewalls',
    'Palo Alto Networks',
    'Wireshark Traffic Analysis',
    'Nmap Network Discovery',
    'Metasploit Framework',
    'Burp Suite Professional'
  ];

  return (
    <section id="network-training" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Network Security Training
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Master network security with hands-on training covering firewall management, intrusion detection, 
            penetration testing, and advanced network defense strategies.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Network className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="font-semibold text-white mb-2">Hands-On Labs</h3>
            <p className="text-gray-300 text-sm">Practice with real network equipment and enterprise-grade security tools</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="font-semibold text-white mb-2">Real-World Scenarios</h3>
            <p className="text-gray-300 text-sm">Learn through actual network security incidents and case studies</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="font-semibold text-white mb-2">Expert Monitoring</h3>
            <p className="text-gray-300 text-sm">Personalized guidance from certified network security professionals</p>
          </div>
        </div>

        {/* Course Catalog */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Network Security Courses
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-600 hover:bg-slate-800/80 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <Network className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="text-right text-sm">
                      <div className="text-gray-400">{course.duration}</div>
                      <div className={`px-2 py-1 rounded text-xs ${
                        course.level === 'Beginner' ? 'bg-green-600 text-green-100' :
                        course.level === 'Intermediate' ? 'bg-yellow-600 text-yellow-100' :
                        'bg-red-600 text-red-100'
                      }`}>
                        {course.level}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-white mb-2">{course.title}</CardTitle>
                  <CardDescription className="text-gray-300 mb-3">
                    {course.description}
                  </CardDescription>
                  <div className="text-sm text-gray-400">
                    <strong>Prerequisites:</strong> {course.prerequisites}
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-green-400 mb-3">Training Topics:</h4>
                  <ul className="space-y-2 mb-6">
                    {course.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                        {topic}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                    Register for Course
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Lab Environment & Tools */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              State-of-the-Art Lab Environment
            </h2>
            <p className="text-gray-300 mb-6">
              Our network security training features fully equipped labs with enterprise-grade hardware and 
              software tools used in real-world environments.
            </p>
            
            <h3 className="font-semibold text-green-400 mb-4">Lab Equipment & Tools:</h3>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {labEquipment.map((tool, index) => (
                <div key={index} className="flex items-center text-sm text-gray-400">
                  <Router className="w-4 h-4 text-green-400 mr-2" />
                  {tool}
                </div>
              ))}
            </div>
            
            <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600">
              <h4 className="font-semibold text-green-400 mb-2">💡 Practical Learning</h4>
              <p className="text-gray-300 text-sm">
                Every student gets dedicated lab time to practice configurations, simulate attacks, 
                and implement security measures in a safe, controlled environment.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwc2VjdXJpdHklMjBsYWIlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzU4MTc5MjE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Network Security Lab Equipment"
              className="w-full h-auto rounded-2xl shadow-xl border border-slate-700"
            />
          </div>
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Certification Pathways
          </h2>
          <p className="text-gray-300 mb-12 max-w-3xl mx-auto">
            Our network security training prepares you for industry-leading certifications 
            that validate your expertise and advance your career.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-slate-600 hover:bg-slate-800/80 transition-colors text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">{cert.name}</h3>
                <p className="text-sm text-gray-300">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
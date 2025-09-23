import { Shield, Book, Award, Users, Clock, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function CybersecurityTraining() {
  const courses = [
    {
      title: 'CyberSecurity Fundamentals',
      description: 'Master the foundation of cyber security basics with CIA triad principles - confidentiality, integrity and availability.',
      duration: '3 days',
      level: 'Beginner',
      topics: ['CIA Triad Concepts', 'Threat Landscape', 'Risk Assessment', 'Security Controls', 'Incident Response Basics']
    },
    {
      title: 'Cyber Essentials',
      description: 'Essential cybersecurity practices for protecting your organization from common cyber threats.',
      duration: '2 days', 
      level: 'Intermediate',
      topics: ['Network Security', 'Access Controls', 'Malware Protection', 'Patch Management', 'Secure Configuration']
    },
    {
      title: 'CISSP',
      description: 'Certified Information Systems Security Professional - comprehensive security management certification.',
      duration: '5 days',
      level: 'Advanced',
      topics: ['Security & Risk Management', 'Asset Security', 'Security Architecture', 'Communication & Network Security', 'Identity & Access Management']
    },
    {
      title: 'CISM',
      description: 'Certified Information Security Manager - focus on management and governance of enterprise information security.',
      duration: '4 days',
      level: 'Advanced',
      topics: ['Information Security Governance', 'Risk Management', 'Security Program Development', 'Incident Management']
    },
    {
      title: 'Virtual Chief Information Security Officer',
      description: 'Executive-level security leadership training for strategic security management and decision making.',
      duration: '3 days',
      level: 'Executive',
      topics: ['Security Strategy', 'Board Communication', 'Risk Governance', 'Budget Management', 'Compliance Oversight']
    }
  ];

  return (
    <section id="cybersecurity-training" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Cybersecurity Training
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Comprehensive cybersecurity training programs designed to build expertise from fundamentals 
            to advanced certifications. Develop the skills needed to protect your organization in today's threat landscape.
          </p>
        </div>

        {/* Training Overview */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Why Choose Our Cybersecurity Training?
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-green-400 mb-2">Expert Instructors</h3>
                  <p className="text-gray-300">
                    Learn from certified cybersecurity professionals with real-world experience in threat management and security operations.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-green-400 mb-2">Hands-On Learning</h3>
                  <p className="text-gray-300">
                    Practical exercises, lab environments, and real-world scenarios to ensure you can apply your knowledge effectively.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-green-400 mb-2">Certification Preparation</h3>
                  <p className="text-gray-300">
                    Targeted preparation for industry-recognized certifications with high success rates and ongoing support.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwdHJhaW5pbmclMjBjbGFzc3Jvb218ZW58MXx8fHwxNzU4MTc5MjE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Cybersecurity Training Classroom"
              className="w-full h-auto rounded-2xl shadow-xl border border-slate-700"
            />
          </div>
        </div>

        {/* Course Catalog */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Available Courses
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-600 hover:bg-slate-800/80 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="text-right text-sm">
                      <div className="text-gray-400">{course.duration}</div>
                      <div className={`px-2 py-1 rounded text-xs ${
                        course.level === 'Beginner' ? 'bg-green-600 text-green-100' :
                        course.level === 'Intermediate' ? 'bg-yellow-600 text-yellow-100' :
                        course.level === 'Advanced' ? 'bg-red-600 text-red-100' :
                        'bg-purple-600 text-purple-100'
                      }`}>
                        {course.level}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-white mb-2">{course.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-green-400 mb-3">Key Topics:</h4>
                  <ul className="space-y-2 mb-6">
                    {course.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                        {topic}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Course Spotlight */}
        <div className="bg-gradient-to-r from-blue-900/50 to-slate-800/50 rounded-2xl p-8 border border-slate-700">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Featured Course: CyberSecurity Fundamentals
              </h3>
              <p className="text-gray-300 mb-6">
                With technology evolving at an exponential rate, it's never been more important for organisations and 
                individuals to bolster their cyber security knowledge. The incidence of cyber threats is rising year-on-year, 
                trillions of dollars globally, so it's no wonder cyber security professionals are in demand.
              </p>
              <h4 className="font-semibold text-green-400 mb-3">The three concepts of cyber security</h4>
              <p className="text-gray-300 mb-6">
                The foundation of cyber security basics lies in the CIA triad, which stands for confidentiality, integrity 
                and availability. These three concepts of cyber security form the basis of protecting sensitive information 
                and ensuring digital systems can operate securely.
              </p>
              <Button className="bg-green-500 hover:bg-green-600 text-white">
                Learn More About This Course
              </Button>
            </div>
            <div className="bg-green-500/20 rounded-lg p-6 border border-green-500/30">
              <h4 className="font-semibold text-green-400 mb-4">Free Security Assessment</h4>
              <p className="text-green-100 mb-4">
                We offer a free comprehensive Security assessment in 16 areas of vulnerability so, that the problem is 
                approached head on to save our clients time and money.
              </p>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Full Name..."
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded text-white placeholder-gray-400"
                />
                <input
                  type="text"
                  placeholder="Company..."
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded text-white placeholder-gray-400"
                />
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Get Free Assessment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
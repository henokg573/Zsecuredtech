import { Award, FileText, CheckCircle, Users, Clock, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function ISOStandardTraining() {
  const courses = [
    {
      title: 'ISO 9001:2015 Quality Management Systems',
      description: 'Comprehensive training on implementing and auditing Quality Management Systems to improve organizational efficiency.',
      duration: '3 days',
      level: 'Professional',
      certification: 'ISO 9001 Lead Auditor',
      topics: ['QMS Principles', 'Process Approach', 'Risk-Based Thinking', 'Documentation Requirements', 'Internal Auditing']
    },
    {
      title: 'ISO 27001:2022 Information Security Management',
      description: 'Complete guide to implementing Information Security Management Systems for protecting organizational data.',
      duration: '5 days',
      level: 'Professional',
      certification: 'ISO 27001 Lead Auditor',
      topics: ['ISMS Framework', 'Risk Assessment', 'Controls Implementation', 'Monitoring & Review', 'Certification Process']
    },
    {
      title: 'ISO 20000-1 IT Service Management',
      description: 'Training focused on IT Service Management systems aligned with ITIL best practices.',
      duration: '4 days',
      level: 'Professional',
      certification: 'ISO 20000 Lead Auditor',
      topics: ['Service Management Principles', 'Service Strategy', 'Service Design', 'Service Operation', 'Continual Improvement']
    },
    {
      title: 'ISO 22301 Business Continuity Management',
      description: 'Learn to implement Business Continuity Management Systems to ensure organizational resilience.',
      duration: '3 days',
      level: 'Professional',
      certification: 'ISO 22301 Lead Auditor',
      topics: ['Business Impact Analysis', 'Risk Assessment', 'Continuity Strategies', 'Crisis Management', 'Testing & Exercising']
    },
    {
      title: 'ISO 14001 Environmental Management Systems',
      description: 'Environmental management training to help organizations minimize their environmental impact.',
      duration: '3 days',
      level: 'Professional',
      certification: 'ISO 14001 Lead Auditor',
      topics: ['Environmental Policy', 'Legal Requirements', 'Environmental Aspects', 'Monitoring & Measurement', 'Improvement']
    },
    {
      title: 'ISO 45001 Occupational Health & Safety',
      description: 'Workplace health and safety management systems training to protect employees and visitors.',
      duration: '3 days',
      level: 'Professional',
      certification: 'ISO 45001 Lead Auditor',
      topics: ['OH&S Policy', 'Hazard Identification', 'Risk Assessment', 'Emergency Preparedness', 'Performance Evaluation']
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Gain internationally recognized ISO certifications that enhance your professional credibility.'
    },
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Learn from certified lead auditors with extensive real-world implementation experience.'
    },
    {
      icon: FileText,
      title: 'Comprehensive Materials',
      description: 'Access detailed course materials, templates, and practical tools for immediate application.'
    },
    {
      icon: Shield,
      title: 'Ongoing Support',
      description: 'Receive continued support and guidance even after course completion.'
    }
  ];

  return (
    <section id="iso-standard-training" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            ISO Standard Training
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Professional training programs for ISO management system standards. 
            Develop expertise in implementing, auditing, and maintaining ISO-compliant systems.
          </p>
        </div>

        {/* Training Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* Course Catalog */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            ISO Training Courses
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/80 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="text-right text-sm">
                      <div className="text-gray-400 flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {course.duration}
                      </div>
                      <div className="px-2 py-1 bg-blue-600 text-blue-100 rounded text-xs mt-1">
                        {course.level}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-white mb-2">{course.title}</CardTitle>
                  <CardDescription className="text-gray-300 mb-3">
                    {course.description}
                  </CardDescription>
                  <div className="bg-green-900/20 border border-green-700 rounded-lg p-3">
                    <div className="text-sm text-green-400 font-semibold">Certification Available:</div>
                    <div className="text-sm text-green-300">{course.certification}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-green-400 mb-3">Course Topics:</h4>
                  <ul className="space-y-2 mb-6">
                    {course.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                        {topic}
                      </li>
                    ))}
                  </ul>
                  <div className="flex space-x-3">
                    <Button className="flex-1 bg-green-500 hover:bg-green-600 text-white">
                      Enroll Now
                    </Button>
                    <Button variant="outline" className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white">
                      Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Training Approach */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJU08lMjBzdGFuZGFyZCUyMHRyYWluaW5nJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc1ODE3OTIxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="ISO Standard Training Classroom"
              className="w-full h-auto rounded-2xl shadow-xl border border-slate-700"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Our Training Approach
            </h2>
            <div className="space-y-6">
              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600">
                <h3 className="font-semibold text-green-400 mb-2">📚 Comprehensive Curriculum</h3>
                <p className="text-gray-300">
                  Our courses cover all aspects of ISO standards from basic concepts to advanced implementation strategies.
                </p>
              </div>
              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600">
                <h3 className="font-semibold text-green-400 mb-2">🎯 Practical Focus</h3>
                <p className="text-gray-300">
                  Real-world case studies, hands-on exercises, and practical tools you can use in your organization.
                </p>
              </div>
              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600">
                <h3 className="font-semibold text-green-400 mb-2">🏆 Certification Preparation</h3>
                <p className="text-gray-300">
                  Targeted preparation for official ISO certification exams with high pass rates and ongoing support.
                </p>
              </div>
              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600">
                <h3 className="font-semibold text-green-400 mb-2">🤝 Post-Training Support</h3>
                <p className="text-gray-300">
                  Continued guidance and consultation support for implementing what you've learned in your workplace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
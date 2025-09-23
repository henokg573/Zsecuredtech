import { Database, Lock, Shield, Key, Eye, FileCheck } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function DatabaseTraining() {
  const courses = [
    {
      title: 'Database Security Fundamentals',
      description: 'Essential database security concepts, threats, and protection strategies for all database platforms.',
      duration: '3 days',
      level: 'Beginner',
      databases: ['MySQL', 'PostgreSQL', 'Microsoft SQL Server', 'Oracle'],
      topics: ['Database Architecture Security', 'Authentication Methods', 'Basic Access Controls', 'Data Classification', 'Backup Security']
    },
    {
      title: 'Advanced Database Access Controls',
      description: 'Comprehensive training on implementing robust access control mechanisms and user management.',
      duration: '4 days',
      level: 'Intermediate',
      databases: ['Oracle', 'Microsoft SQL Server', 'PostgreSQL'],
      topics: ['Role-Based Access Control', 'Privilege Management', 'Database Users & Roles', 'Fine-Grained Access', 'Audit Logging']
    },
    {
      title: 'Database Encryption & Data Protection',
      description: 'Advanced techniques for encrypting data at rest and in transit, key management, and compliance.',
      duration: '3 days',
      level: 'Advanced',
      databases: ['All Major Platforms'],
      topics: ['Transparent Data Encryption', 'Column-Level Encryption', 'Key Management', 'HSM Integration', 'Compliance Requirements']
    },
    {
      title: 'Database Auditing & Monitoring',
      description: 'Comprehensive database activity monitoring, audit trail management, and security event analysis.',
      duration: '3 days',
      level: 'Intermediate',
      databases: ['Oracle', 'Microsoft SQL Server', 'MySQL'],
      topics: ['Audit Configuration', 'Log Analysis', 'Anomaly Detection', 'Compliance Reporting', 'Real-time Monitoring']
    },
    {
      title: 'Database Backup & Recovery Security',
      description: 'Secure backup strategies, disaster recovery planning, and data integrity verification.',
      duration: '2 days',
      level: 'Intermediate',
      databases: ['All Platforms'],
      topics: ['Secure Backup Methods', 'Encryption of Backups', 'Recovery Procedures', 'Data Integrity Checks', 'Business Continuity']
    },
    {
      title: 'Cloud Database Security',
      description: 'Security considerations and best practices for cloud-hosted databases and hybrid environments.',
      duration: '3 days',
      level: 'Advanced',
      databases: ['AWS RDS', 'Azure SQL', 'Google Cloud SQL', 'MongoDB Atlas'],
      topics: ['Cloud Security Models', 'Identity Management', 'Network Security', 'Data Governance', 'Compliance in Cloud']
    }
  ];

  const securityFeatures = [
    {
      icon: Lock,
      title: 'Data Encryption',
      description: 'Learn comprehensive encryption strategies for protecting sensitive data'
    },
    {
      icon: Key,
      title: 'Access Management',
      description: 'Master role-based access controls and privilege management'
    },
    {
      icon: Eye,
      title: 'Monitoring & Auditing',
      description: 'Implement effective database activity monitoring and audit trails'
    },
    {
      icon: Shield,
      title: 'Threat Protection',
      description: 'Identify and mitigate database security threats and vulnerabilities'
    }
  ];

  const platforms = [
    { name: 'Oracle Database', icon: '🔶' },
    { name: 'Microsoft SQL Server', icon: '🔷' },
    { name: 'MySQL', icon: '🐬' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'AWS RDS', icon: '☁️' }
  ];

  return (
    <section id="database-training" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Database Security Training
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Comprehensive database security training covering encryption, access controls, auditing, 
            and advanced protection strategies for all major database platforms.
          </p>
        </div>

        {/* Security Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {securityFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Course Catalog */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Database Security Courses
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/80 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <Database className="w-6 h-6 text-green-400" />
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
                  <div className="text-sm text-gray-400 mb-3">
                    <strong>Platforms:</strong> {Array.isArray(course.databases) ? course.databases.join(', ') : course.databases}
                  </div>
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
                    Enroll in Course
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Supported Platforms */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Supported Database Platforms
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 text-center border border-slate-600 hover:bg-slate-700/50 transition-colors">
                <div className="text-3xl mb-2">{platform.icon}</div>
                <div className="text-sm text-white font-medium">{platform.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Training Approach */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhYmFzZSUyMHNlY3VyaXR5JTIwdHJhaW5pbmclMjBjbGFzc3Jvb218ZW58MXx8fHwxNzU4MTc5MjE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Database Security Training Classroom"
              className="w-full h-auto rounded-2xl shadow-xl border border-slate-700"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Comprehensive Learning Experience
            </h2>
            <div className="space-y-6">
              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600">
                <h3 className="font-semibold text-green-400 mb-2">🎯 Hands-On Practice</h3>
                <p className="text-gray-300">
                  Work with real database systems in our dedicated lab environment to practice security implementations.
                </p>
              </div>
              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600">
                <h3 className="font-semibold text-green-400 mb-2">🔍 Real-World Scenarios</h3>
                <p className="text-gray-300">
                  Learn through actual security incidents and case studies from enterprise database environments.
                </p>
              </div>
              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600">
                <h3 className="font-semibold text-green-400 mb-2">📋 Compliance Focus</h3>
                <p className="text-gray-300">
                  Understand regulatory requirements including GDPR, HIPAA, PCI DSS, and how to achieve compliance.
                </p>
              </div>
              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600">
                <h3 className="font-semibold text-green-400 mb-2">🛠️ Practical Tools</h3>
                <p className="text-gray-300">
                  Get hands-on experience with database security tools, scripts, and best practice templates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
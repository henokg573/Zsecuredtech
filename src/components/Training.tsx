import { GraduationCap, Shield, Network, Database, Award, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function Training() {
  const trainingPrograms = [
    {
      icon: Shield,
      title: 'Cybersecurity Training',
      description: 'Comprehensive cybersecurity awareness and technical training programs for all skill levels.',
      duration: '2-5 days',
      modules: ['Threat Landscape', 'Security Best Practices', 'Incident Response', 'Compliance Requirements']
    },
    {
      icon: Award,
      title: 'ISO Standard Training',
      description: 'Professional training on various ISO standards implementation and auditing.',
      duration: '3-7 days',
      modules: ['ISO Requirements', 'Implementation Guide', 'Internal Auditing', 'Management Review']
    },
    {
      icon: Network,
      title: 'Network Training',
      description: 'Advanced network security training covering infrastructure protection and monitoring.',
      duration: '4-6 days',
      modules: ['Network Security', 'Firewall Management', 'Intrusion Detection', 'Network Monitoring']
    },
    {
      icon: Database,
      title: 'Database Training',
      description: 'Database security training focusing on data protection and access controls.',
      duration: '3-5 days',
      modules: ['Database Security', 'Access Controls', 'Data Encryption', 'Backup & Recovery']
    }
  ];

  const certifications = [
    { name: 'CISSP', description: 'Certified Information Systems Security Professional' },
    { name: 'CISM', description: 'Certified Information Security Manager' },
    { name: 'CEH', description: 'Certified Ethical Hacker' },
    { name: 'GCIH', description: 'GIAC Certified Incident Handler' },
    { name: 'ISO Lead Auditor', description: 'ISO 27001 Lead Auditor Certification' },
    { name: 'CompTIA Security+', description: 'CompTIA Security+ Certification' }
  ];

  return (
    <section id="training" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Training & Certifications
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional training programs designed to enhance your team's cybersecurity knowledge 
            and prepare them for industry-recognized certifications.
          </p>
        </div>

        {/* Training Programs */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {trainingPrograms.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <Card key={index} className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/80 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock className="w-4 h-4 mr-1" />
                      {program.duration}
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2 text-white">{program.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-green-400 mb-3">Training Modules:</h4>
                  <ul className="space-y-2">
                    {program.modules.map((module, moduleIndex) => (
                      <li key={moduleIndex} className="flex items-center text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                        {module}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Training Features */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Why Choose Our Training?
            </h3>
            <div className="space-y-6">
              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600">
                <h4 className="font-semibold text-green-400 mb-2">🎯 Expert Instructors</h4>
                <p className="text-gray-300">
                  Learn from certified professionals with real-world experience in cybersecurity and compliance.
                </p>
              </div>
              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600">
                <h4 className="font-semibold text-green-400 mb-2">📚 Comprehensive Materials</h4>
                <p className="text-gray-300">
                  Access to detailed training materials, practice exams, and ongoing support resources.
                </p>
              </div>
              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600">
                <h4 className="font-semibold text-green-400 mb-2">🏆 Certification Prep</h4>
                <p className="text-gray-300">
                  Targeted preparation for industry-recognized certifications with high pass rates.
                </p>
              </div>
              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600">
                <h4 className="font-semibold text-green-400 mb-2">💼 Practical Approach</h4>
                <p className="text-gray-300">
                  Hands-on labs and real-world scenarios to ensure practical application of knowledge.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFpbmluZyUyMGNsYXNzcm9vbSUyMGN5YmVyc2VjdXJpdHl8ZW58MXx8fHwxNzU4MTc5MjE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Training Classroom Cybersecurity"
              className="w-full h-auto rounded-2xl shadow-xl border border-slate-700"
            />
          </div>
        </div>

        {/* Available Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-white text-center mb-12">
            Available Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-6 border border-slate-600 hover:bg-slate-700/50 transition-colors text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-green-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">{cert.name}</h4>
                <p className="text-sm text-gray-300">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
import { Shield, Book, Users, Clock, CheckCircle, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function CybersecurityFundamentals() {
  const courseModules = [
    {
      title: 'Introduction to Cybersecurity',
      duration: '2 hours',
      topics: ['What is Cybersecurity?', 'Threat Landscape', 'Risk vs Vulnerability', 'Security Incidents']
    },
    {
      title: 'The CIA Triad',
      duration: '3 hours',
      topics: ['Confidentiality Principles', 'Integrity Controls', 'Availability Requirements', 'Real-world Examples']
    },
    {
      title: 'Common Threats & Attacks',
      duration: '4 hours',
      topics: ['Malware Types', 'Social Engineering', 'Network Attacks', 'Physical Security']
    },
    {
      title: 'Security Controls & Frameworks',
      duration: '3 hours',
      topics: ['Administrative Controls', 'Technical Controls', 'Physical Controls', 'Security Frameworks']
    },
    {
      title: 'Incident Response Basics',
      duration: '2 hours',
      topics: ['Incident Identification', 'Response Procedures', 'Recovery Planning', 'Lessons Learned']
    }
  ];

  const learningOutcomes = [
    'Understand the fundamental principles of cybersecurity',
    'Apply the CIA triad concepts to real-world scenarios',
    'Identify common cyber threats and attack vectors',
    'Implement basic security controls and best practices',
    'Develop incident response awareness and procedures'
  ];

  return (
    <section className="py-20 bg-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            CyberSecurity Fundamentals
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Master the foundation of cyber security basics with CIA triad principles - 
            confidentiality, integrity and availability. Essential knowledge for anyone 
            working in the digital age.
          </p>
        </div>

        {/* Course Overview */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <Card className="bg-slate-800/50 border-slate-600 mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-white mb-4">Course Overview</CardTitle>
                <CardDescription className="text-gray-300">
                  With technology evolving at an exponential rate, it's never been more important for 
                  organisations and individuals to bolster their cyber security knowledge. The incidence 
                  of cyber threats is rising year-on-year, costing trillions of dollars globally, so it's 
                  no wonder cyber security professionals are in demand.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold text-green-400 mb-4">The three concepts of cyber security</h3>
                <p className="text-gray-300 mb-6">
                  The foundation of cyber security basics lies in the CIA triad, which stands for 
                  confidentiality, integrity and availability. These three concepts of cyber security 
                  form the basis of protecting sensitive information and ensuring digital systems can 
                  operate securely.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-green-900/20 border border-green-700 rounded-lg p-4">
                    <h4 className="font-semibold text-green-400 mb-2">Confidentiality</h4>
                    <p className="text-gray-300 text-sm">
                      Ensuring information is accessible only to authorized individuals
                    </p>
                  </div>
                  <div className="bg-blue-900/20 border border-blue-700 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-400 mb-2">Integrity</h4>
                    <p className="text-gray-300 text-sm">
                      Maintaining accuracy and completeness of data and systems
                    </p>
                  </div>
                  <div className="bg-cyan-900/20 border border-cyan-700 rounded-lg p-4">
                    <h4 className="font-semibold text-cyan-400 mb-2">Availability</h4>
                    <p className="text-gray-300 text-sm">
                      Ensuring systems and data are accessible when needed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Course Modules */}
            <Card className="bg-slate-800/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-xl text-white">Course Modules</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {courseModules.map((module, index) => (
                    <div key={index} className="border border-slate-600 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold text-white">{module.title}</h4>
                        <span className="text-sm text-gray-400 flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {module.duration}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {module.topics.map((topic, topicIndex) => (
                          <div key={topicIndex} className="flex items-center text-sm text-gray-400">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
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

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Course Info */}
            <Card className="bg-slate-800/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-lg text-white">Course Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Duration:</span>
                  <span className="text-white">3 Days</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Level:</span>
                  <span className="text-white">Beginner</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Format:</span>
                  <span className="text-white">Instructor-led</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Class Size:</span>
                  <span className="text-white">Max 20</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Certificate:</span>
                  <span className="text-white">Yes</span>
                </div>
              </CardContent>
            </Card>

            {/* Learning Outcomes */}
            <Card className="bg-slate-800/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-lg text-white">Learning Outcomes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {learningOutcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Free Assessment */}
            <Card className="bg-green-900/20 border-green-700">
              <CardHeader>
                <CardTitle className="text-lg text-green-400">Free Security Assessment</CardTitle>
                <CardDescription className="text-green-100">
                  We offer a free comprehensive Security assessment in 16 areas of vulnerability 
                  so that the problem is approached head on to save our clients time and money.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
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
              </CardContent>
            </Card>

            {/* Enroll Button */}
            <Button className="w-full bg-green-500 hover:bg-green-600 text-white py-3">
              <Award className="w-5 h-5 mr-2" />
              Enroll Now
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Book className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="font-semibold text-white mb-2">Comprehensive Materials</h3>
            <p className="text-gray-300 text-sm">Detailed course materials and practical exercises</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="font-semibold text-white mb-2">Expert Instructors</h3>
            <p className="text-gray-300 text-sm">Learn from certified cybersecurity professionals</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="font-semibold text-white mb-2">Industry Recognition</h3>
            <p className="text-gray-300 text-sm">Receive a certificate upon successful completion</p>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Shield, FileText, Award, Users, Target, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

export default function ISO27001Fundamentals() {
  const courseModules = [
    {
      module: 'Module 1',
      title: 'Introduction to Information Security Management',
      duration: '4 hours',
      topics: ['Information Security Principles', 'Risk Management Concepts', 'Compliance Requirements', 'Business Benefits']
    },
    {
      module: 'Module 2',
      title: 'ISO 27001 Standard Overview',
      duration: '6 hours',
      topics: ['Standard Structure', 'Clauses 4-10 Requirements', 'Annex A Controls', 'Certification Process']
    },
    {
      module: 'Module 3',
      title: 'Information Security Management System (ISMS)',
      duration: '8 hours',
      topics: ['ISMS Framework', 'Scope Definition', 'Context of Organization', 'Leadership & Commitment']
    },
    {
      module: 'Module 4',
      title: 'Risk Assessment and Treatment',
      duration: '6 hours',
      topics: ['Risk Assessment Methodology', 'Risk Treatment Options', 'Statement of Applicability', 'Risk Register']
    },
    {
      module: 'Module 5',
      title: 'Implementation Planning',
      duration: '4 hours',
      topics: ['Implementation Roadmap', 'Resource Planning', 'Training Requirements', 'Documentation Framework']
    }
  ];

  const learningObjectives = [
    'Understand the ISO 27001 standard structure and requirements',
    'Learn the fundamentals of information security management',
    'Identify key stakeholders and their roles in ISMS',
    'Understand risk assessment and treatment processes',
    'Plan for ISO 27001 implementation in your organization',
    'Prepare for advanced ISO 27001 certifications'
  ];

  const targetAudience = [
    'Information security professionals new to ISO 27001',
    'IT managers and administrators',
    'Risk management professionals',
    'Compliance officers and auditors',
    'Project managers involved in security projects',
    'Anyone preparing for ISO 27001 Lead Implementer training'
  ];

  const prerequisites = [
    'Basic understanding of information technology',
    'General knowledge of security concepts',
    'No formal information security experience required',
    'Fundamental business process knowledge'
  ];

  return (
    <section className="py-20 bg-slate-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            ISO 27001 Fundamentals Training
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Build a solid foundation in information security management with ISO 27001. 
            Learn the essential concepts and prepare for advanced ISO 27001 certifications.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <Card className="bg-slate-700/50 border-slate-600 mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-white mb-4">Course Modules</CardTitle>
                <CardDescription className="text-gray-300">
                  Comprehensive introduction to ISO 27001 information security management 
                  standard, covering all essential concepts and implementation basics.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {courseModules.map((module, index) => (
                    <div key={index} className="border border-slate-600 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold text-white">{module.module}: {module.title}</h4>
                        <span className="text-sm bg-green-600 text-green-100 px-2 py-1 rounded">
                          {module.duration}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {module.topics.map((topic, topicIndex) => (
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

            <Card className="bg-slate-700/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-xl text-white">Learning Objectives</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {learningObjectives.map((objective, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold mr-3 mt-0.5">
                        {index + 1}
                      </div>
                      <span className="text-gray-300 text-sm">{objective}</span>
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
                  <span className="text-white">Foundation</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Delivery:</span>
                  <span className="text-white">In-person/Virtual</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Certificate:</span>
                  <span className="text-white">Completion</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">CPE Credits:</span>
                  <span className="text-white">16 Hours</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-700/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-lg text-white">Who Should Attend</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-300">
                  {targetAudience.map((audience, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 mt-2"></div>
                      {audience}
                    </li>
                  ))}
                </ul>
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

            <Button className="w-full bg-green-500 hover:bg-green-600 text-white py-3">
              <Award className="w-5 h-5 mr-2" />
              Enroll in Fundamentals
            </Button>
          </div>
        </div>

        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl px-8 py-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Start Your ISO 27001 Journey
            </h3>
            <p className="text-green-100 mb-8 max-w-2xl mx-auto">
              This foundational course is the perfect starting point for professionals new to 
              ISO 27001. Build the knowledge base needed for advanced certifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-green-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                <FileText className="w-5 h-5 mr-2" />
                Download Syllabus
              </Button>
              <Button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                Schedule Information Session
              </Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <Card className="bg-slate-700/50 border-slate-600 text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-green-400 mb-2">Entry</div>
              <div className="text-sm text-gray-300">Level certification</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-700/50 border-slate-600 text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-green-400 mb-2">16</div>
              <div className="text-sm text-gray-300">CPE credit hours</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-700/50 border-slate-600 text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
              <div className="text-sm text-gray-300">Satisfaction rate</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-700/50 border-slate-600 text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-green-400 mb-2">Global</div>
              <div className="text-sm text-gray-300">Recognition</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
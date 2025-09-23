import { Database, Server, Award, BarChart3, Users, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

export default function MicrosoftSQL() {
  const certificationPaths = [
    {
      path: 'Azure Data Fundamentals',
      code: 'DP-900',
      level: 'Fundamentals',
      duration: '2 Weeks',
      topics: ['Core Data Concepts', 'Relational Data on Azure', 'Non-relational Data', 'Analytics Workloads']
    },
    {
      path: 'Azure Database Administrator',
      code: 'DP-300',
      level: 'Associate',
      duration: '8 Weeks',
      topics: ['Deploy & Configure', 'Security Implementation', 'Monitor & Optimize', 'High Availability']
    },
    {
      path: 'Azure Data Engineer',
      code: 'DP-203',
      level: 'Associate',
      duration: '10 Weeks',
      topics: ['Data Storage Design', 'Data Processing Design', 'Data Security Design', 'Data Monitoring']
    }
  ];

  const technicalSkills = [
    'SQL Server Installation and Configuration',
    'T-SQL Programming and Optimization',
    'Database Design and Normalization',
    'Backup and Recovery Strategies',
    'Performance Monitoring and Tuning',
    'High Availability Solutions (Always On)',
    'Security Implementation and Management',
    'Azure SQL Database Administration'
  ];

  const jobRoles = [
    'SQL Server Database Administrator',
    'Azure Database Administrator',
    'Database Developer',
    'Business Intelligence Developer',
    'Data Engineer',
    'Database Architect'
  ];

  const prerequisites = [
    'Basic understanding of relational databases',
    'SQL query fundamentals',
    'Windows Server administration basics',
    'Basic understanding of cloud concepts'
  ];

  return (
    <section className="py-20 bg-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Microsoft SQL Server Certification
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Master Microsoft SQL Server and Azure Database technologies. Become a certified 
            Microsoft database professional and advance your career in data management.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Certification Paths</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {certificationPaths.map((path, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-600 hover:bg-slate-800/80 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Database className="w-6 h-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-xl text-white">{path.path}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {path.code} - {path.level} - {path.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-blue-400 mb-3">Key Areas:</h4>
                  <div className="space-y-2">
                    {path.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-3 h-3 text-blue-400 mr-2" />
                        {topic}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="bg-slate-800/50 border-slate-600">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Technical Skills Mastery</CardTitle>
              <CardDescription className="text-gray-300">
                Comprehensive SQL Server and Azure database skills development
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold mr-3 mt-0.5">
                      {index + 1}
                    </div>
                    <span className="text-gray-300 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-lg text-white">Training Program</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Full Program:</span>
                  <span className="text-white">20 Weeks</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">SQL Server Version:</span>
                  <span className="text-white">2022</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Azure Integration:</span>
                  <span className="text-white">Extensive</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Hands-on Labs:</span>
                  <span className="text-white">150+ Hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Practice Tests:</span>
                  <span className="text-white">Unlimited</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-lg text-white">Career Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {jobRoles.map((role, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      <span className="text-gray-300 text-sm">{role}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-900/20 border-green-700">
              <CardHeader>
                <CardTitle className="text-lg text-green-400">Market Demand</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-green-100">
                  <div>• High demand in enterprise market</div>
                  <div>• Azure cloud migration projects</div>
                  <div>• Average salary: $75K - $110K</div>
                  <div>• Strong job security</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-16">
          <Card className="bg-blue-900/20 border-blue-700">
            <CardHeader>
              <CardTitle className="text-lg text-blue-400 text-center">Prerequisites</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {prerequisites.map((prerequisite, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-blue-100 text-sm">{prerequisite}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl px-8 py-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Advance Your Database Career
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Microsoft SQL Server is one of the most widely used database platforms in enterprises. 
              Gain the skills to manage and optimize these critical systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                <Award className="w-5 h-5 mr-2" />
                Start SQL Server Training
              </Button>
              <Button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                View Learning Path
              </Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <Card className="bg-slate-800/50 border-slate-600 text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-blue-400 mb-2">40%</div>
              <div className="text-sm text-gray-300">Database market share</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 border-slate-600 text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-blue-400 mb-2">200K+</div>
              <div className="text-sm text-gray-300">Active job postings</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 border-slate-600 text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-blue-400 mb-2">85%</div>
              <div className="text-sm text-gray-300">Fortune 500 usage</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 border-slate-600 text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-blue-400 mb-2">Azure</div>
              <div className="text-sm text-gray-300">Cloud integration</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
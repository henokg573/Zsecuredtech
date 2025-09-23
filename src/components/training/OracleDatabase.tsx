import { Database, Server, Award, BarChart3, Users, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

export default function OracleDatabase() {
  const certificationTracks = [
    {
      track: 'Oracle Database Administrator (OCA)',
      level: 'Associate',
      duration: '6 Weeks',
      topics: ['Database Architecture', 'Installation & Configuration', 'User Management', 'Backup & Recovery']
    },
    {
      track: 'Oracle Database Administrator (OCP)',
      level: 'Professional', 
      duration: '10 Weeks',
      topics: ['Performance Tuning', 'Advanced Security', 'High Availability', 'Data Guard']
    },
    {
      track: 'Oracle Database Expert (OCE)',
      level: 'Expert',
      duration: '16 Weeks',
      topics: ['RAC Administration', 'Advanced Performance', 'Multitenant Architecture', 'Cloud Management']
    }
  ];

  const keySkills = [
    'Oracle Database Installation and Configuration',
    'SQL and PL/SQL Programming',
    'Database Security and User Management',
    'Backup and Recovery Strategies',
    'Performance Monitoring and Tuning',
    'Oracle Real Application Clusters (RAC)',
    'Data Guard Implementation',
    'Multitenant Container Databases'
  ];

  const prerequisites = [
    'Basic understanding of relational databases',
    'SQL fundamentals knowledge',
    'Operating system administration (Linux/Unix preferred)',
    'Basic networking concepts'
  ];

  return (
    <section className="py-20 bg-slate-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Oracle Database Certification
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Master Oracle Database technologies and become a certified Oracle Database Administrator. 
            Learn to design, implement, and manage enterprise-grade Oracle database systems.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Certification Tracks</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {certificationTracks.map((track, index) => (
              <Card key={index} className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/80 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Database className="w-6 h-6 text-red-400" />
                  </div>
                  <CardTitle className="text-xl text-white">{track.track}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {track.level} Level - {track.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-red-400 mb-3">Core Topics:</h4>
                  <div className="space-y-2">
                    {track.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-3 h-3 text-red-400 mr-2" />
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
          <Card className="bg-slate-700/50 border-slate-600">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Key Skills You'll Master</CardTitle>
              <CardDescription className="text-gray-300">
                Comprehensive Oracle Database administration and development skills
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-3">
                {keySkills.map((skill, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold mr-3 mt-0.5">
                      {index + 1}
                    </div>
                    <span className="text-gray-300 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-slate-700/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-lg text-white">Training Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Full Program:</span>
                  <span className="text-white">16 Weeks</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Database Version:</span>
                  <span className="text-white">Oracle 21c</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Hands-on Labs:</span>
                  <span className="text-white">200+ Hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Practice Exams:</span>
                  <span className="text-white">Unlimited</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Lab Environment:</span>
                  <span className="text-white">24/7 Access</span>
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

            <Card className="bg-red-900/20 border-red-700">
              <CardHeader>
                <CardTitle className="text-lg text-red-400">Career Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-red-100">
                  <div>• Oracle Database Administrator</div>
                  <div>• Database Developer</div>
                  <div>• Solutions Architect</div>
                  <div>• Average salary: $85K - $120K</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl px-8 py-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Master Oracle Database Technology
            </h3>
            <p className="text-red-100 mb-8 max-w-2xl mx-auto">
              Oracle Database powers the world's most critical applications. Join the elite group 
              of Oracle certified professionals and advance your database career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-red-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                <Award className="w-5 h-5 mr-2" />
                Start Oracle Journey
              </Button>
              <Button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                Download Curriculum
              </Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <Card className="bg-slate-700/50 border-slate-600 text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-red-400 mb-2">50%</div>
              <div className="text-sm text-gray-300">Enterprise database market share</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-700/50 border-slate-600 text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-red-400 mb-2">500K+</div>
              <div className="text-sm text-gray-300">Oracle certified professionals</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-700/50 border-slate-600 text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-red-400 mb-2">92%</div>
              <div className="text-sm text-gray-300">Job placement rate</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-700/50 border-slate-600 text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-red-400 mb-2">Fortune 100</div>
              <div className="text-sm text-gray-300">Companies use Oracle</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
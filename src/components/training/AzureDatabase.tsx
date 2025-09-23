import { Cloud, Database, Award, BarChart3, Users, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

export default function AzureDatabase() {
  const certificationPath = [
    {
      phase: 'Phase 1',
      title: 'Azure Fundamentals',
      code: 'AZ-900',
      duration: '2 Weeks',
      focus: 'Cloud concepts, Azure services, security, and pricing'
    },
    {
      phase: 'Phase 2',
      title: 'Azure Data Fundamentals', 
      code: 'DP-900',
      duration: '3 Weeks',
      focus: 'Core data concepts and Azure data services'
    },
    {
      phase: 'Phase 3',
      title: 'Azure Database Administrator',
      code: 'DP-300',
      duration: '8 Weeks',
      focus: 'Azure SQL Database administration and optimization'
    }
  ];

  const azureServices = [
    {
      service: 'Azure SQL Database',
      description: 'Fully managed relational database service',
      features: ['Auto-scaling', 'High availability', 'Automatic backups', 'Threat detection']
    },
    {
      service: 'Azure SQL Managed Instance',
      description: 'Best cloud migration option for SQL Server',
      features: ['Near 100% compatibility', 'Native VNet support', 'Cross-database queries', 'SQL Agent']
    },
    {
      service: 'Azure Cosmos DB',
      description: 'Globally distributed multi-model database',
      features: ['Multiple APIs', 'Global distribution', 'Automatic scaling', 'SLA guarantees']
    },
    {
      service: 'Azure Database for PostgreSQL',
      description: 'Fully managed PostgreSQL database service',
      features: ['Built-in HA', 'Automatic backups', 'Advanced security', 'Flexible scaling']
    }
  ];

  const keySkills = [
    'Azure SQL Database deployment and configuration',
    'Performance monitoring and optimization',
    'Security implementation and compliance',
    'High availability and disaster recovery',
    'Automated backup and restore strategies',
    'Cost optimization and resource management',
    'Migration strategies and tools',
    'Monitoring and alerting setup'
  ];

  const prerequisites = [
    'Basic SQL Server administration experience',
    'Understanding of T-SQL programming',
    'Basic knowledge of Azure cloud concepts',
    'Familiarity with PowerShell or Azure CLI'
  ];

  return (
    <section className="py-20 bg-slate-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Azure Database Administrator Certification
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Microsoft Certified: Azure Database Administrator Associate - Master cloud database 
            administration on Azure and become an expert in managing Azure data services.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Certification Learning Path</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {certificationPath.map((phase, index) => (
              <Card key={index} className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/80 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Cloud className="w-6 h-6 text-cyan-400" />
                  </div>
                  <CardTitle className="text-xl text-white">{phase.phase}: {phase.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {phase.code} - {phase.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">{phase.focus}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Azure Database Services</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {azureServices.map((service, index) => (
              <Card key={index} className="bg-slate-700/50 border-slate-600">
                <CardHeader>
                  <CardTitle className="text-lg text-white">{service.service}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-cyan-400 mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-3 h-3 text-cyan-400 mr-2" />
                        {feature}
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
              <CardTitle className="text-2xl text-white">Core Skills Development</CardTitle>
              <CardDescription className="text-gray-300">
                Master Azure database administration from basics to advanced concepts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {keySkills.map((skill, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold mr-3 mt-0.5">
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
                  <span className="text-gray-400">Total Duration:</span>
                  <span className="text-white">13 Weeks</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Certification Level:</span>
                  <span className="text-white">Associate</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Exam Duration:</span>
                  <span className="text-white">150 Minutes</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Lab Environment:</span>
                  <span className="text-white">Azure Sandbox</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Hands-on Labs:</span>
                  <span className="text-white">100+ Hours</span>
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

            <Card className="bg-cyan-900/20 border-cyan-700">
              <CardHeader>
                <CardTitle className="text-lg text-cyan-400">Career Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-cyan-100">
                  <div>• Cloud Database Administrator</div>
                  <div>• Azure Solutions Architect</div>
                  <div>• Database Migration Specialist</div>
                  <div>• Average salary: $85K - $125K</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl px-8 py-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Master Azure Database Technologies
            </h3>
            <p className="text-cyan-100 mb-8 max-w-2xl mx-auto">
              Azure is the fastest-growing cloud platform with massive demand for database 
              administrators. Get certified and join the cloud revolution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                <Award className="w-5 h-5 mr-2" />
                Start Azure Training
              </Button>
              <Button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                Download Study Guide
              </Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <Card className="bg-slate-700/50 border-slate-600 text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">60%</div>
              <div className="text-sm text-gray-300">Enterprise cloud adoption rate</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-700/50 border-slate-600 text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">250K+</div>
              <div className="text-sm text-gray-300">Azure job openings globally</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-700/50 border-slate-600 text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
              <div className="text-sm text-gray-300">Azure SLA uptime</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-700/50 border-slate-600 text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">#2</div>
              <div className="text-sm text-gray-300">Cloud platform globally</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
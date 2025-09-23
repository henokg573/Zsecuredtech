import { CheckCircle, Award, FileText, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function Consultancy() {
  const consultancyServices = [
    {
      icon: Award,
      title: 'ISO 9001:2015 - (QMS)',
      description: 'Quality Management System certification to ensure consistent quality in your products and services.',
      features: ['Quality Policy Development', 'Process Documentation', 'Internal Audits', 'Management Review']
    },
    {
      icon: Shield,
      title: 'ISO 20000 - (ITSM)',
      description: 'IT Service Management certification for delivering effective IT services aligned with business needs.',
      features: ['Service Strategy', 'Service Design', 'Service Operation', 'Continual Improvement']
    },
    {
      icon: FileText,
      title: 'ISO 22301 - (BCMS)',
      description: 'Business Continuity Management System to ensure business resilience and operational continuity.',
      features: ['Risk Assessment', 'Business Impact Analysis', 'Continuity Planning', 'Crisis Management']
    },
    {
      icon: CheckCircle,
      title: 'ISO 31000 - Risk Management',
      description: 'Risk Management framework to identify, assess, and mitigate risks across your organization.',
      features: ['Risk Identification', 'Risk Assessment', 'Risk Treatment', 'Monitoring & Review']
    }
  ];

  return (
    <section id="consultancy" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            ISO Consultancy Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expert guidance for achieving and maintaining ISO certifications. 
            Our experienced consultants help you implement robust management systems.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {consultancyServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="bg-slate-800/50 border-slate-600 hover:bg-slate-800/80 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-green-400" />
                  </div>
                  <CardTitle className="text-xl mb-2 text-white">{service.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Our Consultancy Process
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-semibold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-green-400 mb-2">Gap Analysis</h4>
                  <p className="text-gray-300">
                    Comprehensive assessment of your current systems against ISO requirements.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-semibold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-green-400 mb-2">Implementation Planning</h4>
                  <p className="text-gray-300">
                    Detailed roadmap and timeline for achieving certification goals.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-semibold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-green-400 mb-2">System Development</h4>
                  <p className="text-gray-300">
                    Hands-on support in developing policies, procedures, and documentation.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-semibold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-green-400 mb-2">Certification Support</h4>
                  <p className="text-gray-300">
                    Guidance through the certification audit process and ongoing maintenance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRhbmN5JTIwbWVldGluZ3xlbnwxfHx8fDE3NTgxNzkyMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Business Consultancy Meeting"
              className="w-full h-auto rounded-2xl shadow-xl border border-slate-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
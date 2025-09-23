import { Building2, Briefcase, Heart, GraduationCap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function Solutions() {
  const solutions = [
    {
      icon: Building2,
      title: 'Enterprise Security',
      description: 'Comprehensive security solutions for large organizations with complex IT infrastructures.',
      features: ['Multi-site deployment', 'Advanced compliance', 'Custom integrations', 'Dedicated support']
    },
    {
      icon: Briefcase,
      title: 'Small Business',
      description: 'Affordable security packages designed specifically for small and medium-sized businesses.',
      features: ['Cost-effective plans', 'Easy deployment', 'Basic compliance', 'Email support']
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'HIPAA-compliant security solutions protecting sensitive patient data and medical records.',
      features: ['HIPAA compliance', 'Patient data protection', 'Medical device security', 'Audit trails']
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Specialized security solutions for educational institutions protecting student and faculty data.',
      features: ['FERPA compliance', 'Student data protection', 'Campus-wide security', 'Learning management']
    }
  ];

  return (
      <section id="solutions" className="py-20 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                  {/* Content */}
                  <div>
                      <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                          Industry-Specific
                          <span className="text-cyan-400">
                              {" "}
                              Security Solutions
                          </span>
                      </h2>
                      <p className="text-xl text-gray-300 mb-12">
                          Tailored cybersecurity solutions designed to meet the
                          unique compliance requirements and security challenges
                          of different industries.
                      </p>

                      <div className="grid sm:grid-cols-2 gap-6">
                          {solutions.map((solution, index) => {
                              const IconComponent = solution.icon;
                              return (
                                  <div
                                      key={index}
                                      className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:bg-slate-800/80 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                                  >
                                      <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                                          <IconComponent className="w-5 h-5 text-green-400" />
                                      </div>
                                      <h3 className="text-lg font-semibold text-white mb-2">
                                          {solution.title}
                                      </h3>
                                      <p className="text-gray-300 text-sm mb-4">
                                          {solution.description}
                                      </p>
                                      <ul className="space-y-1">
                                          {solution.features.map(
                                              (feature, featureIndex) => (
                                                  <li
                                                      key={featureIndex}
                                                      className="flex items-center text-xs text-gray-400"
                                                  >
                                                      <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2"></div>
                                                      {feature}
                                                  </li>
                                              )
                                          )}
                                      </ul>
                                  </div>
                              );
                          })}
                      </div>
                  </div>

                  {/* Image */}
                  <div className="relative">
                      <ImageWithFallback
                          src="https://fmictc.com/assets/faris-mubarek-removebg-preview-C2mOJWWx.png"
                          alt="Security Shield Protection"
                          className="w-full h-auto rounded-2xl shadow-xl border border-slate-700"
                      />

                      {/* Overlay Stats */}
                      <div className="absolute top-8 left-8 bg-slate-800/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-slate-700">
                          <div className="text-2xl font-bold text-white">
                              150+
                          </div>
                          <div className="text-sm text-gray-300">
                              Industries Served
                          </div>
                      </div>

                      <div className="absolute bottom-8 right-8 bg-slate-800/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-slate-700">
                          <div className="text-2xl font-bold text-white">
                              100%
                          </div>
                          <div className="text-sm text-gray-300">
                              Compliance Rate
                          </div>
                      </div>
                  </div>
              </div>

              {/* Compliance Logos */}
              <div className="mt-20 text-center">
                  <h3 className="text-lg font-semibold text-white mb-8">
                      Trusted for Compliance
                  </h3>
                  <div className="flex justify-center items-center space-x-12 opacity-60">
                      <div className="px-4 py-2 bg-slate-700 rounded-lg border border-slate-600">
                          <span className="font-semibold text-gray-300">
                              SOC 2
                          </span>
                      </div>
                      <div className="px-4 py-2 bg-slate-700 rounded-lg border border-slate-600">
                          <span className="font-semibold text-gray-300">
                              HIPAA
                          </span>
                      </div>
                      <div className="px-4 py-2 bg-slate-700 rounded-lg border border-slate-600">
                          <span className="font-semibold text-gray-300">
                              GDPR
                          </span>
                      </div>
                      <div className="px-4 py-2 bg-slate-700 rounded-lg border border-slate-600">
                          <span className="font-semibold text-gray-300">
                              ISO 27001
                          </span>
                      </div>
                      <div className="px-4 py-2 bg-slate-700 rounded-lg border border-slate-600">
                          <span className="font-semibold text-gray-300">
                              PCI DSS
                          </span>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
}
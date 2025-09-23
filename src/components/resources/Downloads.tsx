import { Download, FileText, Shield, CheckCircle, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

export default function Downloads() {
  const downloads = [
    {
      category: 'Security Frameworks',
      items: [
        { 
          title: 'Cybersecurity Framework Implementation Guide', 
          description: 'Comprehensive guide to implementing NIST Cybersecurity Framework',
          format: 'PDF', 
          size: '2.3 MB',
          downloads: '15,420',
          featured: true
        },
        { 
          title: 'ISO 27001 Checklist', 
          description: 'Complete implementation checklist for ISO 27001 compliance',
          format: 'PDF', 
          size: '1.8 MB',
          downloads: '12,350'
        },
        { 
          title: 'Risk Assessment Template', 
          description: 'Ready-to-use risk assessment template and methodology',
          format: 'Excel', 
          size: '0.8 MB',
          downloads: '9,870'
        }
      ]
    },
    {
      category: 'Incident Response',
      items: [
        { 
          title: 'Incident Response Playbook', 
          description: 'Step-by-step incident response procedures and workflows',
          format: 'PDF', 
          size: '3.1 MB',
          downloads: '11,250',
          featured: true
        },
        { 
          title: 'Breach Notification Templates', 
          description: 'Legal-compliant breach notification templates',
          format: 'Word', 
          size: '0.5 MB',
          downloads: '7,890'
        },
        { 
          title: 'Forensics Evidence Collection Guide', 
          description: 'Best practices for digital evidence collection and preservation',
          format: 'PDF', 
          size: '1.9 MB',
          downloads: '6,340'
        }
      ]
    },
    {
      category: 'Policy Templates',
      items: [
        { 
          title: 'Information Security Policy Suite', 
          description: 'Complete set of information security policies',
          format: 'Word', 
          size: '4.2 MB',
          downloads: '18,920',
          featured: true
        },
        { 
          title: 'Remote Work Security Policy', 
          description: 'Comprehensive remote work security guidelines',
          format: 'PDF', 
          size: '1.2 MB',
          downloads: '14,680'
        },
        { 
          title: 'Data Classification Policy', 
          description: 'Data classification and handling procedures',
          format: 'PDF', 
          size: '0.9 MB',
          downloads: '8,750'
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-slate-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Security Resources
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Download free cybersecurity templates, guides, and resources to strengthen 
            your organization's security posture and compliance efforts.
          </p>
        </div>

        <div className="space-y-12">
          {downloads.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Shield className="w-6 h-6 text-green-400 mr-3" />
                {category.category}
              </h2>
              
              <div className="grid lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className={`${item.featured ? 'ring-2 ring-green-500 bg-slate-700/70' : 'bg-slate-700/50'} border-slate-600 hover:bg-slate-700/80 transition-all duration-300`}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg text-white mb-2 flex items-start">
                            {item.title}
                            {item.featured && (
                              <Star className="w-4 h-4 text-yellow-400 ml-2 mt-1" />
                            )}
                          </CardTitle>
                          <CardDescription className="text-gray-300 text-sm">
                            {item.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                        <span>{item.format} • {item.size}</span>
                        <span>{item.downloads} downloads</span>
                      </div>
                      
                      <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                        <Download className="w-4 h-4 mr-2" />
                        Download Free
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl px-8 py-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Need Custom Security Documentation?
            </h3>
            <p className="text-green-100 mb-8 max-w-2xl mx-auto">
              Our security experts can help create customized policies, procedures, and 
              documentation tailored to your organization's specific needs.
            </p>
            <Button className="bg-white text-green-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Request Custom Documentation
            </Button>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
            <div className="text-gray-300">Free Resources</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-400 mb-2">100K+</div>
            <div className="text-gray-300">Total Downloads</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-400 mb-2">Weekly</div>
            <div className="text-gray-300">New Additions</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
            <div className="text-gray-300">Access Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}
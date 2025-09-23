import { Download, FileText, BookOpen, Shield, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

export default function Resource() {
  const downloads = [
    {
      title: 'Cybersecurity Assessment Checklist',
      description: 'Comprehensive checklist for evaluating your organization\'s security posture.',
      fileType: 'PDF',
      fileSize: '2.5 MB',
      category: 'Assessment Tools'
    },
    {
      title: 'ISO 27001 Implementation Guide',
      description: 'Step-by-step guide for implementing ISO 27001 information security management.',
      fileType: 'PDF',
      fileSize: '4.2 MB',
      category: 'Implementation Guides'
    },
    {
      title: 'Incident Response Playbook',
      description: 'Ready-to-use templates and procedures for cybersecurity incident response.',
      fileType: 'ZIP',
      fileSize: '8.1 MB',
      category: 'Templates'
    },
    {
      title: 'Security Policy Templates',
      description: 'Collection of customizable security policy templates for various industries.',
      fileType: 'DOCX',
      fileSize: '3.7 MB',
      category: 'Templates'
    },
    {
      title: 'Risk Assessment Matrix',
      description: 'Excel template for conducting comprehensive organizational risk assessments.',
      fileType: 'XLSX',
      fileSize: '1.8 MB',
      category: 'Assessment Tools'
    },
    {
      title: 'Security Training Materials',
      description: 'Presentation slides and handouts for employee security awareness training.',
      fileType: 'ZIP',
      fileSize: '12.3 MB',
      category: 'Training Resources'
    }
  ];

  const whitepapers = [
    {
      title: 'The Future of Cybersecurity: AI and Machine Learning',
      description: 'Exploring how artificial intelligence is revolutionizing threat detection and response.',
      publishDate: 'March 2024',
      readTime: '15 min read',
      category: 'Technology Trends'
    },
    {
      title: 'Zero Trust Architecture: Implementation Best Practices',
      description: 'Comprehensive guide to implementing zero trust security models in enterprise environments.',
      publishDate: 'February 2024',
      readTime: '22 min read',
      category: 'Architecture'
    },
    {
      title: 'Compliance in the Cloud: Navigating Regulatory Requirements',
      description: 'Understanding compliance challenges and solutions for cloud-based infrastructures.',
      publishDate: 'January 2024',
      readTime: '18 min read',
      category: 'Compliance'
    },
    {
      title: 'Ransomware Defense Strategies for SMBs',
      description: 'Practical approaches to protecting small and medium businesses from ransomware attacks.',
      publishDate: 'December 2023',
      readTime: '12 min read',
      category: 'Threat Prevention'
    },
    {
      title: 'The Economics of Cybersecurity Investment',
      description: 'ROI analysis and business justification for cybersecurity spending.',
      publishDate: 'November 2023',
      readTime: '20 min read',
      category: 'Business Strategy'
    },
    {
      title: 'Supply Chain Security: Managing Third-Party Risks',
      description: 'Best practices for securing your organization\'s supply chain and vendor relationships.',
      publishDate: 'October 2023',
      readTime: '16 min read',
      category: 'Risk Management'
    }
  ];

  return (
    <section id="resource" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Resources & Downloads
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Access our comprehensive library of cybersecurity resources, including downloadable tools, 
            templates, and in-depth whitepapers to enhance your security posture.
          </p>
        </div>

        {/* Downloads Section */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <Download className="w-6 h-6 text-green-400 mr-3" />
            <h3 className="text-2xl font-bold text-white">Downloads</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {downloads.map((item, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-600 hover:bg-slate-800/80 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-green-400" />
                    </div>
                    <span className="text-xs bg-slate-700 text-gray-300 px-2 py-1 rounded">
                      {item.category}
                    </span>
                  </div>
                  <CardTitle className="text-lg text-white">{item.title}</CardTitle>
                  <CardDescription className="text-gray-300 text-sm">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-400">{item.fileType}</span>
                    <span className="text-sm text-gray-400">{item.fileSize}</span>
                  </div>
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Whitepapers Section */}
        <div>
          <div className="flex items-center mb-8">
            <BookOpen className="w-6 h-6 text-green-400 mr-3" />
            <h3 className="text-2xl font-bold text-white">White Papers</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {whitepapers.map((paper, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-600 hover:bg-slate-800/80 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-xs bg-slate-700 text-gray-300 px-2 py-1 rounded">
                      {paper.category}
                    </span>
                    <div className="text-xs text-gray-400 text-right">
                      <div>{paper.publishDate}</div>
                      <div>{paper.readTime}</div>
                    </div>
                  </div>
                  <CardTitle className="text-lg text-white mb-2">{paper.title}</CardTitle>
                  <CardDescription className="text-gray-300 text-sm">
                    {paper.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full border-green-500 text-green-400 hover:bg-green-500 hover:text-white">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Read Paper
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-green-600 to-cyan-600 rounded-2xl px-8 py-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Need Custom Resources?
            </h3>
            <p className="text-green-100 mb-8 max-w-2xl mx-auto">
              Our team can create tailored security documentation, policies, and training materials 
              specific to your industry and organizational needs.
            </p>
            <Button className="bg-white text-green-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Request Custom Resources
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
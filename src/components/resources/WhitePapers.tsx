import { FileText, Download, Star, Calendar, User, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

export default function WhitePapers() {
  const whitepapers = [
    {
      title: 'Zero Trust Security Architecture: A Complete Implementation Guide',
      description: 'Comprehensive guide to implementing Zero Trust security architecture in enterprise environments, including technical requirements, best practices, and real-world case studies.',
      author: 'Dr. Sarah Chen',
      date: '2025-01-10',
      pages: 48,
      downloads: '15,420',
      featured: true,
      category: 'Security Architecture',
      abstract: 'This whitepaper provides a detailed roadmap for organizations looking to implement Zero Trust security architecture. It covers the fundamental principles, technical requirements, implementation phases, and common challenges faced during deployment.'
    },
    {
      title: 'The State of Cybersecurity in Healthcare 2025',
      description: 'Annual report analyzing cybersecurity threats, trends, and defensive strategies specific to healthcare organizations worldwide.',
      author: 'Michael Roberts',
      date: '2025-01-05',
      pages: 32,
      downloads: '12,350',
      featured: true,
      category: 'Industry Analysis',
      abstract: 'An in-depth analysis of the cybersecurity landscape in healthcare, examining emerging threats, regulatory requirements, and effective security measures for protecting patient data and critical infrastructure.'
    },
    {
      title: 'AI-Powered Threat Detection: Reducing False Positives',
      description: 'Research on how artificial intelligence and machine learning can improve threat detection accuracy while reducing alert fatigue.',
      author: 'Jennifer Liu',
      date: '2024-12-20',
      pages: 24,
      downloads: '9,870',
      category: 'Technology Trends',
      abstract: 'This research paper explores how AI and ML technologies can enhance security operations centers by improving threat detection accuracy and significantly reducing false positive alerts.'
    },
    {
      title: 'Cloud Security Posture Management: Best Practices',
      description: 'Essential strategies for maintaining security posture across multi-cloud and hybrid cloud environments.',
      author: 'Alex Kumar',
      date: '2024-12-15',
      pages: 36,
      downloads: '11,200',
      category: 'Cloud Security',
      abstract: 'A comprehensive guide to cloud security posture management, covering assessment methodologies, automated monitoring, compliance frameworks, and remediation strategies.'
    },
    {
      title: 'Supply Chain Security: Mitigating Third-Party Risks',
      description: 'Framework for assessing and managing cybersecurity risks in complex supply chains and vendor relationships.',
      author: 'Dr. Emily Watson',
      date: '2024-12-08',
      pages: 28,
      downloads: '8,750',
      category: 'Risk Management',
      abstract: 'This whitepaper addresses the growing concern of supply chain attacks and provides practical strategies for organizations to assess, monitor, and mitigate third-party cybersecurity risks.'
    },
    {
      title: 'Incident Response in the Age of Remote Work',
      description: 'Adapting incident response procedures for distributed workforces and remote work environments.',
      author: 'Mark Thompson',
      date: '2024-11-28',
      pages: 20,
      downloads: '7,890',
      category: 'Incident Response',
      abstract: 'Explores how organizations can adapt their incident response capabilities to effectively handle security incidents in remote and hybrid work environments.'
    },
    {
      title: 'Quantum-Safe Cryptography: Preparing for the Future',
      description: 'Understanding quantum computing threats to current encryption and preparing for post-quantum cryptography.',
      author: 'Dr. James Wilson',
      date: '2024-11-15',
      pages: 44,
      downloads: '6,340',
      category: 'Cryptography',
      abstract: 'An examination of quantum computing\'s impact on current cryptographic systems and practical guidance for organizations to prepare for the post-quantum cryptography era.'
    },
    {
      title: 'DevSecOps Integration: Security in CI/CD Pipelines',
      description: 'Practical approaches to integrating security controls and practices into development and deployment pipelines.',
      author: 'Lisa Chang',
      date: '2024-11-02',
      pages: 32,
      downloads: '9,120',
      category: 'DevSecOps',
      abstract: 'A detailed guide for implementing security throughout the software development lifecycle, including tool selection, automation strategies, and cultural transformation.'
    }
  ];

  const categories = ['All', 'Security Architecture', 'Industry Analysis', 'Technology Trends', 'Cloud Security', 'Risk Management', 'Incident Response', 'Cryptography', 'DevSecOps'];

  return (
    <section className="py-20 bg-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Security WhitePapers
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            In-depth research, analysis, and insights on the latest cybersecurity trends, 
            technologies, and best practices from our team of security experts.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={`${index === 0 ? 'bg-green-500 hover:bg-green-600 text-white' : 'border-slate-600 text-gray-300 hover:bg-slate-700'} px-4 py-2 text-sm`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Papers */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Star className="w-6 h-6 text-yellow-400 mr-3" />
            Featured Research
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {whitepapers.filter(paper => paper.featured).map((paper, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-600 hover:bg-slate-800/80 transition-all duration-300 relative">
                <div className="absolute top-4 right-4 bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-medium">
                  FEATURED
                </div>
                <CardHeader>
                  <div className="flex items-center mb-3">
                    <span className="text-xs bg-green-600 text-green-100 px-2 py-1 rounded mr-3">
                      {paper.category}
                    </span>
                    <span className="text-xs text-gray-400">{paper.pages} pages</span>
                  </div>
                  <CardTitle className="text-xl text-white mb-3">{paper.title}</CardTitle>
                  <CardDescription className="text-gray-300 mb-4">
                    {paper.description}
                  </CardDescription>
                  <div className="text-sm text-gray-400 mb-4 leading-relaxed">
                    {paper.abstract}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {paper.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(paper.date).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      {paper.downloads} downloads
                    </div>
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

        {/* All Papers */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">All WhitePapers</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {whitepapers.filter(paper => !paper.featured).map((paper, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-600 hover:bg-slate-800/80 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs bg-blue-600 text-blue-100 px-2 py-1 rounded">
                      {paper.category}
                    </span>
                    <span className="text-xs text-gray-400">{paper.pages} pages</span>
                  </div>
                  <CardTitle className="text-lg text-white mb-2">{paper.title}</CardTitle>
                  <CardDescription className="text-gray-300 text-sm mb-3">
                    {paper.description}
                  </CardDescription>
                  <div className="text-xs text-gray-400 mb-4 leading-relaxed line-clamp-3">
                    {paper.abstract}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <span>{paper.author}</span>
                    <span>{paper.downloads} downloads</span>
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

        {/* Research Request */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl px-8 py-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Request Custom Research
            </h3>
            <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
              Need research on a specific cybersecurity topic? Our expert team can conduct 
              custom research and analysis tailored to your organization's needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Request Custom Research
              </Button>
              <Button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                Subscribe to Updates
              </Button>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
            <div className="text-gray-300">Research Papers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-400 mb-2">100K+</div>
            <div className="text-gray-300">Total Downloads</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-400 mb-2">Monthly</div>
            <div className="text-gray-300">New Research</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-400 mb-2">Free</div>
            <div className="text-gray-300">Access for All</div>
          </div>
        </div>
      </div>
    </section>
  );
}
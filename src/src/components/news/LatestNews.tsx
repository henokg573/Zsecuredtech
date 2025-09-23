import { Calendar, User, ArrowRight, TrendingUp, Shield, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

export default function LatestNews() {
  const newsArticles = [
    {
      category: 'Cybersecurity Threats',
      title: 'New Ransomware Campaign Targets Healthcare Organizations',
      excerpt: 'Security researchers have identified a sophisticated ransomware campaign specifically targeting healthcare institutions across North America.',
      author: 'Dr. Sarah Chen',
      date: '2025-01-15',
      readTime: '5 min read',
      featured: true,
      urgent: true
    },
    {
      category: 'Regulatory Updates',
      title: 'EU Cyber Resilience Act: What Organizations Need to Know',
      excerpt: 'The European Union\'s new Cyber Resilience Act introduces mandatory cybersecurity requirements for digital products and services.',
      author: 'Mark Thompson',
      date: '2025-01-14',
      readTime: '8 min read',
      featured: true
    },
    {
      category: 'Industry Analysis',
      title: 'AI-Powered Security Tools Show 40% Improvement in Threat Detection',
      excerpt: 'Latest industry report reveals significant improvements in threat detection capabilities when AI is integrated into security operations.',
      author: 'Jennifer Liu',
      date: '2025-01-12',
      readTime: '6 min read'
    },
    {
      category: 'Best Practices',
      title: 'Zero Trust Architecture: Implementation Strategies for 2025',
      excerpt: 'Comprehensive guide to implementing Zero Trust security architecture in enterprise environments.',
      author: 'Michael Roberts',
      date: '2025-01-10',
      readTime: '12 min read'
    },
    {
      category: 'Data Breaches',
      title: 'Major Cloud Provider Experiences Security Incident',
      excerpt: 'Investigation reveals configuration error led to temporary exposure of customer metadata.',
      author: 'Alex Kumar',
      date: '2025-01-08',
      readTime: '4 min read',
      urgent: true
    },
    {
      category: 'Technology Trends',
      title: 'Quantum Computing: Preparing for Post-Quantum Cryptography',
      excerpt: 'Organizations must begin preparing for the quantum computing era and its impact on current encryption methods.',
      author: 'Dr. Emily Watson',
      date: '2025-01-05',
      readTime: '10 min read'
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Cybersecurity Threats':
        return Shield;
      case 'Data Breaches':
        return AlertTriangle;
      case 'Industry Analysis':
        return TrendingUp;
      default:
        return Shield;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Cybersecurity Threats':
        return 'bg-red-600';
      case 'Data Breaches':
        return 'bg-orange-600';
      case 'Regulatory Updates':
        return 'bg-blue-600';
      case 'Industry Analysis':
        return 'bg-green-600';
      case 'Best Practices':
        return 'bg-purple-600';
      case 'Technology Trends':
        return 'bg-cyan-600';
      default:
        return 'bg-gray-600';
    }
  };

  return (
    <section className="py-20 bg-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Latest Cybersecurity News
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Stay informed with the latest cybersecurity threats, industry developments, 
            and security best practices from our team of experts.
          </p>
        </div>

        {/* Featured Articles */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Featured Stories</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {newsArticles.filter(article => article.featured).map((article, index) => {
              const IconComponent = getCategoryIcon(article.category);
              return (
                <Card key={index} className="bg-slate-800/50 border-slate-600 hover:bg-slate-800/80 transition-all duration-300 relative overflow-hidden">
                  {article.urgent && (
                    <div className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      URGENT
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center mb-3">
                      <div className={`w-8 h-8 ${getCategoryColor(article.category)} rounded-lg flex items-center justify-center mr-3`}>
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm text-gray-400">{article.category}</span>
                    </div>
                    <CardTitle className="text-xl text-white mb-3">{article.title}</CardTitle>
                    <CardDescription className="text-gray-300">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {article.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(article.date).toLocaleDateString()}
                        </div>
                      </div>
                      <span>{article.readTime}</span>
                    </div>
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white group">
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Recent Articles */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Recent Articles</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {newsArticles.filter(article => !article.featured).map((article, index) => {
              const IconComponent = getCategoryIcon(article.category);
              return (
                <Card key={index} className="bg-slate-800/50 border-slate-600 hover:bg-slate-800/80 transition-all duration-300 relative">
                  {article.urgent && (
                    <div className="absolute top-3 right-3 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  )}
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      <div className={`w-6 h-6 ${getCategoryColor(article.category)} rounded flex items-center justify-center mr-2`}>
                        <IconComponent className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-xs text-gray-400">{article.category}</span>
                    </div>
                    <CardTitle className="text-lg text-white mb-2">{article.title}</CardTitle>
                    <CardDescription className="text-gray-300 text-sm line-clamp-3">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                      <span>{article.author}</span>
                      <span>{article.readTime}</span>
                    </div>
                    <Button variant="outline" className="w-full border-green-500 text-green-400 hover:bg-green-500 hover:text-white">
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl px-8 py-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Stay Ahead of Cyber Threats
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our cybersecurity newsletter and get the latest threat intelligence, 
              security insights, and industry updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
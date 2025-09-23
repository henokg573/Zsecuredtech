import { Calendar, Clock, ArrowRight, AlertTriangle, TrendingUp, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function News() {
  const latestNews = [
    {
      title: 'ZSecuredTech Receives ISO 27001 Certification for Enhanced Security Standards',
      excerpt: 'We are proud to announce that ZSecuredTech has achieved ISO 27001 certification, demonstrating our commitment to information security management.',
      category: 'Company News',
      date: '2024-03-15',
      readTime: '3 min read',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop'
    },
    {
      title: 'New Partnership with Leading Cloud Security Provider',
      excerpt: 'Strategic partnership enhances our cloud security offerings and expands our service capabilities for enterprise clients.',
      category: 'Partnerships',
      date: '2024-03-10',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=200&fit=crop'
    },
    {
      title: 'Cybersecurity Training Program Launches for Healthcare Sector',
      excerpt: 'Specialized training program designed to address unique cybersecurity challenges faced by healthcare organizations.',
      category: 'Training',
      date: '2024-03-05',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=200&fit=crop'
    }
  ];

  const pressReleases = [
    {
      title: 'ZSecuredTech Expands Operations with New Regional Office',
      date: '2024-02-28',
      summary: 'Opening of new facility in Chicago to better serve Midwest clients with enhanced local support.'
    },
    {
      title: 'Q4 2023 Threat Intelligence Report Released',
      date: '2024-02-15',
      summary: 'Comprehensive analysis of emerging cyber threats and attack patterns observed in the fourth quarter.'
    },
    {
      title: 'Award Recognition for Excellence in Cybersecurity Services',
      date: '2024-02-01',
      summary: 'ZSecuredTech honored with Industry Excellence Award for outstanding cybersecurity service delivery.'
    }
  ];

  const industryUpdates = [
    {
      title: 'New NIST Cybersecurity Framework 2.0 Guidelines Released',
      impact: 'High',
      date: '2024-03-12',
      summary: 'Updated framework introduces new governance and supply chain risk management categories.'
    },
    {
      title: 'EU Cyber Resilience Act Enters Final Approval Stage',
      impact: 'Medium',
      date: '2024-03-08',
      summary: 'New legislation will affect all organizations selling digital products in European markets.'
    },
    {
      title: 'Critical Vulnerability Discovered in Popular VPN Software',
      impact: 'High',
      date: '2024-03-03',
      summary: 'Immediate patching recommended for organizations using affected VPN solutions.'
    }
  ];

  const securityAlerts = [
    {
      title: 'Zero-Day Exploit Targeting Microsoft Exchange Servers',
      severity: 'Critical',
      date: '2024-03-14',
      action: 'Immediate patching required'
    },
    {
      title: 'Phishing Campaign Impersonating Financial Institutions',
      severity: 'High',
      date: '2024-03-11',
      action: 'User awareness training recommended'
    },
    {
      title: 'Supply Chain Attack on Software Development Tools',
      severity: 'Medium',
      date: '2024-03-09',
      action: 'Verify software integrity'
    }
  ];

  return (
    <section id="news" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            News & Updates
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay informed with the latest cybersecurity news, industry updates, and company announcements.
          </p>
        </div>

        {/* Latest News */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8">Latest News</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {latestNews.map((article, index) => (
              <Card key={index} className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/80 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-600 text-white px-2 py-1 rounded text-xs">
                      {article.category}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg text-white line-clamp-2">{article.title}</CardTitle>
                  <CardDescription className="text-gray-300 text-sm line-clamp-3">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full border-green-500 text-green-400 hover:bg-green-500 hover:text-white">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Press Releases & Industry Updates */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Press Releases */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Press Releases</h3>
            <div className="space-y-6">
              {pressReleases.map((release, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-6 border border-slate-600 hover:bg-slate-700/50 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-white">{release.title}</h4>
                    <span className="text-sm text-gray-400">{new Date(release.date).toLocaleDateString()}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{release.summary}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Industry Updates */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Industry Updates</h3>
            <div className="space-y-6">
              {industryUpdates.map((update, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-6 border border-slate-600 hover:bg-slate-700/50 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-white">{update.title}</h4>
                    <div className="flex items-center space-x-2">
                      <span className={`text-xs px-2 py-1 rounded ${
                        update.impact === 'High' ? 'bg-red-600 text-red-100' : 'bg-yellow-600 text-yellow-100'
                      }`}>
                        {update.impact} Impact
                      </span>
                      <span className="text-sm text-gray-400">{new Date(update.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">{update.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Security Alerts */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <AlertTriangle className="w-6 h-6 text-red-400 mr-3" />
            <h3 className="text-2xl font-bold text-white">Security Alerts</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityAlerts.map((alert, index) => (
              <div key={index} className={`rounded-lg p-6 border ${
                alert.severity === 'Critical' ? 'bg-red-900/20 border-red-700' : 
                alert.severity === 'High' ? 'bg-orange-900/20 border-orange-700' : 
                'bg-yellow-900/20 border-yellow-700'
              }`}>
                <div className="flex items-start justify-between mb-2">
                  <span className={`text-xs px-2 py-1 rounded font-semibold ${
                    alert.severity === 'Critical' ? 'bg-red-600 text-red-100' : 
                    alert.severity === 'High' ? 'bg-orange-600 text-orange-100' : 
                    'bg-yellow-600 text-yellow-100'
                  }`}>
                    {alert.severity}
                  </span>
                  <span className="text-sm text-gray-400">{new Date(alert.date).toLocaleDateString()}</span>
                </div>
                <h4 className="font-semibold text-white mb-2">{alert.title}</h4>
                <p className="text-sm text-gray-300 mb-3">Action Required: {alert.action}</p>
                <Button size="sm" className={`${
                  alert.severity === 'Critical' ? 'bg-red-600 hover:bg-red-700' : 
                  alert.severity === 'High' ? 'bg-orange-600 hover:bg-orange-700' : 
                  'bg-yellow-600 hover:bg-yellow-700'
                } text-white`}>
                  View Details
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-cyan-600 rounded-2xl px-8 py-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-green-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest cybersecurity news, threat alerts, 
              and industry insights delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button className="bg-white text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
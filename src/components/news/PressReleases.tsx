import { Calendar, ExternalLink, Download, Megaphone, Award, Building } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

export default function PressReleases() {
  const pressReleases = [
    {
      title: 'ZSecuredTech Achieves SOC 2 Type II Certification',
      date: '2025-01-15',
      summary: 'ZSecuredTech successfully completes SOC 2 Type II audit, demonstrating commitment to security, availability, and confidentiality controls.',
      content: 'ZSecuredTech announced today that it has successfully achieved SOC 2 Type II certification, underscoring the company\'s commitment to maintaining the highest standards of security and data protection...',
      type: 'Achievement',
      featured: true
    },
    {
      title: 'ZSecuredTech Partners with Leading Cloud Provider for Enhanced Security Services',
      date: '2025-01-10',
      summary: 'Strategic partnership expands ZSecuredTech\'s cloud security offerings and provides customers with integrated security solutions.',
      content: 'ZSecuredTech today announced a strategic partnership with a leading cloud infrastructure provider to deliver comprehensive cloud security solutions...',
      type: 'Partnership',
      featured: true
    },
    {
      title: 'New CISO Advisory Services Launched to Address Growing Executive Security Needs',
      date: '2025-01-08',
      summary: 'ZSecuredTech introduces specialized advisory services for Chief Information Security Officers and security executives.',
      content: 'In response to the growing demand for executive-level cybersecurity guidance, ZSecuredTech has launched comprehensive CISO Advisory Services...',
      type: 'Service Launch'
    },
    {
      title: 'ZSecuredTech Expands Operations with New Regional Office',
      date: '2025-01-03',
      summary: 'Company opens new office in Austin, Texas to better serve clients across the Southwest region.',
      content: 'ZSecuredTech announced the opening of its new regional office in Austin, Texas, marking a significant expansion of the company\'s operations...',
      type: 'Company News'
    },
    {
      title: 'ZSecuredTech Named "Cybersecurity Company of the Year" by Industry Association',
      date: '2024-12-20',
      summary: 'Recognition highlights company\'s innovative approach to cybersecurity consulting and training services.',
      content: 'The Cybersecurity Industry Association has named ZSecuredTech as the "Cybersecurity Company of the Year" for 2024...',
      type: 'Award',
      featured: true
    },
    {
      title: 'Q4 2024 Threat Intelligence Report Released',
      date: '2024-12-15',
      summary: 'Comprehensive quarterly report reveals emerging threats and provides actionable intelligence for security professionals.',
      content: 'ZSecuredTech\'s Security Research Team has released its Q4 2024 Threat Intelligence Report, providing critical insights into the evolving threat landscape...',
      type: 'Research'
    },
    {
      title: 'ZSecuredTech Launches Free Security Assessment Program for Non-Profits',
      date: '2024-12-10',
      summary: 'Community initiative provides complimentary security assessments to help non-profit organizations improve their cybersecurity posture.',
      content: 'As part of its commitment to community service, ZSecuredTech has launched a program offering free security assessments to qualified non-profit organizations...',
      type: 'Community Initiative'
    },
    {
      title: 'CEO Sarah Chen Appointed to Cybersecurity Advisory Board',
      date: '2024-12-05',
      summary: 'ZSecuredTech\'s CEO joins prestigious advisory board to help shape national cybersecurity policy and standards.',
      content: 'Sarah Chen, CEO and founder of ZSecuredTech, has been appointed to the National Cybersecurity Advisory Board...',
      type: 'Executive News'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Achievement':
        return 'bg-green-600';
      case 'Partnership':
        return 'bg-blue-600';
      case 'Service Launch':
        return 'bg-purple-600';
      case 'Award':
        return 'bg-yellow-600';
      case 'Research':
        return 'bg-cyan-600';
      case 'Company News':
        return 'bg-gray-600';
      case 'Community Initiative':
        return 'bg-orange-600';
      case 'Executive News':
        return 'bg-indigo-600';
      default:
        return 'bg-gray-600';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Achievement':
      case 'Award':
        return Award;
      case 'Partnership':
        return Building;
      case 'Service Launch':
        return Megaphone;
      default:
        return Megaphone;
    }
  };

  return (
    <section className="py-20 bg-slate-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Press Releases
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Stay updated with the latest news, announcements, and milestones from ZSecuredTech. 
            Get the official word on our partnerships, achievements, and industry developments.
          </p>
        </div>

        {/* Featured Press Releases */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Megaphone className="w-6 h-6 text-green-400 mr-3" />
            Latest Announcements
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {pressReleases.filter(release => release.featured).map((release, index) => {
              const IconComponent = getTypeIcon(release.type);
              return (
                <Card key={index} className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/80 transition-all duration-300 relative">
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    FEATURED
                  </div>
                  <CardHeader>
                    <div className="flex items-center mb-3">
                      <div className={`w-8 h-8 ${getTypeColor(release.type)} rounded-lg flex items-center justify-center mr-3`}>
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm text-gray-400">{release.type}</span>
                    </div>
                    <CardTitle className="text-xl text-white mb-3">{release.title}</CardTitle>
                    <div className="flex items-center text-sm text-gray-400 mb-4">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(release.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <CardDescription className="text-gray-300 mb-4">
                      {release.summary}
                    </CardDescription>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {release.content}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-3">
                      <Button className="flex-1 bg-green-500 hover:bg-green-600 text-white">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Read Full Release
                      </Button>
                      <Button variant="outline" className="border-slate-600 text-gray-300 hover:bg-slate-600">
                        <Download className="w-4 h-4 mr-2" />
                        PDF
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* All Press Releases */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">All Press Releases</h2>
          <div className="space-y-6">
            {pressReleases.filter(release => !release.featured).map((release, index) => {
              const IconComponent = getTypeIcon(release.type);
              return (
                <Card key={index} className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/80 transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-3">
                          <div className={`w-6 h-6 ${getTypeColor(release.type)} rounded flex items-center justify-center mr-2`}>
                            <IconComponent className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-xs text-gray-400">{release.type}</span>
                          <span className="text-xs text-gray-500 mx-2">•</span>
                          <span className="text-xs text-gray-400">
                            {new Date(release.date).toLocaleDateString()}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">{release.title}</h3>
                        <p className="text-gray-300 text-sm mb-4">{release.summary}</p>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white">
                          Read More
                        </Button>
                        <Button size="sm" variant="outline" className="border-slate-600 text-gray-300 hover:bg-slate-600">
                          <Download className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Media Contact */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl px-8 py-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Media Inquiries
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              For press inquiries, interview requests, or additional information about 
              ZSecuredTech, please contact our media relations team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Contact Media Team
              </Button>
              <Button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                Download Media Kit
              </Button>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Stay Informed
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our press release notifications to stay updated on the latest 
            ZSecuredTech news and announcements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
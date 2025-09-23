import { AlertTriangle, Clock, Shield, ExternalLink, Bell, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

export default function SecurityAlerts() {
  const alerts = [
    {
      severity: 'Critical',
      title: 'Active Ransomware Campaign Targeting Healthcare Organizations',
      threat: 'LockBit 3.0 Ransomware',
      description: 'New variant of LockBit ransomware specifically targeting healthcare institutions with improved encryption and lateral movement capabilities.',
      indicators: ['Suspicious .dll files in system32', 'Encrypted files with .lockbit extension', 'Network traffic to C2 servers'],
      mitigation: ['Immediate backup verification', 'Network segmentation', 'Endpoint monitoring enhancement'],
      date: '2025-01-15',
      cve: 'N/A',
      affectedSystems: 'Windows-based healthcare systems'
    },
    {
      severity: 'High',
      title: 'Critical Vulnerability in Popular VPN Software',
      threat: 'CVE-2025-0123',
      description: 'Remote code execution vulnerability in VPN client software affecting over 10 million users worldwide.',
      indicators: ['Unexpected VPN disconnections', 'Suspicious network connections', 'Privilege escalation attempts'],
      mitigation: ['Update VPN software immediately', 'Monitor network traffic', 'Review access logs'],
      date: '2025-01-12',
      cve: 'CVE-2025-0123',
      affectedSystems: 'VPN clients v12.0-12.4'
    },
    {
      severity: 'Medium',
      title: 'Phishing Campaign Impersonating Cloud Service Providers',
      threat: 'Business Email Compromise',
      description: 'Sophisticated phishing emails mimicking major cloud providers to steal credentials and access cloud environments.',
      indicators: ['Suspicious login attempts', 'Unexpected MFA requests', 'Unusual cloud resource usage'],
      mitigation: ['User awareness training', 'Email filtering enhancement', 'MFA enforcement'],
      date: '2025-01-10',
      cve: 'N/A',
      affectedSystems: 'Cloud environments and email systems'
    },
    {
      severity: 'High',
      title: 'Zero-Day Exploit Targeting IoT Devices',
      threat: 'IoT Botnet Formation',
      description: 'Previously unknown vulnerability in IoT firmware being exploited to create large-scale botnets.',
      indicators: ['Unusual network traffic from IoT devices', 'Device performance degradation', 'Unexpected device reboots'],
      mitigation: ['IoT device inventory and patching', 'Network monitoring', 'Device isolation'],
      date: '2025-01-08',
      cve: 'CVE-2025-0456',
      affectedSystems: 'IoT devices with firmware v2.1-2.8'
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical':
        return { bg: 'bg-red-600', text: 'text-red-100', border: 'border-red-500' };
      case 'High':
        return { bg: 'bg-orange-600', text: 'text-orange-100', border: 'border-orange-500' };
      case 'Medium':
        return { bg: 'bg-yellow-600', text: 'text-yellow-100', border: 'border-yellow-500' };
      case 'Low':
        return { bg: 'bg-blue-600', text: 'text-blue-100', border: 'border-blue-500' };
      default:
        return { bg: 'bg-gray-600', text: 'text-gray-100', border: 'border-gray-500' };
    }
  };

  return (
    <section className="py-20 bg-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Security Alerts
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Stay informed about the latest cybersecurity threats, vulnerabilities, and attack campaigns. 
            Get actionable intelligence to protect your organization from emerging threats.
          </p>
        </div>

        {/* Alert Subscription */}
        <div className="mb-16">
          <Card className="bg-blue-900/20 border-blue-700 text-center">
            <CardContent className="pt-8">
              <Bell className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-4">Real-Time Security Alerts</h2>
              <p className="text-blue-100 mb-6">
                Subscribe to receive immediate notifications about critical security threats and vulnerabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-gray-400"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Active Alerts */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <AlertTriangle className="w-6 h-6 text-red-400 mr-3 animate-pulse" />
            Active Security Alerts
          </h2>
          <div className="space-y-6">
            {alerts.map((alert, index) => {
              const severityColors = getSeverityColor(alert.severity);
              return (
                <Card key={index} className={`bg-slate-800/50 border-slate-600 ${severityColors.border} border-l-4 hover:bg-slate-800/80 transition-all duration-300`}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <span className={`${severityColors.bg} ${severityColors.text} px-3 py-1 rounded-full text-xs font-medium mr-3`}>
                          {alert.severity.toUpperCase()}
                        </span>
                        <span className="text-sm text-gray-400">{alert.threat}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <Clock className="w-4 h-4 mr-1" />
                        {new Date(alert.date).toLocaleDateString()}
                      </div>
                    </div>
                    <CardTitle className="text-xl text-white mb-3">{alert.title}</CardTitle>
                    <CardDescription className="text-gray-300 mb-4">
                      {alert.description}
                    </CardDescription>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-red-400 mb-3">Indicators of Compromise:</h4>
                        <ul className="space-y-1">
                          {alert.indicators.map((indicator, indicatorIndex) => (
                            <li key={indicatorIndex} className="text-sm text-gray-400 flex items-start">
                              <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2 mt-2"></div>
                              {indicator}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-green-400 mb-3">Recommended Actions:</h4>
                        <ul className="space-y-1">
                          {alert.mitigation.map((action, actionIndex) => (
                            <li key={actionIndex} className="text-sm text-gray-400 flex items-start">
                              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 mt-2"></div>
                              {action}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                      <span>CVE: <span className="text-white">{alert.cve}</span></span>
                      <span>Affected Systems: <span className="text-white">{alert.affectedSystems}</span></span>
                    </div>
                    
                    <div className="flex gap-3">
                      <Button className="flex-1 bg-green-500 hover:bg-green-600 text-white">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Full Technical Details
                      </Button>
                      <Button variant="outline" className="border-slate-600 text-gray-300 hover:bg-slate-600">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        YARA Rules
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Threat Intelligence */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl px-8 py-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Need Advanced Threat Intelligence?
            </h3>
            <p className="text-red-100 mb-8 max-w-2xl mx-auto">
              Get customized threat intelligence feeds, IOCs, and tactical analysis 
              tailored to your industry and infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-red-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Request Threat Intelligence
              </Button>
              <Button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                View IOC Feed
              </Button>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <Card className="bg-slate-800/50 border-slate-600">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-red-400 mb-2">24/7</div>
              <div className="text-sm text-gray-300">Threat Monitoring</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 border-slate-600">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-red-400 mb-2">&lt;15min</div>
              <div className="text-sm text-gray-300">Alert Response Time</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 border-slate-600">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-red-400 mb-2">1000+</div>
              <div className="text-sm text-gray-300">Threat Sources</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 border-slate-600">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-red-400 mb-2">50K+</div>
              <div className="text-sm text-gray-300">IOCs Tracked Daily</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
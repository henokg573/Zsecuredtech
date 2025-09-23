import { Network, Zap, Award, Target, Users, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

export default function CiscoCCIE() {
  const tracks = [
    {
      track: 'CCIE Enterprise Infrastructure',
      code: '400-101',
      focus: 'Enterprise networking infrastructure, including routing, switching, and network services',
      topics: ['Layer 2/3 Technologies', 'VPN Technologies', 'Infrastructure Security', 'Infrastructure Services']
    },
    {
      track: 'CCIE Security',
      code: '400-251', 
      focus: 'Advanced security technologies and implementation in complex network environments',
      topics: ['Security Concepts', 'Perimeter Security', 'Intrusion Prevention', 'Content Security']
    },
    {
      track: 'CCIE Data Center',
      code: '400-151',
      focus: 'Data center infrastructure including compute, storage, network, and automation',
      topics: ['Data Center Infrastructure', 'Network Infrastructure', 'Compute Platforms', 'Storage Networking']
    }
  ];

  const examFormat = [
    {
      phase: 'Written Exam',
      duration: '120 minutes',
      format: 'Multiple choice, drag-and-drop, simulation',
      passing: '825/1000 points'
    },
    {
      phase: 'Lab Exam', 
      duration: '8 hours',
      format: 'Hands-on configuration and troubleshooting',
      passing: '80% overall score'
    }
  ];

  const prerequisites = [
    'CCNP certification or equivalent experience',
    '5+ years of networking experience',
    'Expert-level knowledge in chosen track',
    'Hands-on lab experience with Cisco equipment'
  ];

  return (
    <section className="py-20 bg-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Cisco CCIE Training
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Cisco Certified Internetwork Expert - The most prestigious networking certification, 
            validating expert-level knowledge and hands-on skills in complex network solutions.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Available Tracks</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {tracks.map((track, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-600 hover:bg-slate-800/80 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Network className="w-6 h-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-xl text-white">{track.track}</CardTitle>
                  <CardDescription className="text-gray-300">
                    Exam Code: {track.code}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm mb-4">{track.focus}</p>
                  <h4 className="font-semibold text-blue-400 mb-3">Key Topics:</h4>
                  <div className="space-y-2">
                    {track.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-3 h-3 text-blue-400 mr-2" />
                        {topic}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="bg-slate-800/50 border-slate-600">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Exam Format</CardTitle>
              <CardDescription className="text-gray-300">
                CCIE certification requires passing both written and lab examinations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {examFormat.map((exam, index) => (
                  <div key={index} className="border border-slate-600 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-3">{exam.phase}</h4>
                    <div className="space-y-2 text-sm text-gray-300">
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span>{exam.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Format:</span>
                        <span>{exam.format}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Passing Score:</span>
                        <span>{exam.passing}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-lg text-white">Training Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Duration:</span>
                  <span className="text-white">12 Weeks</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Level:</span>
                  <span className="text-white">Expert</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Lab Access:</span>
                  <span className="text-white">24/7</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Mentoring:</span>
                  <span className="text-white">1-on-1</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Practice Exams:</span>
                  <span className="text-white">Unlimited</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-red-900/20 border-red-700">
              <CardHeader>
                <CardTitle className="text-lg text-red-400">Prerequisites</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-red-100">
                  {prerequisites.map((prerequisite, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-red-400 mr-2 mt-0.5" />
                      {prerequisite}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-green-900/20 border-green-700">
              <CardHeader>
                <CardTitle className="text-lg text-green-400">Elite Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-2">$120K+</div>
                  <div className="text-sm text-green-100">Average CCIE salary</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl px-8 py-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Join the CCIE Elite
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Less than 1% of network professionals achieve CCIE status. Join this elite group 
              with our comprehensive training program and expert mentorship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                <Award className="w-5 h-5 mr-2" />
                Start CCIE Journey
              </Button>
              <Button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Award, Users, Clock, Shield } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function About() {
  const stats = [
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: Users, value: '500+', label: 'Clients Protected' },
    { icon: Clock, value: '24/7', label: 'Support Available' },
    { icon: Shield, value: '99.9%', label: 'Success Rate' }
  ];

  const team = [
      {
          name: "Faris Mubarek",
          role: "CEO, Chief Security Officer, Cybersecurity Specialist | Senior InfoSec Consultant",
          image: "https://th.bing.com/th/id/OIP.8SAvLLmaiTHwtWhB1SG_ZQAAAA?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
          credentials: "CISSP, CISM, ISO/IEC 27001/9001, GDPR",
      },
      {
          name: "Samson H",
          role: "CTO, Co-founder & CEO - Navigate Technology Solutions Inc",
          image: "https://media.licdn.com/dms/image/v2/D4E03AQFMFLCW_xN0uA/profile-displayphoto-shrink_200_200/B4EZardek2HIAY-/0/1746633355818?e=2147483647&v=beta&t=bY8c4BJLavzOGb91aCnazyCTvP_IRuNaQlKdG2ypE70",
          credentials: "CEH, GCIH",
      },
      {
          name: "Henok Girma",
          role: "Cybersecurity Specialist | ISO 27001 Lead Implementer | IT Auditor",
          image: "https://henokg573.github.io/assets/images/me.jpg",
          credentials: "CC, ISO/IEC 27001 Lead Implementer",
      },
      {
          name: "Yeabsira Alemayehu",
          role: "Incident Response Lead",
          image: "https://media.licdn.com/dms/image/v2/D5603AQGOMeymgruLEQ/profile-displayphoto-shrink_200_200/B56Zb3F8HjH4Ag-/0/1747902252000?e=2147483647&v=beta&t=GDxyPwrM83BSc4d0akxHJ5iA1mRASV6Ity9Q0izpZIU",
          credentials: "GCFA, GNFA",
      },
  ];

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Why Choose ZSecuredTech?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a team of cybersecurity experts dedicated to protecting
            businesses from evolving digital threats with cutting-edge
            technology and proven methodologies.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-green-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Our Mission & Values
            </h3>
            <div className="space-y-6">
              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600">
                <h4 className="font-semibold text-green-400 mb-2">
                  🎯 Mission
                </h4>
                <p className="text-gray-300">
                  To provide world-class cybersecurity solutions that enable
                  businesses to operate securely and confidently in the digital
                  age, protecting what matters most.
                </p>
              </div>
              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600">
                <h4 className="font-semibold text-green-400 mb-2">
                  🔒 Security First
                </h4>
                <p className="text-gray-300">
                  We believe that security should never be an afterthought. Our
                  proactive approach ensures threats are identified and
                  neutralized before they can cause damage.
                </p>
              </div>
              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600">
                <h4 className="font-semibold text-green-400 mb-2">
                  🤝 Partnership
                </h4>
                <p className="text-gray-300">
                  We work as an extension of your team, providing transparent
                  communication and collaborative solutions tailored to your
                  specific needs.
                </p>
              </div>
              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600">
                <h4 className="font-semibold text-green-400 mb-2">
                  📈 Innovation
                </h4>
                <p className="text-gray-300">
                  Staying ahead of emerging threats through continuous learning,
                  research, and implementation of the latest security
                  technologies.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <ImageWithFallback
              src="./image/background.png"
              alt="Secure Ethiopia"
              className="w-full h-auto rounded-2xl shadow-xl border border-slate-700"
            />
          </div>
        </div>

        {/* Team */}
        <div>
          <h3 className="text-2xl font-bold text-white text-center mb-12">
            Meet Our Security Experts
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center bg-slate-700/30 rounded-lg p-6 border border-slate-600 hover:bg-slate-700/50 transition-colors"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-green-400">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold text-white mb-1">{member.name}</h4>
                <p className="text-gray-300 mb-2">{member.role}</p>
                <p className="text-sm text-green-400">{member.credentials}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-20 text-center">
          <h3 className="text-lg font-semibold text-white mb-8">
            Our Certifications
          </h3>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="px-4 py-2 bg-slate-700 rounded-lg border border-slate-600">
              <span className="font-semibold text-gray-300">CISSP</span>
            </div>
            <div className="px-4 py-2 bg-slate-700 rounded-lg border border-slate-600">
              <span className="font-semibold text-gray-300">CISM</span>
            </div>
            <div className="px-4 py-2 bg-slate-700 rounded-lg border border-slate-600">
              <span className="font-semibold text-gray-300">CEH</span>
            </div>
            <div className="px-4 py-2 bg-slate-700 rounded-lg border border-slate-600">
              <span className="font-semibold text-gray-300">GCIH</span>
            </div>
            <div className="px-4 py-2 bg-slate-700 rounded-lg border border-slate-600">
              <span className="font-semibold text-gray-300">CISA</span>
            </div>
            <div className="px-4 py-2 bg-slate-700 rounded-lg border border-slate-600">
              <span className="font-semibold text-gray-300">ISO 27001/9001: Lead Auditor and Implementer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
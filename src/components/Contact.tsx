import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'info@zsecuredtech.com',
      subContent: 'henokgirma@zsecuredtech.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+251926360609',
      subContent: '24/7 Emergency Hotline'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Bole Medanalem, Oromia Tower #210',
      subContent: 'Addis Ababa, Ethiopia'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon - Fri: 8:30AM - 6PM EST',
      subContent: '24/7 Emergency Support'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to secure your business? Contact our cybersecurity experts for a free consultation 
            and learn how we can protect your digital assets.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <Card className="bg-slate-800/50 border-slate-700 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-green-400"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-green-400"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name
                    </label>
                    <Input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-green-400"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-green-400"
                      placeholder="Tell us about your security needs..."
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{info.title}</h3>
                    <p className="text-gray-300">{info.content}</p>
                    <p className="text-sm text-gray-400">{info.subContent}</p>
                  </div>
                </div>
              );
            })}

            {/* Emergency Contact */}
            <div className="bg-red-900/30 border border-red-700 rounded-lg p-6 mt-8">
              <h3 className="font-semibold text-red-400 mb-2">🚨 Security Emergency?</h3>
              <p className="text-red-300 mb-3">
                If you're experiencing an active security incident, contact our emergency response team immediately.
              </p>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Emergency Hotline: +251 926360609
              </Button>
            </div>

            {/* Quick Response Promise */}
            <div className="bg-green-900/20 border border-green-700 rounded-lg p-6">
              <h3 className="font-semibold text-green-400 mb-2">⚡ Quick Response Guarantee</h3>
              <ul className="text-green-300 space-y-1 text-sm">
                <li>• General inquiries: Within 2 hours</li>
                <li>• Security assessments: Within 24 hours</li>
                <li>• Emergency incidents: Within 15 minutes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
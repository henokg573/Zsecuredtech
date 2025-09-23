import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import HexagonalBackground from './HexagonalBackground';
import landingImage from 'figma:asset/d2e6c57664c384d4db73e7b9a56bd2380f7e51fb.png';
import contact from 'Contact';

export default function Hero() {
  return (
    <section className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <HexagonalBackground />
      
      {/* Main Content */}
      <div className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Main Headline */}
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-8">
              WE MAKE YOUR BUSINESS{' '}
              <span className="text-cyan-400">CYBER CRIME RESILIENT!</span>
            </h1>
            
            {/* Subheading */}
            <p className="text-2xl lg:text-3xl text-gray-300 mb-12">
              We Are Your IT Security Guards.
            </p>
            
            {/* CTA Button */}
            <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25">
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70"></div>
    </section>
  );
}
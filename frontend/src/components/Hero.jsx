import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Coffee } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Creative Background with Coffee Theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        {/* Organic Coffee-inspired Shapes */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-amber-200/30 to-orange-300/20 rounded-full blur-xl transform rotate-12"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-yellow-200/25 to-amber-300/15 rounded-full blur-xl transform -rotate-12"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-200/10 to-amber-200/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Logo/Brand */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Coffee className="w-12 h-12 text-amber-700" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full animate-pulse"></div>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-amber-800 via-orange-700 to-amber-900 bg-clip-text text-transparent" style={{fontFamily: 'Playfair Display, serif'}}>
              VoltraDev
            </h1>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-xl md:text-2xl lg:text-3xl text-amber-800 mb-8 font-medium" style={{fontFamily: 'Montserrat, sans-serif'}}>
          Brewing Perfect Digital Solutions with Passion
        </p>

        {/* Description */}
        <p className="text-lg md:text-xl text-amber-700/80 mb-12 max-w-3xl mx-auto leading-relaxed">
          Tim developer spesialis website modern & cepat yang menghadirkan solusi digital berkualitas tinggi dengan sentuhan kreatif dan inovatif.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
          >
            <span className="font-semibold">Lihat Portfolio</span>
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-amber-600 text-amber-700 hover:bg-amber-50 px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Hubungi Kami
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-amber-200/50 shadow-lg">
            <div className="text-3xl font-bold text-amber-800 mb-2">50+</div>
            <div className="text-amber-700">Project Completed</div>
          </div>
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-amber-200/50 shadow-lg">
            <div className="text-3xl font-bold text-amber-800 mb-2">5</div>
            <div className="text-amber-700">Expert Developers</div>
          </div>
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-amber-200/50 shadow-lg">
            <div className="text-3xl font-bold text-amber-800 mb-2">100%</div>
            <div className="text-amber-700">Client Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
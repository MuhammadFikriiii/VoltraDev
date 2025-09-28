import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Coffee, Phone, Mail, MapPin, Github, Linkedin, Instagram, Twitter, ArrowRight, Heart, Zap } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Website Development',
    'E-Commerce Solutions',
    'Mobile App Development',
    'UI/UX Design',
    'SEO Optimization',
    'Website Maintenance'
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#skills' },
    { name: 'Process', href: '#process' },
    { name: 'Team', href: '#team' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
    { name: 'FAQ', href: '#faq' }
  ];

  const socialLinks = [
    { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, href: '#', color: 'hover:text-pink-400' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: '#', color: 'hover:text-blue-400' },
    { name: 'Github', icon: <Github className="w-5 h-5" />, href: '#', color: 'hover:text-gray-400' },
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, href: '#', color: 'hover:text-blue-300' }
  ];

  const techStack = [
    'React.js', 'Laravel', 'Vue.js', 'Node.js', 'PHP', 'MySQL', 'MongoDB', 'Tailwind CSS'
  ];

  return (
    <footer className="bg-gradient-to-br from-amber-900 via-orange-900 to-amber-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Coffee className="w-10 h-10 text-amber-300" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full animate-pulse"></div>
              </div>
              <h3 className="text-3xl font-bold text-amber-100" style={{fontFamily: 'Playfair Display, serif'}}>
                VoltraDev
              </h3>
            </div>
            <p className="text-amber-200/90 leading-relaxed mb-6">
              Tim developer spesialis website modern & cepat yang menghadirkan solusi digital berkualitas tinggi dengan sentuhan kreatif dan inovatif.
            </p>
            <div className="flex items-center space-x-2 text-amber-300 mb-4">
              <Zap className="w-5 h-5" />
              <span className="text-sm font-medium">Brewing Digital Excellence Since 2020</span>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-amber-200 transition-all duration-300 transform hover:scale-110 hover:bg-white/20 ${social.color}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold text-amber-100 mb-6" style={{fontFamily: 'Montserrat, sans-serif'}}>
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a href="#" className="text-amber-200/80 hover:text-amber-100 transition-colors duration-300 flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-2 transition-transform duration-300">{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-amber-100 mb-6" style={{fontFamily: 'Montserrat, sans-serif'}}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-amber-200/80 hover:text-amber-100 transition-colors duration-300 flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-2 transition-transform duration-300">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-xl font-bold text-amber-100 mb-6" style={{fontFamily: 'Montserrat, sans-serif'}}>
              Get In Touch
            </h4>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-300" />
                <a href="https://wa.me/6285248867449" className="text-amber-200/90 hover:text-amber-100 transition-colors">
                  0852-4886-7449
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-300" />
                <a href="mailto:voltra724@gmail.com" className="text-amber-200/90 hover:text-amber-100 transition-colors">
                  voltra724@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-amber-300" />
                <span className="text-amber-200/90">Indonesia</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-amber-300/20">
              <h5 className="font-semibold text-amber-100 mb-3">Stay Updated</h5>
              <p className="text-sm text-amber-200/80 mb-4">Subscribe untuk tips & update terbaru</p>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white/20 border border-amber-300/30 rounded-lg text-white placeholder-amber-200/60 focus:outline-none focus:border-amber-300 focus:bg-white/30 transition-all"
                />
                <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white p-2">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="border-t border-amber-700/50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold text-amber-100 mb-4">Tech Stack We Master</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech) => (
                <span key={tech} className="px-4 py-2 bg-white/10 text-amber-200 rounded-full text-sm font-medium border border-amber-300/20 hover:bg-white/20 transition-colors duration-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-amber-700/50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 text-amber-200/80 mb-4 md:mb-0">
              <span>&copy; {currentYear} VoltraDev. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-6 text-amber-200/80">
              <a href="#" className="hover:text-amber-100 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-amber-100 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-amber-100 transition-colors duration-300">Sitemap</a>
            </div>
            
            <div className="flex items-center space-x-2 text-amber-200/80 mt-4 md:mt-0">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current animate-pulse" />
              <span>by VoltraDev Team</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
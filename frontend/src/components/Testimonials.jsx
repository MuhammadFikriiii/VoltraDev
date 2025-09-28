import React, { useState } from 'react';
import { Card } from './ui/card';
import { Avatar } from './ui/avatar';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Budi Santoso',
      position: 'CEO',
      company: 'Kopi Nusantara',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      testimonial: 'VoltraDev benar-benar mengubah bisnis kami! Website e-commerce yang mereka buat sangat user-friendly dan loading-nya super cepat. Penjualan online kami meningkat 300% dalam 3 bulan pertama. Tim yang sangat profesional dan responsif.',
      project: 'E-Commerce Platform',
      category: 'E-Commerce'
    },
    {
      id: 2,
      name: 'Sari Dewi',
      position: 'Marketing Director',
      company: 'PT Maju Jaya',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      testimonial: 'Kualitas website company profile yang dibuat VoltraDev luar biasa! Design-nya elegant, SEO-optimized, dan mudah di-maintain. Sejak website baru launch, inquiry dari calon klien meningkat drastis. Highly recommended!',
      project: 'Company Profile Website',
      category: 'Corporate'
    },
    {
      id: 3,
      name: 'Ahmad Rizki',
      position: 'Founder',
      company: 'EduTech Indonesia',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      testimonial: 'Platform LMS yang dibangun VoltraDev sangat powerful! Fitur video streaming, quiz system, dan progress tracking bekerja dengan sempurna. Students dan instructors sangat puas dengan user experience-nya. Worth every penny!',
      project: 'Learning Management System',
      category: 'Education'
    },
    {
      id: 4,
      name: 'Linda Permata',
      position: 'Owner',
      company: 'Resto Sederhana',
      image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 4,
      testimonial: 'Mobile app yang dibuat untuk restaurant kami sangat membantu! Fitur online ordering dan table booking berjalan lancar. Customer jadi lebih mudah order dan kami bisa manage reservation dengan lebih efisien.',
      project: 'Restaurant Mobile App',
      category: 'Mobile App'
    },
    {
      id: 5,
      name: 'Fadli Rahman',
      position: 'IT Manager',
      company: 'CV Digital Solusi',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      testimonial: 'Dashboard analytics yang dibangun VoltraDev sangat membantu decision making kami. Real-time data visualization-nya akurat dan interface-nya intuitive. Team support mereka juga sangat responsive untuk maintenance.',
      project: 'Analytics Dashboard',
      category: 'Dashboard'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-800 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
            Testimoni <span className="bg-gradient-to-r from-orange-600 to-amber-700 bg-clip-text text-transparent">Klien</span>
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-amber-700/80 max-w-3xl mx-auto leading-relaxed">
            Apa kata klien-klien kami tentang kualitas layanan dan hasil kerja VoltraDev
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="p-8 md:p-12 bg-white/90 backdrop-blur-sm border-amber-200/50 shadow-2xl relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 text-amber-200">
              <Quote className="w-16 h-16" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Client Info */}
              <div className="flex items-center space-x-6 mb-8">
                <div className="relative">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-amber-200 shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-white fill-current" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-amber-800 mb-1" style={{fontFamily: 'Montserrat, sans-serif'}}>
                    {testimonials[currentTestimonial].name}
                  </h3>
                  <p className="text-amber-700 mb-2">
                    {testimonials[currentTestimonial].position} at {testimonials[currentTestimonial].company}
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      {renderStars(testimonials[currentTestimonial].rating)}
                    </div>
                    <Badge className="bg-amber-100 text-amber-800">
                      {testimonials[currentTestimonial].category}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg md:text-xl text-amber-700/90 leading-relaxed italic mb-6">
                "{testimonials[currentTestimonial].testimonial}"
              </blockquote>

              {/* Project Badge */}
              <div className="flex items-center justify-between">
                <Badge className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-2">
                  Project: {testimonials[currentTestimonial].project}
                </Badge>
                
                {/* Navigation */}
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={prevTestimonial}
                    className="border-amber-300 text-amber-700 hover:bg-amber-50"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={nextTestimonial}
                    className="border-amber-300 text-amber-700 hover:bg-amber-50"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? 'bg-amber-600 scale-125'
                  : 'bg-amber-300 hover:bg-amber-400'
              }`}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-amber-200/50 shadow-lg">
            <div className="text-3xl font-bold text-amber-800 mb-2">100%</div>
            <div className="text-amber-700">Client Satisfaction</div>
          </div>
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-amber-200/50 shadow-lg">
            <div className="text-3xl font-bold text-amber-800 mb-2">50+</div>
            <div className="text-amber-700">Happy Clients</div>
          </div>
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-amber-200/50 shadow-lg">
            <div className="text-3xl font-bold text-amber-800 mb-2">4.9</div>
            <div className="text-amber-700">Average Rating</div>
          </div>
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-amber-200/50 shadow-lg">
            <div className="text-3xl font-bold text-amber-800 mb-2">24/7</div>
            <div className="text-amber-700">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
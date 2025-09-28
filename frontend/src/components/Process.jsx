import React from 'react';
import { Card } from './ui/card';
import { MessageCircle, Palette, Code, TestTube, Rocket, Settings } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      id: 1,
      title: 'Diskusi & Konsultasi',
      description: 'Kami mendengarkan kebutuhan Anda secara detail dan memberikan konsultasi terbaik untuk solusi yang tepat.',
      icon: <MessageCircle className="w-8 h-8" />,
      color: 'from-blue-500 to-purple-600',
      bgColor: 'from-blue-50 to-purple-50',
      duration: '1-2 Hari'
    },
    {
      id: 2,
      title: 'Design & Wireframe',
      description: 'Tim UI/UX kami merancang design yang menarik dan user-friendly sesuai dengan brand identity Anda.',
      icon: <Palette className="w-8 h-8" />,
      color: 'from-pink-500 to-rose-600',
      bgColor: 'from-pink-50 to-rose-50',
      duration: '3-5 Hari'
    },
    {
      id: 3,
      title: 'Development',
      description: 'Pengembangan website dengan teknologi terkini, clean code, dan optimasi performa terbaik.',
      icon: <Code className="w-8 h-8" />,
      color: 'from-green-500 to-teal-600',
      bgColor: 'from-green-50 to-teal-50',
      duration: '7-14 Hari'
    },
    {
      id: 4,
      title: 'Testing & QA',
      description: 'Testing menyeluruh pada berbagai device dan browser untuk memastikan kualitas dan performa optimal.',
      icon: <TestTube className="w-8 h-8" />,
      color: 'from-orange-500 to-red-600',
      bgColor: 'from-orange-50 to-red-50',
      duration: '2-3 Hari'
    },
    {
      id: 5,
      title: 'Launch & Deploy',
      description: 'Website di-deploy ke server pilihan Anda dengan konfigurasi optimal dan SSL certificate.',
      icon: <Rocket className="w-8 h-8" />,
      color: 'from-indigo-500 to-blue-600',
      bgColor: 'from-indigo-50 to-blue-50',
      duration: '1 Hari'
    },
    {
      id: 6,
      title: 'Maintenance & Support',
      description: 'Support berkelanjutan, update rutin, backup otomatis, dan monitoring untuk menjaga performa website.',
      icon: <Settings className="w-8 h-8" />,
      color: 'from-amber-500 to-orange-600',
      bgColor: 'from-amber-50 to-orange-50',
      duration: 'Ongoing'
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-800 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
            Proses <span className="bg-gradient-to-r from-orange-600 to-amber-700 bg-clip-text text-transparent">Kerja</span>
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-amber-700/80 max-w-3xl mx-auto leading-relaxed">
            Metodologi kerja yang terstruktur dan transparan untuk menghasilkan website berkualitas tinggi
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-300 to-orange-400 rounded-full"></div>

          {/* Process Steps */}
          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, index) => (
              <div key={step.id} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-12`}>
                {/* Content Card */}
                <div className="flex-1 lg:max-w-md">
                  <Card className={`p-8 bg-gradient-to-br ${step.bgColor} border-amber-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105`}>
                    <div className="flex items-start space-x-4 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-2xl font-bold text-amber-800" style={{fontFamily: 'Montserrat, sans-serif'}}>
                            {step.title}
                          </h3>
                          <span className="text-sm font-medium text-amber-600 bg-amber-100 px-3 py-1 rounded-full">
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-amber-700/80 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Timeline Number */}
                <div className="relative z-10 my-8 lg:my-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl">
                    {step.id}
                  </div>
                  <div className="hidden lg:block absolute top-full left-1/2 transform -translate-x-1/2 mt-4 text-center">
                    <span className="text-sm font-medium text-amber-700 bg-white px-3 py-1 rounded-full shadow-md border border-amber-200">
                      Step {step.id}
                    </span>
                  </div>
                </div>

                {/* Spacer for alignment */}
                <div className="flex-1 lg:max-w-md hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-amber-600 to-orange-600 p-8 rounded-3xl text-white shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4" style={{fontFamily: 'Montserrat, sans-serif'}}>
              Siap Memulai Project Anda?
            </h3>
            <p className="text-xl leading-relaxed mb-6 opacity-95">
              Hubungi kami sekarang untuk konsultasi gratis dan dapatkan quote terbaik untuk project website Anda!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-amber-700 px-8 py-4 rounded-full font-semibold hover:bg-amber-50 transition-colors duration-300 shadow-lg">
                Konsultasi Gratis
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors duration-300">
                Lihat Paket Harga
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
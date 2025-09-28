import React, { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ChevronDown, ChevronUp, HelpCircle, Clock, CreditCard, Shield, Zap } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqData = [
    {
      id: 1,
      category: 'Umum',
      icon: <HelpCircle className="w-5 h-5" />,
      color: 'from-blue-500 to-indigo-600',
      question: 'Berapa lama waktu pengerjaan website?',
      answer: 'Waktu pengerjaan bervariasi tergantung kompleksitas project. Landing page simple: 3-7 hari, Company profile: 1-2 minggu, E-commerce: 2-4 minggu, Web app complex: 1-3 bulan. Kami akan memberikan timeline detail setelah diskusi requirement.'
    },
    {
      id: 2,
      category: 'Pembayaran',
      icon: <CreditCard className="w-5 h-5" />,
      color: 'from-green-500 to-emerald-600',
      question: 'Bagaimana sistem pembayaran dan apakah ada DP?',
      answer: 'Sistem pembayaran: DP 50% setelah deal + agreement, pelunasan 50% setelah website selesai dan testing. Kami terima transfer bank, e-wallet (OVO, DANA, GoPay), atau crypto. Invoice dan kontrak akan disediakan untuk transparansi.'
    },
    {
      id: 3,
      category: 'Teknis',
      icon: <Zap className="w-5 h-5" />,
      color: 'from-purple-500 to-pink-600',
      question: 'Teknologi apa saja yang digunakan VoltraDev?',
      answer: 'Frontend: React.js, Vue.js, HTML5/CSS3, TypeScript, Tailwind CSS. Backend: Laravel, PHP, Node.js, Python. Database: MySQL, PostgreSQL, MongoDB. Infrastructure: AWS, Docker, CI/CD. Mobile: React Native, Flutter. Design: Figma, Adobe XD.'
    },
    {
      id: 4,
      category: 'Garansi',
      icon: <Shield className="w-5 h-5" />,
      color: 'from-orange-500 to-red-600',
      question: 'Apakah ada garansi dan support setelah website selesai?',
      answer: 'Ya! Kami memberikan garansi 3 bulan untuk bug fixing dan minor adjustment. Support teknis 1 tahun untuk konsultasi dan maintenance ringan. Tersedia juga paket maintenance bulanan untuk update konten, backup, security monitoring, dan feature enhancement.'
    },
    {
      id: 5,
      category: 'Umum',
      icon: <HelpCircle className="w-5 h-5" />,
      color: 'from-blue-500 to-indigo-600',
      question: 'Apakah website yang dibuat sudah SEO-friendly dan mobile responsive?',
      answer: 'Absolutely! Semua website yang kami buat sudah SEO-optimized (meta tags, structured data, sitemap, page speed optimization) dan fully responsive di semua device (mobile, tablet, desktop). Kami juga ensure cross-browser compatibility dan accessibility standards.'
    },
    {
      id: 6,
      category: 'Pembayaran',
      icon: <CreditCard className="w-5 h-5" />,
      color: 'from-green-500 to-emerald-600',
      question: 'Berapa harga pembuatan website di VoltraDev?',
      answer: 'Harga bervariasi sesuai kompleksitas: Landing page: Rp 2-5 juta, Company profile: Rp 5-15 juta, E-commerce: Rp 15-50 juta, Custom web app: Rp 30 juta+. Harga sudah include design, development, testing, dan deployment. Konsultasi gratis untuk quote akurat!'
    },
    {
      id: 7,
      category: 'Teknis',
      icon: <Zap className="w-5 h-5" />,
      color: 'from-purple-500 to-pink-600',
      question: 'Bagaimana dengan hosting dan domain? Apakah disediakan?',
      answer: 'Kami bantu carikan hosting dan domain terbaik sesuai kebutuhan. Bisa gunakan hosting existing klien atau kami rekomendasikan provider reliable (AWS, DigitalOcean, Niagahoster). Setup, konfigurasi, dan deployment kami handle. SSL certificate included!'
    },
    {
      id: 8,
      category: 'Garansi',
      icon: <Shield className="w-5 h-5" />,
      color: 'from-orange-500 to-red-600',
      question: 'Bagaimana proses revisi dan apakah ada batasan revisi?',
      answer: 'Proses revisi transparan dengan approval di setiap tahap. Design phase: 3x major revision free. Development phase: unlimited minor bug fix, 2x major feature revision. Revisi diluar scope akan dikenakan additional cost yang akan dikomunikasikan terlebih dahulu.'
    },
    {
      id: 9,
      category: 'Umum',
      icon: <HelpCircle className="w-5 h-5" />,
      color: 'from-blue-500 to-indigo-600',
      question: 'Apakah bisa custom fitur khusus sesuai kebutuhan bisnis?',
      answer: 'Tentu! Kami spesialis custom development. API integration, payment gateway, booking system, inventory management, CRM, dashboard analytics, multi-vendor marketplace, membership system - semua bisa dibuat sesuai business logic Anda. Consultation free untuk requirement analysis!'
    },
    {
      id: 10,
      category: 'Teknis',
      icon: <Zap className="w-5 h-5" />,
      color: 'from-purple-500 to-pink-600',
      question: 'Apakah website yang dibuat bisa diakses dengan mudah oleh klien untuk update konten?',
      answer: 'Yes! Kami buat CMS (Content Management System) yang user-friendly. Klien bisa update text, gambar, blog posts, products tanpa coding. Tutorial lengkap dan training disediakan. Tersedia juga admin dashboard untuk manage users, analytics, dan settings.'
    }
  ];

  const categories = [
    { name: 'Semua', count: faqData.length, color: 'from-amber-500 to-orange-600' },
    { name: 'Umum', count: faqData.filter(f => f.category === 'Umum').length, color: 'from-blue-500 to-indigo-600' },
    { name: 'Pembayaran', count: faqData.filter(f => f.category === 'Pembayaran').length, color: 'from-green-500 to-emerald-600' },
    { name: 'Teknis', count: faqData.filter(f => f.category === 'Teknis').length, color: 'from-purple-500 to-pink-600' },
    { name: 'Garansi', count: faqData.filter(f => f.category === 'Garansi').length, color: 'from-orange-500 to-red-600' }
  ];

  const [activeCategory, setActiveCategory] = useState('Semua');

  const filteredFAQs = activeCategory === 'Semua' 
    ? faqData 
    : faqData.filter(faq => faq.category === activeCategory);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-800 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
            FAQ & <span className="bg-gradient-to-r from-orange-600 to-amber-700 bg-clip-text text-transparent">Pertanyaan</span>
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-amber-700/80 max-w-3xl mx-auto leading-relaxed">
            Jawaban lengkap untuk pertanyaan yang sering ditanyakan tentang layanan VoltraDev
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category.name)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 ${
                activeCategory === category.name
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
              }`}
            >
              <span>{category.name}</span>
              <Badge className={`text-xs ${
                activeCategory === category.name
                  ? 'bg-white/20 text-white'
                  : 'bg-amber-200 text-amber-800'
              }`}>
                {category.count}
              </Badge>
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <Card key={faq.id} className="bg-white/90 backdrop-blur-sm border-amber-200/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-50"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 flex-1">
                    <div className={`w-10 h-10 bg-gradient-to-r ${faq.color} rounded-lg flex items-center justify-center text-white flex-shrink-0`}>
                      {faq.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-1">
                        <Badge className={`bg-gradient-to-r ${faq.color} text-white text-xs`}>
                          {faq.category}
                        </Badge>
                      </div>
                      <h3 className="text-lg font-semibold text-amber-800 text-left">
                        {faq.question}
                      </h3>
                    </div>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    {openFAQ === index ? (
                      <ChevronUp className="w-6 h-6 text-amber-600" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-amber-600" />
                    )}
                  </div>
                </div>
              </button>
              
              {/* Answer */}
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6">
                  <div className="pl-14">
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 rounded-lg border border-amber-200/50">
                      <p className="text-amber-700/90 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-8 rounded-3xl border border-amber-200/50 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-amber-800 mb-4">Masih Ada Pertanyaan Lain?</h3>
            <p className="text-amber-700/80 leading-relaxed mb-6">
              Tim kami siap membantu menjawab pertanyaan spesifik tentang project Anda. Konsultasi gratis dan friendly!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.open('https://wa.me/6285248867449', '_blank')}
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Chat di WhatsApp
              </button>
              <button 
                onClick={() => window.location.href = 'mailto:voltra724@gmail.com'}
                className="border-2 border-amber-600 text-amber-700 hover:bg-amber-50 px-8 py-3 rounded-full font-semibold transition-colors duration-300"
              >
                Kirim Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
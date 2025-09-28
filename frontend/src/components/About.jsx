import React from 'react';
import { Card } from './ui/card';
import { Target, Eye, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-800 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
            Tentang <span className="bg-gradient-to-r from-orange-600 to-amber-700 bg-clip-text text-transparent">VoltraDev</span>
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-amber-700/80 max-w-3xl mx-auto leading-relaxed">
            Tim developer spesialis website modern & cepat yang menghadirkan solusi digital berkualitas tinggi dengan sentuhan kreatif dan inovatif.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-amber-200/50">
              <h3 className="text-2xl font-bold text-amber-800 mb-4" style={{fontFamily: 'Montserrat, sans-serif'}}>
                Siapa Kami?
              </h3>
              <p className="text-amber-700/80 leading-relaxed mb-6">
                VoltraDev adalah tim developer berpengalaman yang terdiri dari 5 expert yang berfokus pada pengembangan website modern, cepat, dan user-friendly. Kami menggabungkan keahlian teknis dengan kreativitas untuk menghasilkan solusi digital yang tidak hanya fungsional, tetapi juga memukau secara visual.
              </p>
              <p className="text-amber-700/80 leading-relaxed">
                Dengan pengalaman lebih dari 50+ proyek yang berhasil diselesaikan, kami memahami kebutuhan unik setiap klien dan selalu berkomitmen untuk memberikan hasil terbaik.
              </p>
            </div>

            {/* USP */}
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-8 rounded-3xl border border-amber-200/50">
              <h4 className="text-xl font-bold text-amber-800 mb-4">Keunggulan Unik Kami:</h4>
              <ul className="space-y-3 text-amber-700">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Website loading super cepat dengan optimasi performa terdepan</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Design responsif yang sempurna di semua device</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>SEO-optimized untuk ranking Google terbaik</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Support & maintenance berkelanjutan</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Content - Vision & Mission */}
          <div className="space-y-8">
            <Card className="p-8 bg-white/90 backdrop-blur-sm border-amber-200/50 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-amber-800" style={{fontFamily: 'Montserrat, sans-serif'}}>Visi</h3>
              </div>
              <p className="text-amber-700/80 leading-relaxed">
                Menjadi tim developer terdepan yang menghadirkan solusi digital inovatif dan berkualitas tinggi, membantu bisnis berkembang di era digital dengan website yang powerful dan user-friendly.
              </p>
            </Card>

            <Card className="p-8 bg-white/90 backdrop-blur-sm border-amber-200/50 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-amber-700 rounded-full flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-amber-800" style={{fontFamily: 'Montserrat, sans-serif'}}>Misi</h3>
              </div>
              <ul className="space-y-3 text-amber-700/80">
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Mengembangkan website modern dengan teknologi terkini</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Memberikan layanan berkualitas tinggi dengan harga kompetitif</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Membangun hubungan jangka panjang dengan klien</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Terus berinovasi mengikuti perkembangan teknologi</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-amber-600 to-orange-600 text-white shadow-xl">
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 mr-4" />
                <h3 className="text-2xl font-bold" style={{fontFamily: 'Montserrat, sans-serif'}}>Mengapa Pilih Kami?</h3>
              </div>
              <p className="leading-relaxed opacity-95">
                Dengan kombinasi keahlian teknis, kreativitas, dan komitmen terhadap kualitas, kami tidak hanya membuat website - kami menciptakan pengalaman digital yang memorable dan hasil yang terukur untuk bisnis Anda.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
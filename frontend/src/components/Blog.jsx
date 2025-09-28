import React, { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Calendar, User, ArrowRight, Clock, Eye, Tag } from 'lucide-react';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: '10 Trend Web Development Terbaru di 2025',
      slug: '10-trend-web-development-2025',
      excerpt: 'Pelajari teknologi dan trend terbaru dalam web development yang akan mendominasi tahun 2025, mulai dari AI integration hingga micro-frontends.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      category: 'Technology',
      author: 'Rizki Pratama',
      publishDate: '15 Jan 2025',
      readTime: '8 min read',
      views: 1420,
      tags: ['Web Development', 'Technology', 'Trends', '2025'],
      featured: true
    },
    {
      id: 2,
      title: 'Cara Optimasi Website untuk Loading Speed Maksimal',
      slug: 'optimasi-website-loading-speed',
      excerpt: 'Tips dan trik praktis untuk meningkatkan performa website Anda hingga loading speed dibawah 2 detik dengan teknik advanced optimization.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      category: 'Tutorial',
      author: 'Ahmad Fajar',
      publishDate: '12 Jan 2025',
      readTime: '12 min read',
      views: 2156,
      tags: ['Performance', 'Optimization', 'Tutorial', 'Speed'],
      featured: false
    },
    {
      id: 3,
      title: 'UI/UX Design Principles untuk Website E-Commerce',
      slug: 'uiux-design-ecommerce-principles',
      excerpt: 'Panduan lengkap merancang user experience yang converting untuk toko online, dari landing page hingga checkout process yang smooth.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Design',
      author: 'Maya Sari',
      publishDate: '10 Jan 2025',
      readTime: '10 min read',
      views: 1876,
      tags: ['UI/UX', 'E-Commerce', 'Design', 'Conversion'],
      featured: true
    },
    {
      id: 4,
      title: 'Studi Kasus: Meningkatkan Konversi Website 300%',
      slug: 'studi-kasus-meningkatkan-konversi-300-persen',
      excerpt: 'Analisis mendalam bagaimana kami membantu klien meningkatkan conversion rate dari 2% menjadi 8% melalui optimization strategis.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      category: 'Case Study',
      author: 'Rizki Pratama',
      publishDate: '8 Jan 2025',
      readTime: '15 min read',
      views: 3241,
      tags: ['Case Study', 'Conversion', 'Optimization', 'Analytics'],
      featured: false
    },
    {
      id: 5,
      title: 'Laravel vs React: Memilih Tech Stack yang Tepat',
      slug: 'laravel-vs-react-memilih-tech-stack',
      excerpt: 'Perbandingan detail antara Laravel dan React, kapan menggunakan masing-masing, dan bagaimana mengkombinasikan keduanya untuk hasil optimal.',
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      category: 'Technology',
      author: 'Ahmad Fajar',
      publishDate: '5 Jan 2025',
      readTime: '11 min read',
      views: 1654,
      tags: ['Laravel', 'React', 'Tech Stack', 'Comparison'],
      featured: false
    },
    {
      id: 6,
      title: 'Mobile-First Design: Best Practices 2025',
      slug: 'mobile-first-design-best-practices-2025',
      excerpt: 'Strategi dan implementasi mobile-first design yang efektif untuk website modern dengan focus pada user experience di semua device.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      category: 'Design',
      author: 'Maya Sari',
      publishDate: '3 Jan 2025',
      readTime: '9 min read',
      views: 987,
      tags: ['Mobile First', 'Responsive', 'Design', 'UX'],
      featured: true
    }
  ];

  const categories = [
    { id: 'all', name: 'Semua Artikel', count: blogPosts.length, color: 'from-amber-500 to-orange-600' },
    { id: 'Technology', name: 'Technology', count: blogPosts.filter(p => p.category === 'Technology').length, color: 'from-blue-500 to-indigo-600' },
    { id: 'Tutorial', name: 'Tutorial', count: blogPosts.filter(p => p.category === 'Tutorial').length, color: 'from-green-500 to-emerald-600' },
    { id: 'Design', name: 'Design', count: blogPosts.filter(p => p.category === 'Design').length, color: 'from-purple-500 to-pink-600' },
    { id: 'Case Study', name: 'Case Study', count: blogPosts.filter(p => p.category === 'Case Study').length, color: 'from-orange-500 to-red-600' }
  ];

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-800 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
            Blog & <span className="bg-gradient-to-r from-orange-600 to-amber-700 bg-clip-text text-transparent">Artikel</span>
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-amber-700/80 max-w-3xl mx-auto leading-relaxed">
            Tips, tutorial, dan insight terbaru seputar web development, design, dan teknologi
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-amber-800 mb-8" style={{fontFamily: 'Montserrat, sans-serif'}}>
            Artikel Pilihan
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.slice(0, 3).map((post) => (
              <Card key={post.id} className="group overflow-hidden bg-white/90 backdrop-blur-sm border-amber-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-amber-600 to-orange-600 text-white">
                      Featured
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className={`bg-gradient-to-r ${categories.find(c => c.id === post.category)?.color || 'from-gray-500 to-gray-600'} text-white`}>
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-amber-600 text-sm">
                      <Eye className="w-4 h-4 mr-1" />
                      {post.views.toLocaleString()}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-amber-800 mb-3 line-clamp-2 group-hover:text-amber-700 transition-colors" style={{fontFamily: 'Montserrat, sans-serif'}}>
                    {post.title}
                  </h3>
                  
                  <p className="text-amber-700/80 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-amber-600 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="w-3 h-3 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {post.publishDate}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white">
                    <span>Baca Selengkapnya</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-white/80 text-amber-800 hover:bg-amber-100 border border-amber-200'
              }`}
            >
              <span>{category.name}</span>
              <Badge className={`text-xs ${
                activeCategory === category.id
                  ? 'bg-white/20 text-white'
                  : 'bg-amber-200 text-amber-800'
              }`}>
                {category.count}
              </Badge>
            </button>
          ))}
        </div>

        {/* All Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="group overflow-hidden bg-white/90 backdrop-blur-sm border-amber-200/50 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105">
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {post.featured && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-amber-600 to-orange-600 text-white text-xs">
                      Featured
                    </Badge>
                  </div>
                )}
              </div>
              
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <Badge className={`bg-gradient-to-r ${categories.find(c => c.id === post.category)?.color || 'from-gray-500 to-gray-600'} text-white text-xs`}>
                    {post.category}
                  </Badge>
                  <div className="flex items-center text-amber-600 text-xs">
                    <Eye className="w-3 h-3 mr-1" />
                    {post.views.toLocaleString()}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-amber-800 mb-2 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-amber-700/80 text-sm leading-relaxed mb-3 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-amber-600 mb-3">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {post.publishDate}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                
                <Button size="sm" className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white">
                  Baca Artikel
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
            Lihat Semua Artikel
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
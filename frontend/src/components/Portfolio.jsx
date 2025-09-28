import React, { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Coffee Shop',
      category: 'ecommerce',
      description: 'Platform e-commerce modern untuk toko kopi dengan sistem pembayaran terintegrasi dan dashboard admin yang powerful.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      technologies: ['Laravel', 'React', 'MySQL', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Corporate Website',
      category: 'company',
      description: 'Website company profile yang elegant dan professional dengan CMS custom dan optimasi SEO terbaik.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      technologies: ['PHP', 'JavaScript', 'PostgreSQL', 'CSS3'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 3,
      title: 'Admin Dashboard',
      category: 'dashboard',
      description: 'Dashboard analytics dengan real-time data visualization dan sistem reporting yang comprehensive.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 4,
      title: 'Restaurant Mobile App',
      category: 'mobile',
      description: 'Aplikasi mobile untuk restaurant dengan fitur order online, table booking, dan customer loyalty program.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      technologies: ['React Native', 'Firebase', 'Stripe', 'Redux'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Learning Management System',
      category: 'ecommerce',
      description: 'Platform e-learning dengan video streaming, quiz system, dan progress tracking untuk institusi pendidikan.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      technologies: ['Laravel', 'React', 'MySQL', 'AWS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 6,
      title: 'Real Estate Platform',
      category: 'company',
      description: 'Platform properti dengan pencarian advanced, virtual tour 360°, dan sistem CRM untuk agent.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'Semua Project', count: projects.length },
    { id: 'ecommerce', name: 'E-Commerce', count: projects.filter(p => p.category === 'ecommerce').length },
    { id: 'company', name: 'Company Profile', count: projects.filter(p => p.category === 'company').length },
    { id: 'dashboard', name: 'Dashboard', count: projects.filter(p => p.category === 'dashboard').length },
    { id: 'mobile', name: 'Mobile App', count: projects.filter(p => p.category === 'mobile').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-800 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
            Portfolio <span className="bg-gradient-to-r from-orange-600 to-amber-700 bg-clip-text text-transparent">Proyek</span>
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-amber-700/80 max-w-3xl mx-auto leading-relaxed">
            Showcase proyek-proyek terbaik yang telah kami kerjakan dengan berbagai teknologi modern
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg'
                  : 'bg-white/80 text-amber-800 hover:bg-amber-100 border border-amber-200'
              }`}
            >
              <span>{category.name}</span>
              <Badge className={`text-xs ${
                activeFilter === category.id
                  ? 'bg-white/20 text-white'
                  : 'bg-amber-200 text-amber-800'
              }`}>
                {category.count}
              </Badge>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <Card key={project.id} className={`group overflow-hidden bg-white/90 backdrop-blur-sm border-amber-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
              project.featured ? 'ring-2 ring-amber-400/50' : ''
            }`}>
              {project.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-gradient-to-r from-amber-600 to-orange-600 text-white">
                    Featured
                  </Badge>
                </div>
              )}
              
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover Actions */}
                <div className="absolute inset-0 flex items-center justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Button size="sm" className="bg-white/90 text-amber-800 hover:bg-white">
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button size="sm" className="bg-white/90 text-amber-800 hover:bg-white">
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button size="sm" className="bg-white/90 text-amber-800 hover:bg-white">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-800 mb-3" style={{fontFamily: 'Montserrat, sans-serif'}}>
                  {project.title}
                </h3>
                <p className="text-amber-700/80 leading-relaxed mb-4 text-sm">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-amber-100 text-amber-800 text-xs rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Button size="sm" className="flex-1 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white">
                    <Eye className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                  <Button size="sm" variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-50">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
            Lihat Semua Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
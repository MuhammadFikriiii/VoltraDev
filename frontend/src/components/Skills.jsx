import React, { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Code, Palette, Database, Smartphone, Globe, Server, Figma, Layers } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = [
    {
      id: 'frontend',
      name: 'Frontend',
      icon: <Code className="w-6 h-6" />,
      color: 'from-blue-500 to-purple-600',
      skills: [
        { name: 'React.js', level: 'Expert', logo: <Globe className="w-5 h-5" /> },
        { name: 'Vue.js', level: 'Expert', logo: <Globe className="w-5 h-5" /> },
        { name: 'HTML5/CSS3', level: 'Expert', logo: <Code className="w-5 h-5" /> },
        { name: 'JavaScript ES6+', level: 'Expert', logo: <Code className="w-5 h-5" /> },
        { name: 'TypeScript', level: 'Advanced', logo: <Code className="w-5 h-5" /> },
        { name: 'Tailwind CSS', level: 'Expert', logo: <Layers className="w-5 h-5" /> },
        { name: 'Bootstrap', level: 'Expert', logo: <Layers className="w-5 h-5" /> },
        { name: 'Sass/SCSS', level: 'Advanced', logo: <Layers className="w-5 h-5" /> }
      ]
    },
    {
      id: 'backend',
      name: 'Backend',
      icon: <Database className="w-6 h-6" />,
      color: 'from-green-500 to-teal-600',
      skills: [
        { name: 'Laravel', level: 'Expert', logo: <Server className="w-5 h-5" /> },
        { name: 'PHP', level: 'Expert', logo: <Server className="w-5 h-5" /> },
        { name: 'Node.js', level: 'Advanced', logo: <Server className="w-5 h-5" /> },
        { name: 'Python', level: 'Intermediate', logo: <Server className="w-5 h-5" /> },
        { name: 'MySQL', level: 'Expert', logo: <Database className="w-5 h-5" /> },
        { name: 'PostgreSQL', level: 'Advanced', logo: <Database className="w-5 h-5" /> },
        { name: 'MongoDB', level: 'Advanced', logo: <Database className="w-5 h-5" /> },
        { name: 'REST API', level: 'Expert', logo: <Globe className="w-5 h-5" /> }
      ]
    },
    {
      id: 'design',
      name: 'UI/UX Design',
      icon: <Palette className="w-6 h-6" />,
      color: 'from-pink-500 to-rose-600',
      skills: [
        { name: 'Figma', level: 'Expert', logo: <Figma className="w-5 h-5" /> },
        { name: 'Adobe XD', level: 'Advanced', logo: <Layers className="w-5 h-5" /> },
        { name: 'Photoshop', level: 'Intermediate', logo: <Layers className="w-5 h-5" /> },
        { name: 'Illustrator', level: 'Intermediate', logo: <Layers className="w-5 h-5" /> },
        { name: 'Prototyping', level: 'Expert', logo: <Figma className="w-5 h-5" /> },
        { name: 'Wireframing', level: 'Expert', logo: <Figma className="w-5 h-5" /> },
        { name: 'User Research', level: 'Advanced', logo: <Palette className="w-5 h-5" /> },
        { name: 'Design Systems', level: 'Advanced', logo: <Layers className="w-5 h-5" /> }
      ]
    },
    {
      id: 'mobile',
      name: 'Mobile Dev',
      icon: <Smartphone className="w-6 h-6" />,
      color: 'from-orange-500 to-red-600',
      skills: [
        { name: 'React Native', level: 'Advanced', logo: <Smartphone className="w-5 h-5" /> },
        { name: 'Flutter', level: 'Intermediate', logo: <Smartphone className="w-5 h-5" /> },
        { name: 'PWA', level: 'Expert', logo: <Globe className="w-5 h-5" /> },
        { name: 'Responsive Design', level: 'Expert', logo: <Layers className="w-5 h-5" /> },
        { name: 'Mobile UI/UX', level: 'Expert', logo: <Smartphone className="w-5 h-5" /> },
        { name: 'App Store Optimization', level: 'Intermediate', logo: <Smartphone className="w-5 h-5" /> }
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'Semua Skills', color: 'from-amber-600 to-orange-600' },
    ...skillCategories.map(cat => ({ id: cat.id, name: cat.name, color: cat.color }))
  ];

  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      return skillCategories;
    }
    return skillCategories.filter(cat => cat.id === activeCategory);
  };

  const getLevelColor = (level) => {
    switch(level) {
      case 'Expert': return 'bg-green-100 text-green-800 border-green-200';
      case 'Advanced': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-800 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
            Skills & <span className="bg-gradient-to-r from-orange-600 to-amber-700 bg-clip-text text-transparent">Teknologi</span>
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-amber-700/80 max-w-3xl mx-auto leading-relaxed">
            Teknologi dan tools yang kami kuasai untuk menghadirkan solusi digital terbaik
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {getFilteredSkills().map((category) => (
            <div key={category.id} className="space-y-6">
              {/* Category Header */}
              <div className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <div className="text-white">{category.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-amber-800" style={{fontFamily: 'Montserrat, sans-serif'}}>
                  {category.name}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <Card key={index} className="p-4 bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200/50 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="text-amber-600">{skill.logo}</div>
                        <span className="font-medium text-amber-800 text-sm">{skill.name}</span>
                      </div>
                      <Badge className={`text-xs border ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </Badge>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-8 rounded-3xl border border-amber-200/50 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-amber-800 mb-4">Teknologi Selalu Update!</h3>
            <p className="text-amber-700/80 leading-relaxed mb-6">
              Kami selalu mengikuti perkembangan teknologi terbaru untuk memastikan solusi yang kami berikan selalu modern, efisien, dan future-proof.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Docker', 'AWS', 'Git', 'Webpack', 'CI/CD', 'Testing'].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-white/80 text-amber-800 rounded-full text-sm font-medium border border-amber-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
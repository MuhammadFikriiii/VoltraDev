import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Github, Linkedin, Twitter, Mail, Code, Palette, Database, Smartphone, Users } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Rizki Pratama',
      role: 'Lead Full-Stack Developer',
      specialization: 'React.js, Laravel, System Architecture',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      description: 'Expert dalam mengembangkan aplikasi web complex dengan 5+ tahun pengalaman. Specialist dalam system architecture dan performance optimization.',
      skills: ['React.js', 'Laravel', 'Node.js', 'AWS', 'Docker'],
      icon: <Code className="w-6 h-6" />,
      color: 'from-blue-500 to-purple-600',
      social: {
        github: '#',
        linkedin: '#',
        twitter: '#',
        email: 'rizki@voltradev.com'
      }
    },
    {
      id: 2,
      name: 'Maya Sari',
      role: 'UI/UX Designer',
      specialization: 'User Experience, Visual Design, Prototyping',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b5bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
      description: 'Creative designer yang fokus pada user-centered design. Ahli dalam menciptakan interface yang beautiful dan functional dengan research-based approach.',
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'Design Systems'],
      icon: <Palette className="w-6 h-6" />,
      color: 'from-pink-500 to-rose-600',
      social: {
        github: '#',
        linkedin: '#',
        twitter: '#',
        email: 'maya@voltradev.com'
      }
    },
    {
      id: 3,
      name: 'Ahmad Fajar',
      role: 'Backend Developer',
      specialization: 'API Development, Database Design, DevOps',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
      description: 'Backend specialist yang expert dalam membangun API robust dan scalable. Focus pada security, performance, dan clean architecture patterns.',
      skills: ['Laravel', 'PHP', 'MySQL', 'PostgreSQL', 'Redis'],
      icon: <Database className="w-6 h-6" />,
      color: 'from-green-500 to-teal-600',
      social: {
        github: '#',
        linkedin: '#',
        twitter: '#',
        email: 'ahmad@voltradev.com'
      }
    },
    {
      id: 4,
      name: 'Sari Indah',
      role: 'Frontend Developer',
      specialization: 'React, Vue.js, Mobile-First Development',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
      description: 'Frontend developer dengan passion pada modern JavaScript frameworks. Expert dalam creating responsive dan interactive user interfaces.',
      skills: ['React.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Jest'],
      icon: <Code className="w-6 h-6" />,
      color: 'from-indigo-500 to-blue-600',
      social: {
        github: '#',
        linkedin: '#',
        twitter: '#',
        email: 'sari@voltradev.com'
      }
    },
    {
      id: 5,
      name: 'Budi Santoso',
      role: 'Mobile Developer',
      specialization: 'React Native, Flutter, Cross-Platform',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
      description: 'Mobile development specialist dengan expertise dalam cross-platform solutions. Focus pada performance optimization dan native user experience.',
      skills: ['React Native', 'Flutter', 'Dart', 'Firebase', 'App Store Optimization'],
      icon: <Smartphone className="w-6 h-6" />,
      color: 'from-orange-500 to-red-600',
      social: {
        github: '#',
        linkedin: '#',
        twitter: '#',
        email: 'budi@voltradev.com'
      }
    }
  ];

  const teamStats = [
    { label: 'Combined Experience', value: '25+', unit: 'Years' },
    { label: 'Projects Delivered', value: '200+', unit: 'Projects' },
    { label: 'Technologies Mastered', value: '50+', unit: 'Tech Stack' },
    { label: 'Client Satisfaction', value: '100%', unit: 'Happy Clients' }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-800 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
            Meet The <span className="bg-gradient-to-r from-orange-600 to-amber-700 bg-clip-text text-transparent">Team</span>
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-amber-700/80 max-w-3xl mx-auto leading-relaxed">
            Tim expert yang passionate dan berpengalaman dalam menghadirkan solusi digital terbaik
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
          {teamStats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-200/50">
              <div className="text-3xl font-bold text-amber-800 mb-2">{stat.value}</div>
              <div className="text-amber-700 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member) => (
            <Card key={member.id} className="group p-6 bg-white/90 backdrop-blur-sm border-amber-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden relative">
              {/* Background Gradient */}
              <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${member.color}`}></div>
              
              {/* Member Photo */}
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-amber-200 shadow-lg group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r ${member.color} rounded-full flex items-center justify-center text-white shadow-lg`}>
                    {member.icon}
                  </div>
                </div>
              </div>

              {/* Member Info */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-amber-800 mb-2" style={{fontFamily: 'Montserrat, sans-serif'}}>
                  {member.name}
                </h3>
                <Badge className={`bg-gradient-to-r ${member.color} text-white mb-3`}>
                  {member.role}
                </Badge>
                <p className="text-amber-700/80 text-sm leading-relaxed mb-4">
                  {member.description}
                </p>
                <div className="text-xs text-amber-600 font-medium mb-4">
                  <strong>Specialization:</strong> {member.specialization}
                </div>
              </div>

              {/* Skills */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-amber-800 mb-3">Core Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-amber-100 text-amber-800 text-xs rounded-full font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-3">
                <Button size="sm" variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-50 p-2">
                  <Github className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-50 p-2">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-50 p-2">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Team Culture */}
        <div className="bg-gradient-to-br from-amber-600 to-orange-600 p-8 md:p-12 rounded-3xl text-white shadow-2xl">
          <div className="text-center mb-8">
            <Users className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-4" style={{fontFamily: 'Montserrat, sans-serif'}}>
              Why Choose Our Team?
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Expert Developers</h4>
              <p className="opacity-95 leading-relaxed">
                Tim dengan pengalaman 5+ tahun di berbagai teknologi modern dan best practices dalam development.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Creative Design</h4>
              <p className="opacity-95 leading-relaxed">
                Designer berpengalaman yang fokus pada user experience dan visual appeal yang memukau audience.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Collaborative Spirit</h4>
              <p className="opacity-95 leading-relaxed">
                Kami bekerja sebagai satu tim yang solid, saling support, dan selalu fokus pada hasil terbaik untuk klien.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
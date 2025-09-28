import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Phone, Mail, MapPin, MessageSquare, Send, Clock, CheckCircle } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Pesan Terkirim!",
      description: "Terima kasih! Kami akan menghubungi Anda dalam 24 jam.",
    });
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      budget: '',
      message: '',
      timeline: ''
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'WhatsApp',
      value: '0852-4886-7449',
      description: 'Hubungi kami via WhatsApp untuk respon cepat',
      link: 'https://wa.me/6285248867449',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'voltra724@gmail.com',
      description: 'Kirim email untuk informasi detail project',
      link: 'mailto:voltra724@gmail.com',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Lokasi',
      value: 'Indonesia',
      description: 'Melayani klien di seluruh Indonesia secara remote',
      link: '#',
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const projectTypes = [
    'E-Commerce Website',
    'Company Profile',
    'Landing Page',
    'Web Application',
    'Mobile App',
    'Dashboard/Admin Panel',
    'Blog/CMS',
    'Custom Development'
  ];

  const budgetRanges = [
    'Di bawah Rp 5 Juta',
    'Rp 5 - 15 Juta',
    'Rp 15 - 30 Juta',
    'Rp 30 - 50 Juta',
    'Di atas Rp 50 Juta',
    'Diskusi Lebih Lanjut'
  ];

  const timelines = [
    '1-2 Minggu',
    '3-4 Minggu',
    '1-2 Bulan',
    '3-6 Bulan',
    'Lebih dari 6 Bulan',
    'Tidak Terburu-buru'
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-800 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
            Hubungi <span className="bg-gradient-to-r from-orange-600 to-amber-700 bg-clip-text text-transparent">Kami</span>
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-amber-700/80 max-w-3xl mx-auto leading-relaxed">
            Siap memulai project website impian Anda? Konsultasi gratis dan quote terbaik menanti!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-amber-800 mb-6" style={{fontFamily: 'Montserrat, sans-serif'}}>
              Get In Touch
            </h3>
            
            {contactInfo.map((contact, index) => (
              <Card key={index} className="p-6 bg-white/90 backdrop-blur-sm border-amber-200/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-xl flex items-center justify-center text-white flex-shrink-0`}>
                    {contact.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-amber-800 mb-1">{contact.title}</h4>
                    <p className="text-lg font-medium text-amber-700 mb-2">{contact.value}</p>
                    <p className="text-sm text-amber-600">{contact.description}</p>
                    {contact.link !== '#' && (
                      <Button 
                        size="sm" 
                        className="mt-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white"
                        onClick={() => window.open(contact.link, '_blank')}
                      >
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Contact Now
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}

            {/* Quick Info */}
            <Card className="p-6 bg-gradient-to-br from-amber-600 to-orange-600 text-white shadow-xl">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 mr-3" />
                <h4 className="font-semibold text-lg">Response Time</h4>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>WhatsApp:</span>
                  <Badge className="bg-white/20 text-white">Kurang dari 1 Jam</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Email:</span>
                  <Badge className="bg-white/20 text-white">Kurang dari 24 Jam</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Project Quote:</span>
                  <Badge className="bg-white/20 text-white">Kurang dari 48 Jam</Badge>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 bg-white/90 backdrop-blur-sm border-amber-200/50 shadow-xl">
              <div className="flex items-center mb-6">
                <Send className="w-8 h-8 text-amber-600 mr-3" />
                <h3 className="text-2xl font-bold text-amber-800" style={{fontFamily: 'Montserrat, sans-serif'}}>
                  Kirim Pesan
                </h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-amber-800 mb-2">Nama Lengkap *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Masukkan nama lengkap"
                      required
                      className="border-amber-300 focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-amber-800 mb-2">Email *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="nama@email.com"
                      required
                      className="border-amber-300 focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-amber-800 mb-2">No. WhatsApp</label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="08xx-xxxx-xxxx"
                    className="border-amber-300 focus:border-amber-500"
                  />
                </div>

                {/* Project Details */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-amber-800 mb-2">Jenis Project *</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-amber-300 rounded-md focus:border-amber-500 focus:ring-amber-500"
                    >
                      <option value="">Pilih jenis project</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-amber-800 mb-2">Budget</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-amber-300 rounded-md focus:border-amber-500 focus:ring-amber-500"
                    >
                      <option value="">Pilih range budget</option>
                      {budgetRanges.map((budget) => (
                        <option key={budget} value={budget}>{budget}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-amber-800 mb-2">Timeline</label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-amber-300 rounded-md focus:border-amber-500 focus:ring-amber-500"
                    >
                      <option value="">Pilih timeline</option>
                      {timelines.map((timeline) => (
                        <option key={timeline} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-amber-800 mb-2">Deskripsi Project *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Ceritakan detail project yang Anda inginkan, fitur-fitur khusus, referensi design, atau hal lain yang penting..."
                    rows={5}
                    required
                    className="border-amber-300 focus:border-amber-500"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white py-4 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Mengirim...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <Send className="w-5 h-5" />
                      <span>Kirim Pesan</span>
                    </div>
                  )}
                </Button>

                {/* Form Note */}
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-amber-700">
                      <strong>Jaminan Response:</strong> Kami akan merespon dalam 24 jam dengan informasi detail tentang project Anda, termasuk timeline dan estimasi harga.
                    </div>
                  </div>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  emailjs
    .send('your_service_id', 'your_template_id', formData, 'your_user_id')
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      alert('Message sent!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, (error) => {
      console.error('Email send error:', error.text);
      alert('Error sending message. Please check your configuration.');
    });
};

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      content: 'mariaeloissaandal02@gmail.com',
      link: 'mailto:mariaeloissaandal02@gmail.com',
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      content: '09763428894',
      link: 'tel:+639763428894',
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Location',
      content: 'Antipolo City, Philippines',
      link: '#',
    },
  ];

  const socialLinks = [
    {
      icon: <Facebook className="h-5 w-5" />,
      name: 'Facebook',
      url: 'https://www.facebook.com/mariaeloissa.andal',
      color: 'hover:text-blue-600',
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      name: 'Twitter',
      url: 'https://twitter.com/riassang_',
      color: 'hover:text-blue-400',
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      name: 'Instagram',
      url: 'https://instagram.com/dlwdz_',
      color: 'hover:text-pink-500',
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/maria-eloissa-andal-863252278/',
      color: 'hover:text-blue-600',
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 bg-mint/20 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary dark:text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a conversation about technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-primary dark:text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors duration-200">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary dark:text-white">{info.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400">{info.content}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-700">
                <h4 className="font-semibold text-primary dark:text-white mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 transition-colors duration-200 ${social.color}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="mt-8 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-800 dark:text-green-400 font-medium">Available for new opportunities</span>
                </div>
                <p className="text-green-700 dark:text-green-300 text-sm mt-2">
                  Currently seeking entry-level positions in IT and software development
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary dark:text-white">Send Me a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 resize-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-primary/90 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </button>
              </form>

              {/* Additional Info */}
              <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="font-semibold text-primary dark:text-white mb-3">Let's discuss:</h4>
                <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Entry-level software development positions
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Freelance web development projects
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-mint rounded-full mr-3"></div>
                    Collaboration opportunities
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Technology discussions and mentorship
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
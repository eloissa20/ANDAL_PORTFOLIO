import { useState } from 'react';
import { ExternalLink, Github, Calendar, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import CoZone from '../assets/cozone.png';
import Bpweb from '../assets/bpweb.png';
import Figma from '../assets/figma.png';
import Obanana from '../assets/obanana.png';
import School from '../assets/school.png';
import Mobile from '../assets/mobile.png';
import QMS from '../assets/qms.png';
import CF from '../assets/cf.png';
import MIS from '../assets/MIS.png';
import STBverse from '../assets/STBverse.png';
import TDL from '../assets/ToDoList.png';
import CFV from '../assets/confianzaVogue_grp3.png';
import CRYP from '../assets/CRYPTOGRAPHY.png';
import acts from '../assets/ACTS.jpg';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [currentSlide, setCurrentSlide] = useState(0);

  const categories = ['ALL', 'WEB DEVELOPMENT', 'UI/UX', 'OTHERS'];

  const projects = [
    {
      title: 'BLINK',
      description: 'An interactive web platform designed for BLINKs, providing everything they need to know about BLACKPINK — from fanbases and guidelines to music support.',
      image: Bpweb,
      technologies: ['Vite', 'TypeScript', 'React'],
      category: 'WEB DEVELOPMENT',
      date: 'JULY 2025',
      features: ['Fanbase Directory', 'Music Streaming & Purchase Links', 'Community Guidelines'], // Add comma here
      github: 'https://github.com/eloissa20/BLACKPINK_WEBSITE.git',
      demo: 'https://blackpink-website-g7gdr44cc-andal-projects.vercel.app/',
      bgClass: 'bg-mint/20 dark:bg-gray-900',
    },
    {
      title: 'CoZone',
      description: 'A web-based platform that connects you to inspiring coworking spaces—designed to boost focus, creativity, and collaboration.',
      image: CoZone,
      technologies: ['PHP', 'MySQL', 'Laravel', 'JavaScript'],
      category: 'WEB DEVELOPMENT',
      date: 'MAY 2025',
      features: ['Real-time reservation', 'Google Map & Payment method', 'Analytics dashboard'],
      github: 'https://github.com/eloissa20/cozoneweb',
      demo: '/cdemo.pptx',
      bgClass: 'bg-mint/20 dark:bg-gray-900',
    },
    {
      title: 'Mobile Applications Prototype',
      description: 'A vibrant mobile UI for an ice cream shop, designed in Figma with smooth flow and playful visuals—from login to shopping.',
      image: Figma,
      technologies: ['Figma'],
      category: 'UI/UX',
      date: 'JULY 2023',
      features: ['Fun & Colorful Onboarding', 'Quick Login Options', ' Smooth Shopping Experience'],
      github: '#',
      demo: '#',
      bgClass: 'bg-mint/20 dark:bg-gray-900',
    },
    {
      title: 'Obanana Website',
      description: 'Enhance productivity, optimize workflows, and accelerate business growth with our cutting-edge solutions tailored to your needs.',
      image: Obanana,
      technologies: ['Odoo', 'Python', 'PostgreSQL'],
      category: 'WEB DEVELOPMENT',
      date: 'APRIL 2025',
      features: ['Insight of Obanana works', 'Online Shopping', 'Bottleneck identification', 'User-centered design approach'],
      github: '#',
      demo: '#',
      bgClass: 'bg-mint/20 dark:bg-gray-900',
    },
    {
      title: 'Mobile User Interface',
      description: 'A vibrant and empowering mobile UI designed in Adobe XD, focused on self-discovery and user personalization.',
      image: Mobile,
      technologies: ['Adobe XD'],
      category: 'UI/UX',
      date: 'JULY 2023',
      features: ['Interest-Based Onboarding', ' Self-Discovery Tools', 'Profile Customization', 'Export capabilities'],
      github: '#',
      demo: '#',
      bgClass: 'bg-mint/20 dark:bg-gray-900',
    },
    {
      title: 'Quality Management System',
      description: 'A professional and efficient QMS interface designed to streamline compliance, track performance, and ensure continuous improvement.',
      image: QMS,
      technologies: ['Odoo', 'Python', 'XML', 'PostgreSQL'],
      category: 'WEB DEVELOPMENT',
      date: 'APRIL 2025',
      features: ['Document & Compliance Control', 'Real-Time Reporting & Dashboards', 'File encryption support', 'Issue Tracking & Continuous Improvement'],
      github: '#',
      demo: '#',
      bgClass: 'bg-mint/20 dark:bg-gray-900',
    },
    {
      title: 'To-Do List',
      description: 'Clean and professional website design focusing on portfolio presentation and user engagement.',
      image: TDL,
      technologies: ['Figma', 'Adobe XD', 'HTML/CSS'],
      category: 'OTHERS',
      date: '2023',
      features: ['Responsive design', 'Modern aesthetics', 'Performance optimization', 'SEO friendly'],
      github: '#',
      demo: '#',
      bgClass: 'bg-mint/20 dark:bg-gray-900',
    },
    {
      title: 'EDU: BRIGHT',
      description: 'Created a web app for easy booking of housekeeping services with a smooth "add to cart" interface.',
      image: School,
      technologies: ['JavaScript', 'Node.js', 'MongoDB'],
      category: 'WEB DEVELOPMENT',
      date: 'JUNE 2024',
      features: ['Smart Student Progression', 'Centralized Grade & Attendance Management', ' Role-Based Portals'],
      github: '#',
      demo: '#',
      bgClass: 'bg-mint/20 dark:bg-gray-900',
    },
    {
      title: 'Meat Inventory System',
      description: 'A Python-based inventory system designed to manage meat stock efficiently using a connected database.',
      image: MIS,
      technologies: ['Python', 'MySQL'],
      category: 'OTHERS',
      date: 'SEPTEMBER 2023',
      features: ['Real-Time Stock Management', 'Inventory Reporting', 'Search & Filter Functionality'],
      github: '#',
      demo: '#',
      bgClass: 'bg-mint/20 dark:bg-gray-900',
    },
    {
      title: 'Cleaning Fairies',
      description: 'Created a web app for easy booking of housekeeping services with a smooth "add to cart" interface.',
      image: CF,
      technologies: ['HTML', 'PHP', 'JavaScript', 'MySQL'],
      category: 'WEB DEVELOPMENT',
      date: 'JUNE 2024',
      features: ['Add-to-Cart Booking', 'Streamlined Scheduling', 'User-Friendly Interface'],
      github: '#',
      demo: '#',
      bgClass: 'bg-mint/20 dark:bg-gray-900',
    },
    {
      title: 'STBverse: K-Pop Website',
      description: 'A front-end fan website showcasing the latest updates on three top K-pop groups. Designed with a sleek, interactive interface to keep enthusiasts engaged and informed.',
      image: STBverse,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      category: 'WEB DEVELOPMENT',
      date: 'JANUARY 2024',
      features: ['Document & Compliance Control', 'Real-Time Reporting & Dashboards', 'File encryption support', 'Issue Tracking & Continuous Improvement '],
      github: '#',
      demo: '#',
      bgClass: 'bg-mint/20 dark:bg-gray-900',
    },
    {
      title: 'Cryptography with GUI',
      description: 'A Python-based application that provides secure data encryption and decryption through a user-friendly graphical interface.',
      image: CRYP,
      technologies: ['Python'],
      category: 'OTHERS',
      date: 'SEPTEMBER 2023',
      features: ['Multiple Encryption Algorithms', 'Graphical User Interface', 'Text & File Encryption Support'],
      github: '#',
      demo: '#',
      bgClass: 'bg-mint/20 dark:bg-gray-900',
    },
    {
      title: 'Confianza & Vogue Website',
      description: 'A fashion-focused website with visually striking and responsive web pages, crafted to deliver an elegant and engaging user experience for style enthusiasts.',
      image: CFV,
      technologies: ['JavaScript', 'Node.js', 'MongoDB'],
      category: 'WEB DEVELOPMENT',
      date: 'JANUARY 2024',
      features: ['Aesthetic UI Design', 'Responsive Web Pages', 'User-Centered Interface'],
      github: '#',
      demo: '#',
      bgClass: 'bg-mint/20 dark:bg-gray-900',
    },
    {
      title: 'ACTS',
      description: 'Dedicated to uplifting Filipino workers and enhancing the quality and accessibility of domestic services in the Philippines.',
      image: acts,
      technologies: ['Adobe XD'],
      category: 'UI/UX',
      date: 'JUNE 2023',
      features: [' Job Matching System', 'Accessible Online Platform', ' Location-Based Search', 'Empowerment Through Employment'],
      github: '#',
      demo: '#',
      bgClass: 'bg-mint/20 dark:bg-gray-900',
    },
  ];

  const filteredProjects = activeCategory === 'ALL'
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  const projectsPerSlide = 3;
  const totalSlides = Math.ceil(filteredProjects.length / projectsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCategoryColor = (category: string): string => {
    const colorMap: { [key: string]: string } = {
      'WEB DEVELOPMENT': 'bg-primary/10 text-primary border-primary/20',
      'UI/UX': 'bg-accent/10 text-accent border-accent/20',
      OTHERS: 'bg-mint/10 text-mint border-mint/20',
    };
    return colorMap[category] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <section id="projects" className="py-16 lg:py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary dark:text-white mb-4">My Projects</h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of projects I've worked on during my academic journey and professional development
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setCurrentSlide(0);
              }}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="relative max-w-6xl mx-auto">
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 w-12 h-12 bg-white dark:bg-gray-900 rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-200 hidden lg:flex"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 w-12 h-12 bg-white dark:bg-gray-900 rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-200 hidden lg:flex"
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4">
                    {filteredProjects
                      .slice(slideIndex * projectsPerSlide, slideIndex * projectsPerSlide + projectsPerSlide)
                      .map((project, index) => (
                      <div
                        key={index}
                       className={`flex flex-col min-h-[550px] ${project.bgClass} rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-mint/40 dark:border-gray-700 group mb-6`}
                      >
                          <div className="relative overflow-hidden h-48">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute top-4 left-4">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(project.category)}`}>
                                {project.category}
                              </span>
                            </div>
                            <div className="absolute top-4 right-4 flex items-center space-x-1 text-white text-xs bg-black/50 px-2 py-1 rounded">
                              <Calendar className="h-3 w-3" />
                              <span>{project.date}</span>
                            </div>
                          </div>

                          <div className="p-6 flex flex-col flex-1">
                            <h3 className="text-xl font-bold text-primary dark:text-white mb-2 line-clamp-1">{project.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
                              {project.description}
                            </p>

                            <div className="flex flex-wrap gap-1 mb-4">
                              {project.technologies.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="inline-flex items-center px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                                >
                                  <Tag className="h-3 w-3 mr-1" />
                                  {tech}
                                </span>
                              ))}
                            </div>

                            <div className="mb-4 min-h-[80px]">
                              <h4 className="text-sm font-semibold text-primary dark:text-white mb-2">Key Features:</h4>
                              <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                                {project.features.slice(0, 3).map((feature, featureIndex) => (
                                  <li key={featureIndex} className="flex items-start line-clamp-1">
                                    <span className="w-1 h-1 bg-accent rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="mt-auto pt-2 flex space-x-3 justify-between items-center">
                              <a
                                href={project.github}
                                className="flex items-center justify-center px-4 h-10 w-[140px] bg-gray-900 dark:bg-gray-700 text-white text-sm rounded-full hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200"
                              >
                                <Github className="h-4 w-4 mr-1" />
                                Code
                              </a>
                              <a
                                href={project.demo}
                                className="flex items-center justify-center px-4 h-10 w-[140px] bg-primary text-white text-sm rounded-full hover:bg-primary/90 transition-colors duration-200"
                              >
                                <ExternalLink className="h-4 w-4 mr-1" />
                                Demo
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {totalSlides > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    currentSlide === index ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Interested in seeing more of my work or discussing potential projects?
          </p>
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary to-primary/90 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Let's Connect
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
import { useState } from 'react';
import { GraduationCap, Briefcase, Code, Layout } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import profilePic from '../assets/new.jpg';

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.15,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85, y: 30, rotateX: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const textGlow: Variants = {
  hidden: { opacity: 0, scale: 0.95, filter: 'blur(2px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const tabContentVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] },
  },
};

const bounceAnimation: Variants = {
  loop: {
    y: [-10, 10, -10],
    transition: {
      duration: 2,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
};

const About = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const [showMore, setShowMore] = useState(false);

  const experiences = [
    {
      year: '2025',
      title: 'System Development, Business Analysis & Quality Assurance',
      description:
        'Developed a web-based reservation system, contributed as a Business Analyst by gathering and analyzing requirements, and ensured quality through manual and automated testing processes.',
    },
    { year: '2024', title: 'Web Systems', description: 'Developed responsive systems.' },
    { year: '2023', title: 'UI/UX & Web Dev', description: 'Designed and built web applications.' },
    { year: '2022', title: 'Python Projects', description: 'Built encryption/decryption tools.' },
    { year: '2021', title: 'C/C++ Coding', description: 'Explored C and C++ programming.' },
    { year: '2020', title: 'Web Development', description: 'Created websites using HTML, CSS, JavaScript.' },
  ];

  const education = [
    { year: '2021-2025', title: 'Bachelor of Science in Information Systems', description: 'Technological University of the Philippines, Manila' },
    { year: '2019-2021', title: 'Senior High School | STEM Strand', description: 'Technological Institute of the Philippines, Quezon City' },
    { year: '2015-2019', title: 'Secondary', description: 'Barangka National High School, Marikina City' },
    { year: '2017-2018', title: 'Secondary', description: 'Holy Trinity Academy, Sampaloc Manila' },
    { year: '2008-2015', title: 'Primary', description: 'Mayamot Elementary School, Antipolo City' },
  ];

  const highlights = [
    { 
      icon: GraduationCap, 
      title: 'Graduated', 
      description: (
        <>
          BS in Information Systems<br />
          Magna Cum Laude - TUP Manila 2025.
        </>
      )
    },
    { icon: Briefcase, title: 'Business Analysis', description: 'Analyzed requirements and bridged users with development teams.' },
    { icon: Code, title: 'Frontend Development', description: 'Built responsive, interactive web interfaces using modern frameworks and best practices.' },
    { icon: Layout, title: 'System Design', description: 'Designed scalable web-based systems with user-friendly interfaces and optimized workflows.' },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={textGlow}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-4"
              variants={textGlow}
            >
              About Me
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              variants={cardVariants}
            >
              Building digital experiences that connect, perform, and inspire.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-12 items-start md:items-center lg:gap-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.div className="space-y-8" variants={cardVariants}>
              <motion.div
                className="relative"
                variants={bounceAnimation}
                animate="loop"
              >
                <div className="w-full max-w-md mx-auto overflow-hidden rounded-t-full rounded-b-none shadow-xl">
                  <img
                    src={profilePic}
                    alt="Profile"
                    className="w-full h-[420px] object-cover object-top"
                  />
                </div>
              </motion.div>

              <div className="grid grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    className="p-4 bg-gray-50/90 dark:bg-gray-800/90 rounded-xl transition-colors duration-200 shadow-sm"
                    variants={cardVariants}
                  >
                    <item.icon size={24} className="text-accent mb-2" />
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div className="space-y-6" variants={cardVariants}>
              <div>
                <h3 className="text-4xl font-bold text-primary dark:text-sky-100 mb-4">Hello!</h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  <motion.p variants={cardVariants}>
                    A fresh graduate with hands-on industry experience, I hold a Bachelor of Science in Information Systems from TUP Manila, where I built a solid foundation in both technical expertise and business strategy.
                  </motion.p>
                  <motion.p variants={cardVariants}>
                    My passion lies in bridging the gap between technology and business needs to create innovative solutions.
                  </motion.p>
                  {showMore && (
                    <motion.div variants={containerVariants} initial="hidden" animate="visible">
                      <motion.p variants={cardVariants}>
                        I graduate with a strong foundation in technology and business processes. Experienced with social media platforms, office productivity tools, and computer applications. Motivated, adaptable, and eager to apply skills to professional projects.
                      </motion.p>
                    </motion.div>
                  )}
                  <motion.button
                    className="text-accent font-semibold text-sm focus:outline-none hover:underline mt-2"
                    onClick={() => setShowMore(!showMore)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {showMore ? 'Read Less ▲' : 'Read More ▼'}
                  </motion.button>
                </div>
              </div>

              <motion.div
                className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden"
                variants={cardVariants}
              >
                <div className="flex border-b border-gray-200 dark:border-gray-700">
                  <motion.button
                    onClick={() => setActiveTab('experience')}
                    className={`flex-1 px-6 py-4 text-sm font-medium transition-colors duration-200 ${
                      activeTab === 'experience'
                        ? 'bg-accent text-white border-b-2 border-accent'
                        : 'text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Briefcase className="w-4 h-4 inline mr-2" />
                    Experience
                  </motion.button>
                  <motion.button
                    onClick={() => setActiveTab('education')}
                    className={`flex-1 px-6 py-4 text-sm font-medium transition-colors duration-200 ${
                      activeTab === 'education'
                        ? 'bg-accent text-white border-b-2 border-accent'
                        : 'text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <GraduationCap className="w-4 h-4 inline mr-2" />
                    Education
                  </motion.button>
                </div>

                <motion.div
                  className="p-6 max-h-96 overflow-y-auto"
                  key={activeTab}
                  variants={tabContentVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {activeTab === 'experience' && (
                    <motion.div className="space-y-4" variants={containerVariants}>
                      {experiences.map((exp, index) => (
                        <motion.div
                          key={index}
                          className="flex space-x-4 p-4 rounded-lg transition-colors duration-200"
                          variants={cardVariants}
                        >
                          <div className="flex-shrink-0">
                            <span className="inline-block w-16 px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full text-center">
                              {exp.year}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-primary dark:text-white">{exp.title}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{exp.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}

                  {activeTab === 'education' && (
                    <motion.div className="space-y-4" variants={containerVariants}>
                      {education.map((edu, index) => (
                        <motion.div
                          key={index}
                          className="flex space-x-4 p-4 rounded-lg transition-colors duration-200"
                          variants={cardVariants}
                        >
                          <div className="flex-shrink-0">
                            <span className="inline-block w-20 px-2 py-1 text-xs font-medium rounded-full text-center bg-sky-100 text-primary dark:bg-sky-600/20 dark:text-sky-300">
                              {edu.year}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-primary dark:text-white">{edu.title}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{edu.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
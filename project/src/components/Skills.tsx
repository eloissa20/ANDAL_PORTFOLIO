import { useEffect, useRef } from 'react';
import { Code, Database, Settings, BarChart3, Palette, Brain } from 'lucide-react';
import { motion, useAnimation, useInView, Variants, Easing } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Development',
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: 'HTML/CSS', level: 90 },
        { name: 'JavaScript', level: 70 },
        { name: 'PHP', level: 75 },
        { name: 'C/C++', level: 60 },
        { name: 'Python', level: 55 },
        { name: 'Node.js', level: 75 },
        { name: 'React', level: 75 },
        { name: 'Laravel', level: 80 },
        { name: 'XML', level: 50 },
      ],
      color: 'primary',
    },
    {
      title: 'Database',
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 50 },
        { name: 'PostgreSQL', level: 25 },
      ],
      color: 'accent',
    },
    {
      title: 'Tools & Technologies',
      icon: <Settings className="h-6 w-6" />,
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Docker', level: 75 },
      ],
      color: 'mint',
    },
    {
      title: 'Business Intelligence',
      icon: <BarChart3 className="h-6 w-6" />,
      skills: [
        { name: 'Data Analysis', level: 80 },
        { name: 'Excel/Google Sheets', level: 85 },
        { name: 'Business Data Storytelling', level: 90 },
      ],
      color: 'primary',
    },
  ];

  const getColorClasses = (color: 'primary' | 'accent' | 'mint') => {
    const colorMap: {
      [key in 'primary' | 'accent' | 'mint']: { bg: string; text: string; progress: string; border: string };
    } = {
      primary: {
        bg: 'bg-primary/10 dark:bg-primary/20',
        text: 'text-primary dark:text-primary/90',
        progress: 'bg-primary',
        border: 'border-primary/30',
      },
      accent: {
        bg: 'bg-accent/10 dark:bg-accent/20',
        text: 'text-accent dark:text-accent/90',
        progress: 'bg-accent',
        border: 'border-accent/30',
      },
      mint: {
        bg: 'bg-mint/10 dark:bg-mint/20',
        text: 'text-mint dark:text-mint/90',
        progress: 'bg-mint',
        border: 'border-mint/30',
      },
    };
    return colorMap[color];
  };

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, isInView]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
        ease: 'easeOut' as Easing,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99] as Easing,
      },
    },
  };

  const skillTagVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' as Easing },
    },
    hover: {
      scale: 1.1,
      boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
      transition: { duration: 0.3 },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' as Easing },
    },
  };

  return (
    <section
      id="skills"
      className="py-16 sm:py-24 bg-mint/20 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary dark:text-white mb-4 tracking-wide">
            Technical Skills
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Technologies and tools I've mastered through education, internships, and personal projects
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Left Side: Development */}
          <motion.div
            className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-2xl p-4 sm:p-6 shadow-xl border border-gray-200/50 dark:border-gray-700/50 min-h-[400px] sm:min-h-[500px] flex flex-col"
            variants={cardVariants}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className={`p-2 rounded-lg ${getColorClasses('primary').bg} ${getColorClasses('primary').text}`}>
                <Code className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-primary dark:text-white">Development</h3>
            </div>
            <div className="space-y-3 flex-grow overflow-auto">
              {skillCategories[0].skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className={`h-2 rounded-full ${getColorClasses('primary').progress}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2, ease: 'easeOut', delay: skillIndex * 0.08 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Split into Top and Bottom */}
          <div className="grid grid-rows-2 gap-6 lg:gap-8 h-full">
            {/* Top Half: Database and Business Intelligence */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8"
              variants={containerVariants}
            >
              {/* Database */}
              <motion.div
                className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-2xl p-4 sm:p-6 shadow-xl border border-gray-200/50 dark:border-gray-700/50 min-h-[200px] sm:min-h-[240px] flex flex-col"
                variants={cardVariants}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-2 rounded-lg ${getColorClasses('accent').bg} ${getColorClasses('accent').text}`}>
                    <Database className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-primary dark:text-white">Database</h3>
                </div>
                <div className="space-y-3 flex-grow overflow-auto">
                  {skillCategories[1].skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-1.5">
                      <div className="flex justify-between items-center">
                        <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-2 rounded-full ${getColorClasses('accent').progress}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.2, ease: 'easeOut', delay: skillIndex * 0.08 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Business Intelligence */}
              <motion.div
                className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-2xl p-4 sm:p-6 shadow-xl border border-gray-200/50 dark:border-gray-700/50 min-h-[200px] sm:min-h-[240px] flex flex-col"
                variants={cardVariants}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-2 rounded-lg ${getColorClasses('primary').bg} ${getColorClasses('primary').text}`}>
                    <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-primary dark:text-white">Business Intelligence</h3>
                </div>
                <div className="space-y-3 flex-grow overflow-auto">
                  {skillCategories[3].skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-1.5">
                      <div className="flex justify-between items-center">
                        <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-2 rounded-full ${getColorClasses('primary').progress}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.2, ease: 'easeOut', delay: skillIndex * 0.08 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Bottom Half: Tools & Technologies */}
            <motion.div
              className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-2xl p-4 sm:p-6 shadow-xl border border-gray-200/50 dark:border-gray-700/50 min-h-[200px] sm:min-h-[240px] flex flex-col"
              variants={cardVariants}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-2 rounded-lg ${getColorClasses('mint').bg} ${getColorClasses('mint').text}`}>
                  <Settings className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-primary dark:text-white">Tools & Technologies</h3>
              </div>
              <div className="space-y-3 flex-grow overflow-auto">
                {skillCategories[2].skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-2 rounded-full ${getColorClasses('mint').progress}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.2, ease: 'easeOut', delay: skillIndex * 0.08 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="text-center mt-12 sm:mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-primary dark:text-white mb-6 sm:mb-8">Additional Competencies</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {[
              'System Analysis',
              'Project Management',
              'Agile/Scrum',
              'UX/UI Design',
              'API Development',
              'Testing & Debugging',
              'Technical Documentation',
              'Problem Solving',
              'Team Collaboration',
              'Business Process Analysis',
              'Figma',
              'Adobe XD',
              'Critical Thinking',
            ].map((skill, index) => (
              <motion.span
                key={index}
                className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700 hover:border-accent hover:text-accent dark:hover:text-accent hover:bg-accent/10 dark:hover:bg-accent/20 transition-all duration-300 shadow-sm hover:shadow-lg text-xs sm:text-sm"
                variants={skillTagVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: false }}
                transition={{ delay: index * 0.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {[
            {
              icon: <Palette className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />,
              title: 'Design & Development',
              description: 'Creating user-centered designs and implementing them with modern technologies',
            },
            {
              icon: <BarChart3 className="h-7 w-7 sm:h-8 sm:w-8 text-accent" />,
              title: 'Business Analysis',
              description: 'Analyzing business processes and translating requirements into technical solutions',
            },
            {
              icon: <Brain className="h-7 w-7 sm:h-8 sm:w-8 text-mint" />,
              title: 'Problem Solving',
              description: 'Critical thinking and innovative approaches to complex technical challenges',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="text-center p-4 sm:p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50"
              variants={cardVariants}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                {item.icon}
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-primary dark:text-white mb-2">{item.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
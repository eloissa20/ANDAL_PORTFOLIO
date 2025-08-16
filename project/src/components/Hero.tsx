import { useEffect, useRef } from 'react';
import { Download, Mail, Sparkles, Zap, Star, Heart } from 'lucide-react';
import Typed from 'typed.js';
import profilePic from '../assets/grad-pic.jpg';
import cvFile from '../assets/RESUME_ANDAL.pdf'; // Updated to the new PDF file

const Hero = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const currentRef = typedRef.current;
    if (currentRef) {
      const typed = new Typed(currentRef, {
        strings: ['Frontend Developer', 'UI/UX Designer', 'Business Analyst'],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|',
      });
      return () => {
        typed.destroy();
      };
    }
  }, []);

  useEffect(() => {
    const header = document.querySelector('header');
    if (header) {
      const headerHeight = header.offsetHeight;
      document.getElementById('home')!.style.paddingTop = `${headerHeight + 16}px`;
    }
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen relative bg-gradient-to-br from-white via-gray-50 to-mint/20 dark:from-gray-900 dark:via-gray-800 dark:to-primary/10 flex items-center justify-center overflow-hidden transition-colors duration-300 pt-24 sm:pt-28"
    >
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231E3D59' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-[220px] sm:w-[240px] md:w-[260px] lg:w-[280px] h-[420px] sm:h-[440px] md:h-[460px] lg:h-[480px] rounded-full shadow-2xl overflow-hidden transition-transform duration-300 hover:scale-105">
              <img
                src={profilePic}
                alt="Maria Eloissa M. Andal"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute w-[220px] sm:w-[240px] md:w-[260px] lg:w-[280px] h-[420px] sm:h-[440px] md:h-[460px] lg:h-[480px] rounded-full">
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-xl animate-bounce-slow z-50">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-mint rounded-full flex items-center justify-center shadow-lg animate-pulse z-50">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <div className="absolute top-1/2 -left-6 w-8 h-8 bg-primary/90 rounded-full flex items-center justify-center shadow-md animate-float z-50">
                <Star className="w-4 h-4 text-white" />
              </div>
              <div className="absolute bottom-8 -right-6 w-10 h-10 bg-white dark:bg-gray-700 rounded-fullTheres nothing else to change in the code; it looks good as is! The import statement for the CV file has been updated from `cv.pdf` to `RESUME_ANDAL.pdf`. Ensure that the file `RESUME_ANDAL.pdf` exists in the `src/assets` directory of your project, as the path you provided (`C:\Users\Eloissa\Downloads\project-bolt-sb1-sfcnmtnm (1)\project\src\assets\RESUME_ANDAL.pdf`) is a local file path. The relative path `../assets/RESUME_ANDmares-dark:bg-gray-700 rounded-full flex items-center justify-center shadow-md animate-bounce-slow z-50">
                <Heart className="w-5 h-5 text-red-500" />
              </div>
            </div>
          </div>
          <div className="space-y-8 animate-fade-in text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-4">
              <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">Hello, I'm</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary dark:text-white leading-snug whitespace-nowrap">
                Maria Eloissa M. Andal
              </h1>
            </div>
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 dark:text-gray-200">
                A <span ref={typedRef} className="text-accent font-bold"></span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
                Passionate about leveraging technology to solve complex business problems and create innovative digital solutions with a focus on user experience.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-8">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-primary/90 dark:from-accent dark:to-accent/90 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </button>
              <a
                href={cvFile}
                download="Maria_Eloissa_Andal_CV.pdf"
                className="inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 text-primary dark:text-accent font-semibold rounded-lg border-2 border-primary dark:border-accent hover:bg-primary hover:text-white dark:hover:bg-accent dark:hover:text-gray-900 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary dark:bg-gray-900 text-white py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo/Name */}
          <button
            onClick={scrollToTop}
            className="text-2xl font-bold mb-4 hover:text-accent transition-colors duration-200"
          >
            Maria Eloissa M. Andal
          </button>
          
          {/* Tagline */}
          <p className="text-gray-300 mb-6 max-w-md mx-auto">
            Information Systems Graduate passionate about creating innovative digital solutions
          </p>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  const element = document.getElementById(item.toLowerCase());
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-gray-600 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              {/* Copyright */}
              <p className="text-gray-300 text-sm">
                © {new Date().getFullYear()} Maria Eloissa M. Andal. All rights reserved.
              </p>

              {/* Made with love */}
              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-red-400" />
                <span>and</span>
                <Code className="h-4 w-4 text-accent" />
                <span>by me</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
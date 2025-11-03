import React, { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';

const Hero = () => {
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    if (contentRef.current) observer.observe(contentRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 z-0"></div>
      
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200 dark:bg-blue-900/30 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-teal-200 dark:bg-teal-900/30 rounded-full blur-3xl opacity-40"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div 
            ref={contentRef}
            className="w-full md:w-1/2 space-y-8 opacity-0 translate-y-10 transition-all duration-1000"
          >
            <div>
              <h2 className="text-lg md:text-xl font-medium text-blue-600 dark:text-blue-400 mb-4">
                Hello, I'm
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                <span className="block">Kruthin HK</span>
                <span className="text-blue-600 dark:text-blue-400"> Electrical & Electronis engineer.</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed">
              An Electrical & Electronics Engineer designs and develops systems where software interacts closely with hardware
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300 inline-flex items-center"
              >
                View Projects
                <ArrowDown size={18} className="ml-2" />
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-medium rounded-lg border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition duration-300"
              >
                Contact Me
              </a>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a 
                href="https://github.com/Kruthin-2004" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/kruthin-5133ba252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://twitter.com/Kruthin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>

          <div 
            ref={imageRef}
            className="w-full md:w-2/5 relative opacity-0 translate-y-10 transition-all duration-1000 delay-300"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 mx-auto bg-gradient-to-tr from-blue-600 to-teal-400 rounded-full flex items-center justify-center p-2">
              <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full overflow-hidden">
              <img
              // UPDATED IMAGE SRC
              src ='https://i.imgur.com/aHvSKjK.jpeg'
              alt="my profile" 
              className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown size={24} className="text-blue-600 dark:text-blue-400" />
      </div>
    </section>
  );
};

export default Hero;
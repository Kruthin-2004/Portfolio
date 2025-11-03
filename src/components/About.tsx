import React, { useEffect, useRef } from 'react';
import { Clock, Calendar, Award, BookOpen } from 'lucide-react';

const About = () => {
  const profileRef = useRef<HTMLDivElement>(null);
  const experienceRefs = useRef<(HTMLDivElement | null)[]>([]);
  const educationRefs = useRef<(HTMLDivElement | null)[]>([]);
  const statsRef = useRef<HTMLDivElement>(null);

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
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (profileRef.current) observer.observe(profileRef.current);
    if (statsRef.current) observer.observe(statsRef.current);

    experienceRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    educationRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: 'Embedded Internship',
      company: 'Innovaskill Technologies',
      period: 'Jun 2024 - Feb 2025',
      description: ''
    }
  ];

  const educations = [
    {
      degree: 'BE Electrical and Electronics Engineering',
      institution: 'ATME College of Engineering',
      period: '2022 - 2026',
      description: 'Focus on software engineering, algorithms, and web development.'
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate software developer with expertise in building modern web applications. 
            I love creating beautiful, intuitive interfaces and solving complex problems with clean code.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="col-span-1">
            <div 
              ref={profileRef}
              className="sticky top-24 opacity-0 translate-y-10 transition-all duration-700"
            >
              <img 
                src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Professional Portrait" 
                className="w-full h-auto rounded-2xl shadow-md mb-6"
              />

              <div 
                ref={statsRef}
                className="space-y-6 opacity-0 translate-y-10 transition-all duration-700 delay-200"
              >
                <div className="flex items-start gap-4">
                  <Clock size={24} className="text-blue-600 dark:text-blue-400 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Experience</h3>
                    <p className="text-gray-600 dark:text-gray-300">3+ Months</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Calendar size={24} className="text-blue-600 dark:text-blue-400 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Availability</h3>
                    <p className="text-gray-600 dark:text-gray-300">Full-time</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Award size={24} className="text-blue-600 dark:text-blue-400 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Projects</h3>
                    <p className="text-gray-600 dark:text-gray-300">3+ completed</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <BookOpen size={24} className="text-blue-600 dark:text-blue-400 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Education</h3>
                    <p className="text-gray-600 dark:text-gray-300">BE Electrical and Electronics Engineering</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a 
                  href="https://drive.google.com/uc?export=download&id=10kmk-mL-mtwCEdR5QHRb21iH_b56fZgY"
                  className="block w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg text-center hover:bg-blue-700 transition duration-300"
                  download
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          <div className="col-span-2 space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="w-8 h-1 bg-blue-600 dark:bg-blue-400 inline-block mr-3"></span>
                Work Experience
              </h3>

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div 
                    key={index}
                    ref={el => experienceRefs.current[index] = el}
                    className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700 opacity-0 translate-y-10 transition-all duration-700"
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="absolute left-[-8px] top-0 w-[14px] h-[14px] rounded-full bg-blue-600 dark:bg-blue-400 border-2 border-white dark:border-gray-800"></div>
                    <div className="mb-1 text-blue-600 dark:text-blue-400 font-medium">
                      {exp.period}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      {exp.title}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      {exp.company}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="w-8 h-1 bg-blue-600 dark:bg-blue-400 inline-block mr-3"></span>
                Education
              </h3>

              <div className="space-y-8">
                {educations.map((edu, index) => (
                  <div 
                    key={index}
                    ref={el => educationRefs.current[index] = el}
                    className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700 opacity-0 translate-y-10 transition-all duration-700"
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="absolute left-[-8px] top-0 w-[14px] h-[14px] rounded-full bg-blue-600 dark:bg-blue-400 border-2 border-white dark:border-gray-800"></div>
                    <div className="mb-1 text-blue-600 dark:text-blue-400 font-medium">
                      {edu.period}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="w-8 h-1 bg-blue-600 dark:bg-blue-400 inline-block mr-3"></span>
                My Approach
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I believe in writing clean, maintainable code that stands the test of time. My development philosophy centers around these key principles:
              </p>

              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 mr-2"></span>
                  <span>User-centered design approach with focus on accessibility</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 mr-2"></span>
                  <span>Performance optimization for the best user experience</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 mr-2"></span>
                  <span>Clean, maintainable code with proper documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 mr-2"></span>
                  <span>Test-driven development for reliability</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 mr-2"></span>
                  <span>Continuous learning and staying current with best practices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

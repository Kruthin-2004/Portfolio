import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Man-in-the-Middle Attacks on NICU Monitoring Systems',
    description: 'Simulate and defend against interception modification of patient data between devices and hospital systems',
    image: 'https://thumbs.dreamstime.com/b/cybersecurity-healthcare-symbolized-locked-hospital-bed-blue-neon-glowing-lock-rests-illustrating-concerns-medical-343465443.jpg',
    technologies: ['Python', 'Arduino IDE', 'Kali Linux', 'TensorFlow'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/example',
    category: 'web'
  },
  {
    id: 2,
    title: 'Li-Fi Project',
    description: 'Transmit data wirelessly using visible light (LEDs) from one device to another. It can be text, sensor data, or serial data',
    image: 'https://media.istockphoto.com/id/513474508/photo/li-fi-wireless-technology-concepts.jpg?s=612x612&w=0&k=20&c=J_OIo1zz2Ul-6MQ_sV2HQ3OTeTOXRLj_tck05yXuugo=',
    technologies: ['Arduino UNO', 'C/C++ (Arduino IDE)', 'MATLAB'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/example',
    category: 'web'
  },
  {
    id: 3,
    title: 'Traffic Light Control System',
    description: 'Adaptive traffic system that gives priority to ambulances/fire trucks using RF or sound detection',
    image: 'https://t3.ftcdn.net/jpg/12/20/33/74/360_F_1220337416_KuPesKMIxmo4U48913tgeEQIcudlwT1V.jpg',
    technologies: ['STM32', 'IR sensors','RF modules'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/example',
    category: 'mobile'
  }
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const categories = ['all'];
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was carefully crafted to solve real problems and demonstrate my skills.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              ref={el => projectRefs.current[index] = el}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-700 opacity-0 translate-y-10"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink size={18} className="mr-1" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <Github size={18} className="mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React, { useRef, useEffect } from 'react';
import { Code, Server, Database, Layout, Globe, BarChart4 } from 'lucide-react';

const Skills = () => {
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);
  const proficiencyRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    skillRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    proficiencyRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Layout size={32} className="text-blue-600 dark:text-blue-400" />,
      skills: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Next.js', 'Tailwind CSS', 'Responsive Design']
    },
    {
      title: 'Backend Development',
      icon: <Server size={32} className="text-teal-600 dark:text-teal-400" />,
      skills: ['Node.js', 'Express', 'Python', 'Django', 'RESTful APIs', 'Authentication']
    },
    {
      title: 'Database',
      icon: <Database size={32} className="text-amber-600 dark:text-amber-400" />,
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Redis']
    },
    {
      title: 'DevOps',
      icon: <Globe size={32} className="text-indigo-600 dark:text-indigo-400" />,
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Webpack', 'Linux']
    },
    {
      title: 'Programming Languages',
      icon: <Code size={32} className="text-red-600 dark:text-red-400" />,
      skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C#', 'PHP']
    },
    {
      title: 'Data Analysis',
      icon: <BarChart4 size={32} className="text-purple-600 dark:text-purple-400" />,
      skills: ['Python', 'Pandas', 'SQL', 'Data Visualization', 'Excel']
    }
  ];

  const proficiencies = [
    { name: 'python', percentage: 90 },
    { name: 'SQL', percentage: 80 },
    { name: 'embeded system', percentage: 80 },
    { name: 'Linux', percentage: 50 },
    { name: 'Database Management', percentage: 85 }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            These are the technologies and skills I've acquired throughout my journey as a developer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              ref={el => skillRefs.current[index] = el}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-700 opacity-0 translate-y-10"
            >
              <div className="flex flex-col items-center mb-6">
                <div className="mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Technical Proficiency
          </h3>
          
          <div className="w-full max-w-3xl space-y-6">
            {proficiencies.map((skill, index) => (
              <div
                key={index}
                ref={el => proficiencyRefs.current[index] = el}
                className="opacity-0 translate-y-10 transition-all duration-700"
              >
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                  <span className="text-gray-700 dark:text-gray-300">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
import React from 'react';
import { Code, Server, Palette, Database, Globe } from 'lucide-react';
import { 
  SiReact, SiTypescript, SiNextdotjs, SiTailwindcss, SiRedux, SiHtml5,
  SiNodedotjs, SiExpress, SiNestjs, SiPython, SiDjango,
  SiMongodb, SiPostgresql, SiMysql, SiFirebase, SiRedis, SiSupabase,
  SiFigma, SiGit, SiDocker, SiJest, SiWebpack, SiAstro, SiGithub,SiGitlab, SiKubernetes,
  SiMariadb,
} from 'react-icons/si';
import { LiaJava } from 'react-icons/lia';

const About: React.FC = () => {
  // Skills data with icons
  const skills = [
    {
      category: 'Frontend',
      icon: <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      technologies: [
        { name: 'React', icon: <SiReact className="w-4 h-4" /> },
        { name: 'TypeScript', icon: <SiTypescript className="w-4 h-4" /> },
        { name: 'Next.js', icon: <SiNextdotjs className="w-4 h-4" /> },
        {name: 'Astro', icon: <SiAstro className="w-4 h-4" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-4 h-4" /> },
        { name: 'Redux', icon: <SiRedux className="w-4 h-4" /> },
      ]
    },
    {
      category: 'Backend',
      icon: <Server className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
      technologies: [
        { name: 'Node.js', icon: <SiNodedotjs className="w-4 h-4" /> },
        { name: 'Express', icon: <SiExpress className="w-4 h-4" /> },
        { name: 'NestJS', icon: <SiNestjs className="w-4 h-4" /> },
        { name: 'Python', icon: <SiPython className="w-4 h-4" /> },
        {name: 'Java', icon: <LiaJava className="w-4 h-4" /> },
        { name: 'Django', icon: <SiDjango className="w-4 h-4" /> },
        { name: 'REST APIs', icon: <Server className="w-4 h-4" /> }
      ]
    },
    {
      category: 'Database',
      icon: <Database className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      technologies: [
        { name: 'MySQL', icon: <SiMysql className="w-4 h-4" /> },
        { name: 'mariaDB', icon: <SiMariadb className="w-4 h-4" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql className="w-4 h-4" /> },
        { name: 'MongoDB', icon: <SiMongodb className="w-4 h-4" /> },
        { name: 'Firebase', icon: <SiFirebase className="w-4 h-4" /> },
        { name: 'Redis', icon: <SiRedis className="w-4 h-4" /> },
        { name: 'Supabase', icon: <SiSupabase className="w-4 h-4" /> }
      ]
    },
    {
      category: 'Design & Tools',
      icon: <Palette className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
      technologies: [
        { name: 'HTML/CSS', icon: <SiHtml5 className="w-4 h-4" /> },
        { name: 'Figma', icon: <SiFigma className="w-4 h-4" /> },
        { name: 'Git', icon: <SiGit className="w-4 h-4" /> },
        { name: 'Github', icon: <SiGithub className="w-4 h-4" /> },
        {name: 'Gitlab', icon: <SiGitlab className="w-4 h-4" /> },
        { name: 'Docker', icon: <SiDocker className="w-4 h-4" /> },
        {name: 'Kubernetes', icon: <SiKubernetes className="w-4 h-4" /> },
        { name: 'Jest', icon: <SiJest className="w-4 h-4" /> },
        { name: 'CI/CD', icon: <Code className="w-4 h-4" /> },
        { name: 'Webpack', icon: <SiWebpack className="w-4 h-4" /> }
      ]
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 relative">
      {/* Background accent */}
      <div className="absolute right-0 top-0 h-full w-1/3 bg-gray-100 dark:bg-gray-750 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          {/* About text */}
          <div className="md:w-1/2">
            <div className="mb-6 inline-block">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                About Me
              </h2>
              <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 rounded"></div>
            </div>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                I'm a passionate Full Stack Developer with 5+ years of experience building web applications 
                that are both beautiful and functional. My journey in web development started when I built 
                my first website as a teenager, and I've been hooked ever since.
              </p>
              <p>
                I specialize in building responsive, user-friendly interfaces with React and TypeScript on the 
                frontend, backed by robust Node.js and Express APIs. I believe in writing clean, maintainable 
                code that solves real problems for users.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or sharing my knowledge through blog posts and tutorials.
              </p>
              
              <div className="pt-4">
                <a 
                  href="/resume.pdf" 
                  className="inline-flex items-center px-5 py-2.5 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 rounded-lg transition-colors duration-300"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
          
          {/* Skills */}
          <div className="md:w-1/2">
            <div className="mb-6 inline-block">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                Skills & Expertise
              </h2>
              <div className="h-1 w-20 bg-teal-600 dark:bg-teal-400 rounded"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skillGroup, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    {skillGroup.icon}
                    <h3 className="ml-2 text-lg font-semibold text-gray-900 dark:text-white">
                      {skillGroup.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1.5 text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-600 flex items-center gap-1.5 hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-300"
                      >
                        {tech.icon}
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-3xl border border-blue-100 dark:border-blue-800 shadow-sm">
              <div className="flex items-center gap-3">
                <Globe className="w-7 h-7 text-blue-600 dark:text-blue-300" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Languages
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Communication skills and spoken levels
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-100">Español</span>
                    <span className="rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200 px-3 py-1 text-xs font-semibold">
                      Nativo
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                    Professional and fluid use in all my projects.
                  </p>
                </div>

                <div className="rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-100">Inglés</span>
                    <span className="rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200 px-3 py-1 text-xs font-semibold">
                      B1
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                    Able to communicate well in technical and work environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
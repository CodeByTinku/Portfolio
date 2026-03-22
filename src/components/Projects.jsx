const Projects = () => {
  const projects = [
    {
      title: 'Employee Management System',
      icon: 'fas fa-tasks text-6xl text-blue-400',
      bgGradient: 'from-blue-500/20 to-purple-500/20',
      titleColor: 'text-purple-400',
      description: 'A modern and efficient Employee Management Dashboard built with React and Vite. Simplify your workforce management with a clean UI and seamless experience. 🚀',
      techs: ['React', 'Redux Toolkit', 'Vite', 'Tailwind', 'DaisyUi', 'React Icons'],
      github: 'https://github.com/CodeByTinku/Employee-Management-System',
      live: 'https://employee-management-system-kts1-i7tzw0e2h-codebytinkus-projects.vercel.app/',
    },
    {
      title: 'FinanceFlow | Student Budgeting',
      icon: 'fa-solid fa-coins text-6xl text-cyan-400',
      bgGradient: 'from-cyan-500/20 to-blue-500/20',
      titleColor: 'text-cyan-400',
      description: 'FinanceFlow is designed as an interactive budgeting playground for students. Its goal is to help young people understand and manage their monthly income by applying the 50/30/20 budgeting rule in a simple, visual way.',
      techs: ['lucide-react', 'React-Dom', 'recharts'],
      github: 'https://github.com/CodeByTinku/FinanceFlow',
      live: 'https://finance-flow-kohl.vercel.app/',
    },
    {
      title: 'E-Commerce App',
      icon: 'fas fa-shopping-cart text-6xl text-green-400',
      bgGradient: 'from-green-500/20 to-cyan-500/20',
      titleColor: 'text-green-400',
      description: 'Full-featured e-commerce platform with product browsing and seamless user experience. Built with modern React ecosystem and Tailwind CSS for responsive design.',
      techs: ['React', 'Vite', 'Tailwind', 'Axios', 'React Router'],
      github: 'https://github.com/CodeByTinku/E-Commerce',
      live: 'https://e-commerce-six-cyan-97.vercel.app/',
    },
    {
      title: 'Color-Finder',
      icon: 'fas fa-palette text-6xl text-cyan-400',
      bgGradient: 'from-cyan-500/20 to-blue-500/20',
      titleColor: 'text-cyan-400',
      description: 'A beautiful, modern, and fully responsive color palette explorer built with React 18, JavaScript, Tailwind CSS, and Vite. Explore 150+ beautiful colors with complete color information, gradient previews, and WCAG contrast checking.',
      techs: ['React', 'Framer Motion', 'Tailwind', 'React-Dom', 'React-icons'],
      github: 'https://github.com/CodeByTinku/Color-Finder',
      live: 'https://color-finder-two.vercel.app/',
    },
    {
      title: 'Movie-Search-App',
      icon: 'fas fa-film text-6xl text-green-400',
      bgGradient: 'from-green-500/20 to-cyan-500/20',
      titleColor: 'text-green-400',
      description: 'Movie Search App is a modern and user-friendly application that allows users to search for movies by title. It provides a seamless experience with a clean interface and fast loading times.',
      techs: ['React', 'RTK', 'React-router-dom', 'Axios', 'lucide-react'],
      github: 'https://github.com/CodeByTinku/Movie-Search-App',
      live: 'https://movie-search-app-beta-wine.vercel.app/',
    },
    {
      title: 'Emoji-Picker-App',
      icon: 'fas fa-smile text-6xl text-purple-400',
      bgGradient: 'from-blue-500/20 to-purple-500/20',
      titleColor: 'text-purple-400',
      description: 'Emoji Picker App is a modern and user-friendly application that allows users to search for emojis by category. It provides a seamless experience with a clean interface and fast loading times.',
      techs: ['React', 'React-Dom', 'React-Toastify', 'Emoji-Picker-React'],
      github: 'https://github.com/CodeByTinku/Emoji-Picker',
      live: 'https://emoji-finder-kohl.vercel.app/',
    },
    {
      title: 'Anime-Explorer',
      icon: 'fa-solid fa-clapperboard text-6xl text-purple-400',
      bgGradient: 'from-blue-500/20 to-purple-500/20',
      titleColor: 'text-purple-400',
      description: 'A React app to discover anime and manage your personal watchlist, powered by the Jikan API (unofficial MyAnimeList API).',
      techs: ['Axios', 'React-Dom', 'Lucide-React', 'Jikan-API'],
      github: 'https://github.com/CodeByTinku/Anime-Explorer',
      live: 'https://anime-explorer-chi.vercel.app/',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 fade-in">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className={`project-card fade-in-up animation-delay-${index * 200}`}>
              <div className={`relative h-48 bg-gradient-to-br ${project.bgGradient} rounded-t-xl flex items-center justify-center`}>
                <i className={`${project.icon}`}></i>
              </div>
              <div className="p-6">
                <h3 className={`text-2xl font-bold mb-3 ${project.titleColor}`}>{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techs.map((tech, i) => (
                    <span key={i} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link group"
                  >
                    <i className="fab fa-github mr-2"></i>
                    <span>GitHub</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link group"
                  >
                    <i className="fas fa-external-link-alt mr-2"></i>
                    <span>Live Demo</span>
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

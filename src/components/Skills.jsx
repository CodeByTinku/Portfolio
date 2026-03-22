const Skills = () => {
  const skills = [
    { name: 'React.js', icon: 'fab fa-react', color: 'text-cyan-400' },
    { name: 'Redux', icon: 'fab fa-js', color: 'text-purple-400' }, // using js icon for redux as per original html
    { name: 'JavaScript', icon: 'fab fa-js-square', color: 'text-yellow-400' },
    { name: 'Python', icon: 'fab fa-python', color: 'text-blue-400' },
    { name: 'Vite', icon: 'fas fa-bolt', color: 'text-yellow-500' },
    { name: 'Git/GitHub', icon: 'fab fa-github', color: 'text-gray-300' },
    { name: 'HTML/CSS', icon: 'fab fa-html5', color: 'text-orange-400' },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: 'text-purple-500' },
    { name: 'C', icon: 'fas fa-code', color: 'text-blue-300' },
    { name: 'API Integration', icon: 'fas fa-plug', color: 'text-green-400' },
    { name: 'GSAP', icon: 'fas fa-chart-line', color: 'text-green-400' },
    { name: 'MySQL', icon: 'fas fa-database', color: 'text-blue-400' },
    { name: 'Anime.js', icon: 'fas fa-play-circle', color: 'text-purple-400' },
    { name: 'Tailwind CSS', icon: 'fas fa-wind', color: 'text-cyan-400' },
    { name: 'Daisy UI', icon: 'fas fa-layer-group', color: 'text-pink-400' },
    { name: 'Vercel/Netlify', icon: 'fas fa-cloud', color: 'text-blue-300' },
    { name: 'Terminal/Linux', icon: 'fas fa-terminal', color: 'text-green-400' },
    { name: 'Canva', icon: 'fas fa-palette', color: 'text-blue-400' },
    { name: 'Figma', icon: 'fab fa-figma', color: 'text-purple-400' },
    { name: 'MS Office', icon: 'fab fa-microsoft', color: 'text-orange-400' },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 fade-in">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card fade-in-on-scroll group">
              <i className={`${skill.icon} text-5xl ${skill.color} mb-3 group-hover:scale-110 transition-transform`}></i>
              <h3 className="text-lg font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

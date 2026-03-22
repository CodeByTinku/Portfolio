const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 fade-in">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-purple-500/20 hover:border-purple-500/40 transition-all fade-in-up shadow-2xl">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center">
              Class 11 student from{' '}
              <span className="text-purple-400 font-semibold">Assam</span>,
              self-taught in web development using{' '}
              <span className="text-blue-400 font-semibold">React</span>,{' '}
              <span className="text-purple-400 font-semibold">Redux</span>, and{' '}
              <span className="text-green-400 font-semibold">Vite</span>. Passionate
              about building frontend apps, debugging code, exploring{' '}
              <span className="text-pink-400 font-semibold">ML/AI</span>, and devOps. I am also interested in open source.
              Daily coding on{' '}
              <span className="text-white font-semibold">GitHub</span>.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 text-gray-400">
                <i className="fas fa-map-marker-alt text-purple-400"></i>
                <span>Assam, India</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <i className="fas fa-graduation-cap text-blue-400"></i>
                <span>Class 11 Student</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <i className="fas fa-code text-green-400"></i>
                <span>Self-Taught Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800/50 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </span>
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="bg-gray-50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-purple-500/20 hover:border-purple-500/40 transition-all shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center">
              Class 11 student from{' '}
              <span className="text-purple-400 font-semibold">Assam</span>,
              self-taught in web development using{' '}
              <span className="text-blue-400 font-semibold">React</span>,{' '}
              <span className="text-purple-400 font-semibold">Redux</span>, and{' '}
              <span className="text-green-400 font-semibold">Vite</span>. Passionate
              about building frontend apps, debugging code, exploring{' '}
              <span className="text-pink-400 font-semibold">ML/AI</span>, and devOps. I am also interested in open source.
              Daily coding on{' '}
              <span className="text-gray-900 dark:text-white font-semibold">GitHub</span>.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <i className="fas fa-map-marker-alt text-purple-400"></i>
                <span>Assam, India</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <i className="fas fa-graduation-cap text-blue-400"></i>
                <span>Class 11 Student</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <i className="fas fa-code text-green-400"></i>
                <span>Self-Taught Developer</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

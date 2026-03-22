import { useEffect, useState } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const phrases = [
    'Aspiring Full-Stack Learner',
    'AI/ML & DevOps Explorer',
    'Open Source Contributor',
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, phrases]);

  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: { value: 90, density: { enable: true, value_area: 800 } },
          color: { value: '#a855f7' },
          shape: { type: 'circle' },
          opacity: { value: 0.7, random: true },
          size: { value: 3, random: true },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#a855f7',
            opacity: 0.5,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: true, mode: 'grab' },
            onclick: { enable: true, mode: 'push' },
            resize: true,
          },
          modes: {
            grab: { distance: 140, line_linked: { opacity: 0.6 } },
            push: { particles_nb: 3 },
          },
        },
        retina_detect: true,
      });
    }
  }, []);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const hero = document.getElementById('home');
      if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900"></div>
      {/* Particles Background */}
      <div id="particles-js" className="absolute inset-0 z-0"></div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="fade-in">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-1 animate-pulse-slow">
                <div className="w-full h-full rounded-full bg-gray-900 overflow-hidden">
                  <img
                    src="./image/myImage.jpg"
                    alt="Tinku Shekhar Das"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-green-500 rounded-full border-4 border-gray-900 flex items-center justify-center">
                <i className="fas fa-code text-2xl text-white"></i>
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 fade-in-up">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Tinku Shekhar Das
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 fade-in-up animation-delay-200 h-8">
            <span>{text}</span>
            <span className="animate-pulse">|</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up animation-delay-400">
            <a href="#projects" className="cta-button group">
              <span>View Projects</span>
              <i className="fas fa-arrow-down ml-2 group-hover:translate-y-1 transition-transform"></i>
            </a>
            <a
              href="https://github.com/codeByTinku"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button group"
            >
              <i className="fab fa-github mr-2"></i>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-purple-400 text-2xl"></i>
      </div>
    </section>
  );
};

export default Hero;

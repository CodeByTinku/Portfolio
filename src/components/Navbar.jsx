import { useState, useEffect } from 'react';
import { Howl, Howler } from 'howler';
import bgMusicFile from '../assets/bg-music.mp3';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isPlaying, setIsPlaying] = useState(true);
  const [bgMusic, setBgMusic] = useState(null);

  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Check local storage or system preference on mount
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }

    const sound = new Howl({
      src: [bgMusicFile],
      loop: true,
      volume: 0.3,
      autoplay: true,
      onplayerror: function() {
        sound.once('unlock', function() {
          sound.play();
        });
      }
    });

    setBgMusic(sound);

    
    
    return () => {
      sound.unload();
    };
  }, []);

  const toggleMusic = () => {
    if (bgMusic) {
      if (isPlaying) {
        bgMusic.pause();
      } else {
        bgMusic.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current || 'home');
    };
    
    // Use timeout to allow initial browser reflow before checking offsets
    setTimeout(handleScroll, 100);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-purple-500/20 transition-colors duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            TSD
          </div>
          <div className="hidden md:flex space-x-6">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`nav-link hover:text-purple-600 dark:hover:text-purple-400 transition-colors ${activeSection === link.toLowerCase() ? 'text-purple-600 dark:text-purple-400' : 'text-gray-600 dark:text-gray-300'}`}
              >
                {link}
              </a>
            ))}
            
            <button 
              onClick={toggleTheme} 
              className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors ml-4 focus:outline-none"
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'} text-xl`}></i>
            </button>
            {/* Desktop Music Toggle Button */}
            <button 
              onClick={toggleMusic} 
              className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors ml-4 focus:outline-none"
              title={isPlaying ? "Pause Music" : "Play Music"}
            >
              <i className={`fas ${isPlaying ? 'fa-volume-up' : 'fa-volume-mute'} text-xl`}></i>
            </button>
          </div>
          <div className="flex items-center md:hidden space-x-4">
            <button 
              onClick={toggleTheme} 
              className="text-purple-600 dark:text-purple-400 focus:outline-none"
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'} text-xl`}></i>
            </button>
            {/* Mobile Music Toggle Button */}
            <button 
              onClick={toggleMusic} 
              className="text-purple-600 dark:text-purple-400 focus:outline-none"
              title={isPlaying ? "Pause Music" : "Play Music"}
            >
              <i className={`fas ${isPlaying ? 'fa-volume-up' : 'fa-volume-mute'} text-xl`}></i>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-purple-600 dark:text-purple-400 focus:outline-none"
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-2">
            <div className="flex flex-col space-y-2">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                className={`nav-link hover:text-purple-600 dark:hover:text-purple-400 transition-colors ${activeSection === link.toLowerCase() ? 'text-purple-600 dark:text-purple-400' : 'text-gray-600 dark:text-gray-300'} py-2`}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

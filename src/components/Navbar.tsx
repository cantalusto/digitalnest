import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageToggle } from './LanguageToggle';
import { Container } from './ui/Container';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Clear previous timeout
      clearTimeout(scrollTimeout);

      // Debounce the scrolled state change for smoother transitions
      scrollTimeout = setTimeout(() => {
        setScrolled(scrollPosition > 100);
      }, 50);

      // Detect active section (immediate, no debounce)
      const sections = ['home', 'stats', 'about', 'why-us', 'services', 'portfolio', 'contact'];
      
      // Map sections to navbar items (stats -> home, why-us -> about)
      const sectionToNavItem: { [key: string]: string } = {
        'home': '#home',
        'stats': '#home',
        'about': '#about',
        'why-us': '#about',
        'services': '#services',
        'portfolio': '#portfolio',
        'contact': '#contact',
      };

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          const sectionTop = offsetTop - 100; // Offset for navbar height
          const sectionBottom = offsetTop + offsetHeight - 100;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sectionToNavItem[section] || `#${section}`);
            break;
          }
        }
      }

      // If at very top, set to home
      if (scrollPosition < 100) {
        setActiveSection('#home');
      }
    };

    handleScroll(); // Check on mount
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const navItems = [
    { path: '#home', label: t('navbar.home'), isAnchor: true },
    { path: '#about', label: t('navbar.about'), isAnchor: true },
    { path: '#services', label: t('navbar.services'), isAnchor: true },
    { path: '#portfolio', label: t('navbar.portfolio'), isAnchor: true },
    { path: '#contact', label: t('navbar.contact'), isAnchor: true },
  ];

  const isActive = (path: string) => {
    if (path.startsWith('#')) {
      return activeSection === path;
    }
    return location.pathname === path;
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string,
    isAnchor: boolean
  ) => {
    if (isAnchor) {
      e.preventDefault();
      const element = document.querySelector(path);
      if (element) {
        const navbarHeight = 80; // Height of navbar
        const targetPosition =
          element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1200; // 1.2 seconds for smooth scroll
        let start: number | null = null;

        // Easing function for smooth animation (ease-in-out-cubic)
        const easeInOutCubic = (t: number): number => {
          return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        };

        const animation = (currentTime: number) => {
          if (start === null) start = currentTime;
          const timeElapsed = currentTime - start;
          const progress = Math.min(timeElapsed / duration, 1);
          const ease = easeInOutCubic(progress);

          window.scrollTo(0, startPosition + distance * ease);

          if (timeElapsed < duration) {
            requestAnimationFrame(animation);
          } else {
            window.history.pushState(null, '', path);
          }
        };

        requestAnimationFrame(animation);
      }
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{
        y: 0,
        backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)',
      }}
      transition={{
        y: { duration: 0.3, ease: 'easeOut' },
        backgroundColor: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }, // Smoother and longer
      }}
      className={`fixed top-0 w-full z-50 transition-all duration-700 ease-in-out ${
        scrolled
          ? 'backdrop-blur-md shadow-lg border-b border-primary-500/20'
          : 'backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo - Always rendered, but hidden when not scrolled */}
          <motion.div
            animate={{
              opacity: scrolled ? 1 : 0,
              x: scrolled ? 0 : -30,
              scale: scrolled ? 1 : 0.8,
            }}
            transition={{
              duration: 0.6,
              ease: [0.4, 0, 0.2, 1],
            }}
            style={{ pointerEvents: scrolled ? 'auto' : 'none' }}
          >
            <Link to="/" className="flex items-center group">
              <img
                src="/DigitalNest - logo.svg"
                alt="DigitalNest"
                className="h-10 w-auto drop-shadow-lg"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) =>
              item.isAnchor ? (
                <motion.a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item.path, item.isAnchor)}
                  className="relative px-4 py-2 group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.3,
                      ease: 'easeOut',
                    }}
                    className={`text-sm font-medium transition-all duration-300 ${
                      isActive(item.path)
                        ? 'text-primary-500'
                        : 'text-white group-hover:text-primary-400'
                    }`}
                  >
                    {item.label}
                  </motion.span>
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500 shadow-lg shadow-primary-500/50"
                      transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 35,
                        mass: 0.8,
                      }}
                    />
                  )}
                </motion.a>
              ) : (
                <motion.div
                  key={item.path}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link to={item.path} className="relative px-4 py-2 group block">
                    <motion.span
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: index * 0.1,
                        duration: 0.3,
                        ease: 'easeOut',
                      }}
                      className={`text-sm font-medium transition-all duration-300 ${
                        isActive(item.path)
                          ? 'text-primary-500'
                          : 'text-white group-hover:text-primary-400'
                      }`}
                    >
                      {item.label}
                    </motion.span>
                    {isActive(item.path) && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500 shadow-lg shadow-primary-500/50"
                        transition={{
                          type: 'spring',
                          stiffness: 500,
                          damping: 35,
                          mass: 0.8,
                        }}
                      />
                    )}
                  </Link>
                </motion.div>
              )
            )}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.3 }}
            >
              <LanguageToggle />
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg hover:bg-dark-100 transition-colors text-accent-500"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark/95 backdrop-blur-xl border-t border-dark-50"
          >
            <Container>
              <div className="py-6 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.isAnchor ? (
                      <a
                        href={item.path}
                        onClick={(e) => handleNavClick(e, item.path, item.isAnchor)}
                        className={`block py-3 px-4 rounded-xl text-base font-medium transition-all cursor-pointer ${
                          isActive(item.path)
                            ? 'bg-gradient-to-r from-primary-900/30 to-secondary-900/30 text-primary-500'
                            : 'text-accent-300 hover:bg-dark-100'
                        }`}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`block py-3 px-4 rounded-xl text-base font-medium transition-all ${
                          isActive(item.path)
                            ? 'bg-gradient-to-r from-primary-900/30 to-secondary-900/30 text-primary-500'
                            : 'text-accent-300 hover:bg-dark-100'
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
                <div className="flex items-center justify-center pt-6 border-t border-dark-50">
                  <LanguageToggle />
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

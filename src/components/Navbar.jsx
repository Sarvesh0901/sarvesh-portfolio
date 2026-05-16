import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 968) setIsMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: 'Home',     href: '#home'     },
    { name: 'About',    href: '#about'    },
    { name: 'Skills',   href: '#skills'   },
    { name: 'Projects', href: '#projects' },
    { name: 'Offer',    href: '#offer'    },
    { name: 'Contact',  href: '#contact'  },
  ];

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* Backdrop overlay for mobile menu */}
      <div
        className={`menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={closeMenu}
      />

      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <motion.a
            href="#home"
            className="logo"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Portfolio
          </motion.a>

          <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                onClick={closeMenu}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

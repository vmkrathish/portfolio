import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Github, Linkedin, Menu, X } from 'lucide-react'
import { navLinks, navIds, socials, personal } from '../data/portfolio'
import useScrollSpy from '../hooks/useScrollSpy'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useScrollSpy(navIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo" aria-label={`${personal.name} — home`}>
          {personal.shortName}
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`navbar__link ${activeId === link.href.replace('#', '') ? 'is-active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer noopener"
            className="icon-link"
            aria-label="GitHub profile"
          >
            <Github size={17} strokeWidth={1.8} />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="icon-link"
            aria-label="LinkedIn profile"
          >
            <Linkedin size={17} strokeWidth={1.8} />
          </a>

          <button
            className="navbar__hamburger"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav className="navbar__mobile-links" aria-label="Mobile">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={handleNavClick}>
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

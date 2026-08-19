import { Github, Instagram, Linkedin } from 'lucide-react'
import { personal, socials, navLinks } from '../data/portfolio'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">{personal.shortName}</span>
          <p className="footer__tagline">{personal.tagline}</p>
        </div>

        <nav className="footer__links" aria-label="Footer">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer__socials">
          <a href={socials.github} target="_blank" rel="noreferrer noopener" className="icon-link" aria-label="GitHub">
            <Github size={16} strokeWidth={1.8} />
          </a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer noopener" className="icon-link" aria-label="LinkedIn">
            <Linkedin size={16} strokeWidth={1.8} />
          </a>
          <a href={socials.instagram} target="_blank" rel="noreferrer noopener" className="icon-link" aria-label="Instagram">
            <Instagram size={16} strokeWidth={1.8} />
          </a>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          © {year} {personal.name}. Built with React &amp; Framer Motion.
        </p>
      </div>
    </footer>
  )
}

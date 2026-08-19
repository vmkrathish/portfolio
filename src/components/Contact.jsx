import { FileText, Github, Instagram, Linkedin, Mail, Phone } from 'lucide-react'
import { personal, socials, resume } from '../data/portfolio'
import Reveal from './Reveal'
import './Contact.css'

const links = [
  { label: 'GitHub', value: 'github.com/vmkrathish', href: socials.github, icon: Github, external: true },
  { label: 'LinkedIn', value: 'linkedin.com/in/mk-rathish', href: socials.linkedin, icon: Linkedin, external: true },
  { label: 'Instagram', value: '@vmk_rathish', href: socials.instagram, icon: Instagram, external: true },
  { label: 'Email', value: personal.email, href: socials.email, icon: Mail, external: false },
  { label: 'Phone', value: personal.phone, href: `tel:${personal.phone.replace(/\s+/g, '')}`, icon: Phone, external: false },
]

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <Reveal className="contact-inner">
          <span className="eyebrow">Contact</span>
          <h2 className="contact-headline">Let’s build something.</h2>
          <p className="section-subtitle contact-sub">
            Open to internships, collaborations, and interesting product problems.
          </p>

          <div className="contact-links">
            {links.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noreferrer noopener' : undefined}
                  className="contact-link card"
                >
                  <Icon size={18} strokeWidth={1.8} />
                  <div>
                    <span className="contact-link__label">{link.label}</span>
                    <span className="contact-link__value">{link.value}</span>
                  </div>
                </a>
              )
            })}
          </div>

          <a href={resume.path} target="_blank" rel="noreferrer noopener" className="btn btn-primary contact-resume">
            <FileText size={16} strokeWidth={2} />
            View Resume
          </a>
        </Reveal>
      </div>
    </section>
  )
}

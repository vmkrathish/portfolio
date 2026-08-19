import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import { personal, socials } from '../data/portfolio'
import useReducedMotion from '../hooks/useReducedMotion'
import profilePhoto from '../assets/images/profile-photo.png'
import './Hero.css'

const easing = [0.16, 1, 0.3, 1]

export default function Hero() {
  const reduced = useReducedMotion()

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduced ? 0 : 0.09, delayChildren: reduced ? 0 : 0.15 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: reduced ? 0 : 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easing } },
  }

  return (
    <section id="home" className="hero">
      <div className="hero__backdrop" aria-hidden="true">
        <div className="hero__glow hero__glow--one" />
        <div className="hero__glow hero__glow--two" />
        <div className="hero__grid" />
      </div>

      <div className="container hero__inner">
        <motion.div className="hero__content" variants={container} initial="hidden" animate="show">
          <motion.span variants={item} className="eyebrow">
            Available for internships &amp; collaborations
          </motion.span>

          <motion.h1 variants={item} className="hero__name">
            {personal.name}
          </motion.h1>

          <motion.p variants={item} className="hero__headline">
            {personal.tagline}
          </motion.p>

          <motion.p variants={item} className="hero__supporting">
            {personal.supportingText}
          </motion.p>

          <motion.div variants={item} className="hero__cta-row">
            <a href="#work" className="btn btn-primary">
              Explore My Work
              <ArrowRight size={16} strokeWidth={2} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Let’s Connect
            </a>
          </motion.div>

          <motion.div variants={item} className="hero__socials">
            <a href={socials.github} target="_blank" rel="noreferrer noopener" className="hero__social-link">
              <Github size={16} strokeWidth={1.8} />
              <span>GitHub</span>
            </a>
            <a href={socials.linkedin} target="_blank" rel="noreferrer noopener" className="hero__social-link">
              <Linkedin size={16} strokeWidth={1.8} />
              <span>LinkedIn</span>
            </a>
            <a href={socials.email} className="hero__social-link">
              <Mail size={16} strokeWidth={1.8} />
              <span>Email</span>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__portrait"
          initial={{ opacity: 0, scale: reduced ? 1 : 0.94, y: reduced ? 0 : 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easing, delay: reduced ? 0 : 0.2 }}
        >
          <div className="hero__portrait-frame">
            <img
              src={profilePhoto}
              alt={`Portrait of ${personal.name}`}
              width={440}
              height={566}
              fetchpriority="high"
            />
          </div>
          <div className="hero__portrait-tag">
            <span className="hero__portrait-dot" />
            Building GMS
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduced ? 0 : 1.1, duration: 0.6 }}
        aria-hidden="true"
      >
        <span className="hero__scroll-line" />
        Scroll
      </motion.div>
    </section>
  )
}

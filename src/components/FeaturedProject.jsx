import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react'
import { gms } from '../data/portfolio'
import images from '../data/images'
import Reveal from './Reveal'
import './FeaturedProject.css'

function JourneyStep({ step, index, total }) {
  return (
    <div className="gms-journey__step">
      <div className={`gms-journey__marker gms-journey__marker--${step.status}`}>
        {step.status === 'done' ? <Check size={13} strokeWidth={2.5} /> : <Loader2 size={13} strokeWidth={2.5} />}
      </div>
      <div className="gms-journey__content">
        <div className="gms-journey__stage">{step.stage}</div>
        <p className="gms-journey__detail">{step.detail}</p>
      </div>
      {index < total - 1 && <div className="gms-journey__line" aria-hidden="true" />}
    </div>
  )
}

export default function FeaturedProject() {
  const [active, setActive] = useState(0)

  const next = () => setActive((a) => (a + 1) % gms.gallery.length)
  const prev = () => setActive((a) => (a - 1 + gms.gallery.length) % gms.gallery.length)

  return (
    <section id="work" className="gms-section">
      <div className="container">
        <Reveal className="section-heading">
          <span className="eyebrow">Featured Project</span>
          <h2 className="section-title">Get My Service</h2>
          <p className="section-subtitle">{gms.positioning}</p>
        </Reveal>

        <div className="gms-hero card">
          <div className="gms-hero__brand">
            <img src={images[gms.logo]} alt="GMS logo" width={56} height={56} className="gms-hero__logo" />
            <div>
              <div className="gms-hero__name">{gms.name}</div>
              <div className="gms-hero__tagline">{gms.tagline}</div>
            </div>
          </div>
          <div className="gms-hero__role pill pill-accent">{gms.role}</div>
        </div>

        <div className="gms-grid">
          <Reveal className="gms-block card">
            <h3 className="gms-block__title">The Problem</h3>
            <p className="gms-block__text">{gms.problem}</p>
          </Reveal>
          <Reveal delay={0.06} className="gms-block card">
            <h3 className="gms-block__title">The Solution</h3>
            <p className="gms-block__text">{gms.solution}</p>
          </Reveal>
          <Reveal delay={0.12} className="gms-block card gms-block--wide">
            <h3 className="gms-block__title">My Role</h3>
            <p className="gms-block__text">{gms.roleDetail}</p>
          </Reveal>
        </div>

        <Reveal className="gms-tech">
          <h3 className="gms-tech__title">Technology</h3>
          <div className="gms-tech__list">
            {gms.technology.map((tech) => (
              <span key={tech.label} className="pill">
                {tech.label}
                <span className="gms-tech__category">{tech.category}</span>
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal className="gms-features card">
          <h3 className="gms-block__title">What it does</h3>
          <ul className="gms-features__list">
            {gms.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </Reveal>

        {/* Product showcase / gallery */}
        <Reveal className="gms-showcase">
          <h3 className="gms-block__title">Product Showcase</h3>
          <div className="gms-gallery">
            <div className="gms-gallery__frame">
              <AnimatePresence mode="wait">
                <motion.img
                  key={gms.gallery[active].src}
                  src={images[gms.gallery[active].src]}
                  alt={gms.gallery[active].alt}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  loading="lazy"
                />
              </AnimatePresence>
              <button className="gms-gallery__nav gms-gallery__nav--prev" onClick={prev} aria-label="Previous screenshot">
                <ChevronLeft size={20} />
              </button>
              <button className="gms-gallery__nav gms-gallery__nav--next" onClick={next} aria-label="Next screenshot">
                <ChevronRight size={20} />
              </button>
            </div>
            <div className="gms-gallery__thumbs">
              {gms.gallery.map((shot, i) => (
                <button
                  key={shot.src}
                  className={`gms-gallery__thumb ${i === active ? 'is-active' : ''}`}
                  onClick={() => setActive(i)}
                  aria-label={`Show screenshot: ${shot.alt}`}
                >
                  <img src={images[shot.src]} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Product journey */}
        <Reveal className="gms-journey">
          <h3 className="gms-block__title">Product Journey</h3>
          <div className="gms-journey__track">
            {gms.journey.map((step, i) => (
              <JourneyStep key={step.stage} step={step} index={i} total={gms.journey.length} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

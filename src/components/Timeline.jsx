import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { timeline } from '../data/portfolio'
import Reveal from './Reveal'
import useReducedMotion from '../hooks/useReducedMotion'
import './Timeline.css'

export default function Timeline() {
  const trackRef = useRef(null)
  const reduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start 0.8', 'end 0.4'],
  })

  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 })

  return (
    <section id="journey" className="journey">
      <div className="container">
        <Reveal className="section-heading">
          <span className="eyebrow">Journey</span>
          <h2 className="section-title">Milestones so far</h2>
          <p className="section-subtitle">
            Years and general periods are used where exact dates aren’t part of the record.
          </p>
        </Reveal>

        <div className="journey-track" ref={trackRef}>
          <div className="journey-track__rail" aria-hidden="true">
            {!reduced ? (
              <motion.div className="journey-track__rail-fill" style={{ scaleY: progress }} />
            ) : (
              <div className="journey-track__rail-fill" style={{ transform: 'scaleY(1)' }} />
            )}
          </div>

          <ol className="journey-list">
            {timeline.map((entry, i) => (
              <Reveal
                key={entry.title}
                as={motion.li}
                delay={0}
                y={16}
                className="journey-item"
              >
                <div className="journey-item__dot" />
                <span className="journey-item__period">{entry.period}</span>
                <h3 className="journey-item__title">{entry.title}</h3>
                <p className="journey-item__desc">{entry.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

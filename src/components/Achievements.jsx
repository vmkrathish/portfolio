import { Award, Trophy, Users } from 'lucide-react'
import { leadership, hackathons, certifications } from '../data/portfolio'
import Reveal from './Reveal'
import './Achievements.css'

export default function Achievements() {
  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <Reveal className="section-heading">
          <span className="eyebrow">Leadership &amp; Achievements</span>
          <h2 className="section-title">Leading, not just building</h2>
          <p className="section-subtitle">
            Student leadership, hackathons, and competitions alongside the product work.
          </p>
        </Reveal>

        <div className="achievements-grid">
          <Reveal className="achievements-col">
            <h3 className="achievements-col__title">
              <Users size={16} strokeWidth={2} /> Leadership
            </h3>
            <ul className="leadership-list">
              {leadership.map((role) => (
                <li key={role.title} className={`leadership-item card ${role.featured ? 'is-featured' : ''}`}>
                  <div className="leadership-item__head">
                    <span className="leadership-item__title">{role.title}</span>
                    <span className="leadership-item__period">{role.period}</span>
                  </div>
                  <p className="leadership-item__desc">{role.description}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08} className="achievements-col">
            <h3 className="achievements-col__title">
              <Trophy size={16} strokeWidth={2} /> Hackathons &amp; Competitions
            </h3>
            <ul className="hackathon-list">
              {hackathons.map((h) => (
                <li key={h.name} className="hackathon-item">
                  <span className="hackathon-item__name">{h.name}</span>
                  <span className="hackathon-item__role">{h.role}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.14} className="achievements-col">
            <h3 className="achievements-col__title">
              <Award size={16} strokeWidth={2} /> Certifications
            </h3>
            <ul className="cert-list">
              {certifications.map((c) => (
                <li key={c.name} className="cert-item">
                  <span className="cert-item__name">{c.name}</span>
                  <span className="cert-item__meta">
                    {c.issuer} · {c.period}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

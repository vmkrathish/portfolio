import Reveal from './Reveal'
import { personal, stats } from '../data/portfolio'
import './About.css'

export default function About() {
  return (
    <section id="about">
      <div className="container about">
        <div className="about__text">
          <Reveal>
            <span className="eyebrow">About</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title">I build things.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="about__lede">{personal.about}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="about__sub">
              {personal.education.degree} · {personal.education.institution} · {personal.education.year}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="about__interests" aria-label="Areas of interest">
              {personal.interests.map((interest) => (
                <li key={interest} className="pill">
                  {interest}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="about__stats">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={0.1 + i * 0.06} className="about__stat card">
              <div className="about__stat-value">
                {stat.value}
                {stat.suffix && <span className="about__stat-suffix">{stat.suffix}</span>}
              </div>
              <div className="about__stat-label">{stat.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

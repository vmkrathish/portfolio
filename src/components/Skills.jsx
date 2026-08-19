import { skillGroups } from '../data/portfolio'
import Reveal from './Reveal'
import './Skills.css'

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <Reveal className="section-heading">
          <span className="eyebrow">Skills</span>
          <h2 className="section-title">Tech stack</h2>
          <p className="section-subtitle">Grouped by discipline — sized by how much I actually build with them.</p>
        </Reveal>

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.06} className="skills-group card">
              <h3 className="skills-group__title">{group.title}</h3>
              <div className="skills-group__list">
                {group.skills.map((skill) => (
                  <span key={skill.name} className={`skill-chip skill-chip--${skill.weight}`}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

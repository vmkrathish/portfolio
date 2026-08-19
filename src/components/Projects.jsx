import { roadwatch, otherProjects, mlWork } from '../data/portfolio'
import images from '../data/images'
import Reveal from './Reveal'
import './Projects.css'

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <Reveal className="section-heading">
          <span className="eyebrow">Projects</span>
          <h2 className="section-title">Roadwatch &amp; other builds</h2>
          <p className="section-subtitle">
            Real projects across hackathons, client work, and academic study — each solving a concrete problem.
          </p>
        </Reveal>

        {/* Roadwatch — visually distinct featured card */}
        <Reveal className="roadwatch-card card">
          <div className="roadwatch-card__media">
            <img src={images['roadwatch-dashboard']} alt="Roadwatch dashboard screen" loading="lazy" />
            <img
              src={images['roadwatch-report']}
              alt="Roadwatch issue reporting screen"
              loading="lazy"
              className="roadwatch-card__media-secondary"
            />
          </div>
          <div className="roadwatch-card__body">
            <div className="roadwatch-card__heading">
              <img src={images['roadwatch-icon']} alt="" width={36} height={36} className="roadwatch-card__icon" />
              <div>
                <h3>{roadwatch.name}</h3>
                <span className="roadwatch-card__context">{roadwatch.context}</span>
              </div>
            </div>
            <p className="roadwatch-card__desc">{roadwatch.description}</p>

            <div className="roadwatch-card__section">
              <span className="roadwatch-card__label">Problem</span>
              <p>{roadwatch.problem}</p>
            </div>
            <div className="roadwatch-card__section">
              <span className="roadwatch-card__label">Solution</span>
              <p>{roadwatch.solution}</p>
            </div>
            <div className="roadwatch-card__section">
              <span className="roadwatch-card__label">My Contribution</span>
              <p>{roadwatch.role}</p>
            </div>

            <div className="roadwatch-card__tech">
              {roadwatch.technology.map((t) => (
                <span key={t} className="pill pill-accent">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Smaller project cards */}
        <div className="projects-grid">
          {otherProjects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.06} className="project-card card">
              <span className="pill project-card__tag">{project.tag}</span>
              <h3 className="project-card__title">{project.name}</h3>
              <p className="project-card__desc">{project.description}</p>
              <div className="project-card__tech">
                {project.technology.map((t) => (
                  <span key={t} className="project-card__tech-item">
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.18} className="project-card card">
            <span className="pill project-card__tag">{mlWork.period}</span>
            <h3 className="project-card__title">AI / ML — {mlWork.title.replace('Machine Learning Trainee — ', '')}</h3>
            <p className="project-card__desc">{mlWork.description}</p>
            <div className="project-card__tech">
              {mlWork.techniques.map((t) => (
                <span key={t} className="project-card__tech-item">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

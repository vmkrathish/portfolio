import { Camera, Film, PenTool, Sparkles } from 'lucide-react'
import { creative } from '../data/portfolio'
import Reveal from './Reveal'
import './Creative.css'

const icons = [Film, PenTool, Sparkles, Camera]

export default function Creative() {
  return (
    <section id="creative" className="creative">
      <div className="creative__backdrop" aria-hidden="true" />
      <div className="container">
        <Reveal className="section-heading">
          <span className="eyebrow eyebrow--warm">Beyond Code</span>
          <h2 className="section-title">{creative.headline}</h2>
          <p className="section-subtitle">{creative.supportingLine}</p>
        </Reveal>

        <div className="creative-masonry">
          {creative.items.map((item, i) => {
            const Icon = icons[i % icons.length]
            return (
              <Reveal key={item.title} delay={i * 0.07} className={`creative-card creative-card--${i % 3}`}>
                <Icon size={20} strokeWidth={1.7} className="creative-card__icon" />
                <h3 className="creative-card__title">{item.title}</h3>
                <p className="creative-card__desc">{item.description}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

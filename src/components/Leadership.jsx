import './Leadership.css'
import AnimatedSection from './AnimatedSection'

const items = [
  'Participated in multiple hackathons and project competitions, presenting full-stack solutions.',
  'Delivered several end-to-end full-stack projects alone, including frontend, backend, and deployment.',
  'Led project teams using Agile workflow and Git-based version control.',
  'Contributed to departmental technical events and workshops.',
]

export default function Leadership() {
  return (
    <section className="section" id="leadership">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-title anim-underline">Leadership & Achievements</h2>
          <div className="card leadership-card">
            <ul className="leadership-list">
              {items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

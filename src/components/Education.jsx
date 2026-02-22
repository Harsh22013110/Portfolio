import './Education.css'
import AnimatedSection from './AnimatedSection'

const education = [
  {
    degree: 'B.E. in Electronics & Telecommunication (EXTC)',
    institution: 'Shree L.R. Tiwari College of Engineering, University of Mumbai',
    period: '2022 – Present',
    note: 'CGPA 7.04',
  },
  {
    degree: 'HSC (Science)',
    institution: 'SVP Junior College',
    period: '2020 – 2022',
    note: '60%',
  },
  {
    degree: 'SSC',
    institution: "St. Xavier's High School",
    period: '2020',
    note: '82.3%',
  },
]

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-title anim-underline">Education</h2>
        </AnimatedSection>
        <AnimatedSection stagger className="education-list">
          {education.map((item) => (
            <div key={item.degree} className="card education-card">
              <h3 className="education-degree">{item.degree}</h3>
              <p className="education-institution">{item.institution}</p>
              <div className="education-meta">
                <span className="education-period">{item.period}</span>
                {item.note && <span className="education-note">{item.note}</span>}
              </div>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  )
}

import './Experience.css'
import AnimatedSection from './AnimatedSection'

const experiences = [
  {
    role: 'AI Research Intern — Multimodal Learning',
    org: 'In-House Internship',
    period: 'Dec 2024 – Jan 2025',
    points: [
      'Explored multimodal learning systems using image, text, and sensor data.',
      'Built preprocessing pipelines and experimented with cross-modal embeddings.',
      'Assisted in prototype ML model development and technical documentation.',
    ],
  },
  {
    role: 'Tech Intern',
    org: 'HumbleWalking Study Abroad Consultancy',
    period: 'Jun 2025 – Jul 2025',
    points: [
      'Developed a React-based UI to host and manage multiple Power BI dashboards, ensuring seamless embedding and interactive visualization.',
      'Implemented role-based access control (RBAC) to restrict dashboard visibility based on user roles.',
      'Integrated AI chatbot flows using Flask and Node.js APIs.',
      'Implemented backend authentication and RBAC logic using PHP & MySQL.',
    ],
  },
  {
    role: 'Backend Developer Intern',
    org: 'Anand Housing',
    period: 'Aug 2025 – Oct 2025',
    points: [
      'Developed backend automation modules using Node.js and Express.',
      'Designed REST APIs for property listings and enquiry handling.',
      'Optimized MongoDB schemas for performance.',
    ],
  },
]

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-title anim-underline">Experience</h2>
        </AnimatedSection>
        <AnimatedSection stagger className="experience-list">
          {experiences.map((exp) => (
            <article key={exp.role + exp.org} className="card experience-card">
              <div className="experience-header">
                <div>
                  <h3 className="experience-role">{exp.role}</h3>
                  <p className="experience-org">{exp.org}</p>
                </div>
                <span className="experience-period">{exp.period}</span>
              </div>
              <ul className="experience-points">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </AnimatedSection>
      </div>
    </section>
  )
}

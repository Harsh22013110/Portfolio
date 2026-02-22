import './Skills.css'
import AnimatedSection from './AnimatedSection'

const skillGroups = [
  {
    title: 'Languages',
    items: ['Python', 'JavaScript', 'C++', 'SQL'],
  },
  {
    title: 'Frontend',
    items: ['React.js', 'React Native', 'HTML', 'CSS', 'Bootstrap'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'Django', 'Flask', 'REST APIs'],
  },
  {
    title: 'Databases',
    items: ['MongoDB', 'MySQL', 'Firebase', 'PostgreSQL'],
  },
  {
    title: 'Tools',
    items: ['Git', 'Postman', 'Razorpay API', 'Power BI', 'STM32CubeIDE'],
  },
  {
    title: 'Concepts',
    items: ['OOPS', 'MVC', 'JWT Auth', 'API Design', 'CRUD Ops'],
  },
]

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-title anim-underline">Technical Skills</h2>
        </AnimatedSection>
        <AnimatedSection stagger className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.title} className="card skills-card">
              <h3 className="skills-group-title">{group.title}</h3>
              <div className="skills-tags">
                {group.items.map((item) => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  )
}

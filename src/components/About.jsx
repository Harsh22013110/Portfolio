import './About.css'
import AnimatedSection from './AnimatedSection'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-title anim-underline">About</h2>
          <div className="card about-card">
          <p>
            I'm an <strong>Electronics and Telecommunication</strong> engineering student with growing expertise in software development. I'm experienced in building full-stack projects, REST APIs, and backend logic using <strong>React</strong>, <strong>Node.js</strong>, <strong>Flask</strong>, <strong>MongoDB</strong>, and <strong>MySQL</strong>.
          </p>
          <p style={{ marginTop: '1rem' }}>
            I'm a quick learner with strong analytical skills and hands-on internship experience across frontend, backend, and automation tasks. I enjoy turning ideas into scalable, maintainable applications and learning new technologies along the way.
          </p>
        </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

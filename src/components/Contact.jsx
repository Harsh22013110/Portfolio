import './Contact.css'
import AnimatedSection from './AnimatedSection'

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-title anim-underline">Contact</h2>
          <div className="card contact-card">
          <p className="contact-intro">Open to internships and full-time opportunities. Get in touch:</p>
          <div className="contact-links">
            <a href="mailto:harshshukla2201@gmail.com" className="contact-item">
              <span className="contact-label">Email</span>
              <span className="contact-value">harshshukla2201@gmail.com</span>
            </a>
            <a href="tel:+918591205520" className="contact-item">
              <span className="contact-label">Phone</span>
              <span className="contact-value">+91 8591205520</span>
            </a>
            <a href="https://linkedin.com/in/harshshukla2201" target="_blank" rel="noopener noreferrer" className="contact-item">
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">linkedin.com/in/harshshukla2201</span>
            </a>
            <a href="https://github.com/Harsh22013110" target="_blank" rel="noopener noreferrer" className="contact-item">
              <span className="contact-label">GitHub</span>
              <span className="contact-value">github.com/Harsh22013110</span>
            </a>
          </div>
          <div className="contact-cta">
            <a href="mailto:harshshukla2201@gmail.com" className="btn btn-primary">Send Email</a>
          </div>
        </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-particles" aria-hidden="true">
        {[...Array(8)].map((_, i) => (
          <span key={i} />
        ))}
      </div>
      <div className="container hero-inner">
        <p className="hero-label anim-hero-label">Electronics & Telecommunication · Full-Stack Developer</p>
        <h1 className="hero-title anim-hero-title">
          Hi, I'm <span className="hero-name animate-gradient">Harsh Shukla</span>
        </h1>
        <p className="hero-subtitle anim-hero-subtitle">
          I build full-stack applications with React, Node.js, Flask, and modern databases.
          Quick learner with strong analytical skills and hands-on internship experience.
        </p>
        <div className="hero-cta anim-hero-cta">
          <a href="#projects" className="btn btn-primary animate-glow">View Projects</a>
          <a href="#contact" className="btn btn-secondary">Get in Touch</a>
        </div>
        <div className="hero-links anim-hero-links">
          <a href="https://github.com/Harsh22013110" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            GitHub
          </a>
          <a href="https://linkedin.com/in/harshshukla2201" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

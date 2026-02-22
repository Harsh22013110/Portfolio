import './Projects.css'
import AnimatedSection from './AnimatedSection'

const projects = [
  {
    name: 'Institute Management System',
    stack: ['React', 'Node.js', 'MongoDB'],
    description: 'Full-stack role-based platform for students, faculty, and admins with JWT-secured authentication and protected API routing.',
    points: [
      'Designed scalable MongoDB schemas and implemented REST APIs for attendance, classroom occupancy, and issue-management workflows.',
      'Built reusable React components and integrated Axios-based API communication for real-time dashboard updates and streamlined UX.',
      'Implemented middleware-driven access control, ensuring secure operations across roles and maintaining maintainable backend architecture.',
    ],
  },
  {
    name: 'Grocery Store Management System',
    stack: ['Flask', 'MySQL'],
    description: 'Complete billing and inventory platform using Flask with MySQL-backed transactional updates to prevent stock inconsistencies.',
    points: [
      'Integrated Razorpay Payment Gateway and implemented secure webhook verification for reliable payment reconciliation.',
      'Built authentication and user flows using Firebase Auth for secure login and controlled access.',
      'Automated stock tracking, invoice generation, and sales recording, reducing manual errors by 40%.',
    ],
  },
]

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-title anim-underline">Projects</h2>
        </AnimatedSection>
        <AnimatedSection stagger className="projects-list">
          {projects.map((proj) => (
            <article key={proj.name} className="card project-card">
              <div className="project-header">
                <h3 className="project-name">{proj.name}</h3>
                <div className="project-tags">
                  {proj.stack.map((tech) => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>
              </div>
              <p className="project-desc">{proj.description}</p>
              <ul className="project-points">
                {proj.points.map((point, i) => (
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

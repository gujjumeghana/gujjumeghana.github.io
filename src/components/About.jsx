const skills = [
  'Flutter / Dart',
  'React Native',
  'TypeScript / JavaScript',
  'Node.js / Express',
  'Python / FastAPI',
  'AWS / GCP / Firebase',
  'Docker / CI/CD',
  'Android / iOS',
]

export default function About() {
  return (
    <section id="about">
      <h2 className="section-label">About</h2>
      <div className="about-text">
        <p>
          I&apos;m a Software Engineer with over 5 years of experience in mobile app and
          full-stack development, specializing in AI-driven applications and secure software
          solutions. Recently graduated from {' '}
          <a href="https://www.njit.edu" target="_blank" rel="noreferrer">
            New Jersey Institute of Technology
          </a> {' '}
          with {' '}
          <a href="https://www.njit.edu" target="_blank" rel="noreferrer">
            MS in Computer Science
          </a>{' '}
          , I thrive on building scalable systems with a focus on CI/CD pipelines and Agile
          methodologies.
        </p>
        <p>
          As Co-Founder of{' '}
          <span className="about-highlight">Plexus Transport Services</span>, I led the
          development of real-time GPS fleet management solutions, architecting cross-platform
          mobile apps and backend services that optimized operations for hundreds of clients.
        </p>
        <p>
          I&apos;ve engineered applications with advanced features like{' '}
          <span className="about-highlight">NLP-powered sentiment analysis</span>, hybrid
          geolocation strategies, and fault-tolerant payment systems — consistently improving
          performance and user experience.
        </p>
        <p>
          Outside of work, I enjoy exploring new cuisines, playing chess, and I represented my
          university in lawn tennis during my bachelor&apos;s degree.
        </p>
      </div>

      <div className="skills-section">
        <p>A few technologies I&apos;ve been working with:</p>
        <ul className="skills-grid">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

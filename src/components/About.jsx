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
          I build software that scales. From zero to{' '}
          <span className="about-highlight">1,000+ concurrent GPS-tracked vehicles</span>. From
          idea to App Store. From prototype to production with{' '}
          <span className="about-highlight">75% fewer defects</span>.
        </p>
        <p>
          I&apos;m Meghana Gujju — a Full-Stack &amp; Mobile Engineer with{' '}
          <span className="about-highlight">9+ years</span> across Flutter, React Native,
          Node.js, Firebase, and everything in between. I&apos;ve co-founded a transport tech
          startup, architected real-time IoT systems, integrated ML inference on-device, and
          shipped payment flows that handle hundreds of concurrent transactions without breaking
          a sweat.
        </p>
        <p>
          Currently finishing my{' '}
          <a href="https://www.njit.edu" target="_blank" rel="noreferrer">
            MS in Computer Science at NJIT
          </a>{' '}
          while researching full-stack optimization systems as a Research Assistant. I&apos;m
          based in Newark, NJ and open to senior engineering roles where the problems are hard
          and the impact is real.
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

const experience = [
  {
    year: '2016 — 2024',
    title: 'Director & Co-Founder',
    company: 'Plexus Transport Services Pvt. Ltd.',
    location: 'Hyderabad, India',
    description:
      'Led end-to-end development of a real-time GPS fleet management platform serving hundreds of clients. Architected cross-platform mobile apps, built scalable Node.js backend services, and implemented CI/CD pipelines that reduced deployment time by 60%.',
    tags: ['Flutter', 'React Native', 'Node.js', 'Firebase', 'AWS', 'Android', 'iOS'],
  },
  {
    year: 'Feb — Aug 2024',
    title: 'Software Engineer',
    company: 'C and S Technologies',
    location: 'Hyderabad, India',
    description:
      'Developed and maintained full-stack web applications, building RESTful APIs with Django and FastAPI alongside React.js frontends. Delivered features across the product lifecycle from design to deployment.',
    tags: ['Python', 'Django', 'FastAPI', 'React.js', 'PostgreSQL'],
  },
  {
    year: 'Aug — Dec 2023',
    title: 'Mobile Developer',
    company: 'Turing',
    location: 'Remote',
    description:
      'Contracted mobile developer building high-performance React Native applications for international clients, with a focus on performance optimization and seamless cross-platform UX.',
    tags: ['React Native', 'TypeScript', 'Redux', 'REST APIs'],
  },
  {
    year: 'Mar — Oct 2022',
    title: 'Software Development Engineer II',
    company: 'NonStop io Technologies Pvt. Ltd.',
    location: 'Pune, India',
    description:
      'Built and shipped multiple Flutter mobile applications featuring advanced geolocation strategies, hybrid offline support, and fault-tolerant payment system integrations.',
    tags: ['Flutter', 'Dart', 'Firebase', 'Google Maps SDK', 'Stripe'],
  },
  {
    year: 'Mar 2021 — Mar 2022',
    title: 'Flutter Developer',
    company: 'Around29 Digital Media Solutions',
    location: 'Hyderabad, India',
    description:
      'Developed cross-platform Flutter applications with NLP-powered sentiment analysis features and real-time data synchronization, improving user engagement metrics.',
    tags: ['Flutter', 'Dart', 'NLP', 'Firebase', 'Python'],
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <h2 className="section-label">Experience</h2>
      <ol className="experience-list">
        {experience.map((item, i) => (
          <li key={i} className="experience-item">
            <div className="exp-year">{item.year}</div>
            <div className="exp-body">
              <h3 className="exp-title">
                {item.title} · {item.company}
              </h3>
              <p className="exp-company">{item.location}</p>
              <p className="exp-description">{item.description}</p>
              <ul className="tech-tags">
                {item.tags.map((tag) => (
                  <li key={tag} className="tech-tag">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <a
        href="/Resume.pdf"
        download="Meghana_Gujju_Resume.pdf"
        className="resume-link"
      >
        Download Resume
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
      </a>
    </section>
  )
}

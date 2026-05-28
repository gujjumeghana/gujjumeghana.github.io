const experience = [
  {
    year: 'May 2025 — May 2026',
    title: 'Research Assistant',
    company: 'New Jersey Institute of Technology',
    location: 'Newark, NJ',
    description:
      'Built MAMS, a full-stack Django web app applying single-year and multi-year optimization algorithms to allocate dredging budgets across waterway channels, delivering scenario-based analytics to decision-makers.',
    tags: ['Django', 'Python', 'Full-Stack', 'Optimization'],
  },
  {
    year: 'Feb — Aug 2024',
    title: 'Software Engineer / Solution Architect',
    company: 'C and S Technologies Pvt. Ltd.',
    location: 'Hyderabad, India',
    description:
      'Built an on-device body measurement pipeline in Flutter using Firebase ML Kit and TensorFlow Lite, achieving sub-200ms inference latency with zero server round-trips. Designed an offline-first e-commerce platform with Firestore, RESTful APIs, and PayPal integration; built a personalized recommendation engine mapping body measurements to garment SKUs.',
    tags: ['Flutter', 'Firebase ML Kit', 'TensorFlow Lite', 'Firestore', 'PayPal'],
  },
  {
    year: 'Mar 2016 — Aug 2024',
    title: 'Director / Co-Founder (Technical Lead)',
    company: 'Plexus Transport Services Pvt. Ltd.',
    location: 'Hyderabad, India',
    description:
      'Founded and architected Pleasehorn, a real-time GPS fleet tracking platform for Android and iOS, scaling to 1,000+ vehicles using Firebase with live telemetry dashboards. Re-engineered the GPS telemetry ingestion pipeline with Firebase batch writes and connection pooling, cutting real-time data processing latency by 24%. Built a React.js operational dashboard with live WebSocket telemetry streams, increasing customer satisfaction by 40%.',
    tags: ['Flutter', 'React.js', 'Firebase', 'WebSocket', 'Android', 'iOS'],
  },
  {
    year: 'Aug — Dec 2023',
    title: 'Mobile & Backend Developer',
    company: 'Turing Enterprises, Inc.',
    location: 'Remote',
    description:
      'Integrated CometChat SDK into a Flutter app for real-time messaging and push notifications; implemented OAuth 2 social login (Google, Meta, Apple) with secure token exchange. Built a fault-tolerant Stripe payment microservice in FastAPI and a BERT-based sentiment analysis API — achieving 100% transaction success under 100+ concurrent requests and increasing feedback response rates by 48%.',
    tags: ['Flutter', 'FastAPI', 'Stripe', 'BERT', 'OAuth 2', 'CometChat'],
  },
  {
    year: 'Mar — Oct 2022',
    title: 'Software Development Engineer II',
    company: 'NonStop io Technologies Pvt. Ltd.',
    location: 'Pune, India',
    description:
      'Built a hybrid geolocation engine in React Native with GPS polling, geofencing, and adaptive sampling, achieving 90% location accuracy and contributing to a 25% NPS increase. Improved app responsiveness by 34% via Firebase Analytics-driven query tuning and reduced re-renders. Built GitHub Actions CI/CD pipelines with Docker, cutting deployment time by 30% and improving SonarQube pass rate by 15%.',
    tags: ['React Native', 'Firebase', 'Docker', 'GitHub Actions', 'JWT'],
  },
  {
    year: 'Mar 2021 — Mar 2022',
    title: 'Flutter Developer / Full-Stack Developer',
    company: 'Around29 Digital Media Solutions',
    location: 'Hyderabad, India',
    description:
      'Built Flutter and React Native apps integrating Google Maps, Firebase Realtime Database, and Razorpay; improved First Contentful Paint by 28% via code splitting, lazy loading, and data prefetching. Achieved 99.99% test coverage on critical modules using Jest; integrated Crashlytics for real-time crash reporting, driving a 75% reduction in production defects.',
    tags: ['Flutter', 'React Native', 'Google Maps', 'Razorpay', 'Firebase', 'Jest'],
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

const skills = [
  { id: 'Languages', title: 'Languages', text: 'Java, Dart, Python, Javascript, Kotlin, Swift, TypeScript, SQL' },
  { id: 'Frontend', title: 'Frontend', text: 'Flutter, React Native, React.js, Android (Development), iOS (Development), Ionic.' },
  { id: 'Backend', title: 'Backend', text: 'Node.js, Express.js, Django, FastAPI, Streamlit' },
  { id: 'Databases', title: 'Databases', text: 'MySQL, PostgreSQL, MongoDB, Redis, SQLite, Oracle' },
  { id: 'DevOps', title: 'DevOps & Cloud', text: 'AWS, GCP, Firebase, CI/CD (GitHub Actions), Docker, Jenkins, Bitbucket' },
]

export default function About({ active }) {
  return (
    <section className={`container about${active ? ' active' : ''}`} id="about">
      <div className="main-title">
        <br />
        <h2>
          <a>About</a> <span>ME</span>
          <span className="bg-text">MY STATS</span>
        </h2>
      </div>
      <div className="about-container">
        <div className="left-about">
          <p>
            I&apos;m a Software Engineer with over 5 years of experience in mobile app and full-stack
            development, specializing in AI-driven applications and secure software solutions.
            Currently pursuing my MS in Computer Science at the New Jersey Institute of Technology,
            I thrive on building scalable systems with a focus on CI/CD pipelines and Agile methodologies.
            <br /><br />
            As a Co-Founder of Plexus Transport Services, I led the development of real-time GPS fleet
            management solutions, optimizing technical processes and enhancing customer satisfaction.
            My expertise spans across Flutter, React Native, Android/iOS development, and backend
            technologies like Node.js and Django, along with cloud platforms such as AWS and Firebase.
            <br /><br />
            I&apos;ve engineered applications with advanced features like NLP-powered sentiment analysis,
            hybrid geolocation strategies, and fault-tolerant payment systems, consistently improving
            performance and user experience. My goal is to leverage cutting-edge technology to solve
            real-world problems while fostering innovation and efficiency in software development.
            <br /><br />
            Currently, I am pursuing a Master of Science in Computer Science at NJIT. Throughout my career,
            I have navigated various domains, including transportation, e-commerce, and finance, developing
            solutions that address real-world challenges and enhance user experiences.
            <br /><br />
            I excel in collaborative environments and appreciate Agile methodologies, which foster innovation
            and effective problem-solving. Whether developing intuitive mobile applications, optimizing
            backend systems, or deploying solutions in cloud environments, I am driven by the transformative
            impact of technology on society.
            <br /><br />
            Outside of work, I enjoy learning to make new cuisines and love games like chess. I represented
            my university in lawn tennis during my bachelor&apos;s degree.
          </p>
        </div>
      </div>
      <div className="about-stats">
        <h4 className="stat-title">My Skills</h4>
        {skills.map(skill => (
          <div key={skill.id} id={skill.id} className="tabcontent">
            <h3>{skill.title}</h3>
            <p>{skill.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

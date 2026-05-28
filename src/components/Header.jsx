'use client'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export default function Sidebar({ activeSection }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <div className="sidebar-header">
          <h1 className="name">Meghana Gujju</h1>
          <h2 className="title">Software Engineer</h2>
          <p className="tagline">
            I build scalable mobile apps, full-stack systems, and AI-powered solutions.
          </p>
        </div>

        <nav className="sidebar-nav" aria-label="In-page navigation">
          {navItems.map(({ id, label }) => (
            <div key={id} className="nav-item">
              <a
                onClick={() => scrollTo(id)}
                className={activeSection === id ? 'active' : ''}
                aria-current={activeSection === id ? 'true' : undefined}
              >
                <span className="nav-line" />
                {label}
              </a>
            </div>
          ))}
        </nav>
      </div>

      <div className="sidebar-socials">
        <a
          href="https://github.com/gujjumeghana"
          target="_blank"
          rel="noreferrer"
          className="social-link"
          aria-label="GitHub"
        >
          <i className="fab fa-github" />
        </a>
        <a
          href="https://www.linkedin.com/in/meghanagujju/"
          target="_blank"
          rel="noreferrer"
          className="social-link"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin-in" />
        </a>
        <a
          href="mailto:meghana.gujju@gmail.com"
          className="social-link"
          aria-label="Email"
        >
          <i className="fas fa-envelope" />
        </a>
      </div>
    </aside>
  )
}

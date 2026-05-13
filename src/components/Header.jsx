export default function Header({ active }) {
  return (
    <header className={`container header${active ? ' active' : ''}`} id="home">
      <div className="header-content">
        <div className="left-header">
          <div className="h-shape"></div>
          <div className="image">
            <img src="/img/meghana.jpg" alt="Meghana Gujju" />
          </div>
        </div>
        <div className="right-header">
          <h1 className="name">
            Hi, I&apos;m <span>Meghana Gujju.</span>
          </h1>
          <p>
            I&apos;m a Graduate Student in CS at NJIT | SDE | Mobile App &amp; Full Stack Developer
          </p>
          <div className="btn-con">
            <a href="/Resume.pdf" className="main-btn">
              <span className="btn-text">Resume</span>
              <span className="btn-icon">
                <i className="fas fa-download"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

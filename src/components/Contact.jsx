export default function Contact({ active }) {
  return (
    <section className={`container contact${active ? ' active' : ''}`} id="contact">
      <div className="contact-container">
        <div className="main-title">
          <h2>
            CONTACT <span>ME</span>
            <span className="bg-text">CONTACT</span>
          </h2>
        </div>
        <div className="contact-content-con">
          <div className="left-contact">
            <h4>Contact me here</h4>
            <br /><br />
            <div className="contact-info">
              <div className="contact-item">
                <div className="icon">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Location: Newark, New Jersey, United States</span>
                </div>
              </div>
              <br />
              <div className="contact-item">
                <div className="icon">
                  <i className="fas fa-envelope"></i>
                  <span>Email: meghana.gujju@gmail.com / mg998@njit.edu</span>
                </div>
              </div>
              <br />
              <div className="contact-item">
                <div className="icon">
                  <i className="fa fa-phone-alt"></i>
                  <span>Mobile Number: +1 (267)6882198</span>
                </div>
              </div>
            </div>
            <br /><br />
            <div className="contact-icons">
              <div className="contact-icon">
                <a href="https://www.linkedin.com/in/meghanagujju/" target="_blank" rel="noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="mailto:meghana.gujju@gmail.com" target="_blank" rel="noreferrer">
                  <i className="fa fa-envelope"></i>
                </a>
                <a href="https://github.com/gujjumeghana" target="_blank" rel="noreferrer">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const timelineItems = [
  {
    duration: 'March 2016 - August 2024',
    title: 'Director/Co-Founder in Plexus Transport Services Pvt. Ltd.',
    location: 'Hyderabad, Telangana, India',
  },
  {
    duration: 'February 2024 - August 2024',
    title: 'Software Engineer at C and S Technologies',
    location: 'Hyderabad, Telangana, India',
  },
  {
    duration: 'August 2023 - December 2023',
    title: 'Mobile Developer at Turing',
    location: 'Remote',
  },
  {
    duration: 'March 2022 - October 2022',
    title: 'Software Development Engineer-II at NonStop io Technologies Pvt. Ltd.',
    location: 'Pune, Maharashtra, India',
  },
  {
    duration: 'March 2021 - March 2022',
    title: 'Flutter Developer at Around29 Digital Media Solutions',
    location: 'Hyderabad, Telangana, India',
  },
]

export default function Timeline({ active }) {
  return (
    <section className={`container${active ? ' active' : ''}`} id="portfolio">
      <div className="main-title">
        <br />
        <h2>
          <a>MY</a> <span>TIMELINE</span>
          <span className="bg-text">WORK</span>
        </h2>
      </div>
      <br /><br /><br /><br />
      <div className="timeline">
        {timelineItems.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="tl-icon">
              <i className="fas fa-briefcase"></i>
            </div>
            <p className="tl-duration">{item.duration}</p>
            <h5>
              {item.title} <span> - {item.location}</span>
            </h5>
          </div>
        ))}
      </div>
    </section>
  )
}

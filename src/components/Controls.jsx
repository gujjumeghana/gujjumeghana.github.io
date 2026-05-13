const controls = [
  { id: 'home', icon: 'fas fa-home' },
  { id: 'about', icon: 'fas fa-user' },
  { id: 'portfolio', icon: 'fas fa-briefcase' },
  { id: 'contact', icon: 'fas fa-envelope-open' },
]

export default function Controls({ activeSection, setActiveSection }) {
  return (
    <div className="controls">
      {controls.map(({ id, icon }) => (
        <div
          key={id}
          className={`control${activeSection === id ? ' active-btn' : ''}`}
          onClick={() => setActiveSection(id)}
        >
          <i className={icon}></i>
        </div>
      ))}
    </div>
  )
}

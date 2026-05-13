'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import About from '@/components/About'
import Timeline from '@/components/Timeline'
import Contact from '@/components/Contact'
import Controls from '@/components/Controls'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')
  const [lightMode, setLightMode] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('light-mode', lightMode)
  }, [lightMode])

  return (
    <>
      <Header active={activeSection === 'home'} />
      <main>
        <About active={activeSection === 'about'} />
        <Timeline active={activeSection === 'portfolio'} />
        <Contact active={activeSection === 'contact'} />
      </main>
      <Controls activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="theme-btn" onClick={() => setLightMode(prev => !prev)}>
        <i className="fas fa-adjust"></i>
      </div>
    </>
  )
}

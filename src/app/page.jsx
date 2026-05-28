'use client'

import { useState, useEffect } from 'react'
import Sidebar from '@/components/Header'
import About from '@/components/About'
import Experience from '@/components/Timeline'
import Contact from '@/components/Contact'
import ThemeToggle from '@/components/ThemeToggle'

export default function Home() {
  const [activeSection, setActiveSection] = useState('about')
  const [mousePos, setMousePos] = useState({ x: '50%', y: '50%' })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: `${e.clientX}px`, y: `${e.clientY}px` })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    )
    const ids = ['about', 'experience', 'contact']
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <ThemeToggle />
      <div
        className="cursor-glow"
        style={{
          '--mouse-x': mousePos.x,
          '--mouse-y': mousePos.y,
        }}
      />
      <div className="layout">
        <Sidebar activeSection={activeSection} />
        <main className="main-content">
          <About />
          <Experience />
          <Contact />
        </main>
      </div>
    </>
  )
}

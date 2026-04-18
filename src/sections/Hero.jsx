import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import './Hero.css'

const ROLES = [
  'Desarrollador Frontend',
  'React Developer',
  'UI Engineer',
  'Full Stack Dev',
]

function useTypewriter(words, speed = 80, pause = 2000) {
  const [display, setDisplay] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    let timeout

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed)
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2)
    } else if (deleting && charIdx === 0) {
      setDeleting(false)
      setWordIdx((w) => (w + 1) % words.length)
    }

    setDisplay(current.slice(0, charIdx))
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, wordIdx, words, speed, pause])

  return display
}

export default function Hero() {
  const typed = useTypewriter(ROLES)

  return (
    <section id="hero" className="hero">
      <div className="hero-inner">
        {/* left column */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="hero-greeting mono">¡Hola! Soy</p>
          <h1 className="hero-name">
            Gabriel <span className="glow-cyan">Tuñoque</span>
          </h1>
          <div className="hero-role mono">
            <span className="role-prefix">&gt; </span>
            <span className="role-text">{typed}</span>
            <span className="role-cursor">|</span>
          </div>

          <p className="hero-desc">
            Apasionado por crear experiencias digitales inmersivas y funcionales.
            Me especializo en el ecosistema React y disfruto combinando código limpio
            con diseños impactantes.
          </p>

          {/* Stats */}
          <div className="hero-stats">
            {[
              { num: '1+', label: 'Año de Exp.' },
              { num: '10+', label: 'Proyectos' },
              { num: '5+', label: 'Tecnologías' },
            ].map((s) => (
              <div className="hero-stat" key={s.label}>
                <span className="stat-num glow-cyan">{s.num}</span>
                <span className="stat-label mono">{s.label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="hero-ctas">
            <button className="btn btn-primary" onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}>
              Ver Proyectos →
            </button>
            <a 
              href="/CV_Gabriel_Tunoque.pdf" 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-outline"
            >
              Ver CV
            </a>
          </div>
        </motion.div>

        {/* right column — code card */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="code-card card">
            <div className="code-card-bar">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>
            <pre className="code-block mono">{`const dev = {
  nombre: "Gabriel Tuñoque",
  rol: "Frontend Dev",
  stack: [
    "React",
    "TypeScript",
    "Next.js",
  ],
  disponible: true,
  cafe: "☕ siempre",
}`}
            </pre>
            <div className="code-card-glow" />
          </div>

          {/* Floating badges */}
          <motion.div
            className="float-badge float-badge--react"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >⚛ React</motion.div>
          <motion.div
            className="float-badge float-badge--ts"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >TS</motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero-scroll mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          className="scroll-chevron"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ∨
        </motion.div>
      </motion.div>
    </section>
  )
}

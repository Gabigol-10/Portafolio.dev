import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Skills.css'

const categories = [
  {
    title: 'Frontend',
    color: 'var(--pink)',
    skills: [
      { name: 'React', level: 'Adv', pct: 90 },
      { name: 'TypeScript', level: 'Int', pct: 75 },
      { name: 'Tailwind CSS', level: 'Int', pct: 80 },
      { name: 'Next.js', level: 'Int', pct: 70 },
      { name: 'Framer Motion', level: 'Int', pct: 65 },
    ],
  },
  {
    title: 'Tools',
    color: 'var(--orange)',
    skills: [
      { name: 'Git', level: 'Adv', pct: 85 },
      { name: 'VS Code', level: 'Adv', pct: 90 },
      { name: 'Figma', level: 'Int', pct: 70 },
      { name: 'Supabase', level: 'Int', pct: 60 },
    ],
  },
  {
    title: 'Backend',
    color: 'var(--green)',
    skills: [
      { name: 'Node.js', level: 'Adv', pct: 80 },
      { name: 'Three.js', level: 'Bas', pct: 40 },
      { name: 'Express', level: 'Int', pct: 70 },
      { name: 'FastAPI', level: 'Int', pct: 60 },
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" ref={ref}>
      <div className="section skills">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="section-num glow-cyan">02. </span>Habilidades
          </h2>
          <p className="section-sub">Stack tecnológico y herramientas</p>
        </motion.div>

        <div className="skills-grid">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className="card skills-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <h3 className="skills-cat-title" style={{ color: cat.color }}>
                {cat.title}
              </h3>
              <div className="skills-list">
                {cat.skills.map((s) => (
                  <div className="skill-item" key={s.name}>
                    <div className="skill-info">
                      <span className="skill-name mono">{s.name}</span>
                      <span className="skill-level mono">{s.level}</span>
                    </div>
                    <div className="skill-bar-wrap">
                      <motion.div
                        className="skill-bar-fill"
                        style={{ background: cat.color, boxShadow: `0 0 10px ${cat.color}80` }}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${s.pct}%` } : { width: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 + i * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

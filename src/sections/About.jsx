import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './About.css'

const info = [
  { icon: '📍', label: 'Ubicación', value: 'Lima, Perú' },
  { icon: '📞', label: 'WhatsApp', value: '+51 992 802 996' },
  { icon: '💼', label: 'Experiencia', value: '1 Año de Exp.' },
  { icon: '✅', label: 'Estado', value: 'Disponible' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref}>
      <div className="section about">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="section-num glow-cyan">01. </span>Sobre Mí
          </h2>
        </motion.div>

        <div className="about-layout">
          {/* Photo */}
          <motion.div
            className="about-photo-wrap"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="about-photo-frame">
              <div className="about-photo-placeholder">
                <span className="about-initials">GT</span>
              </div>
              <div className="photo-border" />
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            className="about-info"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="about-bio mono">
              Soy un desarrollador Frontend apasionado por crear experiencias
              digitales inmersivas y funcionales. Me especializo en el ecosistema
              React y disfruto combinando código limpio con diseños impactantes.
              Actualmente ampliando mis conocimientos en Full Stack con Node.js.
            </p>

            <div className="about-ctas">
              <a 
                href="/CV_Gabriel_Tunoque.pdf" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-primary"
              >
                Ver CV
              </a>
            </div>

            <div className="about-grid">
              {info.map((it) => (
                <div className="about-item card" key={it.label}>
                  <span className="about-item-icon">{it.icon}</span>
                  <div>
                    <div className="about-item-label mono">{it.label}</div>
                    <div className="about-item-value">{it.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Projects.css'

import ecommerceImg from '../assets/projects/ecommerce.png'
import dashboardImg from '../assets/projects/dashboard.png'
import weatherImg from '../assets/projects/weather.png'

const projects = [
  {
    title: 'E-commerce Moderno',
    desc: 'Plataforma de ventas con carrito avanzado, pagos integrados y panel de gestión.',
    tech: ['React', 'Next.js', 'Stripe'],
    link: '#',
    repo: '#',
    img: ecommerceImg,
  },
  {
    title: 'Dashboard de Análisis',
    desc: 'Visualización de datos en tiempo real con gráficos interactivos y alertas.',
    tech: ['React', 'D3.js', 'Firebase'],
    link: '#',
    repo: '#',
    img: dashboardImg,
  },
  {
    title: 'App de Clima Pro',
    desc: 'Aplicación meteorológica con geolocalización y pronósticos detallados.',
    tech: ['JS', 'Tailwind', 'API'],
    link: '#',
    repo: '#',
    img: weatherImg,
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" ref={ref}>
      <div className="section projects">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="section-num glow-cyan">03. </span>Proyectos
          </h2>
          <p className="section-sub">Una selección de mi trabajo reciente</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              className="card project-card"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-img-placeholder">
                <img src={p.img} alt={p.title} />
              </div>
              <div className="project-content">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tech">
                  {p.tech.map((t) => (
                    <span key={t} className="tech-tag mono">{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={p.link} className="btn-link mono glow-cyan">Live Demo ↗</a>
                  <a href={p.repo} className="btn-link mono">GitHub</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Contact.css'

const info = [
  { icon: '📍', label: 'Ubicación', value: 'Lima, Perú' },
  { icon: '📞', label: 'WhatsApp', value: '+51 992 802 996' },
  { icon: '💼', label: 'Experiencia', value: '1 Año de Exp.' },
  { icon: '✅', label: 'Estado', value: 'Disponible' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" ref={ref}>
      <div className="section contact">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="section-num glow-cyan">04. </span>Hablemos
          </h2>
          <p className="section-sub">¿Tienes una idea en mente? Contáctame</p>
        </motion.div>

        <div className="contact-layout">
          {/* Left info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="contact-intro">
              Estoy siempre abierto a discutir nuevos proyectos, ideas creativas
              o oportunidades para ser parte de tus visiones.
            </p>

            <div className="contact-methods">
              <div className="contact-method card">
                <span className="contact-icon">📧</span>
                <div className="contact-text">
                  <span className="contact-label mono">Email</span>
                  <span className="contact-value">gabrielsebastiants@gmail.com</span>
                </div>
              </div>
              <div className="contact-method card">
                <span className="contact-icon">💬</span>
                <div className="contact-text">
                  <span className="contact-label mono">WhatsApp</span>
                  <span className="contact-value">+51 992 802 996</span>
                </div>
              </div>
              <div className="contact-method card">
                <span className="contact-icon">📍</span>
                <div className="contact-text">
                  <span className="contact-label mono">Ubicación</span>
                  <span className="contact-value">Lima, Perú</span>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/51992802996?text=Hola,%20revis%C3%A9%20tu%20portafolio%20y%20me%20pareci%C3%B3%20muy%20profesional.%20Estoy%20interesado%20en%20colaborar%20contigo%20en%20un%20proyecto.%20%C2%BFPodemos%20hablar%3F"
              target="_blank"
              rel="noreferrer"
              className="whatsapp-cta card"
            >
              <span className="wa-icon">💬</span>
              <span className="mono">Chatea conmigo en WhatsApp</span>
            </a>
          </motion.div>

          {/* Right form */}
          <motion.div
            className="contact-form-wrap card"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label className="mono">Nombre</label>
                <input type="text" placeholder="Tu nombre" className="mono" />
              </div>
              <div className="form-group">
                <label className="mono">Email</label>
                <input type="email" placeholder="tu@email.com" className="mono" />
              </div>
              <div className="form-group">
                <label className="mono">Mensaje</label>
                <textarea rows="5" placeholder="Cuéntame sobre tu proyecto..." className="mono"></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-submit">
                <span className="mono">Enviar Mensaje</span>
                <span className="btn-icon">✈</span>
              </button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <footer className="footer mono">
          <div className="footer-line" />
          <div className="footer-content">
            <span>© 2026 Gabriel Tuñoque</span>
            <div className="footer-links">
              <a href="#">GitHub</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  )
}

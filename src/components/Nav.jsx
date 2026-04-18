import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Nav.css'

const links = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre Mí', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: '#contact' },
]

export default function Nav() {
  const [active, setActive] = useState('#hero')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setActive(href)
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav-inner">
        {/* Logo */}
        <button className="nav-logo mono" onClick={() => handleNav('#hero')}>
          &lt;GT /&gt;
        </button>

        {/* Desktop links */}
        <nav className="nav-links" role="navigation">
          {links.map((l) => (
            <button
              key={l.href}
              className={`nav-link ${active === l.href ? 'nav-link--active' : ''}`}
              onClick={() => handleNav(l.href)}
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`nav-hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
          id="nav-hamburger-btn"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="nav-mobile"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {links.map((l) => (
              <button
                key={l.href}
                className={`nav-mobile-link ${active === l.href ? 'active' : ''}`}
                onClick={() => handleNav(l.href)}
              >
                {l.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Cursor.css'

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [trail, setTrail] = useState({ x: -100, y: -100 })
  const [clicking, setClicking] = useState(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY })
    const down = () => setClicking(true)
    const up = () => setClicking(false)

    const checkHover = (e) => {
      const el = e.target
      const isLink = el.closest('a, button, [data-cursor-hover]')
      setHovering(!!isLink)
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mousemove', checkHover)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousemove', checkHover)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
    }
  }, [])

  return (
    <>
      {/* Dot */}
      <motion.div
        className="cursor-dot"
        animate={{ x: pos.x - 4, y: pos.y - 4, scale: clicking ? 0.5 : 1 }}
        transition={{ duration: 0, ease: 'linear' }}
      />
      {/* Ring */}
      <motion.div
        className="cursor-ring"
        animate={{
          x: pos.x - 20,
          y: pos.y - 20,
          scale: hovering ? 2 : clicking ? 0.8 : 1,
          borderColor: hovering ? 'var(--accent)' : 'var(--text)',
        }}
        transition={{ duration: 0.12, ease: 'linear' }}
      />
    </>
  )
}

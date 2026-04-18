import { useEffect, useRef } from 'react'

export default function MatrixRain() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    let w = (canvas.width = window.innerWidth)
    let h = (canvas.height = window.innerHeight)

    const fontSize = 14
    const cols = Math.floor(w / fontSize)
    const drops = Array(cols).fill(1)

    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZアイウエオカキクケコサシスセソ'

    let animId

    function draw() {
      ctx.fillStyle = 'rgba(2, 6, 23, 0.05)'
      ctx.fillRect(0, 0, w, h)

      ctx.font = `${fontSize}px JetBrains Mono, monospace`

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)]

        // Leading char brighter
        const isLead = drops[i] * fontSize < 2 * fontSize
        ctx.fillStyle = isLead ? '#aaffff' : 'rgba(0, 245, 255, 0.6)'

        ctx.fillText(char, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > h && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }

      animId = requestAnimationFrame(draw)
    }

    draw()

    const onResize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.35,
      }}
    />
  )
}

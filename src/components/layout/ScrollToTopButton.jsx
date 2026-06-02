import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleVisibility = () => setVisible(window.scrollY > 440)
    window.addEventListener('scroll', handleVisibility)
    return () => window.removeEventListener('scroll', handleVisibility)
  }, [])

  return (
    <button
      type="button"
      className={`scroll-to-top ${visible ? 'is-visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </button>
  )
}

export default ScrollToTopButton

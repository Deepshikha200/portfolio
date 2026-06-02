import { useEffect } from 'react'
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi'
import ThemeToggle from '../common/ThemeToggle'

const Navbar = ({ links, activeSection, theme, onToggleTheme, isMenuOpen, setIsMenuOpen }) => {
  useEffect(() => {
    if (!isMenuOpen) {
      document.body.classList.remove('menu-open')
      return
    }

    document.body.classList.add('menu-open')

    return () => {
      document.body.classList.remove('menu-open')
    }
  }, [isMenuOpen])

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#home" className="navbar__brand">
          Deepshikha
        </a>

        <nav className="navbar__desktop-nav" aria-label="Section navigation">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={activeSection === link.id ? 'is-active' : ''}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            className="navbar__menu-button"
            onClick={() => setIsMenuOpen((menuOpen) => !menuOpen)}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

    </header>
  )
}

export default Navbar

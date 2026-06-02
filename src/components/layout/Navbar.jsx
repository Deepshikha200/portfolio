import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi'
import { AnimatePresence } from 'framer-motion'
import ThemeToggle from '../common/ThemeToggle'
import MobileMenu from './MobileMenu'
import { useActiveSection } from '../../hooks/useActiveSection'

const Navbar = ({ links, theme, resumePath, onToggleTheme, isMenuOpen, setIsMenuOpen }) => {
  const activeSection = useActiveSection(links.map((link) => link.id))

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
          <a className="button button--secondary" href={resumePath} download>
            Download Resume
          </a>
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

      <AnimatePresence>
        <MobileMenu
          isOpen={isMenuOpen}
          links={links}
          activeSection={activeSection}
          onClose={() => setIsMenuOpen(false)}
        />
      </AnimatePresence>
    </header>
  )
}

export default Navbar

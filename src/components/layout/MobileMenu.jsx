import { motion } from 'framer-motion'

const MobileMenu = ({ isOpen, links, activeSection, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="mobile-menu-layer">
      <motion.button
        type="button"
        className="mobile-menu-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        aria-label="Close mobile menu"
      />

      <motion.div
        className="mobile-menu"
        initial={{ opacity: 0, x: '-100%' }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: '-100%' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <h4 className="mobile-menu__title">Deepshikha</h4>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={onClose}
                className={activeSection === link.id ? 'is-active' : ''}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}

export default MobileMenu

import { motion } from 'framer-motion'

const MobileMenu = ({ isOpen, links, activeSection, onClose }) => {
  if (!isOpen) return null

  return (
    <motion.div
      className="mobile-menu"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.25 }}
    >
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
  )
}

export default MobileMenu

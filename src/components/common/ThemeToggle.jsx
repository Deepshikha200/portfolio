import { FaMoon, FaSun } from 'react-icons/fa'

const ThemeToggle = ({ theme, onToggle }) => (
  <button
    type="button"
    className="theme-toggle"
    onClick={onToggle}
    aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
  >
    {theme === 'dark' ? <FaSun /> : <FaMoon />}
  </button>
)

export default ThemeToggle

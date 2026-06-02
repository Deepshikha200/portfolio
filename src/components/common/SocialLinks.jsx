import { FaEnvelope, FaLinkedin } from 'react-icons/fa'

const SocialLinks = ({ email, linkedIn }) => (
  <div className="social-links">
    <a href={`mailto:${email}`} aria-label="Email Deepshikha">
      <FaEnvelope />
      <span>Email</span>
    </a>
    <a href={linkedIn} target="_blank" rel="noreferrer" aria-label="Visit LinkedIn profile">
      <FaLinkedin />
      <span>LinkedIn</span>
    </a>
  </div>
)

export default SocialLinks

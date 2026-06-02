import { FaExternalLinkAlt } from 'react-icons/fa'
import AnimatedSection from '../common/AnimatedSection'
import SectionHeading from '../common/SectionHeading'

const PortfolioLinks = ({ data }) => (
  <AnimatedSection id="portfolio-links" className="content-section">
    <div className="container">
      <SectionHeading
        eyebrow="Live Work"
        title={data.title}
        description="Direct access to production applications and portfolio websites."
      />
      <div className="links-grid">
        {data.links.map((link) => (
          <a
            key={link}
            href={link}
            target="_blank"
            rel="noreferrer"
            className="glass-card link-card gsap-reveal"
          >
            <span>{link.replace(/^https?:\/\//, '')}</span>
            <FaExternalLinkAlt />
          </a>
        ))}
      </div>
    </div>
  </AnimatedSection>
)

export default PortfolioLinks

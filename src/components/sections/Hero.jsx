import { motion } from 'framer-motion'
import { FaMapMarkerAlt } from 'react-icons/fa'
import SocialLinks from '../common/SocialLinks'
import { useTypewriter } from '../../hooks/useTypewriter'

const Hero = ({ data }) => {
  const typewriterText = useTypewriter(data.typewriterWords)

  return (
    <section id="home" className="hero-section">
      <div className="container hero-section__inner">
        <motion.p
          className="hero-section__kicker hero-animate"
        >
          Frontend Developer Portfolio
        </motion.p>
        <motion.h1
          className="hero-animate"
        >
          {data.name}
        </motion.h1>
        <motion.p
          className="hero-section__role hero-animate"
        >
          {data.role} - <span>{typewriterText}</span>
        </motion.p>
        <motion.p
          className="hero-section__summary hero-animate"
        >
          {data.summary}
        </motion.p>
        <div className="hero-section__meta hero-animate">
          <span>
            <FaMapMarkerAlt />
            {data.location}
          </span>
          <a href={`mailto:${data.email}`}>{data.email}</a>
        </div>
        <div className="hero-section__actions hero-animate">
          <a href="#projects" className="button">
            View Projects
          </a>
          <a href={data.resumePath} className="button button--secondary" download>
            Download Resume
          </a>
        </div>
        <div className="hero-animate">
          <SocialLinks email={data.email} linkedIn={data.linkedIn} />
        </div>
      </div>
    </section>
  )
}

export default Hero

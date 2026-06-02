import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

const ProjectCard = ({ project }) => (
  <motion.article
    className="project-card gsap-reveal"
    whileHover={{ y: -8 }}
    transition={{ duration: 0.25, ease: 'easeOut' }}
  >
    <div className="project-card__image-wrapper">
      <img src={project.image} alt={`${project.name} preview`} loading="lazy" />
    </div>
    <div className="project-card__content">
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <ul>
        {project.features.map((feature) => (
          <li key={feature}>
            <FaArrowRight aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  </motion.article>
)

export default ProjectCard

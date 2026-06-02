import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const AnimatedSection = ({ id, className, children }) => {
  const variants = useScrollReveal()

  return (
    <motion.section
      id={id}
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.section>
  )
}

export default AnimatedSection

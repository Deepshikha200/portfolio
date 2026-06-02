import AnimatedSection from '../common/AnimatedSection'
import SectionHeading from '../common/SectionHeading'

const About = ({ data }) => (
  <AnimatedSection id="about" className="content-section">
    <div className="container">
      <SectionHeading eyebrow="Introduction" title={data.title} />
      <p className="lead-text gsap-reveal">{data.description}</p>
    </div>
  </AnimatedSection>
)

export default About

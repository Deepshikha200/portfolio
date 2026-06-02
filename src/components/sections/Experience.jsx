import AnimatedSection from '../common/AnimatedSection'
import SectionHeading from '../common/SectionHeading'

const Experience = ({ data }) => (
  <AnimatedSection id="experience" className="content-section">
    <div className="container">
      <SectionHeading
        eyebrow="Career"
        title={data.title}
        description="A track record of building and supporting impactful digital products."
      />
      <div className="timeline">
        {data.timeline.map((item) => (
          <article key={`${item.company}-${item.duration}`} className="timeline__item glass-card gsap-reveal">
            <span className="timeline__duration">{item.duration}</span>
            <h3>{item.company}</h3>
            <p className="timeline__role">{item.role}</p>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </div>
  </AnimatedSection>
)

export default Experience

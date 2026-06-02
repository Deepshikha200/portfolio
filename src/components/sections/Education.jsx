import AnimatedSection from '../common/AnimatedSection'
import SectionHeading from '../common/SectionHeading'

const Education = ({ data }) => (
  <AnimatedSection id="education" className="content-section">
    <div className="container">
      <SectionHeading
        eyebrow="Academic Background"
        title={data.title}
        description="Strong academic foundation supporting practical frontend engineering expertise."
      />
      <div className="education-grid">
        {data.items.map((item) => (
          <article key={item.degree} className="glass-card education-card gsap-reveal">
            <h3>{item.degree}</h3>
            <p>{item.institution}</p>
            <span>{item.duration}</span>
          </article>
        ))}
      </div>
    </div>
  </AnimatedSection>
)

export default Education

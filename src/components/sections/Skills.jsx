import AnimatedSection from '../common/AnimatedSection'
import SectionHeading from '../common/SectionHeading'

const Skills = ({ data }) => (
  <AnimatedSection id="skills" className="content-section">
    <div className="container">
      <SectionHeading
        eyebrow="Capabilities"
        title={data.title}
        description="Technologies and strengths that drive production-ready frontend builds."
      />
      <div className="skills-grid">
        {data.groups.map((group) => (
          <article key={group.title} className="glass-card gsap-reveal">
            <h3>{group.title}</h3>
            <ul className="chip-list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </AnimatedSection>
)

export default Skills

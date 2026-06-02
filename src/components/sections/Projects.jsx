import AnimatedSection from '../common/AnimatedSection'
import SectionHeading from '../common/SectionHeading'
import ProjectCard from '../common/ProjectCard'

const Projects = ({ data }) => (
  <AnimatedSection id="projects" className="content-section">
    <div className="container">
      <SectionHeading
        eyebrow="Work"
        title={data.title}
        description="Highlighted builds that focus on clean architecture, usability, and speed."
      />
      <div className="projects-grid">
        {data.items.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  </AnimatedSection>
)

export default Projects

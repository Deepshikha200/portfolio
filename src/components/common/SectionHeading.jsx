const SectionHeading = ({ eyebrow = 'Section', title, description }) => (
  <header className="section-heading gsap-reveal">
    <p className="section-heading__eyebrow">{eyebrow}</p>
    <h2>{title}</h2>
    {description ? <p className="section-heading__description">{description}</p> : null}
  </header>
)

export default SectionHeading

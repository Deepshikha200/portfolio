import AnimatedSection from '../common/AnimatedSection'
import SectionHeading from '../common/SectionHeading'
import SocialLinks from '../common/SocialLinks'

const Contact = ({ data }) => (
  <AnimatedSection id="contact" className="content-section content-section--contact">
    <div className="container contact-layout">
      <div>
        <SectionHeading eyebrow="Get In Touch" title={data.title} description={data.subtitle} />
        <p className="contact-details">{data.location}</p>
        <a href={`mailto:${data.email}`} className="contact-details contact-details--link">
          {data.email}
        </a>
        <SocialLinks email={data.email} linkedIn={data.linkedIn} />
      </div>

      <form className="contact-form glass-card gsap-reveal" onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" placeholder="Your name" />

        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" placeholder="Your email" />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={5} placeholder="How can I help?" />

        <button type="submit" className="button">
          Send Message
        </button>
      </form>
    </div>
  </AnimatedSection>
)

export default Contact

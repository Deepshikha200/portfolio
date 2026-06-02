import SocialLinks from '../common/SocialLinks'
import { portfolioData } from '../../data/portfolioData'

const Footer = ({ data }) => (
  <footer className="footer">
    <div className="container footer__inner">
      <p>{data.text}</p>
      <SocialLinks email={portfolioData.contact.email} linkedIn={portfolioData.contact.linkedIn} />
    </div>
  </footer>
)

export default Footer

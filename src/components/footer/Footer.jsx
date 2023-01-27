import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsLinkedin, BsYoutube} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Brad Vidal</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com/in/bradvidal"><BsLinkedin/></a>
        <a href="https://github.com/bvfusion1001"><FaGithub/></a>
        <a href="https://facebook.com/thereisbrad"><FaFacebookF/></a>
        <a href="https://instagram.com/whereisbrad_"><FiInstagram/></a>
        <a href="https://youtube.com/whereisbrad"><BsYoutube/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Brad's Portfolio. All rights reserved 😉</small>
      </div>
    </footer>
  )
}
export default Footer
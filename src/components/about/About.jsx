import './about.css'
import ME from '../../assets/me-about2.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME}/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>X+ Years Work</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon"/>
              <h5>Clients</h5>
              <small>XXX+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small>XX+ Completed</small>
            </article>
          </div>

          <p>
          I'm baby flexitarian tofu +1, poke williamsburg praxis humblebrag sustainable thundercats chambray chillwave venmo. Deep v pabst kickstarter offal forage echo park affogato, vice prism vibecession banjo bespoke air plant chartreuse. Hoodie banjo locavore microdosing tousled. Banjo single-origin coffee bushwick actually tbh cliche hell of retro. 
          Dummy text? More like dummy thicc text, amirite?
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}
export default About
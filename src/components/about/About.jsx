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
              <small>12+ Years Work</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon"/>
              <h5>Lead</h5>
              <small>2 - 20 Members</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small>SMB - Enterprise</small>
            </article>
          </div>

          <p>
          My core passion for optimization, efficiency, and automation apply to most aspects of my work and personal life. With my degree in Applied Mathematics and early start as a Software Engineer I have a strong technical background. I enjoy learning so much that I spend all my free time educating on topics from programming, technology, and systems to cooking, fitness/health, real estate, finance, and video editing.
          <br/><br/>
          I spent 6 years as an engineering manager where I guided small and large teams, external third-parties, and related roles like UX, DevOps, Product, and Support to delivering quality products. My spanning skills set and obsession for process allows me to quickly convert technical challenges into educated technical decisions and implementation plans. Interfacing with so many parties and variables has led to my mastery of time management and effective communication which allows me to drive success throughout an organization with many moving pieces.
          <br/><br/>
          After a 6 month break from my career pursuing my dream of traveling the world, I've decided to pivot to a role where I can up-skill from managing teams and people to specialist individual contributor, and then to a generalist of the feature development lifecycle. I plan to begin by specializing with software development within the SDLC through learning a wide array of frameworks, languages, and practices, and then broadening my skills outward into systems, architecture, and infrastructure.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}
export default About
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me2.png'
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <section className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Brad Vidal</h1>
        <h5 className="text-light">Full-stack Software Engineer / Engineering Manager</h5>
        <small>I built this site in one day using pure React</small>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="me"/>
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </section>
    </header>
  );
};
export default Header;

import { BiCheck } from "react-icons/bi";
import "./services.css";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/* FRONTEND */}
        <article className="service">
          <div className="service__head">
            <h3>Frontend</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Create beautiful SPAs from scratch with authentication, routing, and permissions</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Create distributed Chrome Extensions with background services and integrations</p>
            </li>
          </ul>
        </article>

        {/* BACKEND */}
        <article className="service">
          <div className="service__head">
            <h3>Backend</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Create stateless APIs with authentication and architecture best practices</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Create SQL and NoSQL databases with scalability in mind</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Design deployment pipelines to promote apps from test to production</p>
            </li>
          </ul>
        </article>

        {/* CONSULTING */}
        <article className="service">
          <div className="service__head">
            <h3>Consulting</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Research and balance trade-offs to make challenging technical decisions</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Develop thorough POCs while weighing and documenting potential technical solutions</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Create delivery focused implementation and release plans</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Analyzing and automating processes to optimize resources</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};
export default Services;

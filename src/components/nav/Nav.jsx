import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { RiServiceLine } from "react-icons/ri";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { useEffect, useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  const updateNav = () => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top > 0 && rect.top < 150) {
        if (section.id === 'header') {
          setActiveNav(`#`);
        } else if (section.id === 'portfolio') {
          setActiveNav(`#services`);
        } else {
          setActiveNav(`#${section.id}`);
        }
      }
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", updateNav);
  });

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};
export default Nav;

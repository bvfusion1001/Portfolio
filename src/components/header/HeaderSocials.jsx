import { BsLinkedin, BsYoutube } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com/in/bradvidal" target="_blank" rel="noreferrer"><BsLinkedin/></a>
      <a href="https://github.com/bvfusion1001" target="_blank" rel="noreferrer"><FaGithub/></a>
      <a href="https://youtube.com/whereisbrad" target="_blank" rel="noreferrer"><BsYoutube/></a>
    </div>
  );
};
export default HeaderSocials;

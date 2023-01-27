import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";


const portfolioItems = () => {
  return [
    {
      id: 1,
      image: IMG1,
      title: 'Job Management SPA with Profiles, Search, and Analytics',
      github: 'https://github.com/bvfusion1001/Jobify',
      demo: 'https://jobify-a4of.onrender.com',
  },
    {
      id: 2,
      image: IMG2,
      title: 'Responsive React Portfolio with CSS Animations, Fixed Navigation, and Email Functionality',
      github: 'https://github.com/bvfusion1001/Portfolio',
      text: 'This the demo 😉'
  },
]
}

export default portfolioItems
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

import {useRef} from 'react';
import emailjs from '@emailjs/browser';

const email = "bradvidal@gmail.com";
const facebookId = "brad.vidal";
const phone = "+1(909)240-1143";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_xftpzej', 'template_momejmh', form.current, 'TkYcovd-XMLAFc0oM')
    e.target.reset()
  }
  
  const form = useRef();
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>{email}</h5>
            <a href={`mailto:${email}`}>Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>{facebookId}</h5>
            <a href={`https://m.me/${facebookId}`}>Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>{phone}</h5>
            <a href={`https://api.whatsapp.com/send?phone=${phone}`}>
              Send a message
            </a>
          </article>
        </div>
        {/* END OF */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="name"
            required
          />
          <input type="text" name="email" placeholder="email" required />
          <textarea name="message" rows="7" placeholder="what's up?" required></textarea>
          <button type='submit' className="btn btn-primary">Send Message</button>
        </form>
       </div>
     </section>
  );
};
export default Contact;

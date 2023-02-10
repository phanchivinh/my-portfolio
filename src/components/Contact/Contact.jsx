import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEnvelope, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons'
import SlideButton from '../SlideButton/SlideButton'
// import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  return (
    <section className='contact section'>
      <div className='page-header'>
        <h1><span>Get in</span> touch</h1>
        <span>Contact</span>
      </div>
      <div className='contact__wrapper'>
        <div className='contact__info'>
          <h3>Don't be shy !</h3>
          <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
          <ul className='contact__info-list'>
            <li>
              <div className='icon'>
                <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
              </div>
              <span>Address</span> Japan
            </li>
            <li>
              <div className='icon'>
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
              </div>
              <span>Email</span> phanchivinh.7275@gmail.com
            </li>
            <li>
              <div className='icon'>
                <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
              </div>
              <span>Phone</span> 0931817xxx
            </li>
          </ul>
        </div>
        <form className='contact-form'>
          <div className='contact-form__info'>
            <div className='contact-form__info-name'>
              <input name='name' type='text' placeholder='your name' />
            </div>
            <div className='contact-form__info-email'>
              <input name='email' type='email' placeholder='your email' />
            </div>
          </div>
          <div className='contact-form__subject'>
            <input name='subject' type='text' placeholder='your subject' />
          </div>
          <div className='contact-form__message'>
            <textarea name='message' placeholder='your message' spellCheck='false' />
          </div>
          <SlideButton icon={faPaperPlane} text='send message' location='' type='submit' />
        </form>
      </div>
    </section>
  )
}

export default Contact
import React from 'react'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import SlideButton from '../SlideButton/SlideButton'
import skills from '../../assets/skills'

import './About.css'

const About = () => {
  return (
    <section className='about section'>
      <div className='page-header'>
        <h1><span>About</span> Me</h1>
        <span>Resume</span>
      </div>
      <div className='about__wrapper'>
        <div className='personal-infos'>
          <h3>Personal Infos</h3>
          <ul className='info-list'>
            <li><span>Last Name:</span> Phan</li>
            <li><span>First Name:</span> Chi Vinh</li>
            <li><span>Nationality:</span> Vietnamese</li>
            <li><span>Sex:</span> Male</li>
            <li><span>University:</span> Ton Duc Thang University</li>
            <li><span>Major:</span> Computer Science</li>
            <li><span>Address:</span> Ho Chi Minh city</li>
            <li><span>Phone:</span> +84931817xxx</li>
            <li><span>Email:</span> phanchivinh.7275@gmail.com</li>
            <li><span>Languages:</span> Vietnamese, English</li>
          </ul>
          <SlideButton icon={faEnvelope} text='Contact me' location='/contact' />
        </div>
        <div className='skills'>
          <h3>My skills</h3>
          <div className='skill__wrapper'>
            {skills.map((skill, index) => (
              <div className='skill-item' key={skill.name + index}>
                <div className='skill-item__img'>
                  <div className='skill-item__img-wrap'>
                    <img src={skill.image} alt={skill.name} />
                  </div>
                </div>
                <div className='skill-item__name'>{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
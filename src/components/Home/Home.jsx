import React from 'react'
import placeholderImg from '../../assets/images/placeholder-img.jpg'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { SlideButton } from '../'
import './Home.css'

const Home = () => {
  return (
    <div className='home section'>
      <div className='color-block' />
      <div className='home__img'>
        <div className='home__img-wrapper'>
          <img src={placeholderImg} alt='home img' />
        </div>
      </div>
      <div className='home__text'>
        <div className='home__text-wrapper'>
          <h1>
            I'm Phan Chi Vinh
            <br/>
            <span>Frontend Developer</span>
          </h1>
          <p>
            I'm a VietNam based front-end developer focused on crafting clean & user-friendly experiences, I am passionate about building excellent software that improves the lives of those around me.
          </p>

          <div className='home__btn'>
            <SlideButton icon={faArrowRight} text='Portfolio' location='/portfolio' />
            <SlideButton icon={faArrowRight} text='About' location='/about' />
          </div>
        </div>
        </div>
    </div>
  )
}

export default Home
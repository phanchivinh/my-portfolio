
// import placeholderImg from '../../assets/images/placeholder-img.jpg'
import myImg from '../../assets/images/me2.jpg'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import TypewriterComponent from 'typewriter-effect'

import { SlideButton } from '../'
import './Home.css'

const Home = () => {
  const introString = "Hello! My name is Phan Chi Vinh. I'm majoring in Computer Science at Ton Duc Thang University. Now I aim to be a Front-end Developer, focusing on creating clean & user-friendly experiences. Learning new things is also what I'm passionate about"
  return (
    <div className='home section' data-aos='fade-up'>
      <div className='color-block' />
      <div className='home__img'>
        <div className='home__img-wrapper'>
          <img src={myImg} alt='home img' />
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
            <TypewriterComponent
              options={{
                strings: introString,
                autoStart:true,
                delay:15
              }}
            />
            
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
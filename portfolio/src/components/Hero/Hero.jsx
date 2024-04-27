import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Adithya Baliga,</span> Full Stack Developer </h1>
      <p>Lorem ipsum dolor sit amet consectetuipsam dolorum ut harum tempore sequi commodi ipsa, dolor mollitia quibusdam, placeat suscipit aspernatur nihil similique dignissimos!</p>

      <div className="hero-action">
        <div className="hero-connect">
            Connect With Me
        </div>
        <div className="hero-resume">
            My Resume
        </div>
      </div>
    </div>
  )
}

export default Hero

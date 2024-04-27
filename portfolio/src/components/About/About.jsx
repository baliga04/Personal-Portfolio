import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.svg'

const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About Me</h1> 
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
                {/* <img src={profile_img} alt="" /> */}
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam accusantium placeat dicta libero laudantium sed, quia cumque autem fugiat qui?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni doloribus quod, molestias error fuga placeat?</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width : '50%'}}/></div>
                    <div className="about-skill"><p>REACT</p><hr style={{width : '80%'}}/></div>
                    <div className="about-skill"><p>JAVA</p><hr style={{width : '70%'}}/></div>
                    <div className="about-skill"><p>DBMS</p><hr style={{width : '90%'}}/></div>
                </div>
            </div>
        </div>

        <div className="about-acheivements">
            <div className="about-acheivement">
                <h1>8+</h1>
                <p>SKILLS GAINED</p>
            </div>
            <hr />
            <div className="about-acheivement">
                <h1>10+</h1>
                <p>PROJECTS WORKED ON</p>
            </div>
            <hr />
            <div className="about-acheivement">
                <h1>2+</h1>
                <p>NETWORKING</p>
            </div>
        </div>
    </div>
  )
}

export default About

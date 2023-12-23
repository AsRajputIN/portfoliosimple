import React from 'react'
import './skills.css';
import UiDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">I am a skilled and passionate web designer with experience in create visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS and JavaScript, as well as design software such as adobe Photoshop and Illustrator.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UiDesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX design</h2>
                    <p>This is a demo text, you can write your own content here</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={WebDesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Website design</h2>
                    <p>This is a demo text, you can write your own content here</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={AppDesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>App design</h2>
                    <p>This is a demo text, you can write your own content here</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
import React from 'react'
import './works.css'
import Protfolio1 from '../../assets/portfolio-1.png'
import Protfolio2 from '../../assets/portfolio-2.png'
import Protfolio3 from '../../assets/portfolio-3.png'
import Protfolio4 from '../../assets/portfolio-4.png'
import Protfolio5 from '../../assets/portfolio-5.png'
import Protfolio6 from '../../assets/portfolio-6.png'

const Works = () => {
  return (
    <section id="works">
        <h2 className="workstitle">My Portfolio</h2>
        <span className="worksDesc"> I take pride in paying attenton to the smallest details and </span>
        <div className="worksImgs">
            <img src={Protfolio1} alt="" className="worksImg" />
            <img src={Protfolio2} alt="" className="worksImg" />
            <img src={Protfolio3} alt="" className="worksImg" />
            <img src={Protfolio4} alt="" className="worksImg" />
            <img src={Protfolio5} alt="" className="worksImg" />
            <img src={Protfolio6} alt="" className="worksImg" />
        </div>
        <button className="worksbtn">See More</button>
    </section>
  )
}

export default Works
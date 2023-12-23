import React from 'react';
import './intro.css';
import bg from '../../assets/image.png'
import {Link} from 'react-scroll';
import btnImg from '../../assets/hireme.png'

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>unreal.Arsenic</span> <br/> website Desiner</span>
            <p className='introPara'>Unwrap success with our irresistible offers! 🎁 <br /> Elevate your business game and experience a gift of <br /> growth like never before. 🌟 Explore our exclusive deals <br /> and unlock opportunities that'll make your venture shine brighter! <br /> 🚀 Don't miss out, let's make your business dreams a reality! </p>
               <Link><button className='btn'><img src={btnImg} alt='' className='btnImg'/>Hire me</button></Link>
        </div>
        <img src={bg} alt='' className='bg'/>
    </section>
  )
}

export default Intro
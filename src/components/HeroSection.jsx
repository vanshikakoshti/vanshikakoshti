import React from 'react'
import herosectionimg1 from '../assets/img/herosection-1.webp';
import herosectionimg2 from '../assets/img/herosection-2.webp';


export default function HeroSection() {
  return (
    <>
     <div className="bg-theme herosection" id='home'>
        <div className="container-fluid">
            <div className="row align-items-center">
            <div className="col-md-6">
                <h2 className='herosection-heading' data-aos="fade-up">Web Developer Turning Ideas into Code</h2>
                <div className="row">
                    <div className="col-md-6"  data-aos="fade-up"><img className='herosection-img mb-2' src={herosectionimg2} /></div>
                    <div className="col-md-6" data-aos="fade-up">
                        <div className='d-flex flex-wrap align-items-center'>
                        <p className='herosection-p'>As a skilled Web Developer, I specialize in building responsive, high-performance websites that deliver seamless user experiences.</p>
                        <a  href="#projects" className='herosection-link'>Explore Work</a></div>
                    </div>
                </div>
            </div>
            <div className="col-md-6" data-aos="fade-up">
                <img className='herosection-img' src={herosectionimg1} />
            </div>
            </div>
        </div>
        </div> 
    </>
  )
}

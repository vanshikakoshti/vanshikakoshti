import React from 'react'
import herosectionimg1 from '../assets/img/herosection-1.png';
import herosectionimg2 from '../assets/img/herosection-2.png';


export default function HeroSection() {
  return (
    <>
     <div className="bg-theme herosection">
        <div className="container-fluid">
            <div className="row align-items-center">
            <div className="col-md-6">
                <h2 className='herosection-heading'>Web Developer Turning Ideas into Code</h2>
                <div className="row">
                    <div className="col-md-6"><img className='herosection-img' src={herosectionimg2} /></div>
                    <div className="col-md-6">
                        <div className='d-flex flex-wrap align-items-center'>
                        <p className='herosection-p'>As an experienced SEO Specialist, I specialize in developing and executing strategic search engine optimization campaigns.</p>
                        <a className='herosection-link'>Explore Work</a></div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <img className='herosection-img' src={herosectionimg1} />
            </div>
            </div>
        </div>
        </div> 
    </>
  )
}

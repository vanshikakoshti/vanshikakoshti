import React from "react";
import aboutus from '../assets/img/about-us.jpg';

export default function About() {
  return (
    <>
      <div className="bg-theme section-padding" id="about">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3" data-aos="fade-up">
              <h5 className="sub-heading">What i do</h5>
            </div>
            <div className="col-md-8" data-aos="fade-up">
              <h2 className="section-heading">Developing High-Performance, Responsive & Maintainable Websites for Seamless User Experiences.
              </h2>
            </div>
          </div>
          <div className="row pt-5 align-items-center justify-content-between">
            <div className="col-md-3"  data-aos="fade-up">
              <div className="project-counter mb-4"><p>Project complete</p><h3>80+</h3></div>
            </div>
            <div className="col-md-4" data-aos="fade-up">
              <div className="about-img mb-4"><img src={aboutus}/></div>
            </div>
            <div className="col-md-4" data-aos="fade-up">
              <p>I'm Vanshika Koshti I’m a passionate Web Developer with a strong foundation in building clean, responsive, and accessible web pages. I specialize in writing semantic HTML5 code that ensures websites are both user-friendly and search-engine optimized.</p>
              <p>With a keen eye for detail and a deep understanding of web standards, I bring designs to life with precision and performance in mind. I enjoy collaborating with designers, front-end developers, and teams to turn static visuals into interactive, browser-compatible experiences.</p>
              <a className="cust-btn">Download Resume</a>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

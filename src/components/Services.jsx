import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export function OurServices({ number, title, description }) {
  return (

      <div className="service-section-item" data-aos="fade-up">
        <div className="number">
          <span>{number}</span>
        </div>
        <h4 className="sub-title">{title}</h4>
        <p className="desc">{description}</p>
      </div>

  );
}

export default function Services() {
 const [slidesToShow, setSlidesToShow] = useState(3);
   useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth;
      if (width < 767) {
        setSlidesToShow(1); 
      } else if (width < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3); 
      }
    };

    updateSlides(); 
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const settings = {
    dots: slidesToShow > 1, // hide dots on mobile
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow, // 👈 dynamically controlled
  };


  return (
    <>
      <div className="bg-theme" id="services">
        <div className="container-fluid">
          <div className="services-sec">
            <div className="row">
              <div className="col-md-3" data-aos="fade-up">
                <h5 className="sub-heading">What i do</h5>
              </div>
              <div className="col-md-8" data-aos="fade-up">
                <h2 className="section-heading">
                  Delivering Pixel-Perfect, High-Performance Web Experiences Through Modern Technologies.
                </h2>
              </div>
            </div>

            <Slider {...settings} className="py-5">
              <OurServices
                number="01"
                title="Web Design"
                description="Proficient in building user-friendly web pages with HTML5,
                    CSS3, and JavaScript , focusing on clean structure and
                    accessibility."
              />
              <OurServices
                number="02"
                title="Responsive Design"
                description="Skilled in creating mobile-first websites using CSS Flexbox, Grid, and media queries to ensure smooth user experience across all devices."
              />
              <OurServices
                number="03"
                title="SEO"
                description="Knowledge of on-page SEO, including semantic HTML, meta tags, alt attributes for images, and fast-loading responsive design to improve search engine ranking."
              />
              <OurServices
                number="04"
                title="Frameworks & Libraries"
                description="Worked with Bootstrap for responsive UI components and familiar with React basics for building reusable components and modern web applications."
              />
              <OurServices
                number="05"
                title="Version Control (Git & GitHub)"
                description="Experienced in using Git to manage code efficiently. Familiar with GitHub for hosting projects, collaborating with others, and keeping track of changes in development."
              />
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export function OurServices({ number, title, description }) {
  return (

      <div className="service-section-item">
        <div className="number">
          <span>{number}</span>
        </div>
        <h4 className="sub-title">{title}</h4>
        <p className="desc">{description}</p>
      </div>

  );
}

export default function Services() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024, // screens smaller than 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // screens smaller than 768px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // screens smaller than 480px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false, // optionally hide dots on very small screens
        },
      },
    ],
  };
  return (
    <>
      <div className="bg-theme">
        <div className="container-fluid">
          <div className="services-sec">
            <div className="row">
              <div className="col-md-3">
                <h5 className="sub-heading">What i do</h5>
              </div>
              <div className="col-md-8">
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

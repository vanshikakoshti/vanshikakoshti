import React from 'react'

export default function Footer() {
  return (
    <>
     <footer>
        <div className="container-fluid">
            <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 footer-first-section-left">
                    <h2 className='section-heading'>Unlock your website's full<br /> potential.</h2>
                    <a className='cust-btn'> Let's Talk To Me</a>
                </div>
                <div className="col-md-6 footer-first-section-right">
                    <h2 className='footer-name-heading'>Vanshika</h2>
                </div>
                <div className="col-md-6 footer-second-section-left">
                   <div className='footer-section-link'><a>Services</a> <a>Privacy Policy.</a><a>FAQs</a></div>
                </div>
                <div className="col-md-6 footer-second-section-right">
                    <div className='footer-section-link'><a href='https://www.linkedin.com/in/vanshika-koshti-18a30814b/' target="_blank" rel="noopener noreferrer">LinkedIn</a><a href='javascript:void(0);' rel="noopener noreferrer">Facebook</a><a>Instagram</a><a href='https://github.com/vanshikakoshti' target="_blank" rel="noopener noreferrer">GitHub</a></div>
                </div>
                <div className="col-md-6 footer-third-section-left">
                   <div className='footer-section-link'><p>© {new Date().getFullYear()} . All rights reserved by <a href='https://vanshikakoshti.github.io/portfolio/' target='_blank' rel="noreferrer"  className='copyright'>Vanshika Koshti.</a></p></div>
                </div>
                <div className="col-md-6 footer-third-section-right">
                    <div className='footer-section-link'><a>Home</a><a>Services</a><a>Works</a></div>
                </div>
            </div>
            </div>
        </div>
        </footer> 
    </>
  )
}

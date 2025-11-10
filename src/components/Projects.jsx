import React from "react";
import digitalmarketing from "../assets/img/work/digital-marketing.webp";
import newsapp from "../assets/img/work/news-monkey.webp";
import travel from "../assets/img/work/travel-with-vanshika.webp";
import quizeapp from "../assets/img/work/quize-app.webp";
import todo from "../assets/img/work/todo.webp";
import textutils from "../assets/img/work/textutils.webp";



export function MyProjects({ title, description, img, link }) {
  return (
    <div className="project-container">
      <div className="row my-4">
        <div className="col-md-5" data-aos="fade-up">
          <div className="project-img project-border-right">
              <img src={img} alt={title} />
          </div>
        </div>
        <div className="col-md-7" data-aos="fade-up">
          <div className="project-content">
            <h4>{title}</h4>
            <p>{description}</p>
            <a
              className="cust-btn"
               href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <>
      <div className="section-padding" id="projects" >
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3" data-aos="fade-up">
              <h5 className="sub-heading">Work</h5>
            </div>
            <div className="col-md-8" data-aos="fade-up">
              <h2 className="section-heading">Projects</h2>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <MyProjects
                  title="Digital Marketing"
                  description="This project is intended for personal portfolio purposes only and is not connected to any real campaigns."
                  img={digitalmarketing}
                  link="https://vanshikakoshti.github.io/digital-marketing/"
                />
                <MyProjects
                  title="News App"
                  description=" This app was built for personal use and showcases. It is not affiliated with any real news platforms."
                  img={newsapp}
                  link="https://vanshikakoshti.github.io/newsapp/"
                />
                <MyProjects
                  title="Tours and Travels"
                  description="This website was built with HTML, CSS, and JavaScript for personal use and portfolio showcasing. It is not affiliated with any real travel agencies or tour companies."
                  img={travel}
                  link="https://vanshikakoshti.github.io/travel-with-vanshika/"
                />
                <MyProjects
                  title="Quize App"
                  description=" This quiz app is for portfolio use only and not connected to any real exams or tests."
                  img={quizeapp}
                  link="https://vanshikakoshti.github.io/quiz-app/"
                />
                <MyProjects
                  title="To-Do App"
                  description="A simple task management app built using React hooks(useState)to add, delete, and edit tasks."
                  img={todo}
                  link="https://vanshikakoshti.github.io/todo-list/"
                />
                <MyProjects
                  title="TextUtils"
                  description="Built entirely with React function components Convert text to uppercase, lowercase, and more."
                  img={textutils}
                  link="https://vanshikakoshti.github.io/textutils/"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

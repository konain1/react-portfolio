import React from "react";
import "./portfolio.css";
import IMG1 from "./../../assets/portfolio1.jpg";

const data = [
  {
    id: 1,
    title: "konain7",
    image: 'project1.png',

    github: "https://github.com/konain1",
    demo: "https://konain7.netlify.app/",
  },
  {
    id: 2,
    title: "Ecommerce Groccery",
    image:
      "https://images.unsplash.com/photo-1600132806608-231446b2e7af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvamVjdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    github: "https://github.com/konain1/groceryStore",
    demo: "https://grocerystoreecom.netlify.app",
  },
  {
    id: 3,
    title: "project3",
    image:
      "https://images.unsplash.com/photo-1600132806608-231446b2e7af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvamVjdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    github: "https://github.com/konain1",
    demo: "https://www.konain7.com",
  },
  {
    id: 4,
    title: "project4",
    image:
      "https://images.unsplash.com/photo-1600132806608-231446b2e7af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvamVjdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    github: "https://github.com/konain1",
    demo: "https://www.konain7.com",
  },
  {
    id: 5,
    title: "project5",
    image:
      "https://images.unsplash.com/photo-1600132806608-231446b2e7af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvamVjdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    github: "https://github.com/konain1",
    demo: "https://www.konain7.com",
  },
  {
    id: 6,
    title: "project6",
    image:
      "https://images.unsplash.com/photo-1600132806608-231446b2e7af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvamVjdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    github: "https://github.com/konain1",
    demo: "https://www.konain7.com",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>

              <h3> {title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;

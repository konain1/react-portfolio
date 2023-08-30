import React from "react";
import AVTR1 from "../../assets/avatar1.jpg";
import "./testimonials.css";

const testimonialData = [
  {
    avatar: AVTR1,
    name: "sakura",
    review:
      "We've partnered with Towne PR Firm for the past decade, and the quality of their work has never wavered. They are incredibly communicative,",
  },
  {
    avatar: AVTR1,
    name: "sakura",
    review:
      "We've partnered with Towne PR Firm for the past decade, and the quality of their work has never wavered. They are incredibly communicative,",
  },
  {
    avatar: AVTR1,
    name: "sakura",
    review:
      "We've partnered with Towne PR Firm for the past decade, and the quality of their work has never wavered. They are incredibly communicative,",
  },
  {
    avatar: AVTR1,
    name: "sakura",
    review:
      "We've partnered with Towne PR Firm for the past decade, and the quality of their work has never wavered. They are incredibly communicative,",
  },
  {
    avatar: AVTR1,
    name: "sakura",
    review:
      "We've partnered with Towne PR Firm for the past decade, and the quality of their work has never wavered. They are incredibly communicative,",
  },
];

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        {testimonialData.map(({ avatar, name, review }, index) => {
          return (
            <article className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>

              <h5 className="client__name" >{name}</h5>
              <small className="client__review">
                {review}
              </small>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Testimonials;

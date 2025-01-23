import React from "react";
import "../../componentsCSS/testimonials/TestimonialsStyle1.css";

export const TestimonialsStyle1 = ({ primaryColor, secondaryColor }) => {
  const testimonials = [
    {
      name: "Jean Dupont",
      position: "CEO, Entreprise X",
      feedback:
        "L'équipe a su comprendre nos besoins et nous offrir une solution sur mesure. Nous avons été impressionnés par leur professionnalisme et leur rapidité. Nous recommandons vivement leurs services !",
    },
    {
      name: "Luc Martin",
      position: "Responsable IT, Société Y",
      feedback:
        "Une équipe très professionnelle qui a su répondre à nos besoins dans les délais impartis. Nous avons apprécié la communication constante et leur réactivité !",
    },
  ];

  return (
    <div
      className="testimonials-style-1"
      style={{
        "--primary-color": primaryColor,
        "--secondary-color": secondaryColor,
      }}
    >
      <h2>Ce que nos clients disent</h2>
      <div className="testimonials">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="feedback">"{testimonial.feedback}"</p>
            <h4 className="name">{testimonial.name}</h4>
            <p className="position">{testimonial.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

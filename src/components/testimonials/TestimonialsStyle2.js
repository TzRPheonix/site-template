import React, { useEffect, useRef } from "react";
import "../../componentsCSS/testimonials/TestimonialsStyle2.css";

export const TestimonialsStyle2 = ({ primaryColor, secondaryColor }) => {
  const testimonials = [
    {
      name: "Sophie Thomas",
      position: "Chef de Projet, Entreprise C",
      feedback: "Nous avons été impressionnés par leur travail et leur professionnalisme. Nous recommandons vivement leurs services !",
      logo: "https://fakeimg.pl/600x600?text=Profil",
    },
    {
      name: "Julien Perrin",
      position: "CEO, Entreprise D",
      feedback: "Une équipe toujours à l'écoute, réactive et impliquée. Nous avons atteint des résultats exceptionnels grâce à eux.",
      logo: "https://fakeimg.pl/600x600?text=Profil",
    },
    {
      name: "Lucie Martin",
      position: "Responsable Marketing, Entreprise A",
      feedback: "Un service exceptionnel, une équipe à l'écoute de nos besoins. Nous avons atteint tous nos objectifs grâce à eux !",
      logo: "https://fakeimg.pl/600x600?text=Profil",
    },
    {
      name: "Pierre Lefevre",
      position: "Directeur Général, Entreprise B",
      feedback: "Une équipe visionnaire et passionnée. La qualité du service est au rendez-vous !",
      logo: "https://fakeimg.pl/600x600?text=Profil",
    },
  ];

  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;

    // Dupliquer les éléments pour l'effet infini
    const duplicateTestimonials = () => {
      const children = Array.from(carousel.children);
      children.forEach((child) => {
        const clone = child.cloneNode(true);
        carousel.appendChild(clone);
      });
    };

    duplicateTestimonials();

    let scrollInterval;

    // Défilement automatique
    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        carousel.scrollLeft += 2; // Vitesse de défilement
        // Si on atteint la fin, revenir au début
        if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
          carousel.scrollLeft = 0;
        }
      }, 20); // Intervalle de défilement
    };

    // Arrêter le défilement automatique
    const stopAutoScroll = () => {
      clearInterval(scrollInterval);
    };

    // Gérer le défilement manuel avec la molette
    const handleWheel = (event) => {
      event.preventDefault();
      carousel.scrollLeft += event.deltaY * 2; // Double la vitesse de défilement manuel
    };

    carousel.addEventListener("mouseenter", stopAutoScroll);
    carousel.addEventListener("mouseleave", startAutoScroll);
    carousel.addEventListener("wheel", handleWheel);

    // Démarrer le défilement automatique au montage
    startAutoScroll();

    return () => {
      // Nettoyage des écouteurs
      clearInterval(scrollInterval);
      carousel.removeEventListener("mouseenter", stopAutoScroll);
      carousel.removeEventListener("mouseleave", startAutoScroll);
      carousel.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div
      className="testimonials-style-2"
      style={{
        "--primary-color": primaryColor,
        "--secondary-color": secondaryColor,
      }}
    >
      <h2>Ce que nos clients disent</h2>
      <div className="carousel" ref={carouselRef}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="feedback">"{testimonial.feedback}"</p>
            <img src={testimonial.logo} alt="Client logo" className="logo" />
            <h4 className="name">{testimonial.name}</h4>
            <p className="position">{testimonial.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

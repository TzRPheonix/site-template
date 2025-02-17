import React from 'react';
import { HeaderStyle2 } from "../../components/headers/HeaderStyle2";
import { ServicesStyle1 } from "../../components/services/ServicesStyle1";
import { TestimonialsStyle2 } from "../../components/testimonials/TestimonialsStyle2";
import { FooterStyle2 } from "../../components/footers/FooterStyle2";

export default function TemplateProjet2() {
  return (
    <>
      <HeaderStyle2 primaryColor={"#290feb"} secondaryColor={"#e3fdc4"} />
      <ServicesStyle1 primaryColor={"#290feb"} secondaryColor={"#e3fdc4"} />
      <TestimonialsStyle2 primaryColor={"#290feb"} secondaryColor={"#e3fdc4"} />
      <FooterStyle2 primaryColor={"#290feb"} secondaryColor={"#e3fdc4"} />
    </>
  );
}
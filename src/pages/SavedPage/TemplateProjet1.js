import React from 'react';
import { HeaderStyle1 } from "../../components/headers/HeaderStyle1";
import { ServicesStyle2 } from "../../components/services/ServicesStyle2";
import { TestimonialsStyle1 } from "../../components/testimonials/TestimonialsStyle1";
import { FooterStyle1 } from "../../components/footers/FooterStyle1";

export default function TemplateProjet1() {
  return (
    <>
      <HeaderStyle1 primaryColor={"#9995b7"} secondaryColor={"#d6c2c2"} />
      <ServicesStyle2 primaryColor={"#9995b7"} secondaryColor={"#d6c2c2"} />
      <TestimonialsStyle1 primaryColor={"#9995b7"} secondaryColor={"#d6c2c2"} />
      <FooterStyle1 primaryColor={"#9995b7"} secondaryColor={"#d6c2c2"} />
    </>
  );
}
import React from 'react';
import { HeaderStyle1 } from "../../components/headers/HeaderStyle1";
import { ServicesStyle1 } from "../../components/services/ServicesStyle1";
import { TestimonialsStyle2 } from "../../components/testimonials/TestimonialsStyle2";
import { FooterStyle1 } from "../../components/footers/FooterStyle1";

export default function TemplateProjet3() {
  return (
    <>
      <HeaderStyle1 primaryColor={"#171529"} secondaryColor={"#b9acac"} />
      <ServicesStyle1 primaryColor={"#171529"} secondaryColor={"#b9acac"} />
      <TestimonialsStyle2 primaryColor={"#171529"} secondaryColor={"#b9acac"} />
      <FooterStyle1 primaryColor={"#171529"} secondaryColor={"#b9acac"} />
    </>
  );
}
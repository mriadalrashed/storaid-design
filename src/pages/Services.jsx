import React from "react";
import HeroPage from "../components/HeroPage";
import ServiceCard from "../components/ServiceCard";
import Testimonials from "../components/Testimonials";
import FAQAccordion from "../components/FAQAccordion";
import CallToAction from "../components/CallToAction";
import Newsletter from "../components/Newsletter";

export default function Services() {
  return (
    <>
      <HeroPage
        title="Services"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
      />
      <ServiceCard />
      <Testimonials />
      <FAQAccordion/>
      <CallToAction />
      <Newsletter />
    </>
  );
}

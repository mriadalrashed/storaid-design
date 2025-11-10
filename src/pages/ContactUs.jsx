import React from "react";
import HeroPage from "../components/HeroPage";
import FindUsOn from "../components/FindUsOn";
import FAQAccordion from "../components/FAQAccordion";
import Newsletter from "../components/Newsletter";

export default function ContactUs() {
  return (
   <>
      <HeroPage
        title="Contact Us"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
      />
      <FindUsOn/>
      <FAQAccordion/>
      <Newsletter/>
    </>
        );
}
import React from "react";
import HeroPage from "../components/HeroPage";
import GetInTouch from "../components/GetInTouch";
import FindUsOn from "../components/FindUsOn";
import FAQAccordion from "../components/FAQAccordion";

export default function ContactUs() {
  return (
   <>
      <HeroPage
        title="Contact Us"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
      />
      <GetInTouch/>
      <FindUsOn/>
      <FAQAccordion/>
    </>
        );
}
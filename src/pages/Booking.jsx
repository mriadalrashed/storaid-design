import React from "react";
import HeroPage from "../components/HeroPage";
import BookingUnit from "../components/BookingUnit";
import ChooseUs from "../components/ChooseUs";
import CallToAction from "../components/CallToAction";
import FAQAccordion from "../components/FAQAccordion";

export default function Booking() {
  return (
    <>
      <HeroPage
        title="Booking"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
      />
     <BookingUnit/>
     <ChooseUs bgColor="#FAF8EC" />
     <CallToAction />
     <FAQAccordion/>
    </>
  );
}

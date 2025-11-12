import React from "react";
import HeroPage from "../components/HeroPage";
import AboutUsSection from "../components/AboutUsSec";
import BrandsSection from "../components/BrandsSection";
import Testimonials from "../components/Testimonials";
import ChooseUs from "../components/ChooseUs";

export default function AboutUs() {
  return (
    <>
      <HeroPage
        title="About Us"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
      />
      <AboutUsSection />
      <BrandsSection />
      <Testimonials />
      <ChooseUs bgColor="#FFFFFF" />
    </>
  );
}

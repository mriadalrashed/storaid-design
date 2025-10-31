import React from "react";
import Hero from "../components/Hero";
import AboutUsSec from "../components/AboutUsSec"; // ✅ fixed
import BrandsSection from "../components/BrandsSection";
import ServiceCard from "../components/ServiceCard";
import ChooseUs from "../components/ChooseUs";
import PricingCard from "../components/PricingCard";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import Newsletter from "../components/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUsSec /> 
      <BrandsSection />
      <ServiceCard />
      <Testimonials />
      <ChooseUs />
      <PricingCard />
      <CallToAction />
      <Newsletter />
    </>
  );
}

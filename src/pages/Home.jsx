import React from "react";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import AboutUs from "../components/AboutUs";
import BrandsSection from "../components/BrandsSection";
import ServiceCard from "../components/ServiceCard";
import ChooseUs from "../components/ChooseUs";
import PricingCard from "../components/PricingCard";

export default function Home() {
  return (
    <>
    <Hero/>
    <AboutUs/>
    <BrandsSection/>
    <ServiceCard/>
    <ChooseUs/>
    <PricingCard/>
    </>
  );
}
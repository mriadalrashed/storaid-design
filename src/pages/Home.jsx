import React from "react";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import AboutUs from "../components/AboutUs";
import BrandsSection from "../components/BrandsSection";
import ServiceCard from "../components/ServiceCard";

export default function Home() {
  return (
    <>
    <Hero/>
    <AboutUs/>
    <BrandsSection/>
    <ServiceCard/>
    </>
  );
}
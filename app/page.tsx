import Hero from "@/components/Hero";
import EstimateCTA from "@/components/EstimateCTA";
import ServicesShowcase from "@/components/ServicesShowcase";
import OurServices from "@/components/OurServices";
import WhyCoatwell from "@/components/WhyCoatWell";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <EstimateCTA />
      <ServicesShowcase />
      <OurServices />
      <WhyCoatwell />
      <FinalCTA />
    </>
  );
};
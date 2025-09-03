// src/pages/Services.tsx
import Footer from "@/components/footer";
import ServicesHero from "@/components/ServicesHero";
import ServicesSections from "@/components/ServicesSections";

export default function Services() {
  return (
    <>
      <ServicesHero bgSrc="/serviceshero.png" />
      <ServicesSections />
      {/* …rest of services sections */}
        <Footer/>
    </>
  );
}

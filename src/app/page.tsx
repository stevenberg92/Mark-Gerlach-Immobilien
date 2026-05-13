import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import Hero from "@/components/sections/Hero";
import ServiceTiles from "@/components/sections/ServiceTiles";
import About from "@/components/sections/About";
import TopOffers from "@/components/sections/TopOffers";
import SellSection from "@/components/sections/SellSection";
import BuyerRequests from "@/components/sections/BuyerRequests";
import Services from "@/components/sections/Services";
import Region from "@/components/sections/Region";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import TipProvision from "@/components/sections/TipProvision";
import BlogTeaser from "@/components/sections/BlogTeaser";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServiceTiles />
        <About />
        <TopOffers />
        <SellSection />
        <BuyerRequests />
        <Services />
        <Region />
        <Process />
        <Testimonials />
        <TipProvision />
        <BlogTeaser />
        <FinalCTA />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}

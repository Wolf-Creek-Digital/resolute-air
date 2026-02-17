import Difference from "../Components/Home3/Difference";
import Hero from "../Components/Home3/Hero";
import Services from "../Components/Home3/Services";
import Testimonial from "../Components/Home3/Testimonial";
import EmergencyBanner from "../Components/Home3/EmergencyBanner";
import ServiceArea from "../Components/Home3/ServiceArea";
import CTASection from "../Components/Home3/CTASection";

export const metadata = {
  title: "Home 3 | Resolute Heating & Air",
  description: "Alternative Home Page Design for Resolute Heating & Air",
};

export default function Home3() {
  return (
    <main className="home-3-page">
      <Hero />
      <Difference />
      <Services />
      <Testimonial />
      <EmergencyBanner />
      <ServiceArea />
      <CTASection />
    </main>
  );
}

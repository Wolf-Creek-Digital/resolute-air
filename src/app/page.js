import Difference from "@/components/Home/Difference";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import Testimonial from "@/components/Home/Testimonial";
import EmergencyBanner from "@/components/Home/EmergencyBanner";
import ServiceArea from "@/components/Home/ServiceArea";
import PreFooter from "@/components/Home/PreFooter";

export const metadata = {
  title: "Home | Resolute Heating & Air",
  description: "Reliable AC repair and furnace installation in Salt Lake County. Direct access to the owner, honest pricing, and 15+ years of experience.",
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <main className="home-page">
      <Hero />
      <Difference />
      <Services />
      <Testimonial />
      <EmergencyBanner />
      <ServiceArea />
      <PreFooter />
    </main>
  );
}

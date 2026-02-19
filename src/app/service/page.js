import Services from '@/components/Services/Services';
import BreadCumb from '@/components/Common/BreadCumb';

export const metadata = {
  title: "AC & Furnace Services",
  description: "Comprehensive HVAC services: AC repair, furnace installation, ductwork, and seasonal maintenance. Fast response in Salt Lake & Utah Counties.",
};

export default function ServicesPage() {
  return (
    <main className="services-page">
        <BreadCumb Title="Services"></BreadCumb>
      <Services />
    </main>
  );
}

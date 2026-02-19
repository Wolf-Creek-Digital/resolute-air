import Services from '@/components/Services/Services';
import BreadCumb from '@/components/Common/BreadCumb';

export const metadata = {
  title: "Services | Resolute Heating & Air",
  description: "Services Page for Resolute Heating & Air",
};

export default function ServicesPage() {
  return (
    <main className="services-page">
        <BreadCumb Title="Services"></BreadCumb>
      <Services />
    </main>
  );
}

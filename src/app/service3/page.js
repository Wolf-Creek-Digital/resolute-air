import Services3 from '../Components/Services/Services3';
import BreadCumb from '../Components/Common/BreadCumb';

export const metadata = {
  title: "Services 3 | Resolute Heating & Air",
  description: "Alternative Services Page Design for Resolute Heating & Air",
};

export default function Services3Page() {
  return (
    <main className="services-3-page">
        <BreadCumb Title="Services"></BreadCumb>
      <Services3 />
    </main>
  );
}

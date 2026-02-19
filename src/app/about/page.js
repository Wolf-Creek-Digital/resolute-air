import About from '@/components/About/About';
import BreadCumb from '@/components/Common/BreadCumb';

export const metadata = {
  title: "About | Resolute Heating & Air",
  description: "About Page for Resolute Heating & Air",
};

export default function AboutPage() {
  return (
    <main className="about-page">
        <BreadCumb Title="About Us"></BreadCumb>
      <About />
    </main>
  );
}

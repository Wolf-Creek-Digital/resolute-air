import About from '@/components/About/About';
import BreadCumb from '@/components/Common/BreadCumb';

export const metadata = {
  title: "About Travis Angell",
  description: "Meet Travis Angell, the owner-operator of Resolute Heating & Air. Over 15 years of experience serving West Jordan and Salt Lake County neighbors.",
};

export default function AboutPage() {
  return (
    <main className="about-page">
        <BreadCumb Title="About Us"></BreadCumb>
      <About />
    </main>
  );
}

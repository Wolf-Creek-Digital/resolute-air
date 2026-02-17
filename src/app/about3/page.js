import About3 from '../Components/About/About3';
import BreadCumb from '../Components/Common/BreadCumb';

export const metadata = {
  title: "About 3 | Resolute Heating & Air",
  description: "Alternative About Page Design for Resolute Heating & Air",
};

export default function About3Page() {
  return (
    <main className="about-3-page">
        <BreadCumb Title="About Us"></BreadCumb>
      <About3 />
    </main>
  );
}

import Emergency from '@/components/Emergency/Emergency';
import BreadCumb from '@/components/Common/BreadCumb';

export const metadata = {
  title: "Emergency Services | Resolute Heating & Air",
  description: "24/7 Emergency HVAC Services in Salt Lake County. Fast, reliable, and available around the clock.",
};

export default function EmergencyPage() {
  return (
    <main>
      <BreadCumb Title="Emergency Services" />
      <Emergency />
    </main>
  );
}

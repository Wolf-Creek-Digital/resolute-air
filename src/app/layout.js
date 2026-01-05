import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header";

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--heading-font',
});
const dm_Sans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--body-color-font',
});

export const metadata = {
  title: {
    absolute: '',
    default: 'Resolute - Heating & Air',
    template: '%s | Resolute - Heating & Air',
  },
  description: 'Resolute - Heating & Air',
  openGraph: {
    title: 'Resolute - Heating & Air',
    description: 'Resolute - Heating & Air',
    images: ['/openGraphImage.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Themeservices" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${outfit.variable} ${dm_Sans.variable}`}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}

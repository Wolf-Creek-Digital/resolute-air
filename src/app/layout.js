import { Outfit, DM_Sans } from "next/font/google";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./globals.css";
import "./styles.css";
// import "slick-carousel/slick/slick.css";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--heading-font',
});
const dm_Sans = DM_Sans({
  subsets: ['latin'],
  variable: '--body-color-font',
});

export const metadata = {
  metadataBase: new URL('https://resoluteair.com'), // Replace with actual domain
  title: {
    default: 'Resolute Heating & Air | HVAC Expert in Utah',
    template: '%s | Resolute Heating & Air',
  },
  description: 'Expert AC repair, furnace installation, and HVAC services in Salt Lake County. Travis Angell provides honest, owner-operated service you can trust.',
  keywords: ['HVAC Utah', 'AC Repair Salt Lake City', 'Furnace Installation West Jordan', 'Heating and Air', 'Travis Angell', 'Resolute Air'],
  authors: [{ name: 'Travis Angell' }],
  creator: 'Resolute Heating & Air',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://resoluteair.com',
    title: 'Resolute Heating & Air | Honest HVAC Service',
    description: 'Stop overpaying for HVAC. Honest repairs, no commissions, and expert service from Travis Angell. Serving Salt Lake County.',
    siteName: 'Resolute Heating & Air',
    images: [
      {
        url: '/assets/img/og-image.jpg', // Ensure this image exists or use a generic one
        width: 1200,
        height: 630,
        alt: 'Resolute Heating & Air Service Truck',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resolute Heating & Air | HVAC Expert in Utah',
    description: 'Honest AC & Heating services in Salt Lake County. Owner-operated.',
    images: ['/assets/img/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Resolute Heating & Air" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* WCD Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Q3BWZ3P8XD"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-Q3BWZ3P8XD');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HVACBusiness",
              "name": "Resolute Heating & Air",
              "image": "https://resoluteair.com/assets/img/og-image.jpg",
              "url": "https://resoluteair.com",
              "telephone": "801-970-5797",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "West Jordan",
                "addressRegion": "UT",
                "postalCode": "84084",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 40.6096698,
                "longitude": -111.9391031
              },
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 40.6096698,
                  "longitude": -111.9391031
                },
                "geoRadius": "40000"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "08:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Saturday",
                    "Sunday"
                  ],
                  "opens": "00:00",
                  "closes": "23:59",
                  "description": "Emergency Service Available"
                }
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "801-970-5797",
                "contactType": "customer service",
                "areaServed": "Salt Lake County",
                "availableLanguage": "English"
              }
            }),
          }}
        />
      </head>
      <body className={`${outfit.variable} ${dm_Sans.variable}`}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}

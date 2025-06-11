import type { Metadata } from 'next';
import './globals.css';
import Header from './components/Header'; // Corresponds to Navbar in instructions
import Footer from './components/Footer';
import SubscribeSection from './components/SubscribeSection';

export const metadata: Metadata = {
  title: 'Leonty Consulting',
  description: 'Keynote Speaking & Executive Coaching by Erin Leonty',
  openGraph: {
    title: 'Leonty Consulting',
    description: 'Keynote Speaking & Executive Coaching by Erin Leonty',
    url: 'https://yourdomain.com', // Replace with actual domain
    siteName: 'Leonty Consulting',
    images: [{ url: 'https://yourdomain.com/images/og-image.jpg' }], // Replace with actual image path
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leonty Consulting',
    description: 'Keynote Speaking & Executive Coaching by Erin Leonty',
    // site: '@LeontyConsult', // Replace with actual Twitter handle if available
    images: ['https://yourdomain.com/images/twitter-card.jpg'], // Replace with actual image path
  },
  // Add other metadata like icons/favicons if available
  // icons: {
  //   icon: '/favicon.ico',
  //   apple: '/apple-touch-icon.png',
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen text-gray-800 antialiased" style={{ backgroundColor: '#FFF8EE' }}>
        <Header />
        <main className="flex-grow pt-24 md:pt-28">{children}</main>
        <SubscribeSection />
        <Footer />
      </body>
    </html>
  );
}




import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTopButton from "./components/ScrollToTopButton";
import "./globals.css";
import { Ephesis, Sono , Oswald} from 'next/font/google';

const ephesis = Ephesis({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-ephesis',
});

const sono = Sono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-sono',
});

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-oswald',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${ephesis.variable} ${sono.variable} ${oswald.variable}`}

        style={{
          fontFamily: 'var(--font-oswald)',
          letterSpacing: '0.05em',
        }}
      >
        <Navbar />
        {children}
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
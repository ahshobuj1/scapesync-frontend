import type {Metadata} from 'next';
import {Public_Sans} from 'next/font/google';
import './globals.css';
import CssBaseline from '@mui/material/CssBaseline';
import {Toaster} from 'sonner';

const publicSans = Public_Sans({
  subsets: ['latin'],
  variable: '--font-public-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'ScapeSync',
  description: 'ScapeSync is a large mobile company.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={publicSans.variable}>
      <body className="antialiased">
        <div className="max-w-[1440px] mx-auto">
          <CssBaseline />
          {children}
          <Toaster position="top-center" />
        </div>
      </body>
    </html>
  );
}

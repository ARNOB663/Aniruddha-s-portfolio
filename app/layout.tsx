import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import ClientLayout from './ClientLayout';

export const metadata = {
  title: 'Aniruddha Dev Nath | Portfolio',
  description: 'Portfolio of Aniruddha Dev Nath, a CSE Undergrad, Backend Developer, and AI Enthusiast.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans bg-white`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
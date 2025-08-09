'use client'
import "./globals.css";
import { usePathname } from 'next/navigation';
import { Plus_Jakarta_Sans } from 'next/font/google'
import Navbar from "../../public/components/navbar/navbar";

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Tentukan halaman mana yang tidak ingin tampilkan Navbar
  const hideNavbar = pathname.startsWith('/my-craft/');

  return (
    <html lang="en" className={`${jakarta.variable}`}>
      
      <body >
        {!hideNavbar && <Navbar />}
        {children}
      </body>
    </html>
  );
}

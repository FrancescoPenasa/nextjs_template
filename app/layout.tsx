import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {/* <Nav /> */}
        <main>
          {children}
          <aside>aside</aside>
        </main>
        <Footer />
      </body>
    </html>
  )
}

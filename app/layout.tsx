import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Button from './_components/Button';
import Notification from './_components/Notification';
import Footer from './_components/Footer';
import Menu from './_components/Menu';


const inter = Inter({ subsets: ['latin'] });

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
    
     <Notification/>
     <Menu></Menu>
     
     <Button/>
   {children}
   <Footer/>
    </body>
    </html>
  )
}

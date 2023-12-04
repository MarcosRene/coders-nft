import { ReactNode } from 'react'

import { Footer } from './_footer';
import { Navbar } from './_navbar';

type LayoutProps = {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
  <main className="min-h-[100vh] bg-[#1d1f2b]">
    <Navbar />
    {children}
    <Footer />
  </main>
)


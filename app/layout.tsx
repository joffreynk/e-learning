import { cn } from '@/lib/utils';
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const popins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'E-Learning',
  description: 'he source of wisdom is learning',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(popins.className, 'bg-[#1b1b1b] text-white min-h-screen ')}>{children}</body>
    </html>
  );
}

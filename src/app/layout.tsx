import { Metadata } from 'next';
import './globals.css'
import localFont from 'next/font/local'

interface Props {
    children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'LMS Software',
  description: 'Learning Management System'
}

const EuclidCircular = localFont({
  src: "/fonts/EuclidCircularA-Bold.woff2",
  display: "swap",
  variable: '--font-euclid-r',
})

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={`${EuclidCircular.variable}`}>
        {children}
        </body>
    </html>
  );
}

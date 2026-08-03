import { Metadata } from 'next';
import './globals.css'

interface Props {
    children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'LMS Software',
  description: 'Learning Management System'
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className="m-0 min-h-screen bg-white text-slate-800">
        {children}
      </body>
    </html>
  );
}

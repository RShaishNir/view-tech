import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = { title: 'View-Tech', description: 'View-Tech mockup site' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'><body>
      <nav><div className='nav-inner'>
        <div className='nav-title'>View-Tech <span className='badge'>Mockup</span></div>
        <div className='nav-spacer' />
        <Link className='nav-link' href='/'>Home</Link>
        <Link className='nav-link' href='/services'>Services</Link>
        <Link className='nav-link' href='/insights'>Insights</Link>
        <Link className='nav-link' href='/about'>About</Link>
      </div></nav>
      <div className='container'>{children}</div>
    </body></html>
  )
}

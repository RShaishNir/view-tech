import type { AppProps } from 'next/app'
import Link from 'next/link'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (<>
    <nav><div className='nav-inner'>
      <div className='nav-title'>View-Tech <span className='badge'>Mockup</span></div>
      <div className='nav-spacer' />
      <Link className='nav-link' href='/'>Home</Link>
      <Link className='nav-link' href='/services'>Services</Link>
      <Link className='nav-link' href='/insights'>Insights</Link>
      <Link className='nav-link' href='/about'>About</Link>
    </div></nav>
    <div className='container'><Component {...pageProps} /></div>
  </>)
}
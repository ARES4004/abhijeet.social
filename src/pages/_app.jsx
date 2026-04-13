import '@/styles/tailwind.css'
import { Inter, Instrument_Serif } from 'next/font/google'

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const serif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

export default function App({ Component, pageProps }) {
  return (
    <div className={`${sans.variable} ${serif.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  )
}

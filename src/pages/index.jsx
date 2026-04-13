import Head from 'next/head'
import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { Ninana } from '@/components/Ninana'
import { Before } from '@/components/Before'
import { Personality } from '@/components/Personality'
import { Contact } from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Abhijeet Kumar — Cofounder & CEO, Ninana Technologies</title>
        <meta
          name="description"
          content="Cofounder & CEO of Ninana Technologies. Building software for the companies that build India."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Abhijeet Kumar — Cofounder & CEO, Ninana Technologies" />
        <meta property="og:description" content="Building software for the companies that build India — construction, visualisation and project intelligence." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://abhijeet.social" />
        <meta property="og:image" content="https://abhijeet.social/api/og" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Abhijeet Kumar — Cofounder & CEO, Ninana Technologies" />
        <meta name="twitter:description" content="Building software for the companies that build India." />
        <meta name="twitter:image" content="https://abhijeet.social/api/og" />
      </Head>
      <Nav />
      <main>
        <Hero />
        <Ninana />
        <Before />
        <Personality />
        <Contact />
      </main>
    </>
  )
}

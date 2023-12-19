import { Container } from '@/components/Container'
import Head from 'next/head'
import React from 'react'
import { Gallery } from 'react-grid-gallery'
const images = [
  {
    src: '/images/halfCenturyForManipur.jpeg',
    width: 540,
    height: 1080,
    caption: 'Half Century For Manipur',
  },
  {
    src: '/images/redbullKartFightFinals.jpeg',
    width: 440,
    height: 540,
    caption: 'Redbull Kart Fight Finals',
  },
  {
    src: '/images/fiverForManipur.jpeg',
    width: 240,
    height: 540,
    caption: 'Fiver For Manipur',
  },
  {
    src: '/images/fielding.jpeg',
    width: 540,
    height: 1080,
    caption: 'Cooch Behar trophy',
  },
]
const Memories = () => {
  return (
    <>
      <Head>
        <title>Abhijeet Kumar - My scribe</title>
        <meta name="description" content="Abhijeet Kumar ke kaarnaame" />
      </Head>
      <div className="pt-16 pb-12 sm:pb-4 lg:pt-12">
        <Container>
          <button>
            <h1 className="text-2xl font-bold leading-7 text-slate-900">
              Memories
            </h1>
          </button>
        </Container>
        <div className="divide-y divide-slate-100 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100">
          <Gallery
            images={images}
            enableImageSelection={false}
            rowHeight={540}
          />
        </div>
      </div>
    </>
  )
}

export default Memories

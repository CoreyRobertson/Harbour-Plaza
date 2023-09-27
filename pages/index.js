import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Points from '@/components/Points'
import BrochureButton from '@/components/BrochureButton'
import Form from '@/components/Form'
import Views from '@/components/Views'
import Heading from '@/components/Heading'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Harbour Plaza - Patterson Lakes</title>
        <meta name="description" content="Luxury, waterfront retail sapces available in Mebourne's South-East, enquire today!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Heading />
        <Header />
        <Points />
        <Views />
        <BrochureButton />
        <Form />
      </main>
    </>
  )
}

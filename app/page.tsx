import MainContainer from '@/components/MainContainer'
import Header from '@/components/header'
import { Metadata } from 'next'
import { metaData } from '@/constant/title'
import GifMaker from '@/components/GifMaker'
 
export const metadata: Metadata = {
  title: metaData.title,
  description: metaData.description
}

export default function Home() {
  return (
    <main className="min-h-screen m-0 p-0 bg-black">
      <Header />
      <MainContainer>
        <section className='pt-4 text-white'>
          <h1 className='text-center text-2xl font-bold'>Gif Maker</h1>
          <p className='text-center'>{metaData.description}</p>
          <GifMaker />
        </section>
      </MainContainer>
    </main>
  )
}

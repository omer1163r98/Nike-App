import React from "react"
import Hero from './sections/Hero'
import Footer from './sections/Footer'
import Nav from './components/Nav'
import PopularProducts from './sections/PopularProducts'
import Reviews from './sections/Reviews'
import Services from './sections/Services'
import SpecialOffer from './sections/SpecialOffer'
import Subscribe from './sections/Subscribe'
import SuperQuality from './sections/SuperQuality'

const App =  () => {

  return ( 
    <main className='relative'>
      <Nav></Nav>
      <section className='xl:padding-l wide:padding-r padding-b '>
      <Hero></Hero>
      </section>
      <section className='padding'>
        <PopularProducts></PopularProducts>
      </section>
      <section className='padding'>
        <SuperQuality></SuperQuality>
      </section>
      <section className='padding'>
        <Services></Services>
      </section>
      <section className='padding'>
        <SpecialOffer></SpecialOffer>
      </section>
      <section className='bg-pale-blue padding'>
        <Reviews></Reviews>
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe></Subscribe>
      </section>
      <section className='bg-black padding-x padding-t pb-8'>
        <Footer></Footer>
      </section>
    </main>
  )
}

export default App

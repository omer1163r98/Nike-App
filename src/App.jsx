import React, { useState } from "react"
import Hero from './sections/Hero'
import Footer from './sections/Footer'
import Nav from './components/Nav'
import PopularProducts from './sections/PopularProducts'
import Reviews from './sections/Reviews'
import Services from './sections/Services'
import SpecialOffer from './sections/SpecialOffer'
import Subscribe from './sections/Subscribe'
import SuperQuality from './sections/SuperQuality'
import {Route, Routes} from 'react-router-dom'
import Login from "./components/Login"
import Products from "./sections/Products"
import ProductDetails from "./sections/ProductDetails"
import Cart from "./sections/Cart"
import AboutUs from "./AboutUs"
import ContactUs from "./ContactUs"

const App =  () => {
  const [cartArray, setCartArray] = useState([])
  return ( 
    <>
             <Nav></Nav>

    <Routes>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/" element = { (
         <main className='relative'>
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
      )}></Route>
      <Route path="/products" element={<Products></Products>}></Route>
      <Route path="/product-details/:id" element={<ProductDetails array={cartArray} setArr = {setCartArray}></ProductDetails>}></Route>
      <Route path="/cart" element={<Cart array={cartArray} setArr = {setCartArray}></Cart>}></Route>
      <Route path="/about-us" element={<AboutUs></AboutUs>}></Route>
      <Route path="/contact-us" element={<ContactUs></ContactUs>}></Route>
    </Routes>
   
    </>
  )
}

export default App

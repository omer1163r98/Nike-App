import React from 'react'
import SuperQuality from './sections/SuperQuality'
import PopularProducts from './sections/PopularProducts'

const AboutUs = () => {
  return (
    <div className="flex flex-col m-10 gap-10">
      <SuperQuality></SuperQuality> 
      <PopularProducts></PopularProducts>
    </div>
  )
}

export default AboutUs

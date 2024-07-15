import React from 'react'
import Carousel from './Crousel'
import Services from './Services'
import Highlight from './Highlight'
import OurServices from './OurServices'
import AdditionalServices from './AdditionalServices'
import OtherServices from './OtherServices'
import BottomHome from './BottomHome'
import UniqueQuotes from './UniqueQuotes'

const HomePage = () => {
  return (
    <>
      <Carousel />
      <Services />
      <Highlight />
      <OurServices />
      <AdditionalServices />
      <OtherServices />
      <UniqueQuotes/>
      <BottomHome/>
    </>
  )
}

export default HomePage

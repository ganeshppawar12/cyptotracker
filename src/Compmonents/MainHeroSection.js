import React from 'react'
import Home from './Home'
import Carousel from './Carousel'
import CoinsListSection from './CoinsListSection'

const MainHeroSection = ({handleSearch,load}) => {
  return (
    <div className='MainHeroSectionContainer' style={{padding: '5px 2vw'}}>
    <Home></Home>
<Carousel ></Carousel>
<CoinsListSection  handleSearch={handleSearch}  load={load}></CoinsListSection>
    </div>
  )
}

export default MainHeroSection
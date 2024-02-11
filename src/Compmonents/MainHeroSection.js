import React from 'react'
import Home from './Home'
import Carousel from './Carousel'
import CoinsListSection from './CoinsListSection'

const MainHeroSection = ({coins,handleSearch,page,setPage,setCurrency,currency,load,symbol}) => {
  return (
    <div className='MainHeroSectionContainer' style={{padding: '5px 2vw'}}>
    <Home></Home>
<Carousel setCurrency={setCurrency} currency={currency} symbol={symbol}></Carousel>
<CoinsListSection coins={coins} handleSearch={handleSearch} page={page}setPage={setPage} load={load} currency={currency} symbol={symbol}></CoinsListSection>
    </div>
  )
}

export default MainHeroSection
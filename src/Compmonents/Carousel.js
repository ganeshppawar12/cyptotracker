import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Carousel.css'
import AliceCarousel from 'react-alice-carousel';

const Carousel = ({setCurrency,currency,symbol}) => {
    const [trending, setTranding] = useState([])

   const fetchApi = async()=>{
    const res =await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`);
    const data =await res.json()
    // console.log(data)
    setTranding(data)

   }

   useEffect(()=>{
    fetchApi()
   },[currency])

//    console.log(trending)

  


//   const items = trending.map((coin) => {
//     // let profit = coin?.price_change_percentage_24h >= 0;
//   return coin.image;
    
//   });

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  return (
    <div style={{width:'100%'}}>
    <div className='carouselcontainer'>
        <p>Top Coins</p>
      <AliceCarousel
        mouseTracking
        infinite  
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
       
        items={trending.map((item)=>(
            <>
            <div className='trandingBox'>
            <img className='Carouselmg' src={item.image}></img>
            <p>{symbol}{item.current_price}</p>
            <p>{symbol}{item.market_cap}</p>
            <p>{item.total_volume}</p> 
            </div>
            </>
  ))}
        autoPlay
      />
      {/* <AliceCarousel mouseTracking items={items} /> */}
    </div>
    </div>

  ); 
};

export default Carousel;
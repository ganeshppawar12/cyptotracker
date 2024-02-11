import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import SiderBar from './SiderBar';
import CoinInfo from './CoinInfo';

const SingleCoin = () => {

    const [coin , setCoins] = useState([])
    const { id } = useParams();
    const fetchData = async () => {
          
          const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
        const data = await res.json();
        setCoins(data);
      };

      useEffect(()=>{
        fetchData()
      },[]) 
console.log(coin)
  return (


    <div>
        <SiderBar coin={coin}></SiderBar>
        <CoinInfo></CoinInfo>
     

    </div>
  )
}

export default SingleCoin
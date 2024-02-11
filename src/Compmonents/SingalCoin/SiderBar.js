import React from 'react'
import './SideBar.css'
const SiderBar = ({coin}) => {
  return (
    <div className='siderbarContainer'>

<div>
        <img src={coin.image?.large}></img>
        <h4>{coin.name}<span>{coin.symbol}</span></h4>
      </div>
      <div>
        <p className='coinDescription' style={{textOverflow:"ellipsis"}}>{coin.description?.bg}</p>
      </div>
      <div>
        <h4>Rank {coin?.market_cap_rank}</h4>
      </div>
      <div>
        <h3>{coin?.current_price?.usd}</h3>
      </div>
    </div>
  )
}

export default SiderBar
import React from "react";
import crptoImg from './images/crypto-currency-Img.jpg'
import './Home.css'
const Home = () => {
  return (
    <div className="HomeContainer">
      <div className="HomeLiftSide">
        <div className="HomeHeading">
        <h1>Invest in Cryptocurrency</h1>
        </div>
        <div className="HomePara">
        <p>
        A cryptocurrency is an encrypted data string that denotes a unit of currency. It is monitored and organized by a peer-to-peer network called a blockchain, which also serves as a secure ledger of transactions, e.g., buying, selling, and transferring. Unlike physical money, cryptocurrencies are decentralized, which means they are not issued by governments or other financial institutions. 
        </p>
        </div> <div className="HomeBtn">
       <button><p>Learn More</p></button>
        </div>
      </div>
      <div className="HomeRightSide">
        <img src="https://i.pinimg.com/originals/79/90/ec/7990ec9d485a1f948269e47a3a1971fd.gif"></img>
      </div>
    </div>
  );
};

export default Home;

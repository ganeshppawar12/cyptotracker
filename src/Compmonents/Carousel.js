import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Carousel.css";
import AliceCarousel from "react-alice-carousel";
import { CreateConrextmodel } from "../Context/ContextApi";

const Carousel = () => {
  const [trending, setTranding] = useState([]);
  const counterst = useContext(CreateConrextmodel);
  const { symbol, currency } = counterst;

  const fetchApi = async () => {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${counterst.currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`
    );
    const data = await res.json();

    setTranding(data);
  };

  useEffect(() => {
    fetchApi();
  }, [currency]);

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  return (
    <div style={{ width: "100%" }}>
      <div className="carouselcontainer">
        <p>Top Coins</p>
        <AliceCarousel
          mouseTracking
          infinite
          autoPlayInterval={1000}
          animationDuration={1500}
          disableDotsControls
          disableButtonsControls
          responsive={responsive}
          items={trending.map((item) => (
            <>
              <div key={item.id} className="trandingBox">
                <img className="Carouselmg" src={item.image}></img>
                <p>
                  {symbol}
                  {item.current_price}
                </p>
                <p>
                  {symbol}
                  {item.market_cap}
                </p>
                <p>{item.total_volume}</p>
              </div>
            </>
          ))}
          autoPlay
        />
      </div>
    </div>
  );
};

export default Carousel;

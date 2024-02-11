import React, { useEffect, useState } from "react";
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';
import './CoinsListSection.css'
import { Link } from "react-router-dom";
import { Pagination } from "@mui/material";
import LinearIndeterminate from "./LinearIndeterminate";
// import CircularIndeterminate from "./LinearIndeterminate";
const CoinsListSection = ({coins,handleSearch,page,setPage,load,currency,symbol}) => {
 
    
  return (
    
    <div>
        {/* <LinearIndeterminate></LinearIndeterminate> */}
      <div className="coinstableSection">
        <table>
          <tr className="tablehead">
            <th>#</th>
            <th>Coin</th>
            <th>Price</th>
            <th>24h</th>
            <th>24h Volume </th>
            <th>Market Cap</th>
          </tr>
          { load ?<LinearIndeterminate></LinearIndeterminate>  : handleSearch()
          .slice((page - 1)*10, (page-1)*10+10)
          
          .map((item) => (
            <>
              {" "}
              <tr className="maintr">
                <td>{item.market_cap_rank}</td>
                {/* <Link to={`${item.id}`}> */}
                <td className="coinsImages">
                 
                    <img src={item.image}></img>
                    <p>{item.name}<span className="shortname">{item.symbol}</span></p>
                  
                </td>  
                {/* </Link> */}
                <td>{symbol}   {item.current_price}</td>
                <td>
                    <div className="priceChangein24H">
                    {item.price_change_percentage_24h < 0 ? <ArrowDropDownRoundedIcon style={{color:'red'}}></ArrowDropDownRoundedIcon> : <ArrowDropUpRoundedIcon style={{color:"green"}}></ArrowDropUpRoundedIcon>}

                        {/* <p>{item.price_change_percentage_24h < 0 ?item.price_change_percentage_24h : item.price_change_percentage_24h} %</p> */}
                        {item.price_change_percentage_24h < 0 ? (<p style={{color:'red'}}>{item.price_change_percentage_24h}% </p>):(<p style={{color:'green'}}>{item.price_change_percentage_24h}% </p>)}
                    </div>
                    </td>

                <td className="volume">{symbol} {item.market_cap_change_24h}</td>

                <td>{symbol} {item.market_cap}</td>
              </tr>{" "}
            </>
          ))}
        </table>

        <Pagination 
          style={{
            padding: 10,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            color: "#F4BB58",
            backgroundColor:"	#0F52BA",
          }}
            count={(handleSearch()?.length/10).toFixed(0)}
            onChange={(_, value)=> {
                setPage(value);
                window.scroll(0,450)
            }}
            >
             
        </Pagination>
      </div>
    </div>
  );
};

export default CoinsListSection;
